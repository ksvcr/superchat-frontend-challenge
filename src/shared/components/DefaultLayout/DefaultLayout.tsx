import { ReactNode } from 'react';
import Head from 'next/head';

type DefaultLayoutProps = {
  title: string;
  children?: ReactNode;
};

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="container mx-auto p-4">{children}</main>
    </>
  );
};
