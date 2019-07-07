import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { siteWidth } from '../../../constants/styles';

const border = '1px solid #e3e3e3';
const borderActive = '2px solid #7ec57c';

export const MenuContainer = styled.div`
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 40px;
  background-color: #fff;
`;

export const MenuInner = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: ${siteWidth};
  margin: 0 auto;
  border-right: ${border};
`;

interface IMenuItemProps {
  active?: number;
}

export const MenuItem = styled(Link)<IMenuItemProps>`
  flex: 1;
  height: 100%;
  border-left: ${border};
  text-decoration: none;
  border-bottom: ${(props) => props.active ? borderActive : 'default'};
`;

export const MenuText = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #adadad;
  font-size: 11px;
  font-weight: 300;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;
  transition: all .2s ease-in-out;
`;
