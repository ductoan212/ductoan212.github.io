import { Button } from "components";
import images from "constants/images";
import { ABOUT_SECTION_ID } from "pages";
import { IntroSectionWrapperStyled } from "./IntroSection.styled";

function IntroSection() {
  return (
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
  );
}

export { IntroSection };
