import images from "constants/images";
import React from "react";
import { ExperienceListStyled } from "./ExperienceList.styled";

function ExperienceList() {
  return (
    <ExperienceListStyled>
      <div className="experience-item">
        <p className="time-line">Mar 2022 - Now</p>
        <div className="company-logo">
          <img src={images.FPTLogoImage} alt="fpt-logo" />
        </div>
        <p className="company-name">
          <span>FPT Software</span>
          <br />
          <span>React Developer</span>
        </p>
      </div>

      <div className="step-maker" />

      <div className="experience-item">
        <p className="time-line">Sep 2021 – Dec 2021</p>
        <div className="company-logo">
          <img src={images.MinhPhuLogoImage} alt="minh-phu-logo" />
        </div>
        <p className="company-name">
          <span>Minh Phu Solution</span>
          <br />
          <span>React Developer</span>
        </p>
      </div>
    </ExperienceListStyled>
  );
}

export { ExperienceList };
