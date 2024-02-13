import styled from "styled-components";

const Input = styled.input`
  color: var(--main-text);
  outline: none;
  background-color: #ffffff;
  border-width: 0 0 1px 0;
  padding: 15px 30px;

  font-family: "Montserrat";

  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;

  &:focus {
    border-bottom: 2px solid;
  }

  @media screen and (min-width: 1025px) {
    /* margin: 0;
    margin-right: 10px; */
  }
`;

export { Input };
