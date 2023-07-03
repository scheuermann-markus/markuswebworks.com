import { Link } from "react-router-dom";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import "./header.css";
import { GithubIcon } from "../Icons/GithubIcon";
import { LinkedInIcon } from "../Icons/LinkedInIcon";
import { DockerIcon } from "../Icons/DockerIcon";

function Header() {
  const scrollAnimation = (anchor) => () => {
    /* scroll animation when user clicks on a header link */
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="header">
      <span className="social-links">
        <a
          style={{ width: "46px", height: "46px"}}
          href="https://linkedin.com/in/markus-scheuermann-a542221b1"
          target="blank"
        >
          <LinkedInIcon />
        </a>
        <a
          style={{ width: "46px", height: "46px" }}
          href="https://github.com/scheuermann-markus/markuswebworks.com"
          target="blank"
        >
          <GithubIcon />
        </a>

        <a
          style={{ width: "56px", height: "56px"}}
          href="https://hub.docker.com/u/scheuermannmarkus"
          target="blank"
        >
          <DockerIcon />
        </a>
      </span>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a
              href="/#FeaturedProjects"
              onClick={(e) => {
                e.preventDefault();
                scrollAnimation("FeaturedProjects")();
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/#AboutMe"
              onClick={(e) => {
                e.preventDefault();
                scrollAnimation("AboutMe")();
              }}
            >
              About Me
            </a>
          </li>
        </ul>
      </nav>
      <ThemeSwitcher />
    </div>
  );
}

export default Header;
