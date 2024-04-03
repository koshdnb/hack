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
              <Title data-text="man vs machine">
                have you got what it takes?
              </Title>
              <Subtitle>
                get ready for the non-stop 48hr hack<strong>AI</strong>thon
              </Subtitle>
            </TitleWrap>

            <TextWrap>
              <Text>
                This year’s HackAIthon event focuses on personalization in
                fintech. With a focus on personalized solutions in fintech
                powered by AI, contestants will innovate in the areas of
                education, trading, AR/VR supported experiences, and more. Open
                to developers, financial experts, and designers, we aim to
                create impactful, user-friendly solutions that leverage
                personalization to redefine the future of finance.
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
