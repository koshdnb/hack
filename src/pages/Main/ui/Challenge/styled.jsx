import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33px 0 100px;

  ${mediaMax.l} {
    padding-bottom: 70px;
  }

  background: radial-gradient(
    45.09% 45.09% at 50% 50%,
    #1d1c1c 0%,
    #161414 100%
  );

  /* background-color: #000000; */
`;

export const ChallengeBlock = styled.div`
  position: relative;
  margin-top: 50px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;

  ${mediaMax.l} {
    flex-direction: column;
    gap: 15px;
  }
`;

export const ChipWrapper = styled.div`
  max-width: 100%;
  height: auto;
`;

export const LeftText = styled.div`
  max-width: 213px;
`;

export const LeftTextTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 42.9065px;
  line-height: 120%;

  color: #ffffff;

  ${mediaMax.l} {
    text-align: center;
  }
`;

export const RightText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 232px;
`;

export const RightTextTitle = styled.div`
  font-size: 28px;
  font-weight: 800;
  line-height: 30.8px;
  margin-top: 10px;

  ${mediaMax.l} {
    text-align: center;
  }
`;

export const RightTextDescription = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 19.2px;

  ${mediaMax.l} {
    text-align: center;
  }
`;
