/**
 * Styled components will pass all props to DOM
 */
import React from "react";
import styled from 'styled-components';

const Input = styled.input`
  padding: .5em;
  margin: .5em;
  color: palevioletred;
  background: papayawhip;
  border: 1px solid black;
  border-radius: 3px;
`;

const Example1 = () =>
  <div>
    <Input placeholder="this is placeholder" type="text" />
    <Input value="this is actual value" type="text" />
  </div>

export default Example1;