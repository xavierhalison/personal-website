import styled from "styled-components";
import { H2 as Title } from "components/headings";
import { MainCTA } from "components/CTAs";

const Container = styled.div`
  height: 100vh;
  padding: var(--padding-sm);
  display: grid;
  justify-items: center;
  align-content: center;
  position: relative;

  @media screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 0.5fr 1fr;
    align-items: center;
    padding: 0 var(--padding-lg);
  }

  ${MainCTA} {
    @media screen and (min-width: 1025px) {
      grid-column: 2;
      grid-row: 3;
      align-self: start;
      justify-self: center;
    }
  }

  ${Title} {
    text-align: center;
    font-family: "Montserrat";

    @media screen and (min-width: 1025px) {
      /* text-align: left; */
      grid-column: 1 / 2;
      grid-row: 1;
      font-size: 36px;
      align-self: end;
      margin-bottom: 40px;
    }
  }
`;

const Illustration2 = styled.img`
  width: 100%;
  margin: 30px 0;

  @media screen and (min-width: 1025px) {
    width: 500px;
    align-self: center;
    grid-row: 1/3;
    grid-column: 2/3;
    /* margin-top: 40px; */
    margin: 0;
  }
`;

const FeatureList = styled.ul`
  padding: var(--padding-sm);
  margin: 10px 0;
  color: var(--main-text);

  @media screen and (min-width: 1025px) {
    grid-column: 1;
    grid-row: 2 / 3;
    justify-self: baseline;
    align-self: center;
  }

  li {
    margin: 10px 0;
  }
`;

export { Container, FeatureList, Illustration2 };
