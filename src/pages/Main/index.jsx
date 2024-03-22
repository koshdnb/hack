import Head from 'next/head';

import Header from './ui/Header';
import { Wrapper } from './styled';
export default function Main() {
  return (
    <Wrapper>
      <Head>
        <title>Hackathon 2024</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </Wrapper>
  );
}
