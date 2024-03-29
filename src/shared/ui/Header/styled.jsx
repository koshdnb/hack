import styled from '@emotion/styled';
import { mediaMax, mediaMin } from '../../libs/media';
import { BaseLink } from '../../styles/theme';

export const TopWrap = styled.div`
  .bm-menu {
    background: #161414;
    padding: 48px 32px;
  }
`;

export const Wrapper = styled.div``;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 33px 0;
`;

export const Menu = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 120px;

  ${mediaMax.m} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

export const Item = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 12.17px;
  text-align: left;
  cursor: pointer;

  ${BaseLink()}
`;

export const MobileItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 12.17px;
  text-align: left;
  width: fit-content;
  margin-bottom: 32px;
  cursor: pointer;

  ${BaseLink()}
`;

export const MenuIconWrapper = styled.div`
  cursor: pointer;

  ${mediaMin.m} {
    display: none;
  }
`;
