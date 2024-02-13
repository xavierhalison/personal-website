import { Container } from "./style";

import { H2 as Title } from "components/headings";
import Card from "components/card";

function CardSection() {
  return (
    <Container id="cards">
      <Title gradient>My experience working with web development</Title>
      <Card
        title="Sambatech - 2020/present"
        text="I work building web applications to our clients and products using React, Next.js and Styled-Components"
        colorScheme={1}
      />
      <Card
        title="Reframax Engenharia - 2018/2019"
        text="I've improved my knowledge in the web development fundamentals working with Vanilla JS and jQuery"
        colorScheme={2}
      />
      <Card
        title="Faminas-BH"
        text="I've learned the fundamentals of web development working as Full Stack using PHP, MySQL and Javascript"
        colorScheme={3}
      />
    </Container>
  );
}

export default CardSection;
