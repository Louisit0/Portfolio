import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

const Content = () => {
  return (
    <div id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <main>
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default Content;
