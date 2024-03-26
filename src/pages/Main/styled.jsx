import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #1d1d1d;
  color: #ffffff;
`;

export const HeaderWrap = styled.div`
  background-image: url('/images/hero-bg.png');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000000;
`;

export const Button = styled.a`
  color: #fff;

  text-align: center;
  font-size: 16.709px;
  font-weight: 700;
  line-height: 110%; /* 18.38px */
  text-transform: uppercase;

  padding: 8px 32px;

  background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
  border-radius: 35px;

  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  :active {
    opacity: 0.7;
  }
`;
