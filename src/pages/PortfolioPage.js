import { useState, useEffect } from "react";
import Modal from "../components/Modal";

import data from "./../data/PortfolioPageData";

const PortfolioPage = () => {
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [isTouchEnabled, setIsTouchEnabled] = useState(false);

  const openProject = (targetId) => {
    const project = data.find((project) => project.id === targetId);
    const { title, description, dataOriginal, dataLink } = project;
    setModal(true);
    setSrc(dataOriginal);
    setTitle(title);
    setDesc(description);
    setLink(dataLink);
  };

  //EXIT MODAL
  const exitModal = (e) => {
    setModal(false);
  };

  //exit modal when clicked outside
  const clickOutside = (e) => {
    if (e.target.classList.contains("modal")) {
      setModal(false);
    }
  };

  // check if using touch screen
  const checkIsTouchEnabled = () => {
    if (
      "ontouchstart" in Window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    ) {
      setIsTouchEnabled(true);
    } else {
      setIsTouchEnabled(false);
    }
  };

  //run once
  useEffect(() => {
    checkIsTouchEnabled();
  }, []);

  //run everytime window size change
  useEffect(() => {
    window.addEventListener("resize", checkIsTouchEnabled);
    return () => {
      window.removeEventListener("resize", checkIsTouchEnabled);
    };
  });

  return (
    <main className="portfolio-page">
      <div
        className={`portfolio-page__container ${
          isTouchEnabled && "portfolio-page__container--gap"
        }`}
      >
        {data.map((project) => {
          const { id, title, image } = project;
          return (
            <div
              key={id}
              className={`portfolio-page__img-container ${
                isTouchEnabled && "portfolio-page__img-container--opaque"
              }`}
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
          clickOutside={clickOutside}
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
