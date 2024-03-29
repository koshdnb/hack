import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';
import { GradientTitle } from '../../../../shared/ui/GradientTitle';

export const Wrapper = styled.div`
  width: 100vw;
  height: 400px;
  margin: 0 auto;
  background-color: #161414;
  z-index: 3;
`;

export const MapWrap = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 33px;
  max-width: 861px;
  margin: 0 auto;

  ${mediaMax.l} {
    flex-direction: column;
  }

  ${mediaMax.s} {
  }
`;

export const MapImage = styled.img`
  max-width: 547px;
  height: auto;

  ${mediaMax.l} {
    width: 100%;
  }
`;

export const MapLink = styled.a``;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${mediaMax.l} {
    flex-direction: row;
    justify-content: space-between;
    gap: 33px;
    order: -1;
    max-width: 547px;
  }

  ${mediaMax.s} {
    flex-direction: column;
    gap: 8px;
  }
`;

export const TextWrap = styled.div`
  text-align: center;
  ${mediaMax.l} {
    text-align: left;
  }
  ${mediaMax.l} {
    text-align: center;
  }
`;

export const GradientText = styled(GradientTitle)`
  /* max-width: 861px;
  margin: 0 auto; */
  ${mediaMax.l} {
    text-align: left;
  }

  ${mediaMax.m} {
    font-size: 36px;
  }

  ${mediaMax.s} {
    text-align: center;
    /* font-size: 30px; */
  }
`;

export const Date = styled.p`
  color: #fff;
  /* text-align: center; */
  font-size: 28px;
  font-weight: 600;
  line-height: 130%; /* 36.4px */
  text-transform: uppercase;

  ${mediaMax.m} {
    font-size: 24px;
  }

  ${mediaMax.s} {
    /* text-align: center; */
    /* font-size: 20px; */
  }
`;

export const Location = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 130%; /* 23.4px */

  ${mediaMax.l} {
    text-align: left;
    max-width: 200px;
  }

  ${mediaMax.m} {
    font-size: 14px;
  }

  ${mediaMax.s} {
    text-align: center;
  }
`;

// export const Container = styled.iframe`
//   background-color: #1d1d1d;
//   border: 0;
// `;
