import styled from '@emotion/styled';
import { mediaMax } from '../../../../../shared/libs/media';

import DividerSvg from './images/divider.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  align-items: center;
  margin-bottom: 16px;

  ${mediaMax.m} {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 36px;
  }
`;

export const Time = styled.div`
  position: relative;
  display: flex;
  background: linear-gradient(#1d1d1d, #1d1d1d) padding-box,
    linear-gradient(to right, #f70d29 0%, #ec03ff 100%) border-box;
  min-width: 256px;
  height: 36px;
  border: 1px solid transparent;
  text-wrap: nowrap;
  font-size: 19.71px;
  font-weight: 800;
  line-height: 21.68px;
  text-align: center;
  border-radius: 50px;
  align-items: center;
`;

export const TimeText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: calc(100% - 43px);
`;

export const TimeDivider = styled.span`
  font-size: 19.71px;
  font-weight: 800;
  line-height: 21.68px;
  text-align: center;
  background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Title = styled.div`
  display: inline;
  color: #f70d29;
  background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 17.6px;
  text-align: left;
`;

export const Event = styled.div`
  width: 226px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 43px;
  height: 43px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #1d1c1c;
  border-radius: 50%;
  background: linear-gradient(#1d1d1d, #1d1d1d) padding-box,
    linear-gradient(to right, #ec03ff 0%, #f70d29 100%) border-box;
  border: 1px solid transparent;
`;

export const IconReducer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

export const DividerIcon = styled(DividerSvg)`
  position: absolute;
  right: -19px;

  ${mediaMax.m} {
    display: none;
  }
`;
