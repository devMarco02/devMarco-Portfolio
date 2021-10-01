import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { ViewProject } from "../components/Icons";
import data from "./../data/PortfolioPageData";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioPage = () => {
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isFM, setIsFM] = useState(false);
  const [link, setLink] = useState("");
  const [isTouchEnabled, setIsTouchEnabled] = useState(false);

  //=== OPEN MODAL
  const openProject = (targetId) => {
    const project = data.find((project) => project.id === targetId);
    const { title, description, dataOriginal, dataLink, isFrontendMentor } =
      project;
    setModal(true);
    setSrc(dataOriginal);
    setTitle(title);
    setDesc(description);
    setLink(dataLink);
    setIsFM(isFrontendMentor);
  };

  //=== EXIT MODAL
  const exitModal = (e) => {
    setModal(false);
  };

  //exit modal when clicked outside
  const clickOutside = (e) => {
    if (e.target.classList.contains("modal")) {
      setModal(false);
    }
  };

  //=== CHECK IF USING TOUCH SCREEN
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

  //animations
  useEffect(() => {
    gsap.fromTo(
      ".portfolio-page__img",
      { opacity: () => 0 },
      {
        opacity: () => 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.1,
        ease: "power1",
      }
    );

    return () => gsap.killTweensOf(".portfolio-page__img");
  }, []);

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
              <ViewProject />
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
          isFrontendMentor={isFM}
        />
      )}
    </main>
  );
};

export default PortfolioPage;
