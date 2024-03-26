import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 778px;
  margin: 0 auto;
  margin-bottom: 58px;
  padding-top: 100px;
  padding-bottom: 30px;
`;

export const RulesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
    top: 50%;
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

export const RulesWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 29px;
`;
