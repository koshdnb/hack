import React, { useState } from 'react';
import { slide as MenuSlide } from 'react-burger-menu';
import Iqoption from './images/iqoption.svg';
import MenuIcon from './images/menu.svg';
import {
  TopWrap,
  Wrapper,
  Menu,
  Item,
  HeaderWrap,
  MobileItem,
  MenuIconWrapper,
} from './styled';
import { Layout } from '../../styled';
import Anchor from '../../../../shared/ui/Anchor';

const menuItems = [
  { name: 'Challenges', to: 'Challenges' },
  { name: 'Schedule', to: 'Schedule' },
  { name: 'Prizes', to: 'Prizes' },
  { name: 'Sponsors', to: 'Sponsors' },
  { name: 'Venue', to: 'Venue' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  return (
    <TopWrap>
      <MenuSlide
        right
        customBurgerIcon={false}
        isOpen={menuOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        {menuItems.map((item) => (
          <Anchor key={item.name} to={item.to} offset={-20}>
            <MobileItem onClick={() => handleStateChange({ isOpen: false })}>
              {item.name}
            </MobileItem>
          </Anchor>
        ))}
      </MenuSlide>
      <Wrapper>
        <Layout>
          <HeaderWrap>
            <Iqoption />
            <Menu>
              {menuItems.map((item) => (
                <Anchor key={item.name} to={item.to} offset={-20}>
                  <Item>{item.name}</Item>
                </Anchor>
              ))}
            </Menu>
            <MenuIconWrapper>
              <MenuIcon onClick={() => setMenuOpen(true)} />
            </MenuIconWrapper>
          </HeaderWrap>
        </Layout>
      </Wrapper>
    </TopWrap>
  );
}
