import React from "react";

import { CardContainer } from "./Card.style";
import { Text, Subtitle } from "components/Text/Text";

function Card({ title, text }) {
  return (
    <CardContainer>
      <Subtitle>{title}</Subtitle>
      <Text>{text}</Text>
    </CardContainer>
  );
}

export default Card;
