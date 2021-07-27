import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

///TOGGLE ARROW BUTTON

// const toggleArrowBtn = () => {
//   const projects = document.querySelectorAll(".portfolio__project");
//   const leftArrow = document.querySelector(".portfolio__arrow-btn--left");
//   const rightArrow = document.querySelector(".portfolio__arrow-btn--right");

//   if (projects[0].classList.contains("portfolio__project--active")) {
//     leftArrow.style.opacity = 0;
//   } else {
//     leftArrow.style.opacity = 1;
//   }

//   if (projects[1].classList.contains("portfolio__project--active")) {
//     leftArrow.style.opacity = 1;
//     rightArrow.style.opacity = 1;
//   }

//   if (projects[2].classList.contains("portfolio__project--active")) {
//     rightArrow.style.opacity = 0;
//   } else {
//     rightArrow.style.opacity = 1;
//   }
// };

// toggleArrowBtn();
