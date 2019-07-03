import React from 'react';
import { connect } from 'react-redux';
import { MenuContainer, MenuInner, MenuItem, MenuText } from './styled';

export interface IMenu {
  title: string;
  link: string;
}

const menuItems: IMenu[] = [{
  title: 'Creation',
  link: '/creation',
}, {
  title: 'Import',
  link: '/import',
}];

interface IMenuProps {
  activeMenu: string;
}

const Menu = ({ activeMenu }: IMenuProps) => (
  <MenuContainer>
    <MenuInner className='menu-inner'>
      { menuItems.map((item) => (
        <MenuItem key={item.title} to={item.link} active={activeMenu === item.link}>
          <MenuText>{item.title}</MenuText>
        </MenuItem>
        ))
      }
    </MenuInner>
  </MenuContainer>
);

const mapStateToProps = (state) => ({ activeMenu: state.router.location.pathname });

export default connect(mapStateToProps)(Menu);
