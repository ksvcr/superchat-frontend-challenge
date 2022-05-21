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
      <main>{children}</main>
    </>
  );
};
