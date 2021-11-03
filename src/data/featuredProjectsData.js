import thumbnail1 from "./../images/project-img/preview/loopstudios.png";
import thumbnail2 from "./../images/project-img/preview/sunnyside.png";
import thumbnail3 from "./../images/project-img/preview/splitter.png";
import full1 from "./../images/project-img/full/loopstudios.png";
import full2 from "./../images/project-img/full/sunnyside.png";
import full3 from "./../images/project-img/full/splitter.png";

const featuredProjectsData = [
  {
    id: "1",
    title: "Loopstudios",
    description:
      "A landing page mockup with an interesting layout. This project helped me to get confident with Flexbox and Grid. Built using Sass and some JavaScript to toggle simple menu button. Challenge by ",
    image: thumbnail1,
    dataOriginal: full1,
    dataLink: "https://devmarco02-loopstudios-landing-page.netlify.app/",
    isFrontendMentor: true,
  },
  {
    id: "2",
    title: "Sunnyside",
    description:
      "A landing page mockup, built using Sass and React. There's a tiny bit of JS for the mobile menu, but the focus is HTML & CSS. This challenge was a perfect test for my layout and responsive skills. Challenge by ",
    image: thumbnail2,
    dataOriginal: full2,
    dataLink: "https://devmarco02-sunnyside-agency.netlify.app/",
    isFrontendMentor: true,
  },
  {
    id: "3",
    title: "Splitter",
    description:
      "A simple tip calculator app. Built using React and Sass. This small app was a perfect challenge to get to grips with JavaScript. Challenge by ",
    image: thumbnail3,
    dataOriginal: full3,
    dataLink: "https://devmarco02-tip-calculator.netlify.app/",
    isFrontendMentor: true,
  },
];

export default featuredProjectsData;
