import React from "react";

import { FeaturePageContainer, Illustration2, FeatureList } from "./style";

import illUstration2 from "assets/images/illustration2.svg";

import { useContext } from "react";
import { GlobalContext as Context } from "global/context";
import { Text, Title } from "components/Text/Text";
import { Button } from "components/Buttons/Buttons";

function Features() {
  const { state, setState } = useContext(Context);

  const handleButtonClick = (id) => {
    setState({ ...state, activePage: id });
  }

  return (
    <FeaturePageContainer id="features">
      <Title>These are some of my skills:</Title>

      <Illustration2 src={illUstration2} alt="" />

      <FeatureList>
        <li>
          <Text>ES6+ Javascript and React</Text>
        </li>
        <li>
          <Text>
            Building complex layouts with CSS3 and HTML5
          </Text>
        </li>
        <li>
          <Text>
            Modern frameworks such as Next.js and Libs such as Styled Components
          </Text>
        </li>
        <li>
          <Text>
            Typescript
          </Text>
        </li>
      </FeatureList>

      <Button className="primary" onClick={() => handleButtonClick("cards")}>My XP</Button>

    </FeaturePageContainer>
  );
}

export default Features;
