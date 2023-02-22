import Head from 'next/head';
import dynamic from 'next/dynamic';

const CartList = dynamic(() => import('@/components/cart/cart'));

function Cart() {
  return (
    <div>
      <Head>
        <title>Giỏ Hàng</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-logo.ico" />
      </Head>
      <CartList />
    </div>
  );
}

export default Cart;
