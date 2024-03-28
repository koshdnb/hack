import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33px 0 36px;
  /* background-color: #000000; */
`;

export const ChallengeBlock = styled.div`
  position: relative;
  margin-top: 16px;
`;

export const ImageWrapper = styled.div`
  margin-left: -40px;

  ${mediaMax.l} {
    margin-left: 0;
  }
`;

export const ChipWrapper = styled.div`
  ${mediaMax.l} {
    display: none;
  }
`;

export const LeftText = styled.div`
  position: absolute;
  width: 220px;
  top: 74px;
  left: 17px;

  ${mediaMax.l} {
    position: static;
    width: auto;
    max-width: 80vw;
  }
`;

export const LeftTextTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 42.9065px;
  line-height: 120%;
  text-align: center;

  color: #ffffff;
`;

export const RightText = styled.div`
  position: absolute;
  right: 22px;
  width: 220px;
  top: 71px;

  ${mediaMax.l} {
    position: static;
    width: auto;
    max-width: 80vw;
  }
`;

export const RightTextTitle = styled.div`
  font-size: 28px;
  font-weight: 800;
  line-height: 30.8px;
  text-align: center;
`;

export const RightTextDescription = styled.div`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 300;
  line-height: 19.2px;
  text-align: center;
`;
