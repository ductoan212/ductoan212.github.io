import { Skill } from "components";
import { SkillsListStyled } from "./SkillList.styled";

function SkillList() {
  return (
    <SkillsListStyled>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Skill key={index} />
        ))}
    </SkillsListStyled>
  );
}

export { SkillList };
