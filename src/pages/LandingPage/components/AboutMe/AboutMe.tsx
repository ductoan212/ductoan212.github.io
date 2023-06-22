import React from "react";
import { AboutMeStyled } from "./AboutMe.styled";

function AboutMe() {
  return (
    <AboutMeStyled>
      I am a front-end developer with a degree and nearly
      <span className="highlight"> 2 years of experience in ReactJS</span>. I
      specialize in creating interactive and visually appealing user interfaces
      using{" "}
      <span className="highlight">HTML, CSS, JavaScript, and TypeScript.</span>{" "}
      I have worked on a variety of projects, from simple to complex, and
      possess strong collaboration, learning, and communication skills. My goal
      is to deliver high-quality software solutions and provide the best user
      experience. I am seeking challenging opportunities to contribute my
      knowledge and experience, and I am eager to join a talented team to create
      exceptional products. I look forward to bringing value to your company.
    </AboutMeStyled>
  );
}

export { AboutMe };
