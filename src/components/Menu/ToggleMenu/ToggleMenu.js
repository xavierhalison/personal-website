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
import { I18nContext } from "context/i18n";

// @todo: make accessible
// @todo: lock scroll when menu is open
// @todo: use smooth animations

export default function ToggleMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const { state, setState } = useContext(GlobalContext);

    const { i18n } = useContext(I18nContext);
    const { MENU } = i18n;

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
                            {MENU && MENU.map(({ NAME, ID }) => (
                                <ListItem key={ID} onClick={() => handleItemClick(ID)}>{NAME}</ListItem>
                            ))}
                        </PanelList>
                    </SidePanel>
                </>
            )}
        </ToggleMenuContainer>
    );
}
