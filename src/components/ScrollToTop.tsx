import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      const savedScroll = sessionStorage.getItem("catalogScroll");

      if (savedScroll) {
        window.scrollTo({
          top: Number(savedScroll),
          behavior: "auto",
        });

        sessionStorage.removeItem("catalogScroll");
        return;
      }
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;