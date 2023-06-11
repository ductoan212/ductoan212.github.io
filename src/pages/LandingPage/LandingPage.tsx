import images from "constants/images";
import {
  IntroSectionWrapperStyled,
  LandingPageWrapperStyled,
} from "./LandingPage.styled";

function LandingPage() {
  return (
    <LandingPageWrapperStyled>
      <IntroSectionWrapperStyled>
        <div className="info-side">
          <p className="hello-text">Hello</p>
          <h1 className="my-name">I'm Duc Toan Pham</h1>
          <p className="job-title">Front-end Developer (ReactJS)</p>
          <button className="app-btn">More about me</button>
        </div>

        <div className="media-side">
          <img
            className="intro-image"
            src={images.IntroImageWithoutBG}
            alt="ductoan212"
          />
        </div>
      </IntroSectionWrapperStyled>

      <section>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quod
          labore adipisci odio. Laboriosam, placeat et sequi deserunt officiis
          voluptatibus, nostrum nihil temporibus totam quos, optio aliquid est
          debitis natus.
        </p>
      </section>

      <section>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque nihil
          quidem laboriosam esse, beatae voluptates? Totam vero blanditiis
          fugiat veritatis, facilis ipsa ex sapiente, libero odio animi mollitia
          quo id!
        </p>
      </section>
    </LandingPageWrapperStyled>
  );
}

export { LandingPage };
