import styled from "styled-components";

export const NavbarMenuContainer = styled.div`
  font-family: "Montserrat Alternates";
  position: absolute;
  width: 100%;
  z-index: 2;
  background-color: var(--background);
  justify-content: space-between;
  box-shadow: 1px 1px 5px #000;
  display: none;

  /* @todo: media query breakpoints can be css variables */
  @media screen and (min-width: 1025px){
    display: block;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const ListItem = styled.li`
  padding: 10px 0;
  cursor: pointer;

  margin-right: 20px;
`;
