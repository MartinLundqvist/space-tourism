import React from 'react';
import styled from 'styled-components';
import { BodyText } from '../elements/Typography';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 1rem;
  bottom: 0.2rem;
  text-align: center;
  font-family: 'Barlow', sans-serif;
  font-size: clamp(0.8rem, 1vw, 16px);
  color: ${(props) => props.theme.colors.blue};
  z-index: 2;

  a {
    color: ${(props) => props.theme.colors.blue};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const Footer = (): JSX.Element => {
  return (
    <Container>
      Built by{' '}
      <a href='https://martinlundqvist.se/' target='_blank'>
        Martin Lundqvist
      </a>
    </Container>
  );
};

export default Footer;
