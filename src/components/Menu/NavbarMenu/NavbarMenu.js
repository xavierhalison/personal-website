import React, { useContext } from "react";

import {
  NavbarMenuContainer,
  MenuList,
  ListItem,
} from "./NavbarMenu.style";

import { GlobalContext } from "global/context";
import { I18nContext } from "context/i18n";

export default function NavbarMenu() {
  const { state, setState } = useContext(GlobalContext);
  const { i18n } = useContext(I18nContext)

  const { MENU } = i18n;

  const handleItemClick = (id) => {
    setState({ ...state, activePage: id });
  }

  return (
    <NavbarMenuContainer>
      <MenuList>
        {MENU &&
          MENU.map(({ NAME, ID }) => (
            <ListItem key={ID} onClick={() => handleItemClick(ID)}>
              {NAME}
            </ListItem>
          ))}
      </MenuList>
    </NavbarMenuContainer>
  );
}
