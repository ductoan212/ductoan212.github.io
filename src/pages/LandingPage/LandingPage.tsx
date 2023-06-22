import images from "constants/images";
import {
  AboutMeSectionWrapperStyled,
  ContactSectionWrapperStyled,
  EducationSectionWrapperStyled,
  ExperienceSectionWrapperStyled,
  IntroSectionWrapperStyled,
  LandingPageWrapperStyled,
  LogoSectionWrapperStyled,
  ProjectSectionWrapperStyled,
  SkillsSectionWrapperStyled,
} from "./LandingPage.styled";
import { Button, ProjectInfo, Skill } from "components";
import {
  IconGithub,
  IconGrade,
  IconGraduation,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconSchool,
} from "constants/svgs";

const ABOUT_SECTION_ID = "about-section";

const CONTACT_INFO = [
  {
    icon: <IconPhone />,
    href: "tel:+84352222637",
    content: "+84352222637",
  },
  {
    icon: <IconMail />,
    href: "mailto:ductoan2010200@gmail.com",
    content: "ductoan2010200@gmail",
  },
  {
    icon: <IconGithub />,
    href: "https://github.com/ductoan212",
    content: "github.com/ductoan212",
  },
  {
    icon: <IconLinkedin />,
    href: "https://www.linkedin.com/in/ductoan212",
    content: "linkedin.com/in/ductoan212",
  },
];

function LandingPage() {
  return (
    <LandingPageWrapperStyled>
      {/* Intro */}
      <IntroSectionWrapperStyled>
        <div className="info-side">
          <p className="hello-text">Hello</p>
          <h1 className="my-name">I'm Toan Pham Duc</h1>
          <p className="job-title">Front-end Developer (ReactJS)</p>
          <a href={`#${ABOUT_SECTION_ID}`}>
            <Button>More about me</Button>
          </a>
        </div>

        <div className="media-side">
          <img
            className="intro-image"
            src={images.IntroImageWithoutBG}
            alt="ductoan212"
          />
        </div>
      </IntroSectionWrapperStyled>

      {/* About me */}
      <AboutMeSectionWrapperStyled id={ABOUT_SECTION_ID}>
        <h2 className="section-header">About me</h2>
        <p className="about-me-content">
          I am a front-end developer with a degree and nearly
          <span className="highlight"> 2 years of experience in ReactJS</span>.
          I specialize in creating interactive and visually appealing user
          interfaces using{" "}
          <span className="highlight">
            HTML, CSS, JavaScript, and TypeScript.
          </span>{" "}
          I have worked on a variety of projects, from simple to complex, and
          possess strong collaboration, learning, and communication skills. My
          goal is to deliver high-quality software solutions and provide the
          best user experience. I am seeking challenging opportunities to
          contribute my knowledge and experience, and I am eager to join a
          talented team to create exceptional products. I look forward to
          bringing value to your company.
        </p>
      </AboutMeSectionWrapperStyled>

      {/* Education background */}
      <EducationSectionWrapperStyled>
        <h2 className="section-header">EDUCATION BACKGROUND</h2>
        <div className="education-group">
          <div className="left-side">
            <img
              src={images.UITLogoImage}
              alt="uit-logo"
              className="uni-logo"
            />
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
        </div>
      </EducationSectionWrapperStyled>

      <ExperienceSectionWrapperStyled>
        <h2 className="section-header">WORKING EXPERIENCE</h2>
        <div className="experience-group">
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
        </div>
      </ExperienceSectionWrapperStyled>

      <SkillsSectionWrapperStyled>
        <h2 className="section-header">SKILLS</h2>
        <div className="skills-group">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Skill key={index} />
            ))}
        </div>
      </SkillsSectionWrapperStyled>

      <ProjectSectionWrapperStyled>
        <h2 className="section-header">MY PROJECT</h2>
        <div className="projects-group">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <ProjectInfo key={index} />
            ))}
        </div>
      </ProjectSectionWrapperStyled>

      <LogoSectionWrapperStyled>
        <p className="short-name">DUCTOAN212</p>
      </LogoSectionWrapperStyled>

      <ContactSectionWrapperStyled>
        <h2 className="section-header">Contact</h2>
        <ul className="contact-list">
          {CONTACT_INFO.map((info, index) => (
            <li key={`${info.href}-${index}`} className="contact-info-item">
              <a href={info.href} target="_blank" rel="noreferrer">
                <span className="contact-icon">{info.icon}</span>
                {info.content}
              </a>
            </li>
          ))}
        </ul>
      </ContactSectionWrapperStyled>
    </LandingPageWrapperStyled>
  );
}

export { LandingPage };
