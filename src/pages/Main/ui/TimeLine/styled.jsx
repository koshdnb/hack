import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';
import { BorderGradient } from '../../../../shared/styles/theme';

export const Wrapper = styled.div``;

export const TimelineWrap = styled.div`
  max-width: 846px;
  margin: 0 auto;
`;

export const TimelineList = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  margin-top: 80px;
  padding: 78px 0;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 12px;
    top: 50%;
    transform: translateY(-50%);

    ${BorderGradient({ radius: '15px' })}
  }

  ${mediaMax.xl} {
    max-width: 75%;
  }

  ${mediaMax.m} {
    flex-direction: column;
    height: 460px;
    padding: 0;

    ::before {
      width: 12px;
      height: 100%;
    }
  }
`;

export const TimelineItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 17px; */

  :nth-child(even) {
    > div:first-child {
      top: 67px;
    }
  }

  ${mediaMax.m} {
    :nth-child(even) {
      > div:first-child {
        right: -294%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`;

export const ItemTextWrap = styled.div`
  position: absolute;
  text-align: center;
  min-width: max-content;
  top: -64px;

  ${mediaMax.m} {
    width: 50%;
    right: 135%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ItemDate = styled.h4`
  color: #ec03ff;

  text-align: center;
  font-size: 22px;
  font-weight: 600;
  line-height: 125%; /* 27.5px */
`;

export const ItemDescription = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  line-height: 125%;
`;

export const ItemImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  ${BorderGradient({ radius: '50%' })}/* ::before {
    content: '';
    width: 100%;
    height: 100%;

    ${({ imgUrl }) => `
      background-image: url${imgUrl}
      background-repeat: no-repeat;
    `} */
`;
