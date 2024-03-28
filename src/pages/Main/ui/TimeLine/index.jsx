import { GradientTitle } from '../../../../shared/ui/GradientTitle';
import { Layout } from '../../styled';

import Hands from './images/hands.svg';
import Registration from './images/registration.svg';
import RegistrationClose from './images/registrationClose.svg';
import Rocket from './images/rocket.svg';
import Prize from './images/prize.svg';
import {
  Wrapper,
  TimelineWrap,
  TimelineList,
  TimelineItem,
  ItemTextWrap,
  ItemDate,
  ItemDescription,
  ItemImage,
} from './styled';

const events = [
  {
    date: 'APRIL 1',
    description: 'Registration',
    Icon: Registration,
  },
  {
    date: 'MAY 5',
    description: 'Registration Closes',
    Icon: RegistrationClose,
  },
  {
    date: 'MAY 15th',
    description: 'TeamUP deadline',
    Icon: Hands,
  },
  {
    date: 'JUNE 15th',
    description: 'HackAIthon starts',
    Icon: Rocket,
  },
  {
    date: 'JUNE16th',
    description: 'Awards Ceremony',
    Icon: Prize,
  },
];

export const TimeLine = () => {
  return (
    <Wrapper>
      <Layout>
        <TimelineWrap>
          <GradientTitle>the hackaithon timeline</GradientTitle>

          <TimelineList>
            {events.map(({ date, description, Icon }, i) => {
              return (
                <TimelineItem key={date} index={i}>
                  <ItemTextWrap>
                    <ItemDate>{date}</ItemDate>
                    <ItemDescription>{description}</ItemDescription>
                  </ItemTextWrap>
                  {/* <ItemImage imgUrl={`./images/${icon}.svg`} /> */}
                  <ItemImage><Icon /></ItemImage>
                </TimelineItem>
              );
            })}
          </TimelineList>
        </TimelineWrap>
      </Layout>
    </Wrapper>
  );
};
