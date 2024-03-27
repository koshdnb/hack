import React from 'react';
import Iqoption from './images/iqoption.svg';
import { Wrapper, Menu, Item } from './styled';
import Anchor from '../../../../shared/ui/Anchor';

// Configuration for menu items
const menuItems = [
  { name: 'Challenges', to: 'Challenges'},
  { name: 'Schedule', to: 'Schedule'},
  { name: 'Prizes', to: 'Prizes'},
  { name: 'Sponsors', to: 'Sponsors'},
  { name: 'Venue', to: 'Venue'},
];

export default function Header() {
  return (
      <Wrapper>
        <Iqoption />
        <Menu>
          {menuItems.map((item) => (
              <Anchor key={item.name} to={item.to} offset={-20}>
                <Item>{item.name}</Item>
              </Anchor>
          ))}
        </Menu>
      </Wrapper>
  );
}
