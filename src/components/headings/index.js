import styled, { css } from "styled-components";

const Heading = (gradient) =>
  gradient
    ? css`
        background: var(--headings);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 220%;
        background-position: revert;
      `
    : css`
        color: var(--main-text);
      `;

const H1 = styled.h1`
  font-family: "Montserrat Alternates";
  font-size: 2rem;
  ${({ gradient }) => Heading(gradient)}
`;

const H2 = styled.h2`
  ${({ gradient }) => Heading(gradient)}
`;

const H3 = styled.h3`
  ${({ gradient }) => Heading(gradient)}
`;

const H4 = styled.h4`
  ${({ gradient }) => Heading(gradient)}
`;

const H5 = styled.h5`
  ${({ gradient }) => Heading(gradient)}
`;

const H6 = styled.h6`
  ${({ gradient }) => Heading(gradient)}
`;

export { H1, H2, H3, H4, H5, H6 };
