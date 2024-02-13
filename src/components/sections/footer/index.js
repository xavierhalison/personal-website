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

import { useContext, useEffect } from "react";
import { LandingContext as Context } from "global/context";

function Footer() {
  const { globalState, setPage } = useContext(Context);
  const { sections } = globalState;

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
        {sections &&
          sections.map(({ name, id }) => (
            <li onClick={() => setPage(id)}>{name}</li>
          ))}
      </SiteMap>
    </Container>
  );
}

export default Footer;
