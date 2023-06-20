import { PropsWithChildren } from "react";
import { ButtonWrapperStyled } from "./Button.styled";

export type TButtonProps = {
  type?: "default" | "primary";
};

function Button(props: PropsWithChildren<TButtonProps>) {
  const { children, type } = props;

  return (
    <ButtonWrapperStyled buttonType={type}>{children}</ButtonWrapperStyled>
  );
}

export { Button };
