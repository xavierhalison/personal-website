import React, { useContext } from "react";

import { CardPageContainer } from "./style";

import Card from "components/Card/Card";
import { Title } from "components/Text/Text";
import CardWrapper from "components/CardWrapper/CardWrapper";
import { Button } from "components/Buttons/Buttons";

import { GlobalContext as Context } from "global/context";


export default function CardSection() {
  const { state, setState } = useContext(Context);

  return (
    <CardPageContainer id="cards">
      <Title>My experience working with web development</Title>
      <CardWrapper>
        <Card
          title="Faminas-BH"
          text="I've learned the fundamentals of web development working as Full Stack using PHP, MySQL and Javascript"
        />
        <Card
          title="Sambatech - 2020/present"
          text="I work building web applications to our clients and products using React, Next.js and Styled-Components"
        />
        <Card
          title="Reframax Engenharia - 2018/2019"
          text="I've improved my knowledge in the web development fundamentals working with Vanilla JS and jQuery"
        />
      </CardWrapper>
      <Button className="primary" onClick={() => setState({ ...state, activePage: "dropdowns" })}>More</Button>
    </CardPageContainer>
  );
}
