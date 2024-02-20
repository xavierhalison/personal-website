import styled from "styled-components";

export const ToggleMenuContainer = styled.div`
  @media screen and (min-width: 1025px){
    display: none;
  }
`;

export const MenuButton = styled.button`
  position: fixed;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  z-index: 4;
`;

export const SidePanel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  width: 80%;
  height: 100vh;
  z-index: 3;
  padding-top: 80px;
`;

export const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 50%);
  width: 100%;
  height: 100vh;
  z-index: 2;
`;

export const PanelList = styled.ul`
  margin-left: 10px;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
`;