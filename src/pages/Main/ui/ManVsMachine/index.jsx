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

  const handleCtaClick = () => {
    window.dataLayer?.push({
      event: 'lead',
    });
  };

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
                GET READY FOR THE NON-STOP 2-DAY hack<strong>AI</strong>thon
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
              <span onClick={handleCtaClick}>
                <Button {...getTriggerProps()}>Register now</Button>
              </span>
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
