import React from "react";
import {
  Container,
  SiteMap,
  SocialMediaLogos,
  MailForm,
  PersonalSection,
} from "./style";
import { H1 as Title, H5 } from "components/headings";
import { Linkedin, GitHub } from "react-feather";

import { Input } from "components/formField";
import { MainCTA } from "components/CTAs";

import { useContext } from "react";
import { GlobalContext as Context } from "global/context";

function Footer() {
  const { state, setState } = useContext(Context);
  const { pages } = state;

  return (
    <Container id="footer">
      <PersonalSection>
        <Title gradient>Halison</Title>
        <SocialMediaLogos>
          <Linkedin className="social-media-icon" />
          <GitHub className="social-media-icon" />
        </SocialMediaLogos>
      </PersonalSection>
      <MailForm>
        <H5>Leave your email here and I'll contact you</H5>
        <Input placeholder="you@email.com" />
        <MainCTA>Subscribe</MainCTA>
      </MailForm>
      <SiteMap>
        {pages &&
          pages.map(({ name, id }) => (
            <li onClick={() => setState({ ...state, activePage: id })}>{name}</li>
          ))}
      </SiteMap>
    </Container>
  );
}

export default Footer;
