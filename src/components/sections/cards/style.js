import styled from "styled-components";
import { H2 as Title } from "components/headings";

const Container = styled.div`
  background-image: var(--linear-gradient-5);
  height: auto;
  padding: var(--padding-sm);
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  position: relative;

  @media screen and (min-width: 1025px) {
    padding: 0 var(--padding-lg);
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    height: 100vh;
  }

  ${Title} {
    text-align: center;
    margin-bottom: 20px;
    grid-row: 1;
    align-self: end;

    @media screen and (min-width: 1025px) {
      grid-column: 1 / 4;
      font-size: 36px;
    }
  }
`;

export { Container };
