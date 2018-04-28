/**
 * Basic example
 */
import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Example0 = () => 
  <Wrapper>
    <Title>This is my first styled component!</Title>
  </Wrapper>

export default Example0;