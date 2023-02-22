import Head from 'next/head';
import dynamic from 'next/dynamic';

const AuthForm = dynamic(() => import('@/components/auth/authform'));

function Login() {
  return (
    <>
      <Head>
        <title>Tài Khoản</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-logo.ico" />
      </Head>
      <AuthForm />
    </>
  );
}

export default Login;
