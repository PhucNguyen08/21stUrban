import dynamic from 'next/dynamic';
import Head from 'next/head';
import ConnectUntils from '@/utils/connectuntils';

const Category = dynamic(() => import('@/components/category/category'));

export default function Products(props) {
  return (
    <>
      <Head>
        <title>Danh Mục</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-logo.ico" />
      </Head>
      <Category listProducts={props.products}></Category>
    </>
  );
}

export async function getStaticProps() {
  const { client, db } = await ConnectUntils();

  const productsCollection = db.collection('Product');

  const products = await productsCollection.find().toArray();

  client.close();

  return {
    props: {
      products: products.map(item => {
        return {
          id: item._id.toString(),
          name: item.name,
          images: item.images,
          price: Number(item.price),
          type: item.type,
        };
      }),
    },
  };
}
