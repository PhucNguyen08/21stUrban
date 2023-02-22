import dynamic from 'next/dynamic';
import Head from 'next/head';

const Recommend = dynamic(() => import('@/components/recommend/recommend'));

export default function Introduce() {
  return (
    <>
      <Head>
        <title>Giới Thiệu Shop</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-logo.ico" />
      </Head>
      <Recommend />
    </>
  );
}
