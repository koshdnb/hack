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
    prize: '€30<span>,</span>000',
  },
  {
    place: '2ND PRIZE',
    prize: '€7<span>,</span>500',
  },
  {
    place: '3RD PRIZE',
    prize: '€2<span>,</span>500',
  },
];

export const Prizes = () => {
  return (
    <Wrapper id="Prizes">
      <Layout>
        <PrizesWrap>
          <GradientTitle>The hackaithon prizes</GradientTitle>
          <Subtitle>
            This HackAIthon offers prizes and rewards for exceptional
            innovation, featuring a 1st place prize of <strong>€30,000</strong>{' '}
            in cash, a 2nd place prize of <strong>€7,500</strong><br/> in non-monetary rewards, and a 3rd place prize valued at{' '}
            <strong>€2,500</strong> in non-monetary rewards.
          </Subtitle>
          <PrizesList>
            {prizes.map(({ place, prize }) => (
              <PrizeItem key={prize}>
                <PlaceText dangerouslySetInnerHTML={{ __html: place }} />
                <PrizeText dangerouslySetInnerHTML={{ __html: prize }}>
                  {prize}
                </PrizeText>
              </PrizeItem>
            ))}
          </PrizesList>
        </PrizesWrap>
      </Layout>
    </Wrapper>
  );
};
