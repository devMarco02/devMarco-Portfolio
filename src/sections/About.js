import { Link } from "react-router-dom";
import {
  AboutGreyShapes,
  AboutTopGreyShapes,
  AboutBottomGreyShapes,
} from "../components/GreyShapes";
import Blobs from "../components/Blobs";
import { DownloadIcon } from "../components/Icons";
import marco from "../images/marco.png";
import resume from "../downloadable/Marco-Resume-2021.pdf";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  let imgContainerRef = useRef(null);

  useEffect(() => {
    //Animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        toggleActions: "restart reverse restart reverse",
        start: () => "top center",
        invalidateOnRefresh: true,
      },
    });

    //texts timeline
    tl.fromTo(
      ".about__title",
      { opacity: () => 0, x: () => -500 },
      {
        opacity: () => 1,
        x: () => 0,
        duration: 1,
        delay: 0.1,
        ease: "power2",
      }
    );
    tl.fromTo(
      ".about__body",
      { opacity: () => 0, x: () => -500 },
      { opacity: () => 1, x: () => 0, duration: 1, ease: "power2" },
      0.25
    );
    tl.fromTo(
      ".about__btn",
      { opacity: () => 0, x: () => -500 },
      { opacity: () => 1, x: () => 0, duration: 1, ease: "power2" },
      0.4
    );

    //image animation
    const children = imgContainerRef.current.childNodes;
    gsap.fromTo(
      children,
      { opacity: () => 0, x: () => 500 },
      {
        opacity: () => 1,
        x: () => 0,
        duration: 1.3,
        delay: 0.1,
        ease: "power2",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".about",
          toggleActions: "restart reverse restart reverse",
          start: () => "top center",
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      tl.kill();
      gsap.killTweensOf(children);
    };
  }, []);
  return (
    <>
      <div className="about-section-container">
        {/*this divider centers the section on screen when clicked on nav */}
        <div className="about__divider"></div>

        <section className="about" id="about">
          <div className="about__content">
            <h2 className="about__title">
              About <strong>Me</strong>
            </h2>
            <div className="about__img-container" ref={imgContainerRef}>
              <img className="about__marco-img" src={marco} alt="Marco Alpay" />
              <Blobs classNm="about__blobs" />
            </div>
            <p className="about__body">
              Hi, I’m Marco Polo Alpay, I’m a fresh graduate with a bachelor's
              degree in Information Technology. I have a serious passion for web
              development; creating UI effects, animations, illustrations, and
              responsive layout designs.
              <br /> <br />
              I’m a well-organised person, problem solver, studious with high
              attention to detail. If I’m not using my laptop, I’m probably
              working out, reading, watching NBA or playing skateboard.
              <br /> <br />
              I love what I do, and I enjoy the creative process.
              <br /> <br />
              <strong>Let's work together.</strong>
            </p>
            <Link
              to={resume}
              className="btn about__btn btn--green btn--dl"
              target="_blank"
              download="marco-alpay-resume-2021.pdf"
            >
              DOWNLOAD CV
              <DownloadIcon />
            </Link>
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
