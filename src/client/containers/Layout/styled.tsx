import styled from 'typed-styled-components';
import { siteWidth } from '../../constants/styles';

export const LayoutContainer = styled().div`
  background-color: #f7f7f7;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

export const Header = styled().div`
  margin: 0 auto;
  max-width: ${siteWidth};
  min-height: 100%;
  width: ${siteWidth};
`;

export const HeaderContainer = styled().div`
  height: 68px;
  background: white;
  width: 100%;
`;

export const Content = styled().div`
  margin: 0 auto;
  max-width: ${siteWidth};
  min-height: 100%;
  width: ${siteWidth};
`;

export const DarkGrayLine = styled().div`
  width: 100%;
  height: 18px;
  background: #444444;
`;

export const Footer = styled().div`
  background: white;
  margin-top: 118px;
  min-height: 100%;
  width: 100%;
  height: 87px;
  display: flex;
  align-items: center;
  padding-left: calc(100% - 1030px - (100% - 960px) / 2);
`;

export const FooterText = styled().div`
  color: #c1c1c1;
  margin: 0;
`;
