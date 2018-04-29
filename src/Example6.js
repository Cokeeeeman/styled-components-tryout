/**
 * Animation
 */
import React from "react";
import styled, { keyframes } from 'styled-components';

const swing = keyframes`
  0% {
    left: 0;
  }

  50% {
    left: 200px;
  }

  100% {
    left: 0px;
  }
`;

const Circle = ({ className }) => 
  <div className={className}></div>;

const StyleCircle = styled(Circle)`
  position: relative;
  color: palevioletred;
  animation: ${swing} 2s infinite;
  width: ${props => (props.radius + 'px') || '40px'};
  height: ${props => (props.radius + 'px') || '40px'};
  border: 2px solid palevioletred;
  border-radius: ${props => (props.radius + 'px') || '40px'};
`;

const Example6 = () =>
  <div>
    <StyleCircle radius={40} />
  </div>

export default Example6;