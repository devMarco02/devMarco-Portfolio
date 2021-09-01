import { HashLink } from "react-router-hash-link";
import { Logo, Facebook, Github } from "./components/Icons";

const Navbar = () => {
  return (
    <aside className="navbar">
      <HashLink
        smooth
        to="/#hero"
        className="navbar__logo-link"
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="navbar__logo-container">
          <Logo classNm={"navbar__logo"} />
        </div>
      </HashLink>
      <nav className="navbar__nav">
        <ul className="navbar__list">
          <li className="navbar__item navbar__item--about">
            <HashLink
              smooth
              to="/#about"
              onMouseDown={(e) => e.preventDefault()}
            >
              About
            </HashLink>
          </li>
          <li className="navbar__item navbar__item--portfolio">
            <HashLink
              smooth
              to="/#portfolio"
              onMouseDown={(e) => e.preventDefault()}
            >
              Portfolio
            </HashLink>
          </li>
          <li className="navbar__item navbar__item--skills">
            <HashLink
              smooth
              to="/#skills"
              onMouseDown={(e) => e.preventDefault()}
            >
              My Skills
            </HashLink>
          </li>
          <li className="navbar__item navbar__item--contact">
            <HashLink
              smooth
              to="/#contact"
              onMouseDown={(e) => e.preventDefault()}
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
      <div className="navbar__container-icons">
        <a
          className="navbar__facebook-link"
          href="https://web.facebook.com/MarcoAlpay"
          target="_blank"
          rel="noopener noreferrer"
          onMouseDown={(e) => e.preventDefault()}
        >
          <Facebook classNm={"navbar__facebook"} />
        </a>
        <a
          className="navbar__github-link"
          href="https://github.com/devMarco02"
          target="_blank"
          rel="noopener noreferrer"
          onMouseDown={(e) => e.preventDefault()}
        >
          <Github classNm={"navbar__github"} />
        </a>
      </div>
    </aside>
  );
};

export default Navbar;
