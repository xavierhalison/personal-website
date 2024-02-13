import styled from "styled-components";
import { H2 as Title } from "components/headings";
import { MainCTA } from "components/CTAs";

const Container = styled.div`
  height: 100vh;
  padding: var(--padding-sm);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;

  @media screen and (min-width: 1025px) {
    padding: 0 var(--padding-lg);
  }

  ${Title} {
    text-align: center;
    margin-bottom: 20px;
    align-self: center;

    @media screen and (min-width: 1025px) {
      font-size: 36px;
    }
  }

  ${MainCTA} {
    margin: 40px 0;
    @media screen and (min-width: 1025px) {
      align-self: center;
    }
  }
`;

const DropdownGrid = styled.div`
  display: grid;
`;

export { Container, DropdownGrid };
