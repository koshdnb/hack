import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';
import { GradientTitle } from '../../../../shared/ui/GradientTitle';

export const Wrapper = styled.div`
  position: relative;
  min-height: 605px;
  padding-top: 60px;
  padding-bottom: 35px;
  background-image: url('/images/man-vs-machine-bg-2.png');
  background-size: 100% auto;
  background-position: 100%;
  background-repeat: no-repeat;

  /* ::before,
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  ::before {
    background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
    opacity: 0.8;
    mix-blend-mode: color;
    z-index: 8;
  }

  ::after {
    top: 57%;
    height: 339px;
    background: linear-gradient(
      183deg,
      rgba(22, 20, 20, 0) -9.78%,
      rgba(22, 20, 20, 0.76) 39.76%,
      #161414 62.53%
    );
    mix-blend-mode: color;
    z-index: 9;
  } */
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
`;

export const TitleWrap = styled.div`
  position: relative;
  z-index: 10;

  ::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 150px;
    top: -60px;
    left: 0;
    background: linear-gradient(
      178deg,
      rgba(22, 20, 20, 0) 17%,
      rgba(9, 8, 8, 0.6) 51.87%,
      #010000 74.11%
    );
    transform: rotate(180deg);
    z-index: -1;
  }
`;

export const Title = styled(GradientTitle)`
  font-size: 59px;
  font-weight: 700;
  line-height: 130%; /* 76.7px */

  color: #000000;
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
