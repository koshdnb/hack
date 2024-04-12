import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';

export const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 12px;
  background: radial-gradient(
    45.09% 45.09% at 50% 50%,
    #1d1c1c 0%,
    #161414 100%
  );
`;

export const RulesWrapper = styled.div`
  max-width: 861px;
  margin: 0 auto;
`;

export const RulesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;

  & strong {
    font-weight: 700;
  }
`;

export const Rule = styled.li`
  position: relative;

  color: #fff;
  font-size: 16px;
  font-weight: 300;
  line-height: 160%; /* 25.6px */

  ::before {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    left: -18px;
    top: 12px;
    transform: translateY(-50%);
    background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
    border-radius: 50%;
  }
`;

export const Subtitle = styled.p`
  color: #fff;

  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 130%; /* 20.8px */

  margin-top: 8px;
  margin-bottom: 30px;
`;

export const RulesListWrap = styled.div`
  ${mediaMax.l} {
    max-width: 90%;
  }
`;

export const RulesWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 46px;

  ${mediaMax.l} {
    flex-direction: column;
    align-items: center;
  }

  > img {
    max-width: 94%;
    width: fit-content;

    ${mediaMax.l} {
      height: auto;
    }
  }
`;

// export const Button = styled.a`
//   display: inline-block;
//   margin-top: 16px;
//   color: #fff;
//   text-align: center;
//   font-size: 16.709px;
//   font-weight: 700;
//   line-height: 110%;
//   text-transform: uppercase;
//   padding: 8px 32px;
//   cursor: pointer;
//   background: linear-gradient(#1d1d1d, #1d1d1d) padding-box,
//     linear-gradient(to right, #f70d29 0%, #ec03ff 100%) border-box;
//   border-radius: 30px;
//   border: 1px solid transparent;
// `;
