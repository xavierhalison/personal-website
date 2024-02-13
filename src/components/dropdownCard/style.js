import styled from "styled-components";

const Container = styled.div`
  background-image: var(--linear-gradient-1);
  height: auto;
  border-radius: 15px;
  padding: 20px;
  position: relative;
  margin: 10px 0;

  .dropdown-icon {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  @media screen and (min-width: 1025px) {
  }
`;

const Text = styled.p`
  color: var(--main-text);
  margin-top: 5px;
`;

export { Container, Text };
