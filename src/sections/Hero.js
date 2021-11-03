import { useState, useEffect, useRef } from "react";
import { objectsAnim } from "../animations";

import ObjectsDesign from "../components/ObjectsDesign";
import { HashLink as Link } from "react-router-hash-link";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const deg = 6;
  let day = new Date();
  const [hr, setHr] = useState(day.getHours() * 30); //1hr = 30deg
  const [min, setMin] = useState(day.getMinutes() * deg); //5min = 30deg
  const [sec, setSec] = useState(day.getSeconds() * deg); //5sec = 30deg
  let section = useRef(null);
  let textsRef = useRef(null);

  const updateTime = () => {
    let newDay = new Date();
    setHr(newDay.getHours() * 30);
    setMin(newDay.getMinutes() * deg);
    setSec(newDay.getSeconds() * deg);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //Animation
  useEffect(() => {
    const laptopTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    });

    objectsAnim(laptopTl);

    return () => {
      laptopTl.kill();
    };
  }, []);

  return (
    <section className="hero" id="hero" ref={section}>
      <div className="hero__container-text hero-text" ref={textsRef}>
        <h1 className="hero__name hero-text">MARCO POLO</h1>
        <h3 className="hero__title hero-text">FRONT-END WEB DEVELOPER</h3>
        <Link
          smooth
          to="/#contact"
          className="btn hero__btn hero-text"
          onMouseDown={(e) => e.preventDefault()}
        >
          CONTACT ME
        </Link>
      </div>
      <ObjectsDesign minDeg={min} hrDeg={hr + min / 12} secDeg={sec} />
    </section>
  );
};

export default Hero;
