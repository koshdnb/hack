import Head from 'next/head';

import Header from './ui/Header';
import Hero from './ui/Hero';
import ManVsMachine from './ui/ManVsMachine';
import { Challenge } from './ui/Challenge';
import { TimeLine } from './ui/TimeLine';
import { Rules } from './ui/Rules';
import { Program } from './ui/Program';
import { Prizes } from './ui/Prizes';
import { Members } from './ui/Members';
import { Map } from './ui/Map';
import { Faq } from './ui/Faq';
import { Footer } from './ui/Footer';
import { Wrapper, HeaderWrap, FooterWrap } from './styled';

export default function Main() {
  return (
    <Wrapper>
      <Head>
        <title>Hackathon 2024</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderWrap>
        <Header />
        <Hero />
      </HeaderWrap>
      <ManVsMachine />
      <Challenge />
      <TimeLine />
      <Rules />
      <Program />
      <Prizes />
      <Members />
      <Map />
      <FooterWrap>
        <Faq />
        <Footer />
      </FooterWrap>
    </Wrapper>
  );
}
