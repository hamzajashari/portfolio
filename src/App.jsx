import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedCursor from "react-animated-cursor";
import { Meteors } from "./components/ui/meteors";

function App() {
  return (
    <>
      <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid #fff",
        }}
      />
      <BrowserRouter>
        <ToastContainer />
        <div className="relative z-10 bg-primary">
          <Meteors />
          <div className="bg-hero-pattern z-20 bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <div className="relative z-0">
            <Works />
            <StarsCanvas />
          </div>
          <Contact />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
