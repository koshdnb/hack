import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';
import { GradientTitle } from '../../../../shared/ui/GradientTitle';

export const Wrapper = styled.div`
  position: relative;
  min-height: 605px;
  padding-top: 60px;
  padding-bottom: 35px;
  background-color: #000000;
  background-image: url('/images/man-vs-machine-bg.png');
  background-size: 100% auto;
  background-position: 100%;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
`;

export const TitleWrap = styled.div`
  position: relative;
  z-index: 10;
`;

export const Title = styled(GradientTitle)`
  font-size: 59px;
  font-weight: 700;
  line-height: 130%; /* 76.7px */

  color: #161414;
`;

export const Subtitle = styled.p`
  color: #fff;

  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%; /* 23.4px */
  text-transform: uppercase;
`;

export const TextWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 787px;

  margin: 0 auto;
  margin-top: 265px;

  ${mediaMax.l} {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

export const Text = styled.p`
  color: #fff;

  font-size: 18px;
  font-weight: 400;
  line-height: 156%; /* 28.08px */

  max-width: 539px;
`;
