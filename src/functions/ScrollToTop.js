import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// When the user clicks to another page (pathname changes) the page shall scroll to the top. 
const ScrollToTop = () => {
  const { pathname } = useLocation(); // Extracts pathname property(key) from an object

  useEffect(() => { // Automatically scrolls to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default ScrollToTop; 