import { styled } from "styled-components";

export const ContactListWrapperStyled = styled.ul`
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
`;
