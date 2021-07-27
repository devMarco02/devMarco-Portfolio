import ObjectsDesign from "../components/ObjectsDesign";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__container-text">
        <h1 className="hero__name">MARCO POLO</h1>
        <h3 className="hero__title">FRONT-END WEB DEVELOPER</h3>
        {/* <Button classNm="hero__btn" text="CONTACT ME" /> */}
        <Link smooth to="/#contact" className="btn hero__btn">
          CONTACT ME
        </Link>
      </div>
      <ObjectsDesign />
    </section>
  );
};

export default Hero;
