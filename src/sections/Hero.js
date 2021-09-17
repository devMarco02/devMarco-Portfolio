import { useState, useEffect } from "react";

import ObjectsDesign from "../components/ObjectsDesign";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
  const deg = 6;
  let day = new Date();
  const [hr, setHr] = useState(day.getHours() * 30); //1hr = 30deg
  const [min, setMin] = useState(day.getMinutes() * deg); //5min = 30deg
  const [sec, setSec] = useState(day.getSeconds() * deg); //5sec = 30deg

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

  return (
    <section className="hero" id="hero">
      <div className="hero__container-text">
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
