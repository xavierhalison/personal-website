import styled, { css } from "styled-components";

export const DropdownCardContainer = styled.div`
  border: 1px solid;
  height: auto;
  border-radius: 15px;
  padding: 20px;
  position: relative;
  margin: 10px 0;

  > h4 {
    ${({ $expanded }) =>
    $expanded
      ? css`
            margin-bottom: 20px;
          `
      : css`
            margin-bottom: 0;
          `}
  }

  .dropdown-icon {
    position: absolute;
    right: 20px;
    top: 18px;
  }

  @media screen and (min-width: 1025px) {
  }
`;
