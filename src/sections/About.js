import {
  AboutGreyShapes,
  AboutTopGreyShapes,
  AboutBottomGreyShapes,
} from "../components/GreyShapes";
import Blobs from "../components/Blobs";
import { Button } from "../components/Button";
import { DownloadIcon } from "../components/Icons";
import marco from "../images/marco.png";

const About = () => {
  return (
    <>
      {/*this divider centers the section when clicked on nav */}
      <div className="about-section-container">
        <div className="about__divider"></div>

        <section className="about" id="about">
          <div className="about__content">
            <h2 className="about__title">
              About <strong>Me</strong>
            </h2>
            <div className="about__img-container">
              <img
                className="about__marco-img"
                src={marco}
                alt="Marco Alpay's Picture"
              />
              <Blobs classNm="about__blobs" />
            </div>
            <p className="about__body">
              Hi, I’m Marco Polo Alpay, I’m a fresh graduate student with a
              bachelor's degree in Information Technology. I have a serious
              passion for web development; creating UI effects, animations,
              illustrations, and responsive layout designs.
              <br /> <br />
              I’m a well-organised person, problem solver, studious with high
              attention to detail. If I’m not using my laptop, I’m probably
              working out, reading, watching NBA or playing skateboard.
              <br /> <br />
              I love what I do, and I enjoy the creative process.
              <br /> <br />
              <strong>Let's work together.</strong>
            </p>
            <Button
              classNm="about__btn btn--green btn--dl"
              text={"DOWNLOAD CV"}
            >
              <DownloadIcon />
            </Button>
            {/* <div className="about__right-grid">
            <Blobs classNm="about__blobs" />
          </div> */}
          </div>

          <AboutGreyShapes />
          <AboutTopGreyShapes />
          <AboutBottomGreyShapes />
        </section>

        <div className="about__divider"></div>
      </div>
    </>
  );
};

export default About;
