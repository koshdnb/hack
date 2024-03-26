import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  min-width: 316px;
  padding: 8px 0;
  color: #1d1d1d;
  background-color: #f5f5f5;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
`;

export const InfoText = styled.span`
  margin-right: 10px;
`;
