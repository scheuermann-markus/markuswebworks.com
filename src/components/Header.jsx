import { Link } from "react-router-dom";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import "./header.css";

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
      <Link to={"/"} className="h1-link">
        <h1>markus scheuermann</h1>
      </Link>

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
