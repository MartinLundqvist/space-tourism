import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/shared/logo.svg';
import { NavText } from '../elements/Typography';

const Container = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 40px 60px 20px minmax(100px, 400px) 20px 40px auto 40px;
  top: 40px;
  width: 100vw;
  height: 64px;
  /* background-color: black; */
  z-index: 2;
`;

const LogoContainer = styled.div`
  grid-column: 2 / 3;
  justify-self: center;
  align-self: center;
  display: block;
  height: 48px;
`;

const Line = styled.div`
  grid-column: 4 / 6;
  grid-row: 1;
  align-self: center;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.blue};
  z-index: 3;
`;

const LinksBackground = styled.div`
  grid-column: 5 / 9;
  grid-row: 1;
  width: 100%;
  backdrop-filter: blur(10px);
`;

const LinksContainer = styled.div`
  grid-column: 7 / 8;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  z-index: 4;
`;

const Header = (): JSX.Element => {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} />
      </LogoContainer>
      <Line />
      <LinksBackground />
      <LinksContainer>
        <NavText>00 home</NavText>
        <NavText>01 destination</NavText>
        <NavText>02 crew</NavText>
        <NavText>03 technology</NavText>
      </LinksContainer>
    </Container>
  );
};

export default Header;
