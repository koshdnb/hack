import styled from '@emotion/styled';

export const Toggle = styled.button({
  all: 'unset',
  cursor: 'pointer',
  padding: 16,
  fontSize: 16,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const ToggleIcon = styled.span`
  position: absolute;
  width: 25px;
  height: 32px;
  top: 0;
  right: 0;
  color: #ec03ff;
  font-size: 32.71px;
  font-weight: 600;
  line-height: 35.98px;
  text-align: left;
`;

export const Panel = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 20.8px;
  text-align: left;
`;

export const Wrapper = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Item = styled.li`
  position: relative;
  display: block;
  padding: 18px 42px 23px 25px;
  background: linear-gradient(#1d1d1d, #1d1d1d) padding-box,
    linear-gradient(to right, #f70d29 0%, #ec03ff 100%) border-box;
  border-radius: 15px 0 15px 15px;
  border: 1px solid transparent;
`;

export const Title = styled.span`
  font-size: 30px;
  font-weight: 600;
  line-height: 33px;
  text-align: left;
`;
