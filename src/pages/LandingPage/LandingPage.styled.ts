import styled from "styled-components";

export const LandingPageWrapperStyled = styled.div``;

export const IntroSectionWrapperStyled = styled.section`
  display: flex;
  background-color: #2a2a2a;
  position: relative;

  .info-side {
    min-height: 100vh;
    min-height: 100dvh;
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

      .intro-image {
        padding-top: 16px;
        width: 100%;
        height: 100%;

        aspect-ratio: 1/1;
        border: 2px dashed #ffffff;
        border-radius: 50%;
      }
    }
  }
`;

export const AboutMeSectionWrapperStyled = styled.section`
  .about-me {
    padding: 32px max(32px, 10vw);

    .about-me-header {
      margin-bottom: 16px;

      font-size: 32px;
      text-align: center;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 8px;

      filter: drop-shadow(2px -2px 0px var(--color-primary));
    }

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
  }

  .personal-info-wrapper {
    display: flex;
    height: fit-content;
    align-items: stretch;

    .laptop-image,
    .personal-info-content {
      flex: 0 0 50%;
    }

    .laptop-image {
      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }

    .personal-info-content {
      padding-inline: 24px;

      display: flex;
      flex-direction: column;
      gap: 24px;

      li {
        padding: 16px;

        flex: 1 1 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;

        list-style: none;
        background-color: var(--color-primary);

        .icon {
          width: 48px;
          height: 48px;

          svg {
            width: 100%;
            height: 100%;

            color: var(--color-white);
            stroke: var(--color-white);
          }
        }

        .content {
          font-weight: 300;
          font-size: 18px;
          text-align: center;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .personal-info-wrapper {
      flex-direction: column;

      .laptop-image {
        height: 250px;
        flex: unset;
      }

      .personal-info-content {
        padding: 16px;
      }
    }
  }
`;
