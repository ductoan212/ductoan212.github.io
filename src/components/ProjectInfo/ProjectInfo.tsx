import { IconProgrammingLanguage, IconTechnology } from "constants/svgs";
import { ProjectInfoWrapperStyled } from "./ProjectInfo.styled";
import images from "constants/images";

function ProjectInfo() {
  return (
    <ProjectInfoWrapperStyled>
      <div className="left-side">
        <p className="project-number">01</p>
        <p className="project-time-line">May 2022 - Aug 2022</p>
        <img
          src={images.FlagVietNamImage}
          alt="flag"
          className="project-customer"
        />
      </div>

      <div className="right-side">
        <p className="project-name">Project name (8 members)</p>
        <p className="project-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          molestias facere corporis aspernatur, fugit dolore quae. Consequuntur
          omnis, excepturi, quos voluptates blanditiis repellat possimus impedit
          vitae accusantium quasi dolorum deserunt?
        </p>

        <div className="info-item">
          <IconTechnology className="icon" />
          <p className="description">
            HTML, CSS3, Antd, ReactJS, Redux-saga, Restful API, Azure, Swagger,
            SQL server Third Party (Facebook, Google)
          </p>
        </div>

        <div className="info-item">
          <IconProgrammingLanguage className="icon" />
          <p className="description">Typescript, .NET</p>
        </div>
      </div>
    </ProjectInfoWrapperStyled>
  );
}

export { ProjectInfo };
