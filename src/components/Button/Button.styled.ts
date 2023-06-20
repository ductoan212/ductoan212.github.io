import { styled } from "styled-components";

type TButtonWrapperStyled = {
  buttonType?: "default" | "primary";
};

export const ButtonWrapperStyled = styled.button<TButtonWrapperStyled>`
  padding: 8px 16px;

  font-weight: 500;
  color: ${(props: TButtonWrapperStyled) =>
    props.buttonType === "primary"
      ? "var(--color-white)"
      : "var(--color-primary)"};
  text-transform: uppercase;
  font-size: 16px;

  background: ${(props: TButtonWrapperStyled) =>
    props.buttonType === "primary" ? "var(--color-primary)" : "transparent"};
  border: 2px solid var(--color-primary);
  cursor: pointer;
`;
