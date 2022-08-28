import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <header
      className="
        flex
        flex-wrap 
        justify-between
        items-center
        p-5 
        bg-sky-900
        text-teal-50
        w-full
        shadow-md
        "
    >
      <h1 className="text-5xl">Привет</h1>
      <nav className="w-2/4">
        <ul
          className="
            flex
            flex-wrap 
            justify-between 
            w-full 
            py-4 
            md:py-0 
            px-4 text-lg 
            "
        >
          <li>
            <Link href="/">
              <a>На главную</a>
            </Link>
          </li>
          <li>
            <Link href="/films">
              <a>Фильмы</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>О проекте</a>
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
