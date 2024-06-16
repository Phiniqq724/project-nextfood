"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variants: "base" | "outline" | "small";
  navigate?: string;
  className?: string;
}

export function LinkButton({
  children,
  variants,
  navigate,
  className,
}: ButtonProps) {
  const baseVariant = variants === "base";
  const outlineVariant = variants === "outline";
  const smallVariant = variants === "small";
  if (baseVariant) {
    return (
      <Link href={`${navigate}`}>
        <button
          className={`${className} text-gray-700 duration-500 hover:text-white bg-silver hover:bg-stone focus:outline-none focus:ring-0 font-medium rounded-[24px] text-lg px-8 py-4 text-center border-2 border-gray-200 hover:border-transparent`}
        >
          {children}
        </button>
      </Link>
    );
  } else if (outlineVariant) {
    return (
      <Link href={`${navigate}`}>
        <button
          className={`${className} text-gray-700 duration-500 hover:text-oranges bg-transparent hover:bg-transparent focus:outline-none focus:ring-0 font-medium rounded-[24px] text-lg px-8 py-4 text-center border-2 border-gray-400 hover:border-oranges`}
        >
          {children}
        </button>
      </Link>
    );
  } else if (smallVariant) {
    return (
      <Link href={`${navigate}`}>
        <button
          className={`${className} text-gray-700 duration-500 hover:text-white bg-silver hover:bg-stone focus:outline-none focus:ring-0 font-medium rounded-[12px] text-md px-4 py-2 text-center border-2 border-gray-200 hover:border-transparent`}
        >
          {children}
        </button>
      </Link>
    );
  }
}
