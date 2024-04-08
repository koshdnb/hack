import NextImage from 'next/image';

import { GradientTitle } from '../../../../shared/ui/GradientTitle';
import { Layout } from '../../styled';

import QuadcodeIcon from './images/quadcode.svg';
import CyprusMailIcon from './images/cyprus_mail.svg';
import FastForwardIcon from './images/fastforward.svg';
import InBusinessIcon from './images/inbusiness-news.svg';
import ProtothlimaIcon from './images/PROTATHLIMA.svg';

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
      <FastForwardIcon key={2} viewBox="0 0 116 32" />,
      <InBusinessIcon key={3} viewBox="0 0 116 32" />,
      <CyprusMailIcon key={1} viewBox="0 0 115 32" />,
      <ProtothlimaIcon key={6} viewBox="0 0 116 18" />,
      <NextImage
          key="mix fm"
          alt="mix fm"
          src="/images/mix-fm-logo.png"
          width={120}
          height={62}
      />
    ],
  },
];

export const Sponsors = () => {
  return (
    <Wrapper id="Sponsors">
      <Layout>
        <SponsorsWrap>
          <CommunityWrapper>
            <GradientTitle>Community partners</GradientTitle>
            <LogosWrap>
              <FastForwardIcon key={2} viewBox="0 0 116 32"/>
              <div>
                <NextImage
                    src="/images/techisland.png"
                    width={220}
                    height={32}
                />
              </div>
            </LogosWrap>
          </CommunityWrapper>
          <GradientTitle>Media Sponsors</GradientTitle>
          <SponsorsList>
            {sponsors.map(({title, logos}) => (
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
