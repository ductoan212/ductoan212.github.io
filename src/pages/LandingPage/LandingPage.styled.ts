import { svgs } from "constants/svgs";
import styled from "styled-components";

export const LandingPageWrapperStyled = styled.div`
  background: url(${svgs.backgroundApp});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 100vh;
  background-position-y: 100svh;

  .section-wrapper {
    padding: 32px max(32px, 10vw);

    .section-header {
      margin-bottom: 16px;

      color: #ffffff;
      font-size: 32px;
      text-align: center;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 8px;

      filter: drop-shadow(2px 2px 0px var(--color-secondary-1));
    }
  }
`;

export const LogoSectionWrapperStyled = styled.section`
  background-color: var(--color-secondary-fade);

  .short-name {
    margin: auto;
    padding: max(2.5vw, 32px) 5vw;

    word-break: break-all;

    color: var(--color-primary);
    text-align: center;
    font-size: min(10vw, 64px);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 8px;
  }

  img {
    position: absolute;
    height: 100%;
    margin: auto;

    top: 0;
    left: 50%;
    transform: translateX(-50%);

    display: block;
  }
`;
