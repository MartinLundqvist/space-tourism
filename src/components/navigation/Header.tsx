import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/shared/logo.svg';
import buttonOpen from '../../assets/shared/icon-hamburger.svg';
import buttonClose from '../../assets/shared/icon-close.svg';
import { NavText } from '../elements/Typography';
import routes from '../../contexts/Routes';
import { Desktop, Mobile, Tablet } from '../elements/Devices';

const Container = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 40px 60px 20px minmax(100px, 400px) 20px 40px auto 40px;
  top: 40px;
  width: 100vw;
  height: 64px;
  z-index: 2;

  &.mobile {
    grid-template-columns: 20px 60px auto 60px 20px;
    top: 0;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  grid-column: 2 / 3;
  justify-self: center;
  align-self: center;
  display: block;
  height: 48px;
  width: 48px;
  color: white;
  background-image: url('${logo}');
  background-repeat: no-repeat;
  background-size: cover;

  &.mobile {
    height: 40px;
    width: 40px;
  }
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
  margin-left: 10px;
  margin-right: 10px;
  position: relative;

  &.mobile {
    height: 48px;
    width: 100%;
    text-align: center;
  }

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

    &.mobile {
      &::after {
        width: 1px;
        height: 100%;
        right: 0px;
      }
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

    &.mobile {
      &::after {
        width: 1px;
        height: 100%;
        right: 0px;
      }
    }
  }
`;

const MenuButton = styled.div`
  grid-column: 4 / 5;
  justify-self: center;
  align-self: center;
  width: 28px;
  height: 24px;
  background-image: url('${buttonOpen}');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  z-index: 4;
  transition: all 0.2s ease-in-out;

  &.close {
    width: 24px;
    height: 24px;
    background-image: url('${buttonClose}');
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  right: 0;
  width: 254px;
  height: 100vh;
  backdrop-filter: blur(30px) saturate(125%);

  &.invisible {
    display: none;
  }
`;

const MenuLinksContainer = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: flex-start;
  row-gap: 20px;
`;

const Header = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClickHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <Desktop>
        <Container>
          <LogoContainer />
          <Line />
          <LinksBackground />
          <LinksContainer>
            {routes.map((route, index) => (
              <InteractiveLink
                exact={route.exact}
                key={route.page}
                to={route.path}
                activeClassName='active'
              >
                0{index} {route.page}
              </InteractiveLink>
            ))}
          </LinksContainer>
        </Container>
      </Desktop>
      <Tablet>
        <Container>
          <LogoContainer />
          <LinksBackground />
          <LinksContainer>
            {routes.map((route) => (
              <InteractiveLink
                exact={route.exact}
                key={route.page}
                to={route.path}
                activeClassName='active'
              >
                {route.page}
              </InteractiveLink>
            ))}
          </LinksContainer>
        </Container>
      </Tablet>
      <Mobile>
        <Container className='mobile'>
          <LogoContainer className='mobile' />
          <MenuButton
            className={menuOpen ? 'close' : ''}
            onClick={menuClickHandler}
          />
          <MenuContainer className={menuOpen ? '' : 'invisible'}>
            <MenuLinksContainer>
              {routes.map((route) => (
                <InteractiveLink
                  exact={route.exact}
                  key={route.page}
                  to={route.path}
                  activeClassName='active'
                  className='mobile'
                >
                  {route.page}
                </InteractiveLink>
              ))}
            </MenuLinksContainer>
          </MenuContainer>
        </Container>
      </Mobile>
    </React.Fragment>
  );
};

export default Header;
