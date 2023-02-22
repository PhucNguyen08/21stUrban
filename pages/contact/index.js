import dynamic from 'next/dynamic';
import Head from 'next/head';

const Wrapper = dynamic(() => import('@/components/ui/wrapper'));
const FormContact = dynamic(() => import('@/components/contact/form'));

export default function Contact() {
  return (
    <>
      <Head>
        <title>Liên Lạc</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-logo.ico" />
      </Head>
      <Wrapper>
        <FormContact />
      </Wrapper>
    </>
  );
}
