import React, { useContext } from "react";

import { GlobalContext as Context } from "global/context";

import { Title, Subtitle } from "components/Text/Text";
import { Button } from "components/Buttons/Buttons";

import { Illustration, ButtonWrapper, SocialMediaWrapper, MainPageContainer } from "./style";

import illUstration1 from "assets/images/illustration1.jpg";

import { Linkedin, GitHub } from "react-feather";
import { I18nContext } from "context/i18n";

function MainSection() {
  const { state, setState } = useContext(Context);
  const { i18n } = useContext(I18nContext);

  const handleButtonClick = (id) => {
    setState({ ...state, activePage: id });
  }

  return (
    <MainPageContainer id="inicio">
      <Title>
        {i18n.MAIN_PAGE.GREETING}
        <br /> {i18n.MAIN_PAGE.INTRODUCTION}
      </Title>
      <Illustration src={illUstration1} alt="" />
      <Subtitle>
        {i18n.MAIN_PAGE.SUBTITLE}
      </Subtitle>
      <ButtonWrapper>
        <Button className="primary" onClick={() => handleButtonClick("features")}>{i18n.MAIN_PAGE.BUTTON_1}</Button>
        <Button className="secondary" onClick={() => handleButtonClick("cards")}>{i18n.MAIN_PAGE.BUTTON_2}</Button>
      </ButtonWrapper>
      <SocialMediaWrapper>
        <Linkedin className="social-media-icon" width={25} height={25} />
        <GitHub className="social-media-icon" width={25} height={25} />
      </SocialMediaWrapper>
    </MainPageContainer>
  );
}

export default MainSection;
