import React from "react";

import { GlobalStyle } from "global/style";

import Menu from "components/Menu/Menu";

import { LayoutContainer } from "./Layout.style";


export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <LayoutContainer>
        <Menu />
        {children}
      </LayoutContainer>
    </>
  );
}
