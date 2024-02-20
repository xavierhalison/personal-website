import styled from "styled-components";

export const FeaturePageContainer = styled.div`
  height: 100vh;
  padding: var(--padding-sm);
  display: grid;
  justify-items: center;
  align-content: center;
  position: relative;

  @media screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    padding: 60px var(--padding-lg)
  }

  > h1 {
    @media screen and (min-width: 1025px) {
      grid-column: 1;
      grid-row: 1;
      align-self: flex-end;
    }
  }

  > button {
    @media screen and (min-width: 1025px) {
      grid-row: 3;
      grid-column: 1;
      align-self: flex-start;
      justify-self: flex-end;
    }
  }
`;

export const Illustration2 = styled.img`
  width: 100%;
  margin: 30px;

  @media screen and (min-width: 1025px) {
    width: 500px;
    align-self: flex-end;
    grid-row: 2;
    grid-column: 2;
    margin: 0;
  }
`;

export const FeatureList = styled.ul`
  padding: var(--padding-sm);
  margin: 10px 0;
  color: #000000;

  @media screen and (min-width: 1025px) {
    grid-column: 1;
    grid-row: 2;
    align-self: center;
  }

  li {
    margin: 10px 0;
  }
`;

