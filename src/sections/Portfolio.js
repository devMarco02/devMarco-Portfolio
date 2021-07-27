import { TopDivider, BottomDivider } from "../components/Divider";
import FeaturedProject from "../components/FeaturedProject";
import data from "../data/featuredProjectsData";
import { ArrowButton, IndicatorButton } from "../components/Button";
import Blobs from "../components/Blobs";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [index, setIndex] = useState(0); //index of project list
  const [size, setSize] = useState(0);
  const imgRef = useRef(null);
  let leftIsVisible = true;
  let rightIsVisible = true;

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

  //===GET IMAGE SIZE
  //set size once
  useEffect(() => {
    setSize(imgRef.current.clientHeight);
  }, []);

  //set size everytime window size changes
  const windowResize = () => {
    setSize(imgRef.current.clientHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", windowResize);

    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, [size]);

  return (
    <>
      <TopDivider />
      <section className="portfolio" id="portfolio">
        <h2 className="portfolio__title">
          My <strong>Portfolio</strong>
        </h2>

        {/* PROJECTS */}
        <div className="portfolio__slider">
          <FeaturedProject data={data} indexValue={index} ref={imgRef} />

          <div
            className="portfolio__btns-container"
            style={{ height: `${size}px` }}
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
        <Link to="/portfolio-all" className="btn portfolio__view-btn">
          VIEW ALL
        </Link>
      </section>
      <BottomDivider />
    </>
  );
};

export default Portfolio;
