import styled from '@emotion/styled';
import { mediaMax } from '../../libs/media';

export const Wrapper = styled.div`
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;
`;

export const Title = styled.div`
  background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 29px;
  font-style: normal;
  font-weight: 800;
`;

export const SubTitle = styled.div`
  margin-top: 16px;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
`;

export const BlockTitle = styled.div`
  margin-top: 32px;
  margin-bottom: 8px;
  background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
`;
export const FormBlock = styled.div`
  margin-top: 16px;
`;
export const Field = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 8px;

  ${mediaMax.s} {
    flex-direction: column;
    align-items: stretch;
  }
`;
export const Label = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  text-align: left;
  width: 200px;

  ${mediaMax.s} {
    width: auto;
  }
`;
export const Input = styled.input`
  padding-left: 8px;
  height: 34px;
  font-size: 16px;
  flex: 1;

  ${mediaMax.s} {
    padding: 8px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  font-size: 16px;
  height: 5rem;
`;

export const Submit = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  margin-top: 32px;
  outline: none;
  color: #fff;
  text-align: center;
  font-size: 16.709px;
  font-weight: 700;
  line-height: 110%;
  text-transform: uppercase;
  padding: 8px 32px;
  background-image: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
  border-radius: 35px;
  cursor: pointer;
  border: none;

  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }
`;

export const TermsText = styled.div`
  margin-top: 56px;
  margin-bottom: 16px;
  font-weight: 300;
`;

export const CheckboxLabel = styled.label`
  position: relative;
  display: flex;
  margin-left: 36px;

  > input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
  }

  > input:checked ~ span {
    background-color: #f10599;
    border-color: transparent;
  }

  > input:checked ~ span > svg {
    display: flex;
  }

  > span > svg {
    display: none;
  }

  > span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    top: 50%;
    transform: translateY(-50%);
    left: -36px;
    border: 2px solid #ffffff;
    transition: all 0.3s ease;
    cursor: pointer;

    :hover {
      border-color: #f10599;
    }

    :active {
      border-color: #ec03ff;
    }
  }
`;
