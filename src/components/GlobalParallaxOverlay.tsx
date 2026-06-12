import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * GlobalParallaxOverlay — A full-page 3D spiral and textured overlay
 * that persists across all pages and reacts to scroll.
 *
 * Renders:
 * - Large rotating spiral/helix SVGs at different depth layers
 * - Orbiting ring elements
 * - Subtle geometric accents (dots, dashes)
 *
 * Each layer scrolls at a different rate for a 3D depth illusion.
 * Mounted once in App.tsx for site-wide coverage.
 */
const GlobalParallaxOverlay = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Spiral layer 1 — slowest, largest (far depth)
      gsap.to(".gpo-depth-1", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        },
      });

      // Spiral layer 2 — medium speed (mid depth)
      gsap.to(".gpo-depth-2", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      // Spiral layer 3 — fastest (near depth)
      gsap.to(".gpo-depth-3", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });

      // Continuous rotation on spirals — different speeds per layer
      gsap.to(".gpo-spin-slow", {
        rotation: 360,
        ease: "none",
        duration: 120,
        repeat: -1,
        transformOrigin: "center center",
      });

      gsap.to(".gpo-spin-mid", {
        rotation: -360,
        ease: "none",
        duration: 80,
        repeat: -1,
        transformOrigin: "center center",
      });

      gsap.to(".gpo-spin-fast", {
        rotation: 360,
        ease: "none",
        duration: 50,
        repeat: -1,
        transformOrigin: "center center",
      });

      // Gentle pulsing on gradient orbs
      gsap.to(".gpo-pulse", {
        scale: 1.2,
        opacity: 0.8,
        ease: "sine.inOut",
        duration: 8,
        repeat: -1,
        yoyo: true,
      });
    }, overlayRef);

    return () => ctx.revert();
  }, []);

  // Spiral path generator — creates a smooth Archimedean spiral path
  const spiralPath = (cx: number, cy: number, startR: number, endR: number, turns: number, points: number = 200): string => {
    const parts: string[] = [];
    for (let i = 0; i <= points; i++) {
      const t = i / points;
      const angle = turns * 2 * Math.PI * t;
      const r = startR + (endR - startR) * t;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      parts.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`);
    }
    return parts.join(" ");
  };

  // Helix wave path — vertical sine wave for organic feel
  const helixPath = (startX: number, startY: number, amplitude: number, wavelength: number, length: number, points: number = 150): string => {
    const parts: string[] = [];
    for (let i = 0; i <= points; i++) {
      const t = i / points;
      const y = startY + length * t;
      const x = startX + amplitude * Math.sin((2 * Math.PI * length * t) / wavelength);
      parts.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`);
    }
    return parts.join(" ");
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1] pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* ═══════════ DEPTH 1 — Far background spirals (slowest) ═══════════ */}
      <div className="gpo-depth-1 absolute inset-0" style={{ willChange: "transform" }}>
        {/* Large spiral — top-left */}
        <svg
          className="gpo-spin-slow absolute"
          style={{ top: "-5%", left: "-10%", width: "600px", height: "600px" }}
          viewBox="0 0 600 600"
          fill="none"
        >
          <path
            d={spiralPath(300, 300, 40, 250, 4)}
            stroke="rgba(0,102,204,0.07)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d={spiralPath(300, 300, 60, 220, 3)}
            stroke="rgba(0,102,204,0.04)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="6 8"
          />
        </svg>

        {/* Large spiral — bottom-right */}
        <svg
          className="gpo-spin-slow absolute"
          style={{ bottom: "-10%", right: "-8%", width: "700px", height: "700px" }}
          viewBox="0 0 700 700"
          fill="none"
        >
          <path
            d={spiralPath(350, 350, 50, 300, 5)}
            stroke="rgba(240,74,0,0.06)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d={spiralPath(350, 350, 80, 260, 3.5)}
            stroke="rgba(240,74,0,0.035)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="8 12"
          />
        </svg>

        {/* Large pulsing gradient orb — center-left */}
        <div
          className="gpo-pulse absolute rounded-full"
          style={{
            top: "20%",
            left: "5%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(0,150,136,0.08) 0%, transparent 65%)",
          }}
        />

        {/* Large pulsing gradient orb — lower-right */}
        <div
          className="gpo-pulse absolute rounded-full"
          style={{
            top: "55%",
            right: "0%",
            width: "550px",
            height: "550px",
            background: "radial-gradient(circle, rgba(0,102,204,0.06) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ═══════════ DEPTH 2 — Mid-depth spirals and rings (medium) ═══════════ */}
      <div className="gpo-depth-2 absolute inset-0" style={{ willChange: "transform" }}>
        {/* Medium spiral — top-right */}
        <svg
          className="gpo-spin-mid absolute"
          style={{ top: "8%", right: "5%", width: "350px", height: "350px" }}
          viewBox="0 0 350 350"
          fill="none"
        >
          <path
            d={spiralPath(175, 175, 30, 140, 3.5)}
            stroke="rgba(0,150,136,0.08)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>

        {/* Medium spiral — center-left */}
        <svg
          className="gpo-spin-mid absolute"
          style={{ top: "45%", left: "3%", width: "300px", height: "300px" }}
          viewBox="0 0 300 300"
          fill="none"
        >
          <path
            d={spiralPath(150, 150, 25, 120, 3)}
            stroke="rgba(240,74,0,0.06)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          />
        </svg>

        {/* Orbiting ring — dashed */}
        <svg
          className="gpo-spin-slow absolute"
          style={{ top: "30%", right: "20%", width: "200px", height: "200px" }}
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="80" stroke="rgba(0,102,204,0.06)" strokeWidth="1" strokeDasharray="5 8" />
          <circle cx="100" cy="100" r="60" stroke="rgba(0,102,204,0.04)" strokeWidth="0.8" />
        </svg>

        {/* Helix wave — right side */}
        <svg
          className="absolute"
          style={{ top: "15%", right: "12%", width: "80px", height: "400px", opacity: 0.5 }}
          viewBox="0 0 80 400"
          fill="none"
        >
          <path
            d={helixPath(40, 0, 30, 80, 400)}
            stroke="rgba(0,150,136,0.06)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>

        {/* Mid gradient orb — center */}
        <div
          className="gpo-pulse absolute rounded-full"
          style={{
            top: "35%",
            left: "35%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(240,74,0,0.05) 0%, transparent 65%)",
          }}
        />

        {/* Orbiting ring — bottom-left */}
        <svg
          className="gpo-spin-mid absolute"
          style={{ bottom: "15%", left: "10%", width: "150px", height: "150px" }}
          viewBox="0 0 150 150"
          fill="none"
        >
          <circle cx="75" cy="75" r="55" stroke="rgba(240,74,0,0.06)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="75" cy="75" r="40" stroke="rgba(240,74,0,0.04)" strokeWidth="0.7" />
        </svg>
      </div>

      {/* ═══════════ DEPTH 3 — Near-foreground accents (fastest) ═══════════ */}
      <div className="gpo-depth-3 absolute inset-0" style={{ willChange: "transform" }}>
        {/* Small spiral — top center */}
        <svg
          className="gpo-spin-fast absolute"
          style={{ top: "5%", left: "45%", width: "150px", height: "150px" }}
          viewBox="0 0 150 150"
          fill="none"
        >
          <path
            d={spiralPath(75, 75, 15, 55, 2.5)}
            stroke="rgba(0,150,136,0.07)"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* Small spiral — bottom right */}
        <svg
          className="gpo-spin-fast absolute"
          style={{ bottom: "20%", right: "15%", width: "120px", height: "120px" }}
          viewBox="0 0 120 120"
          fill="none"
        >
          <path
            d={spiralPath(60, 60, 10, 45, 2)}
            stroke="rgba(0,102,204,0.06)"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>

        {/* Helix wave — left side */}
        <svg
          className="absolute"
          style={{ top: "25%", left: "5%", width: "50px", height: "300px", opacity: 0.4 }}
          viewBox="0 0 50 300"
          fill="none"
        >
          <path
            d={helixPath(25, 0, 18, 60, 300)}
            stroke="rgba(240,74,0,0.06)"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* Tiny ring — mid-left */}
        <svg
          className="gpo-spin-fast absolute"
          style={{ top: "50%", left: "20%", width: "60px", height: "60px" }}
          viewBox="0 0 60 60"
          fill="none"
        >
          <circle cx="30" cy="30" r="22" stroke="rgba(0,150,136,0.06)" strokeWidth="0.8" strokeDasharray="3 4" />
        </svg>

        {/* Tiny dots scatter — top-right zone */}
        <svg
          className="absolute"
          style={{ top: "12%", right: "25%", width: "100px", height: "100px" }}
          viewBox="0 0 100 100"
        >
          <circle cx="15" cy="15" r="2.5" fill="rgba(0,102,204,0.05)" />
          <circle cx="50" cy="10" r="2" fill="rgba(240,74,0,0.04)" />
          <circle cx="80" cy="30" r="3" fill="rgba(0,150,136,0.05)" />
          <circle cx="25" cy="60" r="2" fill="rgba(0,102,204,0.04)" />
          <circle cx="65" cy="70" r="2.5" fill="rgba(240,74,0,0.04)" />
          <circle cx="90" cy="85" r="2" fill="rgba(0,150,136,0.04)" />
        </svg>

        {/* Tiny dots scatter — bottom-left zone */}
        <svg
          className="absolute"
          style={{ bottom: "10%", left: "30%", width: "80px", height: "80px" }}
          viewBox="0 0 80 80"
        >
          <circle cx="10" cy="10" r="2" fill="rgba(240,74,0,0.04)" />
          <circle cx="40" cy="20" r="2.5" fill="rgba(0,102,204,0.05)" />
          <circle cx="70" cy="15" r="2" fill="rgba(0,150,136,0.04)" />
          <circle cx="20" cy="50" r="3" fill="rgba(0,102,204,0.04)" />
          <circle cx="55" cy="65" r="2" fill="rgba(240,74,0,0.04)" />
        </svg>
      </div>
    </div>
  );
};

export default GlobalParallaxOverlay;
