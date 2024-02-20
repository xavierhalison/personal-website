import styled from "styled-components";

export const Button = styled.button`
  background-size: 230%;
  padding: 15px 30px;
  border: none;
  font-family: "Montserrat";

  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  margin: 5px 0;
  width: 240px;
  max-height: 70px;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 3px #000000;
  }

  @media screen and (min-width: 1025px) {
    margin: 0;
    margin-right: 10px;
  }

  &.primary {
    color: #ffffff;
    background-color: #000000;
  }

  &.secondary {
    font-weight: 500;
    background-color: #ffffff;
    color: #000000;
    border: 1px solid;
  }
`;
