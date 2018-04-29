/**
 * Attach additional props, use `attrs` constructor;
 */
import React from "react";
import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'password',
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

const Example5 = () =>
  <div>
    <Input
      placeholder="A small password input"
      size="1em"
    />
    <Input
      placeholder="A big password input"
      size="2em"
    />
  </div>

export default Example5;