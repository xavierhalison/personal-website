import { Container, Text } from "./style";

import { H2 as Title } from "components/headings";

function Card({ title, text, colorScheme }) {
  return (
    <Container colorScheme={colorScheme}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
}

export default Card;
