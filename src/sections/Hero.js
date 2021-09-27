import { useState, useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ObjectsDesign from "../components/ObjectsDesign";
import { HashLink as Link } from "react-router-hash-link";

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
  // const tl = gsap.timeline();

  useEffect(() => {
    const text = textsRef.current.childNodes;
    //text
    gsap.from(text, {
      scrollTrigger: {
        trigger: ".hero",
        toggleActions: "restart pause restart pause",
        start: "top bottom",
        end: "bottom top",
      },
      opacity: 0,
      x: -500,
      duration: 1,
      delay: 0.1,
      ease: Power2.easeOut,
      stagger: {
        each: 0.15,
      },
    });
    //objects
    gsap.from(".hero__objects", {
      scrollTrigger: {
        trigger: ".hero",
        toggleActions: "restart pause restart pause",
        start: "top bottom",
        end: "bottom top",
      },
      opacity: 0,
      x: 500,
      duration: 1.3,
      delay: 0.1,
      ease: Power2.easeOut,
    });
  }, []);

  return (
    <section className="hero" id="hero" ref={section}>
      <div className="hero__container-text" ref={textsRef}>
        <h1 className="hero__name">MARCO POLO</h1>
        <h3 className="hero__title">FRONT-END WEB DEVELOPER</h3>
        <Link
          smooth
          to="/#contact"
          className="btn hero__btn"
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
