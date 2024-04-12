import DinnerIcon from './images/dinner.svg';
import CheckpointIcon from './images/checkpoint.svg';
import EventIcon from './images/event.svg';
import LampIcon from './images/lamp.svg';
import LunchIcon from './images/lunch.svg';
import MeetIcon from './images/meet.svg';
import NightIcon from './images/night.svg';
import PartyIcon from './images/party.svg';
import PushIcon from './images/push.svg';
import NetworkIcon from './images/network.svg';
import Keynote from './images/keynote.svg';
// import Stopwatch from './images/Day1 icon3 stopwatch.svg';
import Stopwatch from './images/stopwatch.svg';
// import Talk from './images/Day1 icon4 talk #1.svg';
import Talk from './images/talk.svg';
// import Talk2 from './images/Day1 icon5 talk #2.svg';
// import Deadline from './images/Day2 icon2 deadline.svg';
import Deadline from './images/deadline.svg';
// import Shortlist from './images/Day2 icon3 shortlist.svg';
import Shortlist from './images/shortlist.svg';
// import Rocket from './images/Day2 icon4 rocket.svg';
import Rocket from './images/rocket.svg';
// import Judging from './images/Day2 icon6 judging.svg';
import Judging from './images/judging.svg';
// import Trophy from './images/Day2 icon7. trophy.svg';
import Trophy from './images/trophy.svg';

import {
  Wrapper,
  Time,
  Title,
  Description,
  TimeText,
  TimeDivider,
  Event,
  IconWrapper,
  IconReducer,
  DividerIcon,
} from './styled';

export const ScheduleItem = ({ item }) => {
  const { title, description, timeStart, timeEnd, icon: iconName } = item;
  const icons = {
    checkpoint: <CheckpointIcon />,
    dinner: <DinnerIcon />,
    event: <EventIcon />,
    lamp: <LampIcon />,
    lunch: <LunchIcon />,
    meet: <MeetIcon />,
    night: <NightIcon />,
    party: <PartyIcon />,
    push: <PushIcon />,
    network: <NetworkIcon />,
    keynote: <Keynote />,
    stopwatch: <Stopwatch viewBox="0 0 20 20" />,
    talk: <Talk />,
    talk2: <Talk />,
    deadline: <Deadline />,
    shortlist: <Shortlist />,
    rocket: <Rocket />,
    judging: <Judging />,
    trophy: <Trophy />,
  };

  const Icon = icons[iconName];

  return (
    <Wrapper>
      <Time>
        <TimeText>
          {timeStart}
          {timeEnd && <TimeDivider> - </TimeDivider>}
          {timeEnd}
        </TimeText>
        <IconWrapper>{Icon}</IconWrapper>
        <DividerIcon />
      </Time>
      <Event>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
      </Event>
    </Wrapper>
  );
};
