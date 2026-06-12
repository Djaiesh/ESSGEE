import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * CustomCursor — A sleek, premium vector arrowhead custom cursor that:
 * - Looks like a classic pointer but styled in a modern, geometric stealth-wing layout.
 * - Tip is aligned precisely under the mouse hotspot (offset -4px, -4px).
 * - Default: Glowing teal outline with subtle translucent fill.
 * - Hover: Shifts color to vivid-amber, fills in, scales up, and rotates slightly.
 * - Click: Scales down and snaps back.
 * - Hides completely on touch devices.
 */
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const arrowPathRef = useRef<SVGPathElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    // Hide default cursor
    document.documentElement.style.cursor = "none";
    const style = document.createElement("style");
    style.innerHTML = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      if (cursorRef.current) {
        // Offset by -4px, -4px so the tip (4, 4) of the SVG is exactly on the mouse coordinates
        gsap.set(cursorRef.current, {
          x: e.clientX - 4,
          y: e.clientY - 4,
        });
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 0.8,
          duration: 0.1,
          ease: "power2.out",
        });
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(2)",
        });
      }
    };

    const handleElementEnter = () => {
      if (cursorRef.current && arrowPathRef.current) {
        // Scale up, rotate slightly to look active, fill in completely, shift to amber
        gsap.to(cursorRef.current, {
          scale: 1.15,
          rotation: -10,
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(arrowPathRef.current, {
          color: "hsl(24, 100%, 50%)", // vivid-amber
          fillOpacity: 0.85,
          strokeWidth: 2,
          duration: 0.25,
        });
      }
    };

    const handleElementLeave = () => {
      if (cursorRef.current && arrowPathRef.current) {
        // Restore to teal outline, default rotation and scale
        gsap.to(cursorRef.current, {
          scale: 1,
          rotation: 0,
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(arrowPathRef.current, {
          color: "hsl(176, 88%, 34%)", // teal-accent
          fillOpacity: 0.15,
          strokeWidth: 1.5,
          duration: 0.25,
        });
      }
    };

    const setupHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .card-lift, .btn-cta, .btn-pop, .btn-outline, .animated-underline, .cap-card'
      );
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", handleElementEnter);
        el.addEventListener("mouseleave", handleElementLeave);
      });
      return hoverables;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const hoverables = setupHoverListeners();

    const observer = new MutationObserver(() => {
      setupHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.style.cursor = "";
      style.remove();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementEnter);
        el.removeEventListener("mouseleave", handleElementLeave);
      });
      observer.disconnect();
    };
  }, [isVisible]);

  if (isTouchDevice.current) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
      style={{
        display: isVisible ? "block" : "none",
        width: "24px",
        height: "24px",
        transformOrigin: "4px 4px", // Rotation origin matches the tip of the arrow
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sleek vector arrowhead */}
        <path
          ref={arrowPathRef}
          d="M4 4L16 10L10 12L8 18L4 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="currentColor"
          fillOpacity="0.15"
          style={{
            color: "hsl(176, 88%, 34%)", // Brand teal-accent
            transition: "fill-opacity 0.25s, stroke-width 0.25s",
          }}
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
