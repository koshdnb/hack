import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';

export const Wrapper = styled.div`
  max-width: 630px;
  margin: 126px auto 73px auto;
`;

export const Accordion = styled.div`
  margin-top: 73px; ;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 59px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const IdeaWrap = styled.div`
  max-width: 360px;
  height: 167px;
  padding: 21px 24px 42px;
  margin: 0 auto;
  margin-top: 56px;
  margin-bottom: 230px;
  border-radius: 40px;
  border-top-right-radius: 0;
  background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
`;

export const IdeaText = styled.p`
  color: #fff;

  text-align: center;
  font-size: 45px;
  font-weight: 300;
  line-height: 110%; /* 49.5px */
  text-transform: uppercase;

  ${mediaMax.s} {
    font-size: 36px;
  }

  > strong {
    font-weight: 800;
  }
`;
