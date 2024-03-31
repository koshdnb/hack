import { Modal, useModal } from 'react-morphing-modal';
import { GradientTitle } from 'src/shared/ui/GradientTitle';

import { Layout, Button } from '../../styled';
import Chip from './images/chip.svg';
import RegistrationForm from '/src/shared/ui/RegistrationForm';

import {
  Wrapper,
  ChallengeBlock,
  ImageWrapper,
  ChipWrapper,
  LeftText,
  LeftTextTitle,
  RightText,
  RightTextTitle,
  RightTextDescription,
} from './styled';

export const Challenge = () => {
  const { modalProps, getTriggerProps } = useModal({
    background: '#1d1d1d',
  });

  return (
    <Wrapper id="Challenges">
      <Layout>
        <GradientTitle>the ai challenge</GradientTitle>
        <ChallengeBlock>
          <ImageWrapper>
            <LeftText>
              <LeftTextTitle>
                AI synergy in Fintech and Digital Marketing
              </LeftTextTitle>
            </LeftText>
            <ChipWrapper>
              <Chip viewBox="0 0 351 359" style={{width: '100%'}}/>
            </ChipWrapper>
            <RightText>
              <RightTextTitle>AI Personalization</RightTextTitle>
              <RightTextDescription>
                This fintech hackathon challenges participants to innovate with AI-driven education, trading chatbots, personalized trading platforms, and AR/VR environments.
              </RightTextDescription>
              <Button {...getTriggerProps()} style={{marginTop: '8px'}}>Learn more</Button>
              <Modal {...modalProps}>
                <RegistrationForm />
              </Modal>
            </RightText>
          </ImageWrapper>
        </ChallengeBlock>
      </Layout>
    </Wrapper>
  );
};
