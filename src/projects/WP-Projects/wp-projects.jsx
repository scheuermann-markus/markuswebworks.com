import "./wp-projects.css";

function WP_Projects() {
  return (
    <div className="wp-area">
      <div className="wp-header-section">
        <h1>Wordpress Projects</h1>
        <p>
          Besides React and basic JavaScript I also work with Wordpress. Feel
          free to check out two websites I've created.
        </p>
        <p className="p-small">
          Note: These are external links to real websites.
        </p>
      </div>
      <div className="wp-examples-section">
        <a
          href="https://ulrich-scheuermann.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="examples ulrich-scheuermann"></div>
        </a>
        <a
          href="https://beija-flor-aus-liebe-zur-blume.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="examples beija-flor"></div>
        </a>
      </div>
    </div>
  );
}

export default WP_Projects;
