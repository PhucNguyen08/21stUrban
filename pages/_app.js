import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import Layout from '@/components/layout/layout';
import { wrapper } from '@/components/store';
import Spinner from '@/components/ui/spinner';

function Loading() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = url => url !== router.asPath && setIsLoading(true);
    const handleComplete = url =>
      url === router.asPath && setTimeout(() => setIsLoading(false), 1000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    isLoading && (
      <div className="spinner-wrapper">
        <div className="spinner">
          <Spinner />
        </div>
      </div>
    )
  );
}

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const getLayout =
    Component.getLayout ||
    (page => (
      <>
        <Loading />
        <Provider store={store}>
          <Layout>{page}</Layout>
        </Provider>
      </>
    ));
  return getLayout(
    <>
      <Loading />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
