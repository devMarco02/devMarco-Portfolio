import React from "react";
import { CloseButton } from "./Button";

const Modal = ({
  clickOutside,
  exitModal,
  src,
  title,
  desc,
  link,
  isFrontendMentor,
}) => {
  return (
    <article className="modal" onClick={clickOutside}>
      <div className="modal__container">
        <div className="modal__close-btn-wrapper">
          <CloseButton classNm={"modal__close-btn"} func={exitModal} />
        </div>
        <img src={src} alt="" className="modal__img" />
        <h3 className="modal__title">{title}</h3>
        <p className="modal__description">
          {desc}
          {isFrontendMentor && (
            <a
              className="modal__frontend-mentor-link"
              href="https://www.frontendmentor.io/"
              onMouseDown={(e) => e.preventDefault()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor.
            </a>
          )}
        </p>
        <a
          href={link}
          className="btn btn--green modal__btn"
          target="_blank"
          rel="noopener noreferrer"
          onMouseDown={(e) => e.preventDefault()}
        >
          VISIT SITE
        </a>
      </div>
    </article>
  );
};

export default Modal;
