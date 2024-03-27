import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { mediaMax } from '../../../../shared/libs/media';

import { Button } from '../../styled';

export const Wrapper = styled.div`
  margin: 52px auto 73px;
`;

export const ProgramWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 630px;
  margin: 52px auto 73px;
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
