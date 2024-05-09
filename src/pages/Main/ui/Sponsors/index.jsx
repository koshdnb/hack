import NextImage from 'next/image';

import { GradientTitle } from '../../../../shared/ui/GradientTitle';
import { Layout } from '../../styled';

import QuadcodeIcon from './images/quadcode.svg';
import CyprusMailIcon from './images/cyprus_mail.svg';
import FastForwardIcon from './images/fastforward.svg';
import InBusinessIcon from './images/inbusiness-news.svg';
import ProtothlimaIcon from './images/PROTATHLIMA.svg';
import CapacitIcon from './images/capacit-partners.svg';

import {
  Wrapper,
  SponsorsWrap,
  SponsorsList,
  SponsorsItem,
  Title,
  LogosWrap,
  CommunityWrapper,
  CardWrapper,
  Image,
  Name,
  Description,
  Cards,
} from './styled';

let sponsors = [
  // {
  //   title: 'gold sponsor',
  //   logos: [
  //     <CyprusMailIcon key={1} viewBox="0 0 115 32" />,
  //     <FastForwardIcon key={2} viewBox="0 0 116 32" />,
  //   ],
  // },
  {
    title: 'media sponsors',
    logos: [
      <a key="1" href="https://fastforward.com.cy/" target="_blank">
        <FastForwardIcon key={2} viewBox="0 0 116 32" target="_blank" />
      </a>,
      <a key="2" href="https://inbusinessnews.reporter.com.cy/" target="_blank">
        <InBusinessIcon key={3} viewBox="0 0 116 32" />
      </a>,
      <a key="3" href="https://cyprus-mail.com/" target="_blank">
        <CyprusMailIcon key={1} viewBox="0 0 115 32" />
      </a>,
      <a key="4" href="https://protathlima.cyprustimes.com/" target="_blank">
        <ProtothlimaIcon key={6} viewBox="0 0 116 18" />
      </a>,
      <a key="5" href="https://www.mixfmradio.com/" target="_blank">
        <div
          key="mix fm"
          style={{ width: '190px', display: 'flex', justifyContent: 'center' }}
        >
          <NextImage
            alt="mix fm"
            src="/images/mix-fm.png"
            width={120}
            height={92}
          />
        </div>
      </a>,
      <a key="5" href="https://vkcyprus.com/" target="_blank">
        <div
          key="vestnik"
          style={{ width: '190px', display: 'flex', justifyContent: 'center' }}
        >
          <NextImage
            alt="vestnik kipra"
            src="/images/vestnik.png"
            width={120}
            height={92}
          />
        </div>
      </a>,
    ],
  },
];

export const Sponsors = () => {
  return (
    <Wrapper id="Sponsors">
      <Layout>
        <SponsorsWrap>
          <CommunityWrapper style={{ marginBottom: '30px' }}>
            <GradientTitle>Quantum sponsor</GradientTitle>
            <LogosWrap>
              <a href="https://www.ecommbanx.com/" target="_blank">
                <NextImage
                  src="/images/ECOMMBX_Logo.png"
                  width={250}
                  height={113}
                />
              </a>
            </LogosWrap>
          </CommunityWrapper>
          <CommunityWrapper>
            <GradientTitle>Community partners</GradientTitle>
            <LogosWrap>
              <a href="https://www.capacitorpartners.com/" target="_blank">
                <CapacitIcon key={2} viewBox="0 0 116 32" />
              </a>
              <a href="https://thetechisland.org/" target="_blank">
                <NextImage
                  src="/images/techisland.png"
                  width={220}
                  height={32}
                />
              </a>
            </LogosWrap>
          </CommunityWrapper>
          <GradientTitle>Media Sponsors</GradientTitle>
          <SponsorsList>
            {sponsors.map(({ title, logos }) => (
              <SponsorsItem key={title}>
                {/*<Title>{title}</Title>*/}
                <LogosWrap>{logos.map((Logo) => Logo)}</LogosWrap>
              </SponsorsItem>
            ))}
          </SponsorsList>
        </SponsorsWrap>
      </Layout>
    </Wrapper>
  );
};
