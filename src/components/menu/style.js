import styled, { css, keyframes } from "styled-components";
import { H3 } from "components/headings";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat Alternates";
  position: relative;
  z-index: 2;

  color: var(--main-text);
  padding: 0 var(--padding-sm);

  @media screen and (min-width: 1025px) {
    justify-content: space-between;
    padding: 0 var(--padding-lg);
  }

  > .react-logo {
    width: 40px;
    animation: ${rotate} 20s linear infinite;

    > g {
      fill: var(--main-text);
    }
  }

  > .menu-icon {
    position: absolute;
    left: var(--padding-sm);

    transition: transform 0.3s;
    transform: ${({ menuVisible }) =>
      menuVisible ? "rotate(180deg)" : "rotate(0)"};

    @media screen and (min-width: 1025px) {
      display: none;
    }
  }
`;

const Brand = styled(H3)`
  margin-right: 10px;
`;

const SuspensePanel = styled.div`
  ${({ visible }) => css`
    position: absolute;
    top: 50px;
    width: 80%;
    height: calc(100vh - 50px);

    background-image: var(--linear-gradient-1);
    padding: 10px var(--padding-sm);

    @media screen and (max-width: 1024px) {
      transition: left 0.3s;
      left: ${visible ? "0" : "-80%"};
    }

    @media screen and (min-width: 1025px) {
      position: relative;
      top: 0;
      background: none;
      display: block;
      height: auto;
    }
  `}
`;

const PanelShadow = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: calc(100vh - 50px);
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const MenuList = styled.ul`
  list-style: none;

  @media screen and (min-width: 1025px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const ListItem = styled.li`
  padding: 10px 0;
  cursor: pointer;

  @media screen and (min-width: 1025px) {
    margin-left: 20px;
  }

  &:hover {
    font-weight: 600;

    @media screen and (min-width: 1025px) {
      background-image: var(--linear-gradient-2);
      background: none;
      font-weight: unset;
      background: var(--headings);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export { Container, Brand, SuspensePanel, MenuList, ListItem, PanelShadow };
