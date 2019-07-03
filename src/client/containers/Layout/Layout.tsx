import React from 'react';

import { LayoutContainer, Content, HeaderContainer,
  Header, Footer, FooterText } from './styled';

import { Logo } from './Logo/Logo';
import Button, { ButtonType } from '../../UIKit/Button';
import Menu from './Menu/Menu';

const Layout = ({ children }) => (
  <LayoutContainer>
    <HeaderContainer>
      <Header className='header'>
        <Logo />
      </Header>
    </HeaderContainer>
    <Menu/>
    <Content>
      {children}
    </Content>
    <Footer>
      <FooterText>
        © 2019 AO Kaspersky Lab. All Rights Reserved. •
        <Button type={ButtonType.Link} target='_blank' href='https://www.kaspersky.com/web-privacy-policy'>
          Privacy Policy
        </Button>
      </FooterText>
    </Footer>
  </LayoutContainer>
);
export default Layout;
