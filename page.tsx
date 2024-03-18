import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Custom Page Title</title>
        <meta name="description" content="A brief description of your page" />
      </Head>
      <main>
        <h1>Welcome to Your Custom Page</h1>
        <p>This is a simple page in your Next.js app.</p>
      </main>
    </div>
  );
};

export default Home;

