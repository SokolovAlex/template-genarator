import styled from 'styled-components';

export const Title = styled.h1`
  height: 40px;
  position: relative;
  color: #444;
  font-size: 24px;
  text-align: center;
  padding-bottom: 10px;
  margin-bottom: 20px;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -2em;
    width: 4em;
    height: 1px;
    background: #009981;
  }
`;

export const TitleH2 = styled.h2`
  height: 30px;
  color: #444;
  font-size: 24px;
  text-align: center;
  padding-bottom: 5px;
  margin-bottom: 10px;


  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -2em;
    width: 4em;
    height: 1px;
    background: #009981;
  }
`;

export const TitleH3 = styled.h3`
  height: 30px;
  color: #444;
  font-size: 24px;
`;
