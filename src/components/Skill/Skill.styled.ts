import { styled } from "styled-components";

export const SkillWrapperStyled = styled.div`
  padding: 32px;
  min-width: 256px;

  position: relative;
  background-color: var(--color-secondary);
  border-radius: 0px 32px 0px 0px;
  border: 2px solid #8ecae6;

  .skill-name {
    text-transform: uppercase;
  }

  .skill-image-wrapper {
    margin-top: 16px;

    display: flex;
    justify-content: center;
    gap: 16px;
  }

  img {
    width: 64px;
    height: 64px;
    background-color: var(--color-white);
  }

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #8ecae6, #219ebc);
    top: 0;
    left: 0;
    transform: translate(8px, 8px);
    border-radius: 0px 32px 0px 0px;
  }
`;
