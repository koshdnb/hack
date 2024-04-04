import { GradientTitle } from '../../../../shared/ui/GradientTitle';
import { Layout } from '../../styled';
import QuadcodeIcon from './images/quadcode.svg';
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
    // logos: [<QuadcodeIcon />, QuadcodeIcon],
    logos: [
      <QuadcodeIcon viewBox="0 0 190 52" />,
      <QuadcodeIcon viewBox="0 0 190 52" />,
    ],
  },
  {
    title: 'silver sponsors',
    // logos: [QuadcodeIcon, QuadcodeIcon],
    logos: [
      <QuadcodeIcon viewBox="0 0 190 52" />,
      <QuadcodeIcon viewBox="0 0 190 52" />,
    ],
  },
  {
    title: 'bronze sponsors',
    // logos: [QuadcodeIcon, QuadcodeIcon],
    logos: [
      <QuadcodeIcon viewBox="0 0 190 52" />,
      <QuadcodeIcon viewBox="0 0 190 52" />,
    ],
  },
];

export const Sponsors = () => {
  return (
    <Wrapper>
      <Layout>
        <SponsorsWrap>
          <GradientTitle>Sponsors</GradientTitle>
          <SponsorsList>
            {sponsors.map(({ title, logos }) => (
              <SponsorsItem>
                <Title>{title}</Title>
                <LogosWrap>{logos.map((Logo) => Logo)}</LogosWrap>
              </SponsorsItem>
            ))}
          </SponsorsList>
          <div>
            <GradientTitle>Community partners</GradientTitle>
            <LogosWrap>
              <QuadcodeIcon viewBox="0 0 190 52" />
              <QuadcodeIcon viewBox="0 0 190 52" />
            </LogosWrap>
          </div>
        </SponsorsWrap>
      </Layout>
    </Wrapper>
  );
};
