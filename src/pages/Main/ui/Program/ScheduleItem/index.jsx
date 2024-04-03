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

import {
  Wrapper,
  Time,
  Title,
  Description,
  TimeDivider,
  Event,
  IconWrapper,
  DividerIcon,
} from './styled';

export const ScheduleItem = ({ item }) => {
  const { title, description, timeStart, timeEnd, icon: iconName } = item;
  const icons = {
    checkpoint: CheckpointIcon,
    dinner: DinnerIcon,
    event: EventIcon,
    lamp: LampIcon,
    lunch: LunchIcon,
    meet: MeetIcon,
    night: NightIcon,
    party: PartyIcon,
    push: PushIcon,
    network: NetworkIcon,
  };

  const Icon = icons[iconName];

  return (
    <Wrapper>
      <Time>
        {timeStart}
        <TimeDivider> - </TimeDivider>
        {timeEnd}
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <DividerIcon />
      </Time>
      <Event>
        {title && <Title>{title}</Title>}
        <Description>{description}</Description>
      </Event>
    </Wrapper>
  );
};
