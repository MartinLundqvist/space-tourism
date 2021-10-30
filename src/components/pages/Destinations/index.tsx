import React from 'react';
import styled from 'styled-components';
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  SubHeadingOne,
  SubHeadingTwo,
  NavText,
  BodyText,
} from '../../elements/Typography';
import desktopImg from '../../../assets/destination/background-destination-desktop.jpg';
import tabletImg from '../../../assets/destination/background-destination-tablet.jpg';
import mobileImg from '../../../assets/destination/background-destination-mobile.jpg';
import destinations from './destinations';

import moonImg from '../../../assets/destination/image-moon.png';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

const Background = styled.div`
  position: absolute;
  /* display: flex; */
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  background-position: center;
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
  grid-template-columns: 100px 1fr 100px 1fr 100px;
  grid-template-rows: 150px 50px 50px auto 40px;

  &.tablet {
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows: 120px auto auto 40px;
  }

  &.mobile {
    grid-template-columns: 20px 1fr 20px;
    grid-template-rows: 80px auto auto 40px;
  }
`;

const Title = styled.div`
  grid-column: 2 / 5;
  grid-row: 2 / 3;
  align-self: center;
  text-align: start;

  &.tablet {
    text-align: center;
  }

  &.mobile {
    text-align: center;
  }
`;

const DestinationNavigation = styled.div`
  grid-column: 4 / 5;
  grid-row: 3 / 4;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  justify-content: space-between;

  &.tablet {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }

  &.mobile {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`;

const InteractiveLink = styled(NavText)`
  height: 100%;
  line-height: 64px;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;

  &.mobile {
    height: 64px;
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

const DestinationImage = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 5;
  align-self: center;
  justify-self: center;

  img {
    width: 100%;
    height: auto;
  }

  &.tablet {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }

  &.mobile {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.blue};
  opacity: 0.25;
`;

const DestinationDetails = styled.div`
  grid-column: 4 / 5;
  grid-row: 4 / 5;
  align-self: center;
  justify-self: center;

  &.tablet {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }

  &.mobile {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`;

const DestinationDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DestinationDetailsTravel = styled.div`
  grid-column: 2 / 3;
`;

const DestinationDetailsDistance = styled.div`
  grid-column: 1 / 2;
`;

const Destinations = (): JSX.Element => {
  const { path, url } = useRouteMatch();

  return (
    <Background>
      <Container>
        <Title>
          <HeadingFive className='span'>01</HeadingFive>
          {'  '}
          <HeadingFour className='span'>Pick your destination</HeadingFour>
        </Title>
        <DestinationNavigation>
          {destinations.map((destination, index) => (
            <InteractiveLink
              key={destination.name}
              to={`${url}${destination.path}`}
            >
              {destination.name}
            </InteractiveLink>
          ))}
        </DestinationNavigation>
        <DestinationImage>
          <Switch>
            {destinations.map((destination) => (
              <Route key={destination.image} path={`${url}${destination.path}`}>
                <img src={destination.image} />
              </Route>
            ))}
          </Switch>
        </DestinationImage>
        <DestinationDetails>
          <Switch>
            {destinations.map((destination) => (
              <Route key={destination.name} path={`${url}${destination.path}`}>
                <React.Fragment>
                  <HeadingTwo>{destination.name}</HeadingTwo>
                  <BodyText>{destination.description}</BodyText>
                  <Line />
                  <DestinationDetailsContainer>
                    <DestinationDetailsDistance>
                      <SubHeadingTwo>Avg. distance</SubHeadingTwo>
                      <SubHeadingOne>{destination.distance}</SubHeadingOne>
                    </DestinationDetailsDistance>
                    <DestinationDetailsTravel>
                      <SubHeadingTwo>Est. travel time</SubHeadingTwo>
                      <SubHeadingOne>{destination.travel}</SubHeadingOne>
                    </DestinationDetailsTravel>
                  </DestinationDetailsContainer>
                </React.Fragment>
              </Route>
            ))}
          </Switch>
        </DestinationDetails>
      </Container>
    </Background>
  );
};

export default Destinations;
