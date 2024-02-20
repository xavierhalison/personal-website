import React, { useContext } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

import { DropdownContext } from "context/dropdownCard";

import { Subtitle, Text } from "components/Text/Text";

import { DropdownCardContainer } from "./DropdownCard.style";

export default function DropdownCard({ title, children, id }) {
  const { expanded, setExpanded } = useContext(DropdownContext)

  return (
    <DropdownCardContainer onClick={() => setExpanded(id)} $expanded={expanded === id}>
      <Subtitle>{title}</Subtitle>
      {expanded === id ? (
        <>
          <Text>{children}</Text>
          <ChevronUp className="dropdown-icon" />
        </>
      ) : (
        <ChevronDown className="dropdown-icon" />
      )}
    </DropdownCardContainer>
  );
}
