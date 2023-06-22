import { styled } from "styled-components";

export const EducationGroupStyled = styled.div`
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

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    .divider {
      width: 128px;
      height: 1px;
    }
  }
`;
