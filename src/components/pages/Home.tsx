import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HeadingOne, HeadingFive, BodyText } from '../elements/Typography';
import desktopImg from '../../assets/home/background-home-desktop.jpg';
import tabletImg from '../../assets/home/background-home-tablet.jpg';
import mobileImg from '../../assets/home/background-home-mobile.jpg';
import { Link } from 'react-router-dom';
import {
  useDesktopQuery,
  useTabletQuery,
  useMobileQuery,
} from '../../utils/useDeviceSizes';

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
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 100px 1fr 1fr 100px;
  grid-template-rows: 300px auto 40px;

  &.tablet {
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows: 120px auto auto 40px;
  }

  &.mobile {
    grid-template-columns: 20px 1fr 20px;
    grid-template-rows: 80px auto auto 40px;
  }
`;

const FirstSection = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: center;

  &.tablet {
    text-align: center;
  }

  &.mobile {
    text-align: center;
  }
`;

const SecondSection = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
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

const Button = styled.button`
  height: 274px;
  width: 274px;
  border-radius: 50%;
  text-transform: uppercase;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(1rem, 5vw, 32px);
  border: none;
  box-sizing: content-box;
  outline: solid 0px black;
  transition: outline 0.3s ease-in-out;

  &.tablet {
    height: 242px;
    width: 242px;
  }

  &.mobile {
    height: 150px;
    width: 150px;
  }

  &:hover {
    outline-width: 88px;
    cursor: pointer;

    &.tablet {
      outline-width: 44px;
    }
    &.mobile {
      outline-width: 22px;
    }
  }
`;

const Home = (): JSX.Element => {
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
        <FirstSection className={className}>
          <HeadingFive>So, you want to travel to</HeadingFive>
          <HeadingOne>Space</HeadingOne>
          <BodyText>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </BodyText>
        </FirstSection>
        <SecondSection className={className}>
          <Link to='/destinations'>
            <Button className={className}>Explore</Button>
          </Link>
        </SecondSection>
      </Container>
    </Background>
  );
};

export default Home;
