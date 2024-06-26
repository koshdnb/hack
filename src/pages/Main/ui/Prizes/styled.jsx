import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';
import { BorderGradient } from '../../../../shared/styles/theme';
import { GradientTitle } from '../../../../shared/ui/GradientTitle';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 100px;
  padding-bottom: 88px;
  background-image: url('/images/prizes-bg.png'),
    radial-gradient(45.09% 45.09% at 50% 50%, #1d1c1c 0%, #161414 100%);
  background-size: 100% auto;
  background-position: 100%;
  background-repeat: no-repeat;

  ::before {
    content: '';
    position: absolute;
    top: -70px;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: url(/images/prizes-bg.png);
    filter: blur(10px);
  }

  ::after {
    content: '';
    bottom: -80px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: url(/images/prizes-bg.png);
    filter: blur(10px);
  }

  ${mediaMax.m} {
    padding-top: 10px;

    ::before {
      top: -77px;
    }
    ::after {
      top: 60%;
    }
  }
`;

export const PrizesWrap = styled.div`
  position: relative;
  max-width: 536px;
  margin: 0 auto;
  z-index: 1;
`;

export const Subtitle = styled.p`
  color: #fff;

  text-align: center;
  font-size: 16px;
  font-weight: 300;
  line-height: 110%; /* 17.6px */

  margin-top: 8px;
  margin-bottom: 30px;

  > strong {
    font-weight: 700;
    line-height: 110%;
  }
`;

export const PrizesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  ${mediaMax.m} {
    grid-template-columns: 1fr;
  }
`;

export const PrizeItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  padding: 22px;

  ${BorderGradient({ radius: '0 15px 15px 15px' })};

  :first-child {
    grid-column: 1 / -1;

    flex-direction: row;
    gap: 4px;

    ${mediaMax.s} {
      flex-direction: column;
    }

    > h2 {
      font-size: 96px;
      margin-bottom: -20px;

      ${mediaMax.m} {
        font-size: 56px;
        margin-bottom: 0;
      }
    }
  }

  ${mediaMax.m} {
    font-size: 48px;
    flex-direction: row;
  }

  ${mediaMax.s} {
    flex-direction: column;
  }
`;

export const PlaceText = styled.p`
  color: #fff;

  font-size: 38px;
  font-weight: 800;
  line-height: 110%; /* 41.8px */

  > span {
    font-size: 58px;
    line-height: 90%; /* 52.2px */
  }
`;

export const PrizeText = styled(GradientTitle)`
  font-size: 60px;
  line-height: 110%; /* 66px */
  letter-spacing: 3px;

  -webkit-text-stroke: 5px transparent;
  color: #161414;

  & > span {
    font-size: 38px;
  }
`;
