import { MainCTA } from "components/CTAs";
import { H2 as Title } from "components/headings";

import { TopTilt, TopWaveOpaque2 } from "components/dividers";

import { Container, Illustration2, FeatureList } from "./style";

import illUstration2 from "assets/images/illustration2.svg";

import { useContext } from "react";
import { LandingContext as Context } from "global/context";

function Features() {
  const { setPage } = useContext(Context);

  return (
    <Container id="features">
      <TopTilt />
      <Title gradient>These are some of my skills:</Title>
      <Illustration2 src={illUstration2} alt="" />
      <FeatureList>
        <li>ES6+ Javascript and React</li>
        <li>Building complex layouts with CSS3 and HTML5</li>
        <li>
          Modern frameworks such as Next.js and Libs such as Styled Components
        </li>
        <li>Typescript</li>
      </FeatureList>
      <MainCTA onClick={() => setPage("cards")}>My XP</MainCTA>
      <TopWaveOpaque2 />
    </Container>
  );
}

export default Features;
