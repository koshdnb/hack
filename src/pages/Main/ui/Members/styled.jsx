import styled from '@emotion/styled';
import { mediaMax } from '../../../../shared/libs/media';

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 70px auto 0 auto;
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
  width: 220px;
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
