/**
 * Style your own component;
 * Note that in order to make it work, your component
 * must pass className down and all the way to DOM
 */
import React from "react";
import styled from 'styled-components';

const Link = ({ className, children })=> 
    <a className={className} href="#">{ children }</a>;

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  font-size: 1em;
  margin: .5em;
`;

const Example3 = () =>
  <div>
    <StyledLink>Home</StyledLink>
    <StyledLink>About</StyledLink>
    <StyledLink>Contact</StyledLink>
  </div>

export default Example3;