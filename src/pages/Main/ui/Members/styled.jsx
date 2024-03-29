import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';

export const Wrapper = styled.div`
  position: relative;
  background-color: #161414;

  /* ::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 241px;
    top: -300px;
    left: 0;
    background: linear-gradient(
      178deg,
      rgba(22, 20, 20, 0) 9.84%,
      #161414 76.94%
    );
    transform: rotate(180deg);
    z-index: -1;
  } */
`;

export const MembersWrap = styled.div`
  max-width: 695px;
  margin: 0 auto;
  padding: 70px 0 120px 0;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;

  ${mediaMax.m} {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;

  :nth-child(1),
  :nth-child(2),
  :nth-child(6),
  :nth-child(7) {
    width: 33%;
  }

  ${mediaMax.s} {
    width: auto;
  }
`;

export const Image = styled.img`
  width: 220px;
`;

export const Name = styled.div`
  font-size: 17.71px;
  font-weight: 600;
  line-height: 19.48px;
  text-align: center;
`;

export const Description = styled.div`
  color: gray;
  font-size: 17.71px;
  font-weight: 300;
  line-height: 19.48px;
  text-align: center;
`;
