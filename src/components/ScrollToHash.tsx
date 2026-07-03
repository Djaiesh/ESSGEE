import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    let attempts = 0;
    const maxAttempts = 60; // 3 seconds total polling time (60 * 50ms)

    const tryScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const lenisInstance = (window as any).lenis;
          if (lenisInstance) {
            lenisInstance.scrollTo(element, { offset: -100, duration: 1.2 });
          } else {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300); // 300ms delay to ensure page transitions and layout are fully settled
        return true;
      }
      return false;
    };

    // Try immediately
    if (tryScroll()) return;

    // Set up polling interval to wait for the element to mount in the DOM
    const interval = setInterval(() => {
      attempts++;
      if (tryScroll() || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
