import styled from "styled-components";
import { H1 as Title, H4 as Subtitle } from "components/headings";

const Container = styled.div`
  padding: 0 var(--padding-sm) calc(var(--padding-sm) * 3);
  display: grid;
  height: calc(100vh - 50px);
  align-items: center;
  justify-items: center;
  background-image: var(--bg-main-section);

  > * {
    z-index: 1;
  }

  @media screen and (min-width: 1025px) {
    padding: 0 var(--padding-lg);
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  ${Title} {
    text-align: center;

    @media screen and (min-width: 1025px) {
      align-self: end;
      width: auto;
      grid-row: 2;
    }
  }

  ${Subtitle} {
    text-align: center;
    color: var(--main-text);
    font-family: "Montserrat Alternates";
    line-height: 1.4rem;

    @media screen and (min-width: 1025px) {
      font-size: 0.8rem;
      text-align: center;
      width: 500px;
      justify-self: center;
      grid-row: 3;
      align-self: center;
      margin-bottom: 20px;
    }
  }
`;

const Illustration = styled.img`
  width: 70%;
  border-radius: 50%;
  border: 5px solid var(--main-text);
  box-shadow: 0px 0px 10px var(--main-text);

  @media screen and (min-width: 1025px) {
    border: 8px solid var(--main-text);
    width: 200px;
    margin-top: 60px;
    grid-row: 1;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1025px) {
    text-align: left;
    grid-row: 4;
    align-self: start;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
`;

export { Container, Title, Illustration, Subtitle, BtnWrapper };
