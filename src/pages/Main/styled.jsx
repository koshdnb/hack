import styled from '@emotion/styled';
import { mediaMax } from '../../shared/libs/media';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
  background-position: center 80px;
  background-color: #000000;

  ${mediaMax.xl} {
    background-position: center 163px;
  }

  ${mediaMax.l} {
    background-position: center 263px;
  }

  ${mediaMax.s} {
    background-size: 270%;
  }
`;

export const FooterWrap = styled.div`
  position: relative;
  padding-top: 60px;

  background-color: #161414;

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 100vw;
    height: calc(100vw / 1.52);
    background-color: #161414;
    background-image: url('/images/faq-bg.png');
    background-size: 100vw auto;
    background-position: top center;
    background-repeat: no-repeat;
    top: -10%;
  }

  ::after {
    display: none;
  }

  ${mediaMax.xxl} {
    ::after {
      display: block;
      top: 56%;
    }
  }

  ${mediaMax.xl} {
    ::before {
      top: -6%;
    }
  }

  ${mediaMax.m} {
    ::before {
      top: 2%;
    }
  }

  ::after {
    background-position: bottom center;
    transform: rotate(180deg);
    top: 60%;

    ${mediaMax.xl} {
      top: 65%;
    }

    ${mediaMax.l} {
      top: 65%;
    }

    ${mediaMax.m} {
      top: 65%;
    }
  }
`;

export const Button = styled.a`
  color: #fff;

  text-align: center;
  font-size: 16.709px;
  font-weight: 700;
  line-height: 110%; /* 18.38px */
  text-transform: uppercase;

  padding: 8px 32px;

  background-image: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
  border-radius: 35px;

  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  :active {
    opacity: 0.7;
  }
`;

export const ButtonWhite = styled(Button)`
  position: relative;
  width: fit-content;
  background: #ffffff;
  color: #f10599;

  /* ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 100%;
    background-color: #ffffff;
    border-radius: 35px;
    z-index: -1;
  } */
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
