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
              <Chip />
            </ChipWrapper>
            <RightText>
              <RightTextTitle>AI Challenge #1</RightTextTitle>
              <RightTextDescription>
                This challenge entails leveraging cutting-edge AI methodologies
                to harness the formidable potential of artificial intelligence,
                thereby crafting ingenious solutions that propel the realms of
                Fintech and Digital Marketing to new heights of innovation and
                effectiveness.
              </RightTextDescription>
              <Button {...getTriggerProps()}>Learn more</Button>
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
