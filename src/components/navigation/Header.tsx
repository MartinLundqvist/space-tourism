import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/shared/logo.svg';
import { NavText } from '../elements/Typography';
import routes from '../../contexts/Routes';
import { Link } from 'react-router-dom';

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
  opacity: 0.25;
  z-index: 3;
`;

const LinksBackground = styled.div`
  grid-column: 5 / 9;
  grid-row: 1;
  width: 100%;
  backdrop-filter: blur(30px) saturate(125%);
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

const InteractiveLink = styled(NavText)`
  height: 100%;
  line-height: 64px;
  position: relative;

  &:hover {
    &::after {
      content: '';
      /* display: block; */
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 100%;
      height: 1px;
      opacity: 0.5;
      background-color: ${(props) => props.theme.colors.blue};
      transition: all 0.2s ease-in-out;
    }
  }

  &.active {
    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 100%;
      height: 1px;
      opacity: 1;
      background-color: ${(props) => props.theme.colors.white};
      transition: all 0.2s ease-in-out;
    }
  }
`;

const Header = (): JSX.Element => {
  const [activePage, setActivePage] = useState(0);

  return (
    <Container>
      <LogoContainer>
        <img src={logo} />
      </LogoContainer>
      <Line />
      <LinksBackground />
      <LinksContainer>
        {routes.map((route, index) => (
          // <Link key={index} to={route.path}>
          <InteractiveLink key={route.page} to={route.path}>
            {route.page}
          </InteractiveLink>
          // </Link>
        ))}
      </LinksContainer>
    </Container>
  );
};

export default Header;
