import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 400px;
  margin: 0 auto;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const Container = styled.iframe`
  background-color: #1d1d1d;
  border: 0;
`;
