import { useState } from "react";

import { Container, DropdownGrid } from "./style";

import { H2 as Title } from "components/headings";
import DropdownCard from "components/dropdownCard";
import { MainCTA } from "components/CTAs";

import { TopWaveOpaque, TopWaveOpaque2 } from "components/dividers";

import { useContext } from "react";
import { LandingContext as Context } from "global/context";

function CardSection() {
  const [expandedCard, toggleCard] = useState([true, false, false]);
  const { setPage } = useContext(Context);

  function toggle(i) {
    const newCards = [].fill(0, 2, false);
    newCards[i] = !expandedCard[i];
    toggleCard(newCards);
  }

  return (
    <Container id="dropdowns">
      <TopWaveOpaque />

      <Title gradient>More about me</Title>
      <DropdownGrid>
        <DropdownCard
          title="Software projects"
          expanded={expandedCard[0]}
          toggle={() => toggle(0)}
        >
          I've built this page as a model of a simple and generic Landing Page
          that can work well with several types of business. To make this I've
          use basically React since its a very simple Single Page Application.
          My goal with this is to reuse its structure when someone ask me to
          create a landing page, but I will host the whole code in Github to
          everyone who's interested.
        </DropdownCard>
        <DropdownCard
          title="Hobbies and Personal Life"
          expanded={expandedCard[1]}
          toggle={() => toggle(1)}
        >
          My life isn't just code, I'm very far from this actually. I really
          enjoy music, especially metal music, and it's part of my lifestyle, I
          love to be part of the musical scene playing in bands and going to
          events. I also love classic cars and own a 1975 VW Beetle which I've
          been working in it's restauration in the last months.
        </DropdownCard>
        <DropdownCard
          title="Future Projects"
          expanded={expandedCard[2]}
          toggle={() => toggle(2)}
        >
          I want to incorporate a CMS to this space so I'll can write about tech
          related things. I also want to expand my participation in the musical
          scene using my development skills to create applications in order to
          support independent artist in my area.
        </DropdownCard>
      </DropdownGrid>
      <MainCTA onClick={() => setPage("footer")}>Contact</MainCTA>
      <TopWaveOpaque2 />
    </Container>
  );
}

export default CardSection;
