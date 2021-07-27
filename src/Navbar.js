import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <aside className="navbar">
      <Link smooth to="/#hero" className="navbar__logo">
        logo
      </Link>
      <nav className="navbar__nav">
        <ul className="navbar__list">
          <li className="navbar__item navbar__item--about">
            <Link
              smooth
              to="/#about"
              // scroll={(el) =>
              //   el.scrollIntoView({ behavior: "smooth", block: "center" })
              // }
            >
              About
            </Link>
          </li>
          <li className="navbar__item navbar__item--portfolio">
            <Link smooth to="/#portfolio">
              Portfolio
            </Link>
          </li>
          <li className="navbar__item navbar__item--skills">
            <Link smooth to="/#skills">
              My Skills
            </Link>
          </li>
          <li className="navbar__item navbar__item--contact">
            <Link smooth to="/#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="navbar__container-icons">
        <p className="navbar__social-icon">Social Icons</p>
      </div>
    </aside>
  );
};

export default Navbar;
