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
} from '../elements/Typography';
import backgroundImg from '../../assets/home/background-home-desktop.jpg';

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
  background-image: url('${backgroundImg}');
`;

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 100px 1fr 1fr 100px;
  grid-template-rows: 300px auto 40px;
`;

const FirstSection = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: center;
`;

const SecondSection = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  align-self: center;
  justify-self: center;
`;

const Button = styled.button`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  text-transform: uppercase;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 32px;
  border: none;
  box-sizing: content-box;
  outline: solid 0px black;
  transition: outline 0.3s ease-in-out;

  &:hover {
    outline-width: 50px;
  }
`;

const Home = (): JSX.Element => {
  return (
    <Background>
      <Container>
        <FirstSection>
          <HeadingFive>So, you want to travel to</HeadingFive>
          <HeadingOne>Space</HeadingOne>
          <BodyText>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </BodyText>
        </FirstSection>
        <SecondSection>
          <Button>Explore</Button>
        </SecondSection>
      </Container>
    </Background>
  );
};

export default Home;
