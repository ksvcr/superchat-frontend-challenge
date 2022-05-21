import type { NextPage } from 'next';

import { client, GET_REPOSITORY } from 'shared/api';

const Home: NextPage = () => {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_REPOSITORY,
    variables: {
      owner: 'vercel',
      name: 'next.js'
    }
  });

  return {
    props: {}
  };
}

export default Home;
