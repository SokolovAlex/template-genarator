import React from 'react';
import styled from 'typed-styled-components';
import KasperskyLogoSvg from './kaspersky-logo-green.svg';

export const LogoContainer = styled().div`
  background: white;
  width: 136px;
  min-height: 100%;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 20px;
  display: block;
`;

const Logo = () => (
  <LogoContainer>
    <KasperskyLogoSvg/>
  </LogoContainer>
);

export { Logo };
