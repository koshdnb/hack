import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';

export const Wrapper = styled.div`
  padding-top: 64px;

  ${mediaMax.l} {
    padding-top: 0;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoWrap = styled.p`
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 175px;

  > svg:nth-child(2) {
    display: none;
  }

  ${mediaMax.xl} {
    margin-bottom: 250px;
  }

  ${mediaMax.l} {
    margin-bottom: 330px;

    > svg {
      width: 100%;
    }

    > svg:first-of-type {
      display: none;
    }

    > svg:nth-child(2) {
      display: flex;
    }
  }

  ${mediaMax.m} {
    margin-bottom: 175px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  max-width: 517px;
  margin-bottom: 26px;
`;

export const Title = styled.p`
  font-size: 27.068px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 29.775px */

  text-align: center;
  color: #fff;

  margin-bottom: 4px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  color: #fff;

  margin-bottom: 20px;
`;

export const Date = styled.p`
  font-size: 19.068px;
  font-weight: 400;
  line-height: 100%;
  background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;
