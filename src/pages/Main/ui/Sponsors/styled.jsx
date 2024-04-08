import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';
import { TextGradient } from '../../../../shared/styles/theme';

export const Wrapper = styled.div`
  position: relative;
  background-color: #161414;
`;

export const SponsorsWrap = styled.div`
  max-width: 825px;
  margin: 0 auto;
  padding: 70px 0 120px 0;
`;

export const CommunityWrapper = styled.div`
  margin-bottom: 72px;
`;

export const SponsorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;

  ${mediaMax.l} {
    flex-direction: column;
    align-items: center;
  }
`;

export const SponsorsItem = styled.li`
  //margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 24px;

  ${mediaMax.m} {
    flex-direction: column;
  }

  > svg {
    width: 190px;
  }

  > div {
    padding-bottom: 7px;
  }
`;
