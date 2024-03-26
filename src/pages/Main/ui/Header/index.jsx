import Iqoption from './images/iqoption.svg';
import { Wrapper, Menu, Item } from './styled';

export default function Header() {
  return (
    <Wrapper>
      <Iqoption />
      <Menu>
        <Item>Challenges</Item>
        <Item>Schedule</Item>
        <Item>Rules</Item>
        <Item>Prizes</Item>
        <Item>Sponsors</Item>
        <Item>Venue</Item>
      </Menu>
    </Wrapper>
  );
}
