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

const Skills = () => {
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
