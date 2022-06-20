import classNames from "classnames";

export default function layout(...args: string[]) {
  return classNames("p-4 max-w-[1024px] mx-auto", ...args);
}
