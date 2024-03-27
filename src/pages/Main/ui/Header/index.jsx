import React, { useState } from 'react';
import Iqoption from './images/iqoption.svg';
import { Layout } from '../../styled';
import { Wrapper, HeaderWrap, Menu, Item } from './styled';
import Anchor from '../../../../shared/ui/Anchor';

// Configuration for menu items
const menuItems = [
  { name: 'Challenges', to: 'Challenges' },
  { name: 'Schedule', to: 'Schedule' },
  { name: 'Prizes', to: 'Prizes' },
  { name: 'Sponsors', to: 'Sponsors' },
  { name: 'Venue', to: 'Venue' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Layout>
        <HeaderWrap>
          <Iqoption />
          <Menu isOpen={isOpen}>
            {menuItems.map((item) => (
              <Anchor key={item.name} to={item.to} offset={-20}>
                <Item>{item.name}</Item>
              </Anchor>
            ))}
          </Menu>
        </HeaderWrap>
      </Layout>
    </Wrapper>
  );
}
