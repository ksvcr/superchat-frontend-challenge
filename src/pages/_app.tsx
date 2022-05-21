import 'styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { Layout } from 'shared/components/layout';

const PAGE_TITLE = 'Github link generator';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => <Layout title={PAGE_TITLE}>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
