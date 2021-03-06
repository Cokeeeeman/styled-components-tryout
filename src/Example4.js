/**
 * Extend styles
 */
import React from "react";
import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = Button.extend`
  color: tomato;
  border-color: tomato;
`;

const Example4 = () =>
  <div>
    <Button>Normal</Button>
    <TomatoButton>Tomato</TomatoButton>
  </div>

export default Example4;