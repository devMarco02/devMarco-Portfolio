import React from "react";
import data from "../data/featuredProjectsData";

const FeaturedProject = React.forwardRef(
  ({ indexValue, loaded, openProject }, ref) => {
    return (
      <>
        {data.map((project, index) => {
          const {
            id,
            title,
            description,
            image,
            dataOriginal,
            dataLink,
            isFrontendMentor,
          } = project;
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
                    {isFrontendMentor && (
                      <a
                        className="portfolio__frontend-mentor-link"
                        href="https://www.frontendmentor.io/"
                        onMouseDown={(e) => e.preventDefault()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Frontend Mentor.
                      </a>
                    )}
                  </p>
                </div>
              </div>
              <div className="portfolio__right-grid">
                <img
                  onLoad={loaded}
                  onClick={() => openProject(id)}
                  src={image}
                  alt={title}
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
