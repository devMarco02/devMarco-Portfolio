import React from "react";
import { Close } from "./Icons";
import { Link } from "react-router-dom";

const Modal = React.forwardRef(({ exitModal }, ref) => {
  const { modalRef, modalImgRef, modalTitleRef, modalDescRef, modalBtnRef } =
    ref;

  // //EXIT MODAL
  // const exitModal = (e) => {
  //   if (
  //     e.target.classList.contains("portfolio__modal") ||
  //     e.target.classList.contains("portfolio__modal-close")
  //   ) {
  //     modalRef.current.classList.remove("open");
  //   }
  // };

  return (
    <article className="portfolio__modal" ref={modalRef} onClick={exitModal}>
      <div className="portfolio__modal-container">
        <div className="portfolio__modal-close">
          <Close classNm="portfolio__modal-close-icon" />
        </div>
        <img src="" alt="" className="portfolio__modal-img" ref={modalImgRef} />
        <h3 className="portfolio__modal-title" ref={modalTitleRef}>
          title
        </h3>
        <p className="portfolio__modal-description" ref={modalDescRef}>
          description
        </p>
        <Link
          to="https://devmarco02.netlify.app/"
          className="btn btn--green portfolio__modal-btn"
          target="_blank"
          rel="noopener noreferrer"
          ref={modalBtnRef}
        >
          VISIT SITE
        </Link>
      </div>
    </article>
  );
});

export default Modal;
