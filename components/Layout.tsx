import React, { ReactNode } from "react";
import Head from "next/head";

import Nav from "./Nav";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      <main className="px-4">
        <div
          className="flex 
                  justify-content 
                  items-center 
                  bg-white 
                  mx-auto 
                  w-2/4 
                  rounded-lg 
                  my-16 
                  p-16"
        >
          <div className="text-2xl font-medium">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
