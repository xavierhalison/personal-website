import React, { useContext } from "react";

import { useState } from "react";

import { DropdownsPageContainer, DropdownGrid } from "./style";

import DropdownCard from "components/DropdownCard/DropdownCard";

import { GlobalContext as Context } from "global/context";
import { Title } from "components/Text/Text";
import { Button } from "components/Buttons/Buttons";
import { DropdownContext } from "context/dropdownCard";

function CardSection() {
  const [expanded, setExpanded] = useState("projects");

  const { state, setState } = useContext(Context);

  return (
    <DropdownContext.Provider value={{ expanded, setExpanded }}>
      <DropdownsPageContainer id="dropdowns">
        <Title>More about me</Title>
        <DropdownGrid>
          <DropdownCard
            title="Software projects"
            id="projects"
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
            id="personal"
          >
            My life isn't just code, I'm very far from this actually. I really
            enjoy music, especially metal music, and it's part of my lifestyle, I
            love to be part of the musical scene playing in bands and going to
            events. I also love classic cars and own a 1975 VW Beetle which I've
            been working in it's restauration in the last months.
          </DropdownCard>
          <DropdownCard
            title="Future Projects"
            id="future"
          >
            I want to incorporate a CMS to this space so I'll can write about tech
            related things. I also want to expand my participation in the musical
            scene using my development skills to create applications in order to
            support independent artist in my area.
          </DropdownCard>
        </DropdownGrid>
        <Button className="primary" onClick={() => setState({ ...state, activePage: "home" })}>Contact</Button>
      </DropdownsPageContainer>
    </DropdownContext.Provider>
  );
}

export default CardSection;
