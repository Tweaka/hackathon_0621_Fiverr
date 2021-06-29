import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer";
import SubBar from "../subBar";
import Head from "next/head";

interface IProps {
  page?: string;
  children: React.ReactNode;
}

export default function Layout({ page, children }: IProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>{page}</title>
      </Head>
      <Navbar />
      <SubBar />
      {children}
      <Footer />
    </div>
  );
}
