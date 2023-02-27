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
        <meta
          name="description"
          content="Major League Baseball (MLB) là tổ chức thể thao
            chuyên nghiệp của môn bóng chày và cũng là tổ chức lâu đời nhất
            trong 4 liên đoàn thể thao chuyên nghiệp chính ở Hoa Kỳ và Canada."
        />
        <link rel="icon" href="/favicon-logo.ico" />
      </Head>
      <Recommend />
    </>
  );
}
