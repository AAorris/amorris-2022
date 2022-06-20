import classNames from "classnames";

interface Options {}

export default function navClass(options?: Options, ...args: string[]) {
  return classNames(
    "border-b-2 border-b-solid border-b-gray-300 dark:border-b-gray-700",
    ...args
  );
}
