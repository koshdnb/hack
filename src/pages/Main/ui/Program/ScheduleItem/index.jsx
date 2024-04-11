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
import Keynote from './images/Day1 icon2 keynote.svg';
import Stopwatch from './images/Day1 icon3 stopwatch.svg';
import Talk from './images/Day1 icon4 talk #1.svg';
import Talk2 from './images/Day1 icon5 talk #2.svg';
import Deadline from './images/Day2 icon2 deadline.svg';
import Shortlist from './images/Day2 icon3 shortlist.svg';
import Rocket from './images/Day2 icon4 rocket.svg';
import Judging from './images/Day2 icon6 judging.svg';
import Trophy from './images/Day2 icon7. trophy.svg';

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
    party: (
      <IconReducer style={{ width: '24px', height: '24px', top: '-2px' }}>
        <PartyIcon />
      </IconReducer>
    ),
    push: <PushIcon />,
    network: <NetworkIcon />,
    keynote: (
      <IconReducer>
        <Keynote />
      </IconReducer>
    ),
    stopwatch: <Stopwatch />,
    talk: (
      <IconReducer>
        <Talk />
      </IconReducer>
    ),
    talk2: (
      <IconReducer>
        <Talk2 />
      </IconReducer>
    ),
    deadline: <Deadline />,
    shortlist: (
      <IconReducer
        style={{ width: '40px', height: '40px', left: '-2px', top: '2px' }}
      >
        <Shortlist />
      </IconReducer>
    ),
    rocket: (
      <IconReducer style={{ width: '24px', height: '24px', top: '-2px' }}>
        <Rocket viewBox="0 0 29 34" />
      </IconReducer>
    ),
    judging: (
      <IconReducer style={{ width: '24px', height: '24px' }}>
        <Judging />
      </IconReducer>
    ),
    trophy: (
      <IconReducer style={{ width: '29px', height: '29px', top: '1px' }}>
        <Trophy />
      </IconReducer>
    ),
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
