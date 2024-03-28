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
  max-width: 900px;
  margin: 0 auto;
  padding: 12px;
`;

export const InfoText = styled.span`
  margin-right: 10px;
`;

export const CloseButton = styled.button`
  all: unset;
  color: #fff;
  text-align: center;
  font-size: 16.709px;
  font-weight: 700;
  line-height: 110%;
  text-transform: uppercase;
  padding: 8px 32px;
  background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
  border-radius: 35px;
  cursor: pointer;
  box-shadow: none;
  text-wrap: nowrap;
  outline: none;
`;
