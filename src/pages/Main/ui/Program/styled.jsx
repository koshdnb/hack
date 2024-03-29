import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { mediaMax } from '../../../../shared/libs/media';

import { Button } from '../../styled';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 52px;
  /* padding-bottom: 73px; */
  background: radial-gradient(
    45.09% 45.09% at 50% 50%,
    #1d1c1c 0%,
    #161414 100%
  );
  padding-bottom: 73px;

  /* ::before {
    content: '';
    position: absolute;
    bottom: -100px;
    left: 0;
    width: 100%;
    height: 241px;
    background: linear-gradient(178deg, rgba(22, 20, 20, 0) 7%, #161414 66.68%);
  } */
`;

export const ProgramWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 630px;
  margin: 52px auto 73px;
  z-index: 2;
  margin-bottom: 0;
`;

export const Description = styled.div`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20.8px;
  text-align: center;
`;

export const tabListClassName = css`
  margin-top: 42px;
  margin-bottom: 82px;

  ${mediaMax.m} {
    gap: 24px;
  }
`;

export const tabClassName = css`
  ${mediaMax.m} {
  }
`;

export const CtaButton = styled(Button)`
  margin-top: 52px;
`;
