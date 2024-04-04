import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';
import { TextGradient } from '../../../../shared/styles/theme';

export const Wrapper = styled.div`
  position: relative;
  background-color: #161414;
`;

export const SponsorsWrap = styled.div`
  max-width: 695px;
  margin: 0 auto;
  padding: 70px 0 120px 0;
`;

export const SponsorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 72px;
  gap: 12px;

  ${mediaMax.l} {
    flex-direction: column;
    align-items: center;
  }
`;

export const SponsorsItem = styled.li`
  margin-top: 50px;
  width: 44%;

  :first-child {
    width: 100%;
  }

  ${mediaMax.l} {
    width: 90%;
  }
`;

export const Title = styled.h3`
  text-align: center;
  line-height: 110%;
  text-transform: uppercase;
  margin-bottom: 8px;
  font-size: 34px;
  font-style: normal;
  font-weight: 800;

  ${TextGradient()};
`;

export const LogosWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`;
