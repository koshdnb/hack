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
  CardWrapper,
  Image,
  Name,
  Description,
  Cards,
} from './styled';

let sponsors = [
  {
    title: 'gold sponsor',
    logos: [
      <CyprusMailIcon key={1} viewBox="0 0 115 32" />,
      <FastForwardIcon key={2} viewBox="0 0 116 32" />,
    ],
  },
  {
    title: 'silver sponsors',
    logos: [
      <InBusinessIcon key={3} viewBox="0 0 116 32" />,
      <FastForwardIcon key={2} viewBox="0 0 116 32" />,
    ],
  },
  {
    title: 'bronze sponsors',
    logos: [
      <CyprusMailIcon key={1} viewBox="0 0 115 32" />,
      <ProtothlimaIcon key={6} viewBox="0 0 116 18" />,
    ],
  },
];

export const Sponsors = () => {
  return (
    <Wrapper id="Sponsors">
      <Layout>
        <SponsorsWrap>
          <GradientTitle>Sponsors</GradientTitle>
          <SponsorsList>
            {sponsors.map(({ title, logos }) => (
              <SponsorsItem key={title}>
                <Title>{title}</Title>
                <LogosWrap>{logos.map((Logo) => Logo)}</LogosWrap>
              </SponsorsItem>
            ))}
          </SponsorsList>
          <div>
            <GradientTitle>Community partners</GradientTitle>
            <LogosWrap>
              <FastForwardIcon key={2} viewBox="0 0 116 32" />
              <div>
                <NextImage
                  src="/images/techisland.png"
                  width={220}
                  height={32}
                />
              </div>
            </LogosWrap>
          </div>
        </SponsorsWrap>
      </Layout>
    </Wrapper>
  );
};
