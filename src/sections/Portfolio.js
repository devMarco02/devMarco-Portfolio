import { TopDivider, BottomDivider } from "../components/Divider";
import FeaturedProject from "../components/FeaturedProject";
import { ArrowButton, IndicatorButton } from "../components/Button";
import Blobs from "../components/Blobs";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import data from "./../data/featuredProjectsData";

const Portfolio = () => {
  const [index, setIndex] = useState(0); //index of project list
  const [size, setSize] = useState(0); // height of thumbnail
  const [opacity, setOpacity] = useState(0); //opacity of btns container
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState(""); // modal's link src
  const [title, setTitle] = useState(""); //modal title
  const [desc, setDesc] = useState(""); //modal desc
  const [link, setLink] = useState(""); //modal link
  const [isFm, setIsFm] = useState(false); //add frontend-mentor link
  const imgRef = useRef(null);
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  let leftIsVisible = true; //arrow btn
  let rightIsVisible = true;

  //OPEN MODAL
  const openProject = (targetId) => {
    const project = data.find((project) => project.id === targetId);
    const { title, description, dataOriginal, dataLink, isFrontendMentor } =
      project;
    setModal(true);
    setSrc(dataOriginal);
    setTitle(title);
    setDesc(description);
    setLink(dataLink);
    setIsFm(isFrontendMentor);
  };

  //setsize once image loaded
  const loaded = () => {
    const project1 = sliderRef.current.firstChild;
    const rightGrid = project1.lastChild;
    setSize(rightGrid.firstChild.clientHeight);
    setOpacity(1);
  };

  //ARROW BUTTON FUNCTIONS
  const slideRight = () => {
    if (index < 2) {
      setIndex(index + 1);
    }
  };

  const slideLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  //NAV-DOTS FUNCTION
  const moveTo = (order) => {
    setIndex(order);
  };

  //SHOW OR HIDE BUTTON
  if (index === 0) {
    leftIsVisible = false;
  } else {
    leftIsVisible = true;
  }

  if (index === 2) {
    rightIsVisible = false;
  } else {
    rightIsVisible = true;
  }

  //===GET & SET SIZE
  //set size everytime window size changes
  useEffect(() => {
    const windowResize = () => {
      const project1 = sliderRef.current.firstChild;
      const rightGrid = project1.lastChild;
      setSize(rightGrid.firstChild.clientHeight);
    };

    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, [size]);

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

  return (
    <>
      <TopDivider />
      <section className="portfolio" id="portfolio" ref={sectionRef}>
        <h2 className="portfolio__title">
          My <strong>Portfolio</strong>
        </h2>

        {/* PROJECTS */}
        <div className="portfolio__slider" ref={sliderRef}>
          <FeaturedProject
            openProject={openProject}
            loaded={loaded}
            indexValue={index}
            ref={imgRef}
          />

          <div
            className="portfolio__btns-container"
            style={{
              height: `${size}px`,
              opacity: `${opacity}`,
            }}
          >
            {/* ARROWS */}
            <ArrowButton
              classNm={"portfolio__arrow-btn portfolio__arrow-btn--left"}
              func={slideLeft}
              isVisible={leftIsVisible}
              isLeft
            />
            <ArrowButton
              classNm={"portfolio__arrow-btn portfolio__arrow-btn--right"}
              func={slideRight}
              isVisible={rightIsVisible}
              isLeft={false}
            />
            {/* NAV */}
            <nav className="portfolio__dots-nav">
              <IndicatorButton index={index} order={0} func={() => moveTo(0)} />
              <IndicatorButton index={index} order={1} func={() => moveTo(1)} />
              <IndicatorButton index={index} order={2} func={() => moveTo(2)} />
            </nav>
          </div>

          {/* BLOBS */}
          <Blobs classNm="portfolio__blobs" />
        </div>

        {/* VIEW ALL */}
        <Link
          to="/portfolio"
          className="btn portfolio__view-btn"
          onMouseDown={(e) => e.preventDefault()}
        >
          VIEW ALL
        </Link>

        {modal && (
          <Modal
            clickOutside={clickOutside}
            exitModal={exitModal}
            src={src}
            title={title}
            desc={desc}
            link={link}
            isFrontendMentor={isFm}
          />
        )}
      </section>
      <BottomDivider />
    </>
  );
};

export default Portfolio;
