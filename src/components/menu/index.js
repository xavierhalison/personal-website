import {
  Container,
  SuspensePanel,
  MenuList,
  ListItem,
  PanelShadow,
} from "./style";

import { H3 as Brand } from "components/headings";

import ReactLogo from "components/animations/reactlogo";

import { Menu as MenuIcon } from "react-feather";

import { useState, useEffect } from "react";

function Menu({ sections }) {
  const [visible, toggle] = useState(false);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";
  }, [visible]);

  function scrollTo(id) {
    const div = document.querySelector(`#${id}`);
    div.scrollIntoView({ block: "center" });
    toggle(false);
  }

  return (
    <Container menuVisible={visible}>
      <MenuIcon className="menu-icon" onClick={() => toggle(!visible)}>
        Menu
      </MenuIcon>
      {/* <Brand gradient>Halison</Brand> */}
      <ReactLogo className="react-logo" />
      {visible && <PanelShadow />}
      <SuspensePanel visible={visible}>
        <MenuList>
          {sections &&
            sections.map(({ name, id }, key) => (
              <ListItem key={key} onClick={() => scrollTo(id)}>
                {name}
              </ListItem>
            ))}
        </MenuList>
      </SuspensePanel>
    </Container>
  );
}

export default Menu;
