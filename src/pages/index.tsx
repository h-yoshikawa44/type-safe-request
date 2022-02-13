import { Fragment } from 'react';
import Head from 'next/head';
import HomePage from '@/components/page/Home';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Type Safe Request</title>
        <meta name="description" content="型安全なHTTPリクエスト検証" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </Fragment>
  );
}
