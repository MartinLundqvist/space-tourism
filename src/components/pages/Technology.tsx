import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  HeadingThree,
  HeadingFour,
  HeadingFive,
  NavText,
  BodyText,
} from '../elements/Typography';
import desktopImg from '../../assets/technology/background-technology-desktop.jpg';
import tabletImg from '../../assets/technology/background-technology-tablet.jpg';
import mobileImg from '../../assets/technology/background-technology-mobile.jpg';
import { technology } from '../../data';
import {
  useDesktopQuery,
  useTabletQuery,
  useMobileQuery,
} from '../../utils/useDeviceSizes';
import {
  useRouteMatch,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  overflow-y: scroll;

  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  //Desktop
  background-image: url('${desktopImg}');

  &.tablet {
    background-image: url('${tabletImg}');
  }

  &.mobile {
    background-image: url('${mobileImg}');
  }
`;

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 100px 100px 1fr 5px 1fr 100px;
  grid-template-rows: 150px 50px 1fr 40px;
  grid-gap: 1rem;

  &.tablet {
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows:
      120px 50px minmax(200px, 1.1fr) 60px minmax(180px, 0.9fr)
      40px;
  }

  &.mobile {
    grid-template-columns: 20px 1fr 20px;
    grid-template-rows: 80px 50px minmax(200px, 1.1fr) 60px minmax(180px, 0.9fr) 40px;
  }
`;

const Title = styled.div`
  grid-column: 2 / 5;
  grid-row: 2 / 3;
  align-self: center;
  text-align: start;

  &.tablet {
    text-align: start;
  }

  &.mobile {
    text-align: start;
  }
`;

const TechNavigation = styled.div`
  grid-column: 2 / 3;
  grid-row: 3/ 4;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  justify-content: space-around;

  &.tablet {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    justify-content: space-evenly;
    flex-direction: row;
  }

  &.mobile {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    justify-content: space-evenly;
    flex-direction: row;
  }
`;

const InteractiveLink = styled(NavText)`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.white50};
  background-color: transparent;
  position: relative;
  font-size: 2rem;
  text-align: center;
  line-height: 80px;
  color: ${(props) => props.theme.colors.white};

  &.tablet {
    height: 58px;
    width: 58px;
    font-size: 1.5rem;
    line-height: 58px;
  }

  &.mobile {
    height: 40px;
    width: 40px;
    font-size: 1.2rem;
    line-height: 40px;
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.white};
  }

  &.active {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.dark};
  }
`;

const TechImage = styled.div`
  grid-column: 5 / 7;
  grid-row: 3 / 4;
  align-self: center;
  justify-self: end;

  img {
    max-width: 100%;
    height: auto;
  }

  &.tablet {
    grid-column: 1 / 5;
    grid-row: 3 / 4;
    display: flex;
    width: 100%;
    max-height: 90%;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  &.mobile {
    grid-column: 1 / 5;
    grid-row: 3 / 4;
    display: flex;
    width: 100%;
    max-height: 90%;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;

const TechDetails = styled.div`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  align-self: center;
  justify-self: center;
  /* margin-left: 2rem; */

  &.tablet {
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    text-align: center;
    margin-left: 0;
  }

  &.mobile {
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    text-align: center;
    margin-left: 0;
  }
`;

const Technology = (): JSX.Element => {
  const { path, url } = useRouteMatch();
  const isDesktop = useDesktopQuery();
  const isTablet = useTabletQuery();
  const isMobile = useMobileQuery();
  const [className, setClassName] = useState('');

  useEffect(() => {
    isDesktop && setClassName('');
    isTablet && setClassName('tablet');
    isMobile && setClassName('mobile');
  }, [isDesktop, isTablet, isMobile]);

  return (
    <Background className={className}>
      <Container className={className}>
        <Title className={className}>
          <HeadingFive className='span'>03</HeadingFive>
          {'  '}
          <HeadingFour className='span'>Space launch 101</HeadingFour>
        </Title>
        <TechNavigation className={className}>
          {technology.map((item, index) => (
            <InteractiveLink
              key={item.name}
              to={`${url}/technology${index}`}
              className={className}
            >
              {index + 1}
            </InteractiveLink>
          ))}
        </TechNavigation>
        <TechImage className={className}>
          <Switch>
            {technology.map((item, index) => (
              <Route
                key={item.images.portrait}
                path={`${url}/technology${index}`}
              >
                <img
                  src={isDesktop ? item.images.portrait : item.images.landscape}
                />
              </Route>
            ))}
            {/* This redirect could be anywhere... */}
            <Redirect from={`${url}/`} to={`${url}/technology0`} exact />
          </Switch>
        </TechImage>
        <TechDetails className={className}>
          <Switch>
            {technology.map((item, index) => (
              <Route key={item.name} path={`${url}/technology${index}`}>
                <React.Fragment>
                  <HeadingFive>The terminology...</HeadingFive>
                  <HeadingThree>{item.name}</HeadingThree>
                  <BodyText>{item.description}</BodyText>
                </React.Fragment>
              </Route>
            ))}
          </Switch>
        </TechDetails>
      </Container>
    </Background>
  );
};

export default Technology;
