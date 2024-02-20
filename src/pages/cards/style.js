import styled from "styled-components";

export const CardPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 10px;
  justify-content: center;
  min-height: 100%;
  align-items: center;

  @media screen and (min-width: 1025px) {
    height: auto;
    padding: 60px 300px;
  }

  > h1 {
    text-align: center;
  }

  > .card-wrapper {
    margin: 40px 0;
  }
`;
