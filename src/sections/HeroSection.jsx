import { Link } from "react-router-dom";
import "./heroSection.css";

function HeroSection() {
  return (
    <div className="heroSection" id="heroSection">
      <div className="col">
        <h1>This is a React Site</h1>
        <p>
          Welcome to my website built using React. Take a stroll through its
          different sections, put your memory skills to the test with the 'Simon
          Game', jot down some thoughts using 'Notify' or check out some
          Wordpress projects I've created. Happy Hacking!
        </p>
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
