import { IconMenu } from "constants/svgs";
import {
  ButtonMenuStyled,
  LandingPageWrapperStyled,
  LogoSectionWrapperStyled,
} from "./LandingPage.styled";
import {
  AboutMe,
  ContactList,
  Education,
  ExperienceList,
  IntroSection,
  ProjectList,
  SkillList,
} from "./components";

export const ABOUT_SECTION_ID = "about-section";

function LandingPage() {
  return (
    <LandingPageWrapperStyled>
      <IntroSection />

      {/* About me */}
      <section className="section-wrapper" id={ABOUT_SECTION_ID}>
        <h2 className="section-header">About me</h2>
        <AboutMe />
      </section>

      {/* Education background */}
      <section className="section-wrapper">
        <h2 className="section-header">EDUCATION BACKGROUND</h2>
        <Education />
      </section>

      {/* Experience */}
      <section className="section-wrapper">
        <h2 className="section-header">WORKING EXPERIENCE</h2>
        <ExperienceList />
      </section>

      <section className="section-wrapper">
        <h2 className="section-header">SKILLS</h2>
        <SkillList />
      </section>

      <section className="section-wrapper">
        <h2 className="section-header">MY PROJECT</h2>
        <ProjectList />
      </section>

      <LogoSectionWrapperStyled>
        <p className="short-name">DUCTOAN212</p>
      </LogoSectionWrapperStyled>

      <section className="section-wrapper">
        <h2 className="section-header">Contact</h2>
        <ContactList />
      </section>

      <ButtonMenuStyled>
        <IconMenu />
      </ButtonMenuStyled>
    </LandingPageWrapperStyled>
  );
}

export { LandingPage };
