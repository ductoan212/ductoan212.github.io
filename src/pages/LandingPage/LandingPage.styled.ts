import { svgs } from "constants/svgs";
import styled from "styled-components";

export const LandingPageWrapperStyled = styled.div`
  background: url(${svgs.backgroundApp});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 100vh;
  background-position-y: 100svh;

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
`;

export const IntroSectionWrapperStyled = styled.section`
  display: flex;
  background-color: var(--color-secondary-fade);
  position: relative;

  .info-side {
    min-height: 100vh;
    min-height: 100svh;
    padding: 10vw;

    flex: 1 1 65%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;

    .hello-text {
      font-size: 24px;
      font-weight: 300;
    }

    .my-name {
      color: var(--color-primary);
      font-size: 64px;
      font-weight: 900;
    }

    .job-title {
      font-size: 32px;
      font-weight: 300;
    }
  }

  .media-side {
    flex: 1 1 35%;
    background-color: var(--color-primary);
    position: relative;

    .intro-image {
      height: 80%;
      object-fit: contain;

      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateX(-50%);
      filter: drop-shadow(32px 32px 16px #00000050);
    }
  }

  @media only screen and (max-width: 1440px) {
    .media-side {
      display: flex;
      align-items: flex-end;

      .intro-image {
        width: 100%;
        height: fit-content;
        bottom: 0;
        transform: unset;
        position: relative;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    .media-side {
      padding: 10vmin;
      justify-content: center;

      .intro-image {
        padding-top: 16px;
        width: 100%;
        max-width: 250px;

        aspect-ratio: 1/1;
        border: 2px dashed #ffffff;
        border-radius: 50%;
      }
    }
  }
`;

export const AboutMeSectionWrapperStyled = styled.section`
  padding: 32px max(32px, 10vw);

  .about-me-content {
    text-align: center;
    color: var(--color-gray);
    font-size: 18px;
    font-weight: 300;
    line-height: 1.5;

    .highlight {
      color: var(--color-primary);
      font-weight: 500;
    }
  }
`;

export const EducationSectionWrapperStyled = styled.section`
  padding: 32px max(32px, 10vw);

  .education-group {
    width: fit-content;
    margin: auto;

    display: flex;
    align-items: center;
    gap: 32px;

    .left-side {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      text-align: center;

      .uni-logo {
        width: 128px;
        height: 128px;
        background-color: var(--color-white);
        border-radius: 50%;
      }
    }

    .divider {
      height: 128px;
      width: 1px;
      background-color: var(--color-white);
    }

    .right-side {
      .education-info-item {
        font-size: 16px;
        display: flex;
        align-items: center;

        &:not(:first-child) {
          margin-top: 16px;
        }

        svg {
          width: 24px;
          height: 24px;

          flex: 0 0 24px;
          margin-right: 16px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .education-group {
      flex-direction: column;

      .divider {
        width: 128px;
        height: 1px;
      }
    }
  }
`;

export const ExperienceSectionWrapperStyled = styled.section`
  padding: 32px max(32px, 10vw);

  .experience-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    .experience-item {
      width: 100%;

      display: flex;
      align-items: center;
      gap: 32px;

      .time-line {
        flex: 1 1 0px;
        text-align: right;
      }

      .company-logo {
        width: 100px;
        height: 100px;

        flex: 0 0 100px;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;

        background-color: var(--color-white);
      }

      .company-name {
        flex: 1 1 0px;
      }
    }

    .step-maker {
      height: 64px;
      border-left: 2px dashed var(--color-white);
    }
  }

  @media only screen and (max-width: 425px) {
    .experience-group {
      .experience-item {
        flex-direction: column;
        gap: 8px;
        text-align: center;
      }
    }
  }
`;

export const SkillsSectionWrapperStyled = styled.section`
  padding: 32px max(32px, 10vw);

  .skills-group {
    display: flex;
    gap: 64px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ProjectSectionWrapperStyled = styled.section`
  padding: 32px max(32px, 10vw);

  .projects-group {
    display: flex;
    gap: 64px;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 425px) {
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

export const ContactSectionWrapperStyled = styled.section`
  padding: 32px max(32px, 10vw);

  .contact-list {
    width: fit-content;
    margin: auto;

    display: flex;
    flex-direction: column;
    gap: 16px;

    .contact-info-item {
      list-style-type: none;

      a {
        display: flex;
        align-items: center;
        gap: 8px;

        font-size: 18px;
        color: var(--color-white);
        text-decoration: none;

        &:hover {
          color: var(--color-primary);
          text-decoration: underline;
        }

        .contact-icon {
          width: 24px;
          height: 24px;
          color: var(--color-primary);
        }
      }
    }
  }
`;
