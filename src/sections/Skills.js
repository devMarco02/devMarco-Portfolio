import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Blobs from "./../components/Blobs";
import Laptop from "../components/Laptop";
import { ThreeLines, ZigzagBig, Dots } from "../components/BackgroundShapes";
import {
  SkillsCardDescription,
  SkillsCardTools,
} from "../components/SkillsCards";
import {
  SkillsLeftTriangle,
  SkillsRightTriangle,
} from "../components/GreyShapes";
import { useEffect } from "react/cjs/react.development";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills",
        toggleActions: "restart reverse restart reverse",
        start: () => "top center",
        invalidateOnRefresh: true,
      },
    });

    //triangle
    tl.fromTo(
      ".skills__triangle-left",
      {
        opacity: () => 0,
        x: () => -1000,
      },
      { opacity: 1, x: () => 0, duration: 0.5, ease: Power2.easeOut }
    );
    tl.fromTo(
      ".skills__triangle-right",
      {
        opacity: () => 0,
        x: () => 1000,
      },
      {
        opacity: () => 1,
        x: () => 0,
        duration: 0.5,
        ease: Power2.easeOut,
      },
      0.25
    );
    //cards
    tl.fromTo(
      ".skills__card",
      {
        opacity: () => 0,
      },
      {
        opacity: () => 1,
        ease: Power2.easeOut,
        duration: 0.5,
      },
      0.5
    );
    //title
    tl.fromTo(
      ".skills__title",
      {
        opacity: () => 0,
        x: () => -500,
      },
      {
        opacity: () => 1,
        x: () => 0,
        duration: 0.7,
        ease: Power2.easeOut,
      },
      0.5
    );
    //laptop
    tl.fromTo(
      ".skills__laptop-container",
      {
        opacity: () => 0,
        x: () => 500,
      },
      {
        opacity: () => 1,
        x: () => 0,
        duration: 0.7,
        ease: Power2.easeOut,
      },
      0.5
    );

    return () => tl.kill();
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <h2 className="skills__title">
          My <strong>Skills</strong>
        </h2>

        <div className="skills__laptop-container">
          <svg
            className="skills__laptop"
            width="300"
            height="229"
            viewBox="236 412 349 270"
            fill="none"
          >
            <Laptop opaque={true} />
          </svg>

          <Blobs classNm="skills__blobs" />
        </div>

        <SkillsCardDescription />

        <SkillsCardTools />

        <Dots classNm="skills__dots" />

        <ZigzagBig classNm="skills__zigzag-big" />
      </div>

      <SkillsLeftTriangle />
      <SkillsRightTriangle />
      <ThreeLines classNm="skills__three-lines" />
    </section>
  );
};

export default Skills;
