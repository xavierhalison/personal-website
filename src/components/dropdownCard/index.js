import { H3 as Title } from "components/headings";

import { Container, Text } from "./style";

import { ChevronDown, ChevronUp } from "react-feather";

function DropdownCard({ title, children, expanded, toggle }) {
  return (
    <Container onClick={toggle}>
      <Title gradient={expanded}>{title}</Title>
      {expanded ? (
        <>
          <Text>{children}</Text>
          <ChevronUp className="dropdown-icon" />
        </>
      ) : (
        <ChevronDown className="dropdown-icon" />
      )}
    </Container>
  );
}

export default DropdownCard;
