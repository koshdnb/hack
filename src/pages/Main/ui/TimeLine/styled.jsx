import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 846px;
  margin: 0 auto;
`;

export const Blank = styled.div``;

export const Topline = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  margin-bottom: 16px;
`;

export const CenterLine = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const CenterLineItem = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1d1c1c;
  border-radius: 50%;
  background: linear-gradient(#1d1d1d, #1d1d1d) padding-box,
    linear-gradient(to right, #f70d29 0%, #ec03ff 100%) border-box;
  border: 1px solid transparent;
`;
export const BottomLine = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
`;

export const Title = styled.div`
  color: #ec03ff;
  font-size: 22px;
  font-weight: 600;
  line-height: 27.5px;
  text-align: center;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
`;

export const Line = styled.div`
  position: absolute;
  top: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 12px;
  background: linear-gradient(#1d1d1d, #1d1d1d) padding-box,
    linear-gradient(to right, #f70d29 0%, #ec03ff 100%) border-box;
  border-radius: 15px;
  border: 1px solid transparent;
`;
