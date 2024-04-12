import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';
import { ButtonWhite } from '../../styled';

export const Wrapper = styled.div`
  position: relative;
  max-width: 630px;
  margin: 126px auto 73px auto;
  z-index: 3;
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  height: 167px;
  padding: 21px 24px 21px;
  margin: 0 auto;
  margin-top: 56px;
  margin-bottom: 230px;
  border-radius: 40px;
  border-top-right-radius: 0;
  background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
  /* z-index: -1; */
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

export const CtaButton = styled(ButtonWhite)`
  position: absolute;
  display: block;
  margin: 0 auto;
  min-width: 200px;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);
`;
