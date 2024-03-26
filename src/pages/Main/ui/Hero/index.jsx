import Hackathon from './images/hackathon.svg';

import { Button } from '../../styled';

import {
  Wrapper,
  ContentWrap,
  LogoWrap,
  TextWrap,
  Title,
  Subtitle,
  Date,
} from './styled';

export default function Hero() {
  return (
    <Wrapper>
      <ContentWrap>
        <LogoWrap>
          <Hackathon />
        </LogoWrap>
        <TextWrap>
          <Title>Compete in Cyprus&apos; BIGGEST HackAIthon.</Title>
          <Subtitle>
            Can you harness the power of artificial intelligence to create
            innovative solutions that will elevate the worlds of Fintech and
            Digital Marketing.
          </Subtitle>
          <Date>The Warehouse by IT Quarter 15:06:24 Limassol, Cyprus.</Date>
        </TextWrap>
        <Button>Reserve your spot</Button>
      </ContentWrap>
    </Wrapper>
  );
}
