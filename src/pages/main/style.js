import styled from "styled-components";

export const MainPageContainer = styled.div`
  padding: 30px 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  @media screen and (min-width: 1025px) {
    padding: 60px 40px 0;
  }

  > * {
    text-align: center;
  }

  > h4 {
    @media screen and (min-width: 1025px) {
      max-width: 400px;
    }
  }
`;

export const Illustration = styled.img`
  width: 70%;
  border-radius: 50%;
  border: 5px solid #000000;
  box-shadow: 0px 0px 10px #000000;
  margin: 20px 0;

  @media screen and (min-width: 1025px) {
    max-width: 150px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

  > button {
    @media screen and (min-width: 1025px) {
      &:first-child {
        margin-bottom: 5px;
      }
    }
  }
`;

export const SocialMediaWrapper = styled.div`
  padding: 20px 0;
  cursor: pointer;

  > .social-media-icon {
    &:first-child {
      margin-right: 10px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;
