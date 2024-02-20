import styled from "styled-components";

export const CardContainer = styled.div`
  height: auto;
  border-radius: 5px;
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  color: white;
  width: calc(100vw - 20px);
  scroll-snap-align: start;

  @media screen and (min-width: 1025px) {
    height: 300px;
    width: auto;
  }
`;