import Head from 'next/head';

import Header from '../../shared/ui/Header';
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
import { Footer } from '../../shared/ui/Footer';
import { Wrapper, HeaderWrap, FooterWrap } from './styled';

export default function Main() {
  return (
    <Wrapper>
        <Head>
            <meta
                name="description"
                content="Cyprus' biggest hackathon, HackAIthon 2024, invites innovators to tackle challenges in trading, AR/VR, education, and more, using AI for financial personalization. Join us in Limassol for the ultimate fintech innovation event."
            />
            <title>HackAIthon: AI in Fintech - The Power of Personalisation</title>
            <meta
                name="keywords"
                content="HackAIthon 2024, AI in Fintech, Financial Personalization, Cyprus Hackathon, Fintech Challenges, Trading Innovation, AR/VR Finance, AI Education in Finance, Fintech Development, Limassol Event"
            />
        </Head>
        <HeaderWrap>
            <Header withNavigation/>
            <Hero/>
        </HeaderWrap>
        <ManVsMachine/>
        <Challenge/>
        <TimeLine/>
        <Rules/>
        <Program/>
        <Prizes/>
        <Members/>
        <Map/>
        <FooterWrap>
            <Faq/>
            <Footer/>
        </FooterWrap>
    </Wrapper>
  );
}
