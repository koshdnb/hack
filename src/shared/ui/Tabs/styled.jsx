import styled from '@emotion/styled';
import { css } from '@emotion/css';

export const TabListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const tabList = css`
  display: flex;
  flex-wrap: nowrap;
  gap: 70px;
`;

export const tab = css`
  width: 182px;
  padding: 12px 20px;
  background: linear-gradient(#1d1d1d, #1d1d1d) padding-box,
    linear-gradient(to right, #f70d29 0%, #ec03ff 100%) border-box;
  border-radius: 0 15px 15px 15px;
  border: 1px solid transparent;
  font-size: 28.47px;
  font-weight: 800;
  line-height: 31.31px;
  text-align: center;
  outline: none;
  cursor: pointer;

  &:hover {
    //background: var(--surface_1_hover);
  }

  &.react-tabs__tab--selected {
    //color: var(--text_primary_inverse_default);
    //background: var(--surface_1_inverse_default);
  }
`;
