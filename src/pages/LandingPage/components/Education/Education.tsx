import images from "constants/images";
import { IconGrade, IconGraduation, IconSchool } from "constants/svgs";
import { EducationGroupStyled } from "./Education.styled";

function Education() {
  return (
    <EducationGroupStyled>
      <div className="left-side">
        <img src={images.UITLogoImage} alt="uit-logo" className="uni-logo" />
        <p>Aug 2018 - May 2022</p>
      </div>
      <div className="divider" />
      <div className="right-side">
        <p className="education-info-item">
          <IconSchool />
          <span>UNIVERSITY OF INFORMATION TECHNOLOGY, VNU HCM</span>
        </p>
        <p className="education-info-item">
          <IconGraduation />
          <span>Information Technology</span>
        </p>
        <p className="education-info-item">
          <IconGrade />
          <span>8.79/10</span>
        </p>
      </div>
    </EducationGroupStyled>
  );
}

export { Education };

