import 'styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import Error from 'next/error';
import type { AppProps } from 'next/app';

import { DefaultLayout } from 'shared/components/DefaultLayout';

const PAGE_TITLE = 'Github link generator';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => <DefaultLayout title={PAGE_TITLE}>{page}</DefaultLayout>);

  if (pageProps.error) {
    const { statusCode, message } = pageProps.error;
    return <Error statusCode={statusCode} title={message} />;
  }

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
