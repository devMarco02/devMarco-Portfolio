import React from "react";

const FeaturedProject = React.forwardRef(({ data, indexValue }, ref) => {
  return (
    <>
      {data.map((project, index) => {
        const { title, description, image } = project;
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
              <div className="portfolio__vertical-line"></div>

              <div className="portfolio__text-container">
                <h3 className="portfolio__project-title">{title}</h3>
                <p className="portfolio__project-description">{description}</p>
              </div>
            </div>
            <div className="portfolio__right-grid">
              <img
                src={image}
                alt="project thumbnail"
                className="portfolio__img"
                ref={ref}
              />
            </div>
          </article>
        );
      })}
    </>
  );
});

export default FeaturedProject;
