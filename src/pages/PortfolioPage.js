import { useState } from "react";
import Modal from "../components/Modal";

import data from "./../data/PortfolioPageData";

const PortfolioPage = () => {
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");

  const openProject = (targetId) => {
    const project = data.find((project) => project.id === targetId);
    const { title, description, dataOriginal, dataLink } = project;
    setModal(true);
    setSrc(dataOriginal);
    setTitle(title);
    setDesc(description);
    setLink(dataLink);
    console.log(dataLink);
  };

  //EXIT MODAL
  const exitModal = (e) => {
    if (
      e.target.classList.contains("portfolio__modal") ||
      e.target.classList.contains("portfolio__modal-close")
    ) {
      setModal(false);
    }
  };

  return (
    <main className="portfolio-page">
      <div className="portfolio-page__container">
        {data.map((project) => {
          const { id, title, image } = project;
          return (
            <div
              key={id}
              className="portfolio-page__img-container"
              onClick={() => openProject(id)}
            >
              <img className="portfolio-page__img" src={image} alt={title} />
            </div>
          );
        })}
      </div>

      {modal && (
        <Modal
          exitModal={exitModal}
          src={src}
          title={title}
          desc={desc}
          link={link}
        />
      )}
    </main>
  );
};

export default PortfolioPage;
