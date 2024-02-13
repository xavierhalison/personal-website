import styled, { keyframes } from "styled-components";

const rotate = ({ reverse = false }) => {
  const from = reverse ? "360deg" : "0deg";
  const to = reverse ? "0deg" : "360deg";

  return keyframes`

  from {
    transform: rotate(${from});
  }

  to {
    transform: rotate(${to});
  }
`;
};

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;

  > .logo-1 {
    width: 280px;
    top: 60px;
    left: -90px;
    position: relative;
    animation: ${rotate({ reverse: false })} 40s linear infinite;
    opacity: 0.4;
    > g {
      fill: #eee;
    }

    @media screen and (min-width: 1025px) {
      width: 580px;
      top: 60px;
      left: -50px;
    }
  }

  > .logo-2 {
    width: 180px;
    top: 200px;
    left: 60%;
    position: relative;
    animation: ${rotate({ reverse: true })} 20s linear infinite;
    opacity: 0.4;
    > g {
      fill: #fff;
    }

    @media screen and (min-width: 1025px) {
      width: 480px;
      top: 360px;
      left: 190px;
    }
  }
`;

export { Container };
