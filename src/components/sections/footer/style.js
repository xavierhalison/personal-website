import styled from "styled-components";
import { H1 as Title, H5 } from "components/headings";
import { MainCTA } from "components/CTAs";
import { Input } from "components/formField";

const Container = styled.div`
  background-image: var(--linear-gradient-5);
  height: 60vh;
  padding: var(--padding-sm);
  display: grid;
  align-content: space-around;
  justify-content: center;

  > * {
    z-index: 1;
  }

  @media screen and (min-width: 1025px) {
    padding: calc(var(--padding-lg) / 2) var(--padding-lg);

    grid-template-columns: 1fr 1fr 3fr;
    grid-template-rows: 1fr;
    align-items: start;
  }

  ${Title} {
    text-align: center;
    align-self: center;

    @media screen and (min-width: 1025px) {
      font-size: 36px;
    }
  }
`;

const PersonalSection = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: -10px; */
`;

const SocialMediaLogos = styled.div`
  display: flex;
  justify-content: center;

  .social-media-icon {
    margin: 0 10px;
    stroke: var(--main-text);
  }
`;

const SiteMap = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0 calc(var(--padding-sm) * 3);

  @media screen and (min-width: 1025px) {
    grid-column: 2;
    grid-row: 1;
    flex-direction: column;
    height: 80px;
  }
`;

const MailForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  padding: 0 calc(var(--padding-sm) * 3);

  @media screen and (min-width: 1025px) {
    grid-column: 3;
    margin-top: 0px;
    width: 450px;
    justify-self: end;
  }

  ${MainCTA}, ${Input} {
    width: 100%;
    margin-right: 0;
  }

  ${MainCTA} {
    @media screen and (min-width: 1025px) {
      margin-top: 20px;
    }
  }

  ${H5} {
    margin-bottom: 10px;
    text-align: center;

    @media screen and (min-width: 1025px) {
      font-size: 20px;
      align-self: start;
    }
  }
`;

export { Container, SocialMediaLogos, SiteMap, MailForm, PersonalSection };
