import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-top: 126px;
`;

export const Title = styled.div`
  color: #180c0c;

  text-align: center;
  -webkit-text-stroke-width: 0.5533980131149292;
  -webkit-text-stroke-color: #000;

  font-size: 45px;
  font-weight: 800;
  line-height: 110%; /* 49.5px */
  text-transform: uppercase;

  margin-bottom: 100px;
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;

  max-width: 649px;
  margin: 0 auto;
  margin-bottom: 56px;
`;

export const FAQCard = styled.div`
  position: relative;
  padding: 20px 28px;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '130px')};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  ::before,
  ::after {
    content: '';
    position: absolute;
  }

  ::before {
    width: 25px;
    height: 25px;
    top: 10px;
    right: 10px;
    background-image: url(/images/plus.svg);
    background-position: center;
    background-repeat: no-repeat;
  }

  ::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    border: 1px solid transparent;
    background: linear-gradient(to right, #f70d29, #ec03ff) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

export const Question = styled.p`
  color: #fff;

  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%; /* 33px */
`;

export const Answer = styled.p`
  color: #fff;

  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%; /* 20.8px */

  margin-top: ${({ isOpen }) => (isOpen ? '13px' : '0')};
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  /* transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(0)')}; */
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

export const IdeaWrap = styled.div`
  width: 360px;
  height: 167px;
  padding: 21px 24px 42px;
  margin: 0 auto;
  margin-bottom: 230px;
  border-radius: 40px;
  border-top-right-radius: 0;
  background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
`;

export const IdeaText = styled.p`
  color: #fff;

  text-align: center;
  font-size: 45px;
  font-weight: 300;
  line-height: 110%; /* 49.5px */
  text-transform: uppercase;

  > strong {
    font-weight: 800;
  }
`;
