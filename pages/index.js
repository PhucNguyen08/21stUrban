import dynamic from 'next/dynamic';
import Head from 'next/head';
import ConnectUntils from '@/utils/connectuntils';

const Wrapper = dynamic(() => import('@/components/ui/wrapper'));
const ServiceList = dynamic(() =>
  import('@/components/regulations/servicelist')
);
const Carousel = dynamic(() => import('@/components/carousel/carousel'));
const NewArrivals = dynamic(() =>
  import('@/components/newarrivals/newarrivals')
);

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>21ST URBAN</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-logo.ico" />
      </Head>
      <Carousel dataCarousel={props.carousel}></Carousel>
      <Wrapper>
        <NewArrivals dataProducts={props.products}></NewArrivals>
      </Wrapper>
      <ServiceList />
    </>
  );
}

export async function getStaticProps() {
  const { client, db } = await ConnectUntils();

  const productsCollection = db.collection('Product');

  const carouselCollection = db.collection('Carousel');

  const carousel = await carouselCollection.find().toArray();

  const products = await productsCollection
    .find({ type: 'new arrivals' })
    .toArray();

  client.close();

  return {
    props: {
      carousel: carousel.map(carouselItem => ({
        id: carouselItem._id.toString(),
        image: carouselItem.image,
      })),
      products: products.map(item => {
        return {
          id: item._id.toString(),
          name: item.name,
          images: item.images,
          price: Number(item.price),
        };
      }),
    },
  };
}
