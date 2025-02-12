// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the pathname changes.
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use smooth scrolling; remove this line if you prefer an instant jump.
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
