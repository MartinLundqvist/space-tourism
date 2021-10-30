import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

//Typography
const HeadingOne = styled.h1`
  font-family: 'Bellefair', serif;
  font-size: 150px;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  font-weight: 400;
`;

const HeadingTwo = styled.h2`
  font-family: 'Bellefair', serif;
  font-size: 100px;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  font-weight: 400;
`;

const HeadingThree = styled.h3`
  font-family: 'Bellefair', serif;
  font-size: 56px;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  font-weight: 400;
`;

const HeadingFour = styled.h4`
  font-family: 'Bellefair', serif;
  font-size: 32px;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  font-weight: 400;
`;

const HeadingFive = styled.h5`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 28px;
  color: ${(props) => props.theme.colors.blue};
  letter-spacing: 4.75px;
  text-transform: uppercase;
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
`;

const SubHeadingOne = styled.h6`
  font-family: 'Bellefair', serif;
  font-size: 28px;
  color: ${(props) => props.theme.colors.white};
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  font-weight: 400;
`;

const SubHeadingTwo = styled.h6`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 2.35px;
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
`;

const NavText = styled(NavLink)`
  display: block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 2.7px;
  text-transform: uppercase;
  text-decoration: none;
`;

const BodyText = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
`;

export {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  SubHeadingOne,
  SubHeadingTwo,
  NavText,
  BodyText,
};
