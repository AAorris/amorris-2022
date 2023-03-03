import "server-only";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  SignatureV4,
  SignatureV4CryptoInit,
  SignatureV4Init,
} from "@aws-sdk/signature-v4";
import {
  AuthScheme,
  Provider,
  RequestHandler,
  RequestSigner,
  HttpRequest,
  SigningArguments,
  EventSigningArguments,
  FormattedEvent,
  RequestSigningArguments,
} from "@aws-sdk/types";
import { Sha256 } from "@aws-crypto/sha256-js";
import { DynamoDBDocument, QueryCommandOutput } from "@aws-sdk/lib-dynamodb";

class Signer extends SignatureV4 {
  constructor(init: SignatureV4Init & SignatureV4CryptoInit) {
    super(init);
  }

  public async sign(
    stringToSign: string,
    options?: SigningArguments
  ): Promise<string>;
  public async sign(
    event: FormattedEvent,
    options: EventSigningArguments
  ): Promise<string>;
  public async sign(
    requestToSign: HttpRequest,
    options?: RequestSigningArguments
  ): Promise<HttpRequest>;
  public async sign(toSign: any, options: any): Promise<any> {
    if (typeof toSign === "string") {
      // string
      return super.sign(toSign, options);
    } else if (toSign.headers && toSign.payload) {
      // event
      return super.sign(toSign, options);
    } else {
      const r = toSign as HttpRequest;
      // @ts-ignore
      const result = await super.sign(r, options);
      return result;
    }
  }
}

const credentials = {
  accessKeyId: process.env.DDB_ACCESS_KEY_ID || "",
  secretAccessKey: process.env.DDB_SECRET_ACCESS_KEY || "",
};
export const baseClient = new DynamoDBClient({
  region: "us-west-2",
  credentials,
  signer: new Signer({
    credentials,
    service: "dynamodb",
    region: "us-west-2",
    sha256: Sha256,
  }),
  logger: {
    debug: (...content: any[]) => console.debug(...content),
    info: (...content: any[]) => console.info(...content),
    warn: (...content: any[]) => console.warn(...content),
    error: (...content: any[]) => console.error(...content),
  },
});

// @ts-ignore
const client = DynamoDBDocument.from(baseClient, {
  marshallOptions: {
    convertClassInstanceToMap: true,
  },
});

export default client;

export type Response = QueryCommandOutput;
