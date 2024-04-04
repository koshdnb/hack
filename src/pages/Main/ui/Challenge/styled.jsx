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
  //position: relative;
  margin-top: 50px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: calc(50% - 11px);
  display: flex;
  gap: 12px;

  ${mediaMax.m} {
    width: 100%;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Number = styled.div`
  font-size: 104.17px;
  font-weight: 800;
  line-height: 114.58px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
  -webkit-background-clip: text;
  -webkit-text-stroke: 3px transparent;
  color: #000000;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 800;
  line-height: 30.8px;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px;
  text-align: left;
`;
