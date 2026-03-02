import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Meteors } from "./components/ui/meteors";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <div className="relative z-10 bg-primary">
          <Meteors />
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <div className="relative z-0">
            <Projects />
            <StarsCanvas />
          </div>
          <Contact />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
