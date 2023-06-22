import { styled } from "styled-components";

export const ExperienceListStyled = styled.div`
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

  @media only screen and (max-width: 425px) {
    .experience-item {
      flex-direction: column;
      gap: 8px;
      text-align: center;
    }
  }
`;
