import React, { useContext } from "react";

import { CardPageContainer } from "./style";

import Card from "components/Card/Card";
import { Title } from "components/Text/Text";
import CardWrapper from "components/CardWrapper/CardWrapper";
import { Button } from "components/Buttons/Buttons";

import { GlobalContext as Context } from "global/context";
import { I18nContext } from "context/i18n";


export default function CardSection() {
  const { state, setState } = useContext(Context);
  const { i18n } = useContext(I18nContext);

  return (
    <CardPageContainer id="cards">
      <Title>{i18n.XP.TITLE}</Title>
      <CardWrapper>
        {i18n.XP.LIST && i18n.XP.LIST.map(({ TITLE, TEXT, ID }) => (
          <Card
            title={TITLE}
            text={TEXT}
            key={ID}
          />
        ))}
      </CardWrapper>
      <Button className="primary" onClick={() => setState({ ...state, activePage: "dropdowns" })}>{i18n.XP.BUTTON}</Button>
    </CardPageContainer>
  );
}
