import React, { useContext } from "react";

import { GlobalContext as Context } from "global/context";

import { Title, Subtitle } from "components/Text/Text";
import { Button } from "components/Buttons/Buttons";

import { Illustration, ButtonWrapper, SocialMediaWrapper, MainPageContainer } from "./style";

import illUstration1 from "assets/images/illustration1.jpg";

import { Linkedin, GitHub } from "react-feather";

function MainSection() {
  const { state, setState } = useContext(Context);

  const handleButtonClick = (id) => {
    setState({ ...state, activePage: id });
  }

  return (
    <MainPageContainer id="inicio">
      <Title>
        Hi there!
        <br /> I'm Halison
      </Title>
      <Illustration src={illUstration1} alt="" />
      <Subtitle>
        I'm Frontend Software Engineer, Open Source Enthusiast, Web Crafter,
        Javascript Lover.
      </Subtitle>
      <ButtonWrapper>
        <Button className="primary" onClick={() => handleButtonClick("features")}>My Skills</Button>
        <Button className="secondary" onClick={() => handleButtonClick("cards")}>My XP</Button>
      </ButtonWrapper>
      <SocialMediaWrapper>
        <Linkedin className="social-media-icon" width={50} height={50} />
        <GitHub className="social-media-icon" width={50} height={50} />
      </SocialMediaWrapper>
    </MainPageContainer>
  );
}

export default MainSection;
