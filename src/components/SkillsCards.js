import GraphLine from "../components/GraphLine";
import { DevIcon } from "./../components/Icons";

export const SkillsCardDescription = () => {
  return (
    <div className="skills__card skills__card--description">
      <header className="skills__card-header">
        <DevIcon />
        <h3 className="skills__card-title">Front-End Developer</h3>
      </header>
      <p className="skills__card-body">
        I create responsive websites that are fast, easy to use, and built with
        best practices. The main area of my expertise is front-end development,
        building small and medium web apps, features, and coding interactive
        layouts. <br /> <br /> I’m using Figma for designing and prototyping
        websites, creating illustrations, animations, and logos.
      </p>
    </div>
  );
};

export const SkillsCardTools = () => {
  return (
    <div className="skills__card skills__card--graph">
      <ul className="skills__level-list">
        <li className="skills__level-item">BEGINNER</li>
        <li className="skills__level-item skills__level-item--hide">JUNIOR</li>
        <li className="skills__level-item">INTERMEDIATE</li>
        <li className="skills__level-item skills__level-item--hide">
          ADVANCED
        </li>
        <li className="skills__level-item">EXPERT</li>
      </ul>

      <ul className="skills__tools-list">
        <li className="skills__tools-item">
          HTML / CSS
          <GraphLine percent={"90%"} />
        </li>
        <li className="skills__tools-item">
          JavaScript
          <GraphLine percent={"60%"} />
        </li>
        <li className="skills__tools-item">
          React
          <GraphLine percent={"60%"} />
        </li>
        <li className="skills__tools-item">
          Sass
          <GraphLine percent={"70%"} />
        </li>
        <li className="skills__tools-item">
          Figma
          <GraphLine percent={"80%"} />
        </li>
        <li className="skills__tools-item">
          Photoshop
          <GraphLine percent={"70%"} />
        </li>
      </ul>
    </div>
  );
};
