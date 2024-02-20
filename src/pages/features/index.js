import React from "react";

import { FeaturePageContainer, Illustration2, FeatureList } from "./style";

import illUstration2 from "assets/images/illustration2.svg";

import { useContext } from "react";
import { GlobalContext as Context } from "global/context";
import { Text, Title } from "components/Text/Text";
import { Button } from "components/Buttons/Buttons";
import { I18nContext } from "context/i18n";

function Features() {
  const { state, setState } = useContext(Context);
  const { i18n } = useContext(I18nContext);

  const handleButtonClick = (id) => {
    setState({ ...state, activePage: id });
  }

  return (
    <FeaturePageContainer id="features">
      <Title>{i18n.SKILLS.TITLE}</Title>

      <Illustration2 src={illUstration2} alt="" />

      <FeatureList>
        {i18n.SKILLS.LIST && i18n.SKILLS.LIST.map(({ ID, TEXT }) => (
          <li key={ID}>
            <Text>{TEXT}</Text>
          </li>
        ))}
      </FeatureList>

      <Button className="primary" onClick={() => handleButtonClick("cards")}>{i18n.SKILLS.BUTTON}</Button>

    </FeaturePageContainer>
  );
}

export default Features;
