import React from 'react';
import Head from 'next/head';

import Header from 'src/components/Header/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Minus or Plus</title>
      </Head>
      <Header />
    </div>
  );
}
