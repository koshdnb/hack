import { GradientTitle } from '../../../../shared/ui/GradientTitle';
import { Layout } from '../../styled';
import {
  Wrapper,
  PrizesWrap,
  Subtitle,
  PrizesList,
  PrizeItem,
  PlaceText,
  PrizeText,
} from './styled';

const prizes = [
  {
    place: '<span>1ST</span> PRIZE',
    prize: '€30,000',
  },
  {
    place: '2ND PRIZE',
    prize: '€7500',
  },
  {
    place: '3RD PRIZE',
    prize: '€2500',
  },
];

export const Prizes = () => {
  return (
    <Wrapper id="Prizes">
      <Layout>
        <PrizesWrap>
          <GradientTitle>The hackaithon prizes</GradientTitle>
          <Subtitle>
            In this years HacAIthon there will be a substantial prize to
            recognize and reward outstanding innovation. 1st prize of{' '}
            <strong>€30,000</strong> monetary, 2nd prize <strong>€7.5k</strong>{' '}
            & 3rd <strong>€2.5k</strong> (both non monetary) create innovative
            solutions that elevate the worlds of Fintech and Digital Marketing.
          </Subtitle>
          <PrizesList>
            {prizes.map(({ place, prize }) => (
              <PrizeItem key={prize}>
                <PlaceText dangerouslySetInnerHTML={{ __html: place }} />
                <PrizeText>{prize}</PrizeText>
              </PrizeItem>
            ))}
          </PrizesList>
        </PrizesWrap>
      </Layout>
    </Wrapper>
  );
};
