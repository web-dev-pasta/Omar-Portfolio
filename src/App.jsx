import ReactLenis from "lenis/react";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
const App = () => {
  return (
    <ReactLenis root className="app">
      <NavBar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <ContactSummary />
      <Contact />
    </ReactLenis>
  );
};

export default App;
