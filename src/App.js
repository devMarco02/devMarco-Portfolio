import "./stylesheets/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import PortfolioPage from "./pages/PortfolioPage";
import Home from "./pages/Home";
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
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio-all">
            <PortfolioPage />
          </Route>
          <Route exact path="/hero" component={Hero} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
