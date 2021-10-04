import { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { Logo, Facebook, Github, Hamburger } from "./components/Icons";

// custom hooks
const useClickOutside = (handler) => {
  let domNode = useRef(null);

  useEffect(() => {
    let clicked = (e) => {
      if (!domNode.current.contains(e.target)) handler();
    };

    document.addEventListener("mousedown", clicked);

    return () => {
      document.removeEventListener("mousedown", clicked);
    };
  });

  return domNode;
};

//Navbar component
const Navbar = () => {
  let listRef = useRef(null);
  let socialRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <aside className={`navbar ${isOpen && "navbar--open"}`} ref={domNode}>
      <div className="navbar__logo-container">
        <HashLink
          smooth
          to="/#hero"
          className="navbar__logo-link"
          onMouseDown={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
        >
          <Logo classNm={"navbar__logo"} />
        </HashLink>
        <button
          className="navbar__hamburger-btn"
          onMouseDown={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          <Hamburger classNm={"navbar__hamburger-icon"} />
        </button>
      </div>

      <nav className="navbar__nav">
        <ul className="navbar__list" ref={listRef}>
          <li className="navbar__item navbar__item--about">
            <HashLink
              smooth
              to="/#about"
              onMouseDown={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
            >
              About
            </HashLink>
          </li>
          <li className="navbar__item navbar__item--portfolio">
            <HashLink
              smooth
              to="/#portfolio"
              onMouseDown={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
            >
              Portfolio
            </HashLink>
          </li>
          <li className="navbar__item navbar__item--skills">
            <HashLink
              smooth
              to="/#skills"
              onMouseDown={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
            >
              My Skills
            </HashLink>
          </li>
          <li className="navbar__item navbar__item--contact">
            <HashLink
              smooth
              to="/#contact"
              onMouseDown={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>

      <div className="navbar__container-icons" ref={socialRef}>
        <a
          className="navbar__facebook-link"
          href="https://web.facebook.com/MarcoAlpay"
          target="_blank"
          rel="noopener noreferrer"
          onMouseDown={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
        >
          <Facebook classNm={"navbar__facebook"} />
        </a>
        <a
          className="navbar__github-link"
          href="https://github.com/devMarco02"
          target="_blank"
          rel="noopener noreferrer"
          onMouseDown={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
        >
          <Github classNm={"navbar__github"} />
        </a>
      </div>
    </aside>
  );
};

export default Navbar;
