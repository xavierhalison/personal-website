import { H1 as Title, H4 as Subtitle } from "components/headings";
import { MainCTA, SubCTA } from "components/CTAs";

import { Container, Illustration, BtnWrapper } from "./style";
import illUstration1 from "assets/images/illustration1.jpg";

import { useContext, useEffect } from "react";
import { LandingContext as Context } from "global/context";

function MainSection() {
  const { page, setPage } = useContext(Context);

  useEffect(() => {
    if (page === "inicio") console.log(page);
  }, [page]);

  return (
    <Container id="inicio">
      <Title gradient>
        Hi there!
        <br /> I'm Halison
      </Title>
      <Illustration src={illUstration1} alt="" />
      <Subtitle>
        I'm Frontend Software Engineer, Open Source Enthusiast, Web Crafter,
        Javascript Lover.
      </Subtitle>
      <BtnWrapper>
        <MainCTA onClick={() => setPage("features")}>My Skills</MainCTA>
        <SubCTA onClick={() => setPage("cards")}>My XP</SubCTA>
      </BtnWrapper>
    </Container>
  );
}

export default MainSection;
