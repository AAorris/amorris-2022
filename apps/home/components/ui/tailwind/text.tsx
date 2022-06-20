import classNames from "classnames";

interface Options {
  dim?: boolean;
  slim?: boolean;
}

export default function textClass(options?: Options, ...args: string[]) {
  return classNames(
    options?.dim && "text-gray-500 dark:text-gray-400",
    options?.slim && "max-w-[64ch]",
    "py-1",
    ...args
  );
}
