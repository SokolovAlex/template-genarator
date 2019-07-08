import styled from 'styled-components';
import { siteWidth } from '../constants/styles';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  max-width; ${siteWidth};
`;

export const Container = styled.div`
  max-width; ${siteWidth};
`;
