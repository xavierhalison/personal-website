import styled from "styled-components";

export const DropdownsPageContainer = styled.div`
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
`;

export const DropdownGrid = styled.div`
  display: grid;
`;
