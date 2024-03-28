import styled from '@emotion/styled';

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
  margin-top: 12px;
`;
export const Label = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  width: 200px;
`;
export const Input = styled.input`
  padding-left: 8px;
  height: 34px;
  font-size: 16px;
  flex: 1;
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
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: 300;
`;
