import { GlobalStyle } from "global/style";
import Menu from "components/menu";
import { Container } from "./style";

import { useContext, useEffect } from "react";
import { LandingContext as Context } from "global/context";

function Layout({ children }) {
  const { globalState, setGlobalState } = useContext(Context);

  const sections = [
    { name: "my Skills", id: "features" },
    { name: "my XP", id: "cards" },
    { name: "more", id: "dropdowns" },
    { name: "contact", id: "footer" },
  ];

  useEffect(() => {
    setGlobalState({ ...globalState, sections });
  });

  return (
    <>
      <GlobalStyle />
      <Container>
        <Menu sections={sections} />
        {children}
      </Container>
    </>
  );
}

export default Layout;
