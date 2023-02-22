import Head from 'next/head';
import dynamic from 'next/dynamic';

const PayMent = dynamic(() => import('@/components/payment/payment'));

function CheckOut() {
  return (
    <>
      <Head>
        <title>Thanh Toán</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-logo.ico" />
      </Head>
      <PayMent />
    </>
  );
}

CheckOut.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default CheckOut;
