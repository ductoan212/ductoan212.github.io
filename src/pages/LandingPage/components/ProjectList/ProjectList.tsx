import { ProjectInfo } from "components";
import { ProjectListStyled } from "./ProjectList.styled";

function ProjectList() {
  return (
    <ProjectListStyled>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <ProjectInfo key={index} />
        ))}
    </ProjectListStyled>
  );
}

export { ProjectList };

