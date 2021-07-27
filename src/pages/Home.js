import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <Portfolio />
      <Skills />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
