import { useRef } from "react";
import Modal from "../components/Modal";

import data from "./../data/PortfolioPageData";

const PortfolioPage = () => {
  const modalRef = useRef(null);
  const modalImgRef = useRef(null);
  const modalTitleRef = useRef(null);
  const modalDescRef = useRef(null);
  const modalBtnRef = useRef(null);

  const viewProject = (targetId) => {
    const project = data.find((project) => project.id === targetId);
    const { title, description, dataOriginal, dataLink } = project;
    modalRef.current.classList.add("open");
    modalImgRef.current.src = dataOriginal;
    modalTitleRef.current.innerHTML = title;
    modalDescRef.current.innerHTML = description;
    modalBtnRef.current.href = dataLink;
  };

  //EXIT MODAL
  const exitModal = (e) => {
    if (
      e.target.classList.contains("portfolio__modal") ||
      e.target.classList.contains("portfolio__modal-close")
    ) {
      modalRef.current.classList.remove("open");
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
              onClick={() => viewProject(id)}
            >
              <img className="portfolio-page__img" src={image} alt={title} />
            </div>
          );
        })}
      </div>
      <Modal
        exitModal={exitModal}
        ref={{
          modalRef: modalRef,
          modalImgRef: modalImgRef,
          modalTitleRef: modalTitleRef,
          modalDescRef: modalDescRef,
          modalBtnRef: modalBtnRef,
        }}
      />
    </main>
  );
};

export default PortfolioPage;
