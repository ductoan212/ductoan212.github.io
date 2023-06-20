import images from "constants/images";
import {
  AboutMeSectionWrapperStyled,
  IntroSectionWrapperStyled,
  LandingPageWrapperStyled,
} from "./LandingPage.styled";
import { Button } from "components";
import { IconGrade, IconGraduation, IconSchool } from "constants/svgs";

const ABOUT_SECTION_ID = "about-section";

function LandingPage() {
  return (
    <LandingPageWrapperStyled>
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

      <AboutMeSectionWrapperStyled id={ABOUT_SECTION_ID}>
        <div className="about-me">
          <h2 className="about-me-header">About me</h2>
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
            talented team to create exceptional products.
            <br />I look forward to bringing value to your company.
          </p>
        </div>

        <div className="personal-info-wrapper">
          <div className="laptop-image">
            <img src={images.LaptopImage} alt="laptop" />
          </div>
          <ul className="personal-info-content">
            <li>
              <span className="icon">
                <IconSchool />
              </span>
              <span className="content">
                University of Information Technology, VNU
              </span>
            </li>

            <li>
              <span className="icon">
                <IconGraduation />
              </span>
              <span className="content">Information Technology</span>
            </li>

            <li>
              <span className="icon">
                <IconGrade />
              </span>
              <span className="content">8.79/10</span>
            </li>
          </ul>
        </div>
      </AboutMeSectionWrapperStyled>

      <section>
        <h2>My experience</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </section>

      <section>
        <h2>My Portfolio</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </section>

      <section>
        <h2>My contact</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </section>
    </LandingPageWrapperStyled>
  );
}

export { LandingPage };
