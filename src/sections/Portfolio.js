import { TopDivider, BottomDivider } from "../components/Divider";
import FeaturedProject from "../components/FeaturedProject";
import { ArrowButton, IndicatorButton } from "../components/Button";
import Blobs from "../components/Blobs";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

const Portfolio = () => {
  const [index, setIndex] = useState(0); //index of project list
  const [size, setSize] = useState(0);
  const [modal, setModal] = useState();
  const [opacity, setOpacity] = useState(0);
  const modalRef = useRef(null);
  const modalImgRef = useRef(null);
  const modalTitleRef = useRef(null);
  const modalDescRef = useRef(null);
  const modalBtnRef = useRef(null);
  const imgRef = useRef(null);
  const sliderRef = useRef(null);
  let leftIsVisible = true;
  let rightIsVisible = true;

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

  //run once
  useEffect(() => {
    setModal(modalRef.current);
  }, []);

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
    if (
      e.target.classList.contains("portfolio__modal") ||
      e.target.classList.contains("portfolio__modal-close")
    ) {
      modalRef.current.classList.remove("open");
    }
  };

  return (
    <>
      <TopDivider />
      <section className="portfolio" id="portfolio">
        <h2 className="portfolio__title">
          My <strong>Portfolio</strong>
        </h2>

        {/* PROJECTS */}
        <div className="portfolio__slider" ref={sliderRef}>
          <FeaturedProject
            loaded={loaded}
            indexValue={index}
            ref={imgRef}
            modal={modal}
            modalImg={modalImgRef.current}
            modalTitle={modalTitleRef.current}
            modalDesc={modalDescRef.current}
            modalBtn={modalBtnRef.current}
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
        {/* <Button classNm="portfolio__view-btn" text="VIEW ALL" /> */}
        <Link to="/#/portfolio" className="btn portfolio__view-btn">
          VIEW ALL
        </Link>

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
      </section>
      <BottomDivider />
    </>
  );
};

export default Portfolio;
