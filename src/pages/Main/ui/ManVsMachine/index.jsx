import { useModal, Modal } from 'react-morphing-modal';

import RegistrationForm from '../../../../shared/ui/RegistrationForm';
import { Layout, Button } from '../../styled';
import {
  Wrapper,
  Content,
  TitleWrap,
  Title,
  Subtitle,
  TextWrap,
  Text,
  TopWrap,
} from './styled';

export default function ManVsMachine() {
  const { modalProps, getTriggerProps } = useModal({
    background: '#1d1d1d',
  });

  return (
    <TopWrap>
      <Wrapper>
        <Layout>
          <Content>
            <TitleWrap>
              <Title data-text="man vs machine">have you got what it takes?</Title>
              <Subtitle>
                get ready for the non-stop 48hr hack<strong>AI</strong>thon
              </Subtitle>
            </TitleWrap>

            <TextWrap>
              <Text>
                This year&apos;s HackAIthon will be the biggest & best IT event
                of 2024. It&apos;s amazing opportunity to engage with
                Cyprus&apos; vibrant tech community, we’re welcoming
                participants of all skill levels. Make sure you’ll bring your
                A-game because this time, it won&apos;t just be human minds at
                work.
              </Text>
              <Button {...getTriggerProps()}>Register now</Button>
              <Modal {...modalProps}>
                <RegistrationForm />
              </Modal>
            </TextWrap>
          </Content>
        </Layout>
      </Wrapper>
    </TopWrap>
  );
}
