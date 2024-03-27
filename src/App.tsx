import Hero from "./Containers/Hero/Hero";
import About from "./Containers/About/About";
import Skills from "./Containers/Skills/Skills";
import Work from "./Containers/Work/Work";
import Footer from "./Containers/Footer/Footer";
import Testimonial from "./Containers/Testimonials/Testimonial";

function App() {
  return (
    <div className="app__container">
      <Hero />
      <About />
      <Skills />
      <Work />
      <Testimonial />
      <Footer />
      {/* <Demo/> */}
    </div>
  );
}

export default App;
