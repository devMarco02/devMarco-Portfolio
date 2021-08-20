import "./stylesheets/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import PortfolioPage from "./pages/PortfolioPage";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="site-container">
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
