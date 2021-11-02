import React, { useEffect, useState } from 'react';
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
} from '../elements/Typography';
import desktopImg from '../../assets/destination/background-destination-desktop.jpg';
import tabletImg from '../../assets/destination/background-destination-tablet.jpg';
import mobileImg from '../../assets/destination/background-destination-mobile.jpg';
import { destinations } from '../../data';
import {
  useDesktopQuery,
  useTabletQuery,
  useMobileQuery,
} from '../../utils/useDeviceSizes';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';

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
  grid-template-columns: 100px 1fr 100px 1fr 100px;
  grid-template-rows: 150px 50px 50px 1fr 40px;
  grid-gap: 1rem;

  &.tablet {
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows: 120px 50px minmax(250px, 1fr) 50px minmax(250px, 1fr) 40px;
  }

  &.mobile {
    grid-template-columns: 20px 1fr 20px;
    grid-template-rows: 80px 50px minmax(250px, 1fr) 50px minmax(250px, 1fr) 40px;
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
  justify-content: space-around;

  &.tablet {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }

  &.mobile {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
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
  align-content: center;
  justify-content: center;
  display: flex;
  width: 100%;
  height: auto;

  img {
    max-height: 100%;
    max-width: 100%;
  }

  &.tablet {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    height: 100%;
    width: auto;
  }

  &.mobile {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    height: 100%;
    width: auto;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px 0px 20px 0px;
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
    grid-row: 5 / 6;
    text-align: center;
  }

  &.mobile {
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    text-align: center;
  }
`;

const DestinationDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;

  &.tablet {
    flex-direction: row;
  }

  &.mobile {
    flex-direction: column;
  }
`;

const DestinationDetailsTravel = styled.div`
  height: 100%;
  width: 100%;
`;

const DestinationDetailsDistance = styled.div`
  height: 100%;
  width: 100%;
`;

const Destinations = (): JSX.Element => {
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
          <HeadingFive className='span'>01</HeadingFive>
          {'  '}
          <HeadingFour className='span'>Pick your destination</HeadingFour>
        </Title>
        <DestinationNavigation className={className}>
          {destinations.map((destination, index) => (
            <InteractiveLink
              key={destination.name}
              to={`${url}/destination${index}`}
            >
              {destination.name}
            </InteractiveLink>
          ))}
        </DestinationNavigation>
        <DestinationImage className={className}>
          <Switch>
            {destinations.map((destination, index) => (
              <Route
                key={destination.images.png}
                path={`${url}/destination${index}`}
              >
                <img src={destination.images.png} />
              </Route>
            ))}
            {/* This redirect could be anywhere... */}
            <Redirect from={`${url}/`} to={`${url}/destination0`} exact />
          </Switch>
        </DestinationImage>
        <DestinationDetails className={className}>
          <Switch>
            {destinations.map((destination, index) => (
              <Route key={destination.name} path={`${url}/destination${index}`}>
                <React.Fragment>
                  <HeadingTwo>{destination.name}</HeadingTwo>
                  <BodyText>{destination.description}</BodyText>
                  <Line />
                  <DestinationDetailsContainer className={className}>
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
