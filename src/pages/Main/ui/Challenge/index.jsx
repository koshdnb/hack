import Chip from './images/chip.svg';
import { GradientTitle } from 'src/shared/ui/GradientTitle';

import {
  Wrapper,
  ChallengeBlock,
  ImageWrapper,
  LeftText,
  LeftTextTitle,
  RightText,
  RightTextTitle,
  RightTextDescription,
} from './styled';

export const Challenge = () => {
  return (
    <Wrapper>
      <GradientTitle>the ai challenge</GradientTitle>
      <ChallengeBlock>
        <ImageWrapper>
          <LeftText>
            <LeftTextTitle>
              AI synergy in Fintech and Digital Marketing
            </LeftTextTitle>
          </LeftText>
          <Chip />
          <RightText>
            <RightTextTitle>AI Challenge #1</RightTextTitle>
            <RightTextDescription>
              This challenge entails leveraging cutting-edge AI methodologies to
              harness the formidable potential of artificial intelligence,
              thereby crafting ingenious solutions that propel the realms of
              Fintech and Digital Marketing to new heights of innovation and
              effectiveness.
            </RightTextDescription>
          </RightText>
        </ImageWrapper>
      </ChallengeBlock>
    </Wrapper>
  );
};
