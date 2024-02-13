import styled, { css } from "styled-components";

import { H2 as Title } from "components/headings";

const Container = styled.div`
  height: auto;
  border-radius: 5px;
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > * {
  }

  @media screen and (min-width: 1025px) {
    padding: 60px 40px;

    max-height: 300px;
  }

  ${({ colorScheme }) => {
    const schemeVar =
      colorScheme === 1
        ? "--linear-gradient-2"
        : colorScheme === 2
        ? "--linear-gradient-3"
        : "--linear-gradient-4";

    return css`
      background-image: var(${schemeVar});
    `;
  }}

  ${Title} {
    color: var(--sub-text);
    margin-bottom: 15px;
    font-weight: 800;
    font-size: 20px;
    text-align: left;
  }
`;

const Text = styled.p`
  color: var(--sub-text);
  line-height: 22px;
`;

export { Container, Title, Text };
