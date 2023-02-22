import dynamic from 'next/dynamic';
import Head from 'next/head';
import ConnectUntils from '@/utils/connectuntils';
import { ObjectId } from 'mongodb';

const ProductDetail = dynamic(() =>
  import('@/components/product/productdetail')
);
const TabsProduct = dynamic(() => import('@/components/tabs/tabs'));

function Product(props) {
  return (
    <>
      <Head>
        <title>{props.productDetail.name}</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-logo.ico" />
      </Head>
      <>
        <ProductDetail productDetail={props.productDetail}></ProductDetail>
        <TabsProduct productDetail={props.productDetail}></TabsProduct>
      </>
    </>
  );
}

export async function getStaticPaths() {
  const { client, db } = await ConnectUntils();
  const productDetailCollection = db.collection('Product');

  const ProductDetail = await productDetailCollection
    .find({}, { _id: 1 })
    .toArray();

  client.close();

  return {
    fallback: false,
    paths: ProductDetail.map(product => ({
      params: {
        productId: product._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const productId = context.params.productId;

  const { client, db } = await ConnectUntils();

  const productDetailCollection = db.collection('Product');

  const productDetail = await productDetailCollection.findOne({
    _id: ObjectId(productId),
  });

  client.close();

  return {
    props: {
      productDetail: {
        id: productDetail._id.toString(),
        name: productDetail.name,
        image: productDetail.images,
        price: Number(productDetail.price),
        sale: productDetail.sale,
        sizes: productDetail.sizes,
        brand: productDetail.brand,
        description: productDetail.description,
      },
    },
  };
}

export default Product;
