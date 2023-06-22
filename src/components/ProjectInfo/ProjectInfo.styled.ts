import { svgs } from "constants/svgs";
import { styled } from "styled-components";

export const ProjectInfoWrapperStyled = styled.div`
  width: 100%;
  padding: 32px;

  background-color: var(--color-secondary);
  background-image: url(${svgs.patternBG});
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: max(64px, 6vw);
  filter: drop-shadow(0px 0px 4px var(--color-secondary-1));

  display: flex;
  gap: 16px;

  .left-side {
    flex: 0 0 256px;
    text-align: center;

    .project-number {
      font-size: 128px;
      font-weight: 900;
      color: var(--color-secondary-2);
      filter: drop-shadow(0px 0px 4px var(--color-secondary-2));
      line-height: 128px;
    }

    .project-time-line {
      margin-top: 16px;
    }

    .project-customer {
      margin-top: 32px;
      width: 64px;
      aspect-ratio: 3/2;
      object-fit: cover;
    }
  }

  .right-side {
    .project-name {
      font-size: 32px;
      font-weight: 500;
      text-transform: uppercase;
    }

    .project-desc {
      margin-top: 8px;
      margin-bottom: 32px;

      font-size: 16px;
      font-weight: 300;
      color: var(--color-secondary-2);
    }

    .info-item {
      margin-top: 16px;
      display: flex;
      align-items: center;
      gap: 8px;

      .icon {
        width: 32px;
        height: 32px;

        flex: 0 0 32px;
      }

      .description {
      }
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    .left-side {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;

      flex: 0;

      .project-number {
        font-size: 16vw;
      }

      .project-time-line,
      .project-customer {
        margin-top: 0;
      }
    }
  }

  @media only screen and (max-width: 425px) {
    .left-side {
      flex-direction: column;

      .project-number {
        font-size: 16vw;
        line-height: 16vw;
      }

      .project-time-line,
      .project-customer {
        margin-top: 0;
      }
    }
  }
`;
