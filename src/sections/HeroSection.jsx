import { Link } from "react-router-dom";
import "./heroSection.css";

function HeroSection() {
  return (
    <div className="heroSection" id="heroSection">
      <div className="col">
        <h1>Welcome</h1>
        <p>
          ... to my website built using React. In different projects I'm
          taking my programming skills to the test. Feel free to explore the
          code on my GitHub repository. <br /> Happy Hacking!
        </p>
        <a
          className="button"
          href="https://github.com/scheuermann-markus/markuswebworks.com"
          target="blank"
        >
          View Code on Git
        </a>
      </div>
      <div className="col">
        <div className="hero-links">
          <Link to="simongame" as="div" className="card card-1"></Link>
          <Link to="notify" as="div" className="card card-2"></Link>
          <Link to="wordpress" as="div" className="card card-3"></Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
