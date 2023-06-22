import images from "constants/images";
import { SkillWrapperStyled } from "./Skill.styled";

function Skill() {
  return (
    <SkillWrapperStyled>
      <p className="skill-name">Programming </p>

      <div className="skill-image-wrapper">
        <img src={images.UITLogoImage} alt="skill" />
        <img src={images.UITLogoImage} alt="skill" />
      </div>
    </SkillWrapperStyled>
  );
}

export { Skill };
