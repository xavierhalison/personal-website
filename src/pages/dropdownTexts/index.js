import React, { useContext } from "react";

import { useState } from "react";

import { DropdownsPageContainer, DropdownGrid } from "./style";

import DropdownCard from "components/DropdownCard/DropdownCard";

import { GlobalContext as Context } from "global/context";
import { Title } from "components/Text/Text";
import { Button } from "components/Buttons/Buttons";
import { DropdownContext } from "context/dropdownCard";
import { I18nContext } from "context/i18n";

function CardSection() {
  const [expanded, setExpanded] = useState(1);

  const { state, setState } = useContext(Context);
  const { i18n } = useContext(I18nContext);

  return (
    <DropdownContext.Provider value={{ expanded, setExpanded }}>
      <DropdownsPageContainer id="dropdowns">
        <Title>{i18n.MORE.TITLE}</Title>
        <DropdownGrid>

          {i18n.MORE.LIST && i18n.MORE.LIST.map(({ TITLE, TEXT, ID }) => (
            <DropdownCard
              title={TITLE}
              id={ID}
            >
              {TEXT}
            </DropdownCard>
          ))}
        </DropdownGrid>
        <Button className="primary" onClick={() => setState({ ...state, activePage: "home" })}>{i18n.MORE.BUTTON}</Button>
      </DropdownsPageContainer>
    </DropdownContext.Provider>
  );
}

export default CardSection;
