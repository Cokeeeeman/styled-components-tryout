import styled from "styled-components";

const Button = styled.button`
  border-radius: 2px;
  padding: 5px 10px;
  margin: 10px;
  background: white;
  border: 2px solid black;
  font-size: 16px;

  ${props =>
    props.primary &&
    `
    background: #54b9f8;
    border: 2px solid #0a9bf5;
    color: white;
  `};
`;

export default Button;