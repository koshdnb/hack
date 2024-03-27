import { Layout, Button } from '../../styled';
import {
  Wrapper,
  Content,
  TitleWrap,
  Title,
  Subtitle,
  TextWrap,
  Text,
} from './styled';

export default function ManVsMachine() {
  return (
    <Wrapper>
      <Layout>
        <Content>
          <TitleWrap>
            <Title data-text="man vs machine">man vs machine</Title>
            <Subtitle>Are you ready for the non-stop 48hr hackAIthon?</Subtitle>
          </TitleWrap>

          <TextWrap>
            <Text>
              This year&apos;s HackAIthon will be the biggest & best IT event of
              2024. It&apos;s amazing opportunity to engage with Cyprus&apos;
              vibrant tech community, we’re welcoming participants of all skill
              levels. Make sure you’ll bring your A-game because this time, it
              won&apos;t just be human minds at work.
            </Text>
            <Button>Reserve your spot</Button>
          </TextWrap>
        </Content>
      </Layout>
    </Wrapper>
  );
}
