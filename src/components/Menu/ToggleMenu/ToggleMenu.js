import React, { useContext, useState } from "react";
import { X as Close, Menu } from "react-feather";

import { GlobalContext } from "global/context";

import {
    ToggleMenuContainer,
    ListItem,
    MenuButton,
    PanelList,
    Shadow,
    SidePanel
} from "./ToggleMenu.style";

// @todo: make accessible
// @todo: lock scroll when menu is open
// @todo: use smooth animations

export default function ToggleMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const { state, setState } = useContext(GlobalContext);
    const { pages } = state;

    const handleItemClick = (id) => {
        setState({ ...state, activePage: id });
        setIsOpen(false);
    }

    return (
        <ToggleMenuContainer>
            <MenuButton type="button" onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? <Menu /> : <Close />}
            </MenuButton>
            {isOpen && (
                <>
                    <Shadow />
                    <SidePanel>
                        <PanelList>
                            {pages && pages.map(({ name, id }) => (
                                <ListItem key={id} onClick={() => handleItemClick(id)}>{name}</ListItem>
                            ))}
                        </PanelList>
                    </SidePanel>
                </>
            )}
        </ToggleMenuContainer>
    );
}
