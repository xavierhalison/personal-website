import React, { useContext } from "react";

import {
  NavbarMenuContainer,
  MenuList,
  ListItem,
} from "./NavbarMenu.style";

import { GlobalContext } from "global/context";

export default function NavbarMenu() {
  const { state, setState } = useContext(GlobalContext);
  const { pages } = state;

  const handleItemClick = (id) => {
    setState({ ...state, activePage: id });
  }

  return (
    <NavbarMenuContainer>
      <MenuList>
        {pages &&
          pages.map(({ name, id }) => (
            <ListItem key={id} onClick={() => handleItemClick(id)}>
              {name}
            </ListItem>
          ))}
      </MenuList>
    </NavbarMenuContainer>
  );
}
