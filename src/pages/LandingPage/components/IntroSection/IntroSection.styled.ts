import { styled } from "styled-components";

export const IntroSectionWrapperStyled = styled.div`
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
