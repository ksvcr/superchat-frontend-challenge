import type { NextPage } from 'next';

import { LinkGenerator } from 'features/LinkGenerator';

const Home: NextPage = () => {
  return <LinkGenerator />;
};

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default Home;
