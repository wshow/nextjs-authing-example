import dynamic from 'next/dynamic';
import type { NextPage } from 'next';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/login'), { ssr: false });

const Home: NextPage = () => {
  return (
    <div>
      <DynamicComponentWithNoSSR></DynamicComponentWithNoSSR>
    </div>
  );
};

export default Home;
