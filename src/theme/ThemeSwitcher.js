import "./themeSwitcher.css";

function ThemeSwitcher() {
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme = localStorage.getItem("theme");

  if (theme === lightTheme || theme === darkTheme) { //check if there is already a theme defined
    body.classList.add(theme); 
  } else {
    body.classList.add(darkTheme); //when no theme is defined, darkTheme is set as default
  }

  const handleClick = (e) => {
    if (theme === darkTheme) {
      //darkTheme is replaced with lightTheme
      body.classList.replace(darkTheme, lightTheme);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else if (theme === lightTheme) {
      //lightTheme is replaced with darkTheme
      body.classList.replace(lightTheme, darkTheme);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    } else {
      console.log("Error in function handleClick from ThemeSwitcher");
    }
  };

  return (
    <button className="theme-switcher-btn" onClick={(e) => handleClick(e)}>
      <svg
        className="sun-graphic"
        fill="none"
        stroke="#fbb046"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <defs />
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <svg
        className="moon-graphic"
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <defs />
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </button>
  );
};

export default ThemeSwitcher;
