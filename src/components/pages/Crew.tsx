import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  HeadingThree,
  HeadingFour,
  HeadingFive,
  BodyText,
} from '../elements/Typography';
import desktopImg from '../../assets/crew/background-crew-desktop.jpg';
import tabletImg from '../../assets/crew/background-crew-tablet.jpg';
import mobileImg from '../../assets/crew/background-crew-mobile.jpg';
import { crew } from '../../data';
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
  grid-template-columns: 100px 1fr 5px 1fr 100px;
  grid-template-rows: 150px 50px 1fr 50px 40px;

  &.tablet {
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows: 120px 50px minmax(0, 0.8fr) 50px minmax(0, 1.2fr) 40px;
  }

  &.mobile {
    grid-template-columns: 20px 1fr 20px;
    grid-template-rows: 80px 50px minmax(0, 0.8fr) 50px minmax(0, 1.2fr) 40px;
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

const CrewNavigation = styled.div`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  justify-content: flex-start;

  &.tablet {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    justify-content: center;
  }

  &.mobile {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    justify-content: center;
  }
`;

const InteractiveLink = styled(NavLink)`
  height: 15px;
  width: 15px;
  margin: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
  opacity: 0.17;

  &.tablet {
    height: 10px;
    width: 10px;
  }

  &.mobile {
    height: 10px;
    width: 10px;
  }

  &:hover {
    opacity: 0.5;
  }

  &.active {
    opacity: 1;
  }
`;

const CrewImage = styled.div`
  grid-column: 4 / 5;
  grid-row: 2 / 5;
  align-self: end;
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
    grid-row: 5 / 6;
    height: 100%;
    width: auto;
  }

  &.mobile {
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    height: 100%;
    width: auto;
  }
`;

const CrewDetails = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  align-self: center;
  justify-self: center;

  &.tablet {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    text-align: center;
  }

  &.mobile {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    text-align: center;
  }
`;

const Crew = (): JSX.Element => {
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
          <HeadingFive className='span'>02</HeadingFive>
          {'  '}
          <HeadingFour className='span'>Meet your crew</HeadingFour>
        </Title>
        <CrewNavigation className={className}>
          {crew.map((member, index) => (
            <InteractiveLink
              key={member.name}
              to={`${url}/crew${index}`}
              className={className}
            />
          ))}
        </CrewNavigation>
        <CrewImage className={className}>
          <Switch>
            {crew.map((member, index) => (
              <Route key={member.images.png} path={`${url}/crew${index}`}>
                <img src={member.images.png} />
              </Route>
            ))}
            {/* This redirect could be anywhere... */}
            <Redirect from={`${url}/`} to={`${url}/crew0`} exact />
          </Switch>
        </CrewImage>
        <CrewDetails className={className}>
          <Switch>
            {crew.map((member, index) => (
              <Route key={member.name} path={`${url}/crew${index}`}>
                <React.Fragment>
                  <HeadingFive>{member.role}</HeadingFive>
                  <HeadingThree>{member.name}</HeadingThree>
                  <BodyText>{member.bio}</BodyText>
                </React.Fragment>
              </Route>
            ))}
          </Switch>
        </CrewDetails>
      </Container>
    </Background>
  );
};

export default Crew;
