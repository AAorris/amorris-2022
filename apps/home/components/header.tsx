import cn from "classnames";
import Avatar from "ui/avatar";
import Image from "next/image";
import Link from "next/link";

const badge = (...args) =>
  cn(
    "text-white py-1 px-2 gap-1 rounded-xl flex flex-row items-center",
    "bg-gradient-to-r",
    // "select-none",
    ...args
  );

const Header = () => {
  return (
    <header className="flex items-center">
      <Link href="/aaron">
        <span className={badge("from-indigo-400 to-purple-500")}>
          <Avatar className="border-gray-50 border-solid border-2" s={24}>
            <Image src="/avatar.jpg" width="24" height="24" />
          </Avatar>
          <span>Aaron</span>
        </span>
      </Link>
      <svg
        fill="none"
        height="32"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        viewBox="0 0 24 24"
        width="32"
      >
        <path d="M16.88 3.549L7.12 20.451"></path>
      </svg>
      <Link href="/">
        <span
          className={badge(
            "from-slate-200 to-slate-300 text-gray-700",
            "flex items-center gap-1"
          )}
        >
          <code className="block h-[23px]">morris.codes</code>
        </span>
      </Link>
    </header>
  );
};

export default Header;
