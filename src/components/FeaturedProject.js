import React from "react";
import data from "../data/featuredProjectsData";

const FeaturedProject = React.forwardRef(
  (
    { indexValue, modal, modalImg, modalTitle, modalDesc, modalBtn, loaded },
    ref
  ) => {
    const viewProject = (e) => {
      const rightGrid = e.target.parentNode;
      const leftGrid = rightGrid.previousSibling;
      const textContainer = leftGrid.lastChild;
      const title = textContainer.firstChild.innerText;
      const desc = textContainer.lastChild.innerText;
      modal.classList.add("open");
      modalImg.src = e.target.getAttribute("data-original");
      modalTitle.innerHTML = title;
      modalDesc.innerHTML = desc;
      modalBtn.href = e.target.getAttribute("data-link");
    };

    return (
      <>
        {data.map((project, index) => {
          const { title, description, image, dataOriginal, dataLink } = project;
          let position = "portfolio__project--next";

          if (indexValue === index) {
            position = "portfolio__project--active";
          }
          if (index === indexValue - 1) {
            position = "portfolio__project--last";
          }

          return (
            <article key={index} className={`portfolio__project ${position}`}>
              <div className="portfolio__left-grid">
                <div className="portfolio__text-container">
                  <h3 className="portfolio__project-title">{title}</h3>
                  <p className="portfolio__project-description">
                    {description}
                  </p>
                </div>
              </div>
              <div className="portfolio__right-grid">
                <img
                  onLoad={loaded}
                  onClick={viewProject}
                  src={image}
                  alt="project thumbnail"
                  className="portfolio__img"
                  data-original={dataOriginal}
                  data-link={dataLink}
                  ref={ref}
                />
              </div>
            </article>
          );
        })}
      </>
    );
  }
);

export default FeaturedProject;
