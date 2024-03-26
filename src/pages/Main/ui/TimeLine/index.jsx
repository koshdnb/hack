import { GradientTitle } from '../../../../shared/ui/GradientTitle';

import Hands from './images/hands.svg';
import Registration from './images/registration.svg';
import RegistrationClose from './images/registrationClose.svg';
import Rocket from './images/rocket.svg';
import Prize from './images/prize.svg';
import {
  Wrapper,
  Topline,
  BottomLine,
  Title,
  Description,
  CenterLine,
  CenterLineItem,
  Line,
} from './styled';

export const TimeLine = () => {
  return (
    <Wrapper>
      <GradientTitle>the hackaithon timeline</GradientTitle>
      <Topline>
        <div>
          <Title>APRIL 1</Title>
          <Description>Registration</Description>
        </div>
        <div>
          <Title>MAY 15th</Title>
          <Description>TeamUP deadline</Description>
        </div>
        <div>
          <Title>JUNE16th</Title>
          <Description>Awards Ceremony</Description>
        </div>
      </Topline>
      <CenterLine>
        <Line />
        <CenterLineItem>
          <Registration />
        </CenterLineItem>
        <CenterLineItem>
          <RegistrationClose />
        </CenterLineItem>
        <CenterLineItem>
          <Hands />
        </CenterLineItem>
        <CenterLineItem>
          <Rocket />
        </CenterLineItem>
        <CenterLineItem>
          <Prize />
        </CenterLineItem>
      </CenterLine>
      <BottomLine>
        <div>
          <Title>MAY 5</Title>
          <Description>Registration Closes</Description>
        </div>
        <div>
          <Title>JUNE 15th</Title>
          <Description>HackAIthon starts</Description>
        </div>
      </BottomLine>
    </Wrapper>
  );
};
