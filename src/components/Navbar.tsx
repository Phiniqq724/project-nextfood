"use client";

import Link from "next/link";
import Image from "next/image";
import icon from "@/../public/image/knife.png";
import { LinkButton } from "./custom/Button";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <main>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-300">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href=".."
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={icon} alt="Mkankuy" width={64} height={64} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Mkankuy
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <LinkButton variants="small" navigate="/meals/share">
              Share Meal!
            </LinkButton>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={handleClick}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {modal && (
              <ul className="absolute top-[54px] right-2 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                <li>
                  <Link
                    href=".."
                    className={`${
                      path === "/" ? "text-oranges" : "text-black"
                    } block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-oranges md:p-0 duration-500`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/meals"
                    className={`${
                      path === "/meals" ? "text-oranges" : "text-black"
                    } block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-oranges md:p-0 duration-500`}
                  >
                    Meals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className={`${
                      path === "/community" ? "text-oranges" : "text-black"
                    } block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-oranges md:p-0 duration-500`}
                  >
                    Community
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link
                  href=".."
                  className={`${
                    path === "/" ? "text-oranges" : "text-black"
                  } block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-oranges md:p-0 duration-500`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/meals"
                  className={`${
                    path === "/meals" ? "text-oranges" : "text-black"
                  } block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-oranges md:p-0 duration-500`}
                >
                  Meals
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className={`${
                    path === "/community" ? "text-oranges" : "text-black"
                  } block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-oranges md:p-0 duration-500`}
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}
