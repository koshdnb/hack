import styled from '@emotion/styled';
import { TextGradient } from '../../styles/theme';
import { mediaMax } from '../../libs/media';

export const Wrapper = styled.div`
  color: #fff;
  padding-bottom: 33px;
`;

export const TopWrap = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 110%; /* 19.8px */

  max-width: 558px;
  margin: 0 auto;
  margin-bottom: 43px;
  text-align: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 34px;
  font-weight: 300;
  line-height: 110%; /* 37.4px */
  text-transform: uppercase;

  margin-bottom: 8px;

  ${TextGradient()};
`;

export const Address = styled.p`
  margin-bottom: 24px;
`;

export const Email = styled.p`
  > strong {
    ${TextGradient()};
  }
`;

export const BottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  ${mediaMax.m} {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  ${mediaMax.m} {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkItem = styled.li``;

export const Link = styled.a`
  cursor: pointer;

  :hover {
  }

  :active {
  }
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 9px;
`;

export const SocialItem = styled.li``;

export const SocialLink = styled.a`
  transition: opacity 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.6;
  }

  > span {
    display: none;
  }
`;
