import { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  title: string;
  children?: ReactNode;
};

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="container mx-auto p-4">{children}</main>
    </>
  );
};
