import React from "react";
import data from "../data/featuredProjectsData";

const FeaturedProject = React.forwardRef(
  (
    { indexValue, modal, modalImg, modalTitle, modalDesc, modalBtn, loaded },
    ref
  ) => {
    const viewProject = (targetId) => {
      const project = data.find((project) => project.id === targetId);
      const { title, description, dataOriginal, dataLink } = project;
      modal.classList.add("open");
      modalImg.src = dataOriginal;
      modalTitle.innerHTML = title;
      modalDesc.innerHTML = description;
      modalBtn.href = dataLink;
    };

    return (
      <>
        {data.map((project, index) => {
          const { id, title, description, image, dataOriginal, dataLink } =
            project;
          let position = "portfolio__project--next";

          if (indexValue === index) {
            position = "portfolio__project--active";
          }
          if (index === indexValue - 1) {
            position = "portfolio__project--last";
          }

          return (
            <article key={id} className={`portfolio__project ${position}`}>
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
                  onClick={() => viewProject(id)}
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
