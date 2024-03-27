import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #1d1d1d;
  color: #ffffff;
`;

export const Layout = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  padding: 0 29px;
`;

export const HeaderWrap = styled.div`
  background-image: url('/images/hero-bg.png');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000000;
`;

export const FooterWrap = styled.div``;

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

export const ButtonWhite = styled.a`
  color: #fff;

  text-align: center;
  font-size: 16.709px;
  font-weight: 700;
  line-height: 110%; /* 18.38px */
  text-transform: uppercase;

  padding: 8px 32px;

  background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-radius: 35px;

  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  :active {
    opacity: 0.7;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 59px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
