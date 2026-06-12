import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ParallaxBackground — A multi-layer 3D scrolling background texture system.
 *
 * Includes:
 * - Ambient gradient mesh (multiple overlapping radial gradients for depth)
 * - Subtle noise texture overlay
 * - Dotted grid pattern
 * - Diagonal gradient bands
 * - Floating geometric shapes (rings, orbs, crosses, dashes, diamonds)
 *   across 3 depth layers that move at different scroll speeds
 *
 * @param variant - "light" | "dark" to match section color scheme.
 */
interface ParallaxBackgroundProps {
  variant?: "light" | "dark";
}

const ParallaxBackground = ({ variant = "light" }: ParallaxBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isDark = variant === "dark";

  // Color palette based on variant
  const colors = isDark
    ? {
        ring1: "rgba(0,102,204,0.14)",
        ring2: "rgba(240,74,0,0.12)",
        orb1: "rgba(0,150,136,0.10)",
        orb2: "rgba(0,102,204,0.08)",
        dash: "rgba(255,255,255,0.06)",
        cross: "rgba(240,74,0,0.10)",
        diamond: "rgba(0,150,136,0.12)",
        dot: "rgba(255,255,255,0.05)",
      }
    : {
        ring1: "rgba(0,102,204,0.10)",
        ring2: "rgba(240,74,0,0.08)",
        orb1: "rgba(0,150,136,0.08)",
        orb2: "rgba(0,102,204,0.06)",
        dash: "rgba(26,28,35,0.05)",
        cross: "rgba(240,74,0,0.06)",
        diamond: "rgba(0,150,136,0.08)",
        dot: "rgba(26,28,35,0.04)",
      };

  // Gradient mesh colors for ambient background richness
  const gradients = isDark
    ? {
        // Dark section: deeper, richer glows
        mesh1: "radial-gradient(ellipse 90% 70% at 12% 18%, rgba(0,102,204,0.28) 0%, transparent 65%)",
        mesh2: "radial-gradient(ellipse 80% 85% at 88% 78%, rgba(240,74,0,0.22) 0%, transparent 65%)",
        mesh3: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,150,136,0.16) 0%, transparent 60%)",
        mesh4: "radial-gradient(ellipse 95% 50% at 28% 82%, rgba(0,102,204,0.18) 0%, transparent 55%)",
        mesh5: "radial-gradient(ellipse 60% 75% at 78% 12%, rgba(240,74,0,0.14) 0%, transparent 60%)",
        diagonalBand: "linear-gradient(135deg, transparent 0%, rgba(0,102,204,0.10) 20%, transparent 45%, rgba(240,74,0,0.08) 70%, transparent 100%)",
        dotGrid: "radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)",
        noiseOpacity: 0.04,
      }
    : {
        // Light section: richer warm atmospheric glows
        mesh1: "radial-gradient(ellipse 90% 70% at 8% 12%, rgba(0,102,204,0.16) 0%, transparent 65%)",
        mesh2: "radial-gradient(ellipse 80% 85% at 92% 82%, rgba(240,74,0,0.12) 0%, transparent 65%)",
        mesh3: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(0,150,136,0.10) 0%, transparent 60%)",
        mesh4: "radial-gradient(ellipse 95% 50% at 22% 88%, rgba(0,102,204,0.12) 0%, transparent 55%)",
        mesh5: "radial-gradient(ellipse 60% 75% at 82% 8%, rgba(240,74,0,0.08) 0%, transparent 60%)",
        diagonalBand: "linear-gradient(135deg, transparent 0%, rgba(0,102,204,0.06) 20%, transparent 45%, rgba(240,74,0,0.04) 70%, transparent 100%)",
        dotGrid: "radial-gradient(rgba(0,0,0,0.05) 1.5px, transparent 1.5px)",
        noiseOpacity: 0.035,
      };

  useEffect(() => {
    if (!containerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Layer 1 (far background): slowest parallax — large shapes
      gsap.to(".plx-layer-1", {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Layer 2 (mid background): medium speed
      gsap.to(".plx-layer-2", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3,
        },
      });

      // Layer 3 (near foreground): fastest parallax — small accents
      gsap.to(".plx-layer-3", {
        yPercent: -80,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.2,
        },
      });

      // Subtle continuous rotation on rings
      gsap.to(".plx-rotate", {
        rotation: 360,
        ease: "none",
        duration: 90,
        repeat: -1,
      });

      // Gentle pulse on orbs
      gsap.to(".plx-pulse", {
        scale: 1.15,
        opacity: 0.7,
        ease: "sine.inOut",
        duration: 6,
        repeat: -1,
        yoyo: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* ═══════════ AMBIENT GRADIENT MESH — Static Rich Background ═══════════ */}
      <div className="absolute inset-0">
        {/* Multi-point gradient mesh — overlapping elliptical gradients for depth */}
        <div className="absolute inset-0" style={{ background: gradients.mesh1 }} />
        <div className="absolute inset-0" style={{ background: gradients.mesh2 }} />
        <div className="absolute inset-0" style={{ background: gradients.mesh3 }} />
        <div className="absolute inset-0" style={{ background: gradients.mesh4 }} />
        <div className="absolute inset-0" style={{ background: gradients.mesh5 }} />

        {/* Diagonal gradient band — adds a sweeping directional flow */}
        <div className="absolute inset-0" style={{ background: gradients.diagonalBand }} />

        {/* Dotted grid pattern — adds fine texture/grain */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: gradients.dotGrid,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Noise texture overlay — SVG-based fine grain for premium feel */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: gradients.noiseOpacity }}>
          <filter id={`noise-${variant}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter={`url(#noise-${variant})`} />
        </svg>
      </div>

      {/* ═══════════ LAYER 1 — Far Background (slowest) ═══════════ */}
      <div className="plx-layer-1 absolute inset-0" style={{ willChange: "transform" }}>
        {/* Large ring — top left */}
        <svg
          className="plx-rotate absolute"
          style={{ top: "5%", left: "-5%", width: "400px", height: "400px" }}
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="160" stroke={colors.ring1} strokeWidth="1.5" strokeDasharray="8 12" />
          <circle cx="200" cy="200" r="120" stroke={colors.ring1} strokeWidth="0.8" />
        </svg>

        {/* Large ring — bottom right */}
        <svg
          className="plx-rotate absolute"
          style={{ bottom: "0%", right: "-8%", width: "500px", height: "500px", animationDirection: "reverse" }}
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="250" cy="250" r="200" stroke={colors.ring2} strokeWidth="1.5" strokeDasharray="12 16" />
          <circle cx="250" cy="250" r="150" stroke={colors.ring2} strokeWidth="0.8" strokeDasharray="4 8" />
        </svg>

        {/* Soft large orb glow — center-left */}
        <div
          className="plx-pulse absolute rounded-full"
          style={{
            top: "25%",
            left: "5%",
            width: "450px",
            height: "450px",
            background: `radial-gradient(circle, ${colors.orb1} 0%, transparent 65%)`,
          }}
        />

        {/* Soft large orb glow — lower right */}
        <div
          className="plx-pulse absolute rounded-full"
          style={{
            top: "55%",
            right: "0%",
            width: "500px",
            height: "500px",
            background: `radial-gradient(circle, ${colors.orb2} 0%, transparent 65%)`,
          }}
        />

        {/* Extra glow — top right */}
        <div
          className="plx-pulse absolute rounded-full"
          style={{
            top: "-10%",
            right: "15%",
            width: "350px",
            height: "350px",
            background: isDark
              ? "radial-gradient(circle, rgba(240,74,0,0.07) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(240,74,0,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ═══════════ LAYER 2 — Mid Depth (medium speed) ═══════════ */}
      <div className="plx-layer-2 absolute inset-0" style={{ willChange: "transform" }}>
        {/* Medium ring — top right */}
        <svg
          className="plx-rotate absolute"
          style={{ top: "15%", right: "10%", width: "200px", height: "200px" }}
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="80" stroke={colors.ring1} strokeWidth="1" strokeDasharray="6 10" />
        </svg>

        {/* Diamond shape — left center */}
        <svg
          className="absolute"
          style={{ top: "45%", left: "15%", width: "60px", height: "60px", opacity: 0.7 }}
          viewBox="0 0 60 60"
          fill="none"
        >
          <rect
            x="30"
            y="4"
            width="36"
            height="36"
            rx="2"
            transform="rotate(45 30 4)"
            stroke={colors.diamond}
            strokeWidth="1.5"
          />
        </svg>

        {/* Horizontal dashes — scattered */}
        <svg
          className="absolute"
          style={{ top: "25%", left: "50%", width: "120px", height: "20px" }}
          viewBox="0 0 120 20"
        >
          <line x1="0" y1="10" x2="30" y2="10" stroke={colors.dash} strokeWidth="2" strokeLinecap="round" />
          <line x1="45" y1="10" x2="75" y2="10" stroke={colors.dash} strokeWidth="2" strokeLinecap="round" />
          <line x1="90" y1="10" x2="120" y2="10" stroke={colors.dash} strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Cross motif — bottom left */}
        <svg
          className="absolute"
          style={{ bottom: "20%", left: "25%", width: "40px", height: "40px", opacity: 0.6 }}
          viewBox="0 0 40 40"
        >
          <line x1="20" y1="4" x2="20" y2="36" stroke={colors.cross} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="4" y1="20" x2="36" y2="20" stroke={colors.cross} strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        {/* Small ring — bottom center */}
        <svg
          className="plx-rotate absolute"
          style={{ bottom: "10%", left: "55%", width: "100px", height: "100px" }}
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="35" stroke={colors.ring2} strokeWidth="1" />
        </svg>

        {/* Vertical dashes — right side */}
        <svg
          className="absolute"
          style={{ top: "55%", right: "20%", width: "20px", height: "100px" }}
          viewBox="0 0 20 100"
        >
          <line x1="10" y1="0" x2="10" y2="25" stroke={colors.dash} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10" y1="40" x2="10" y2="65" stroke={colors.dash} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10" y1="80" x2="10" y2="100" stroke={colors.dash} strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        {/* Mid orb — center */}
        <div
          className="plx-pulse absolute rounded-full"
          style={{
            top: "40%",
            left: "40%",
            width: "300px",
            height: "300px",
            background: isDark
              ? "radial-gradient(circle, rgba(0,150,136,0.06) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(0,150,136,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ═══════════ LAYER 3 — Near Foreground (fastest) ═══════════ */}
      <div className="plx-layer-3 absolute inset-0" style={{ willChange: "transform" }}>
        {/* Tiny dots cluster — top */}
        <svg
          className="absolute"
          style={{ top: "10%", left: "40%", width: "80px", height: "80px" }}
          viewBox="0 0 80 80"
        >
          <circle cx="10" cy="10" r="2.5" fill={colors.dot} />
          <circle cx="30" cy="20" r="2" fill={colors.dot} />
          <circle cx="50" cy="8" r="3" fill={colors.dot} />
          <circle cx="70" cy="25" r="2" fill={colors.dot} />
          <circle cx="20" cy="50" r="2.5" fill={colors.dot} />
          <circle cx="60" cy="55" r="2" fill={colors.dot} />
          <circle cx="40" cy="70" r="3" fill={colors.dot} />
        </svg>

        {/* Small cross — top right */}
        <svg
          className="absolute"
          style={{ top: "8%", right: "30%", width: "24px", height: "24px", opacity: 0.5 }}
          viewBox="0 0 24 24"
        >
          <line x1="12" y1="2" x2="12" y2="22" stroke={colors.cross} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2" y1="12" x2="22" y2="12" stroke={colors.cross} strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        {/* Small diamond — mid-right */}
        <svg
          className="absolute"
          style={{ top: "50%", right: "12%", width: "30px", height: "30px", opacity: 0.5 }}
          viewBox="0 0 30 30"
          fill="none"
        >
          <rect
            x="15"
            y="2"
            width="18"
            height="18"
            rx="1"
            transform="rotate(45 15 2)"
            stroke={colors.diamond}
            strokeWidth="1"
          />
        </svg>

        {/* Tiny dashes — lower left */}
        <svg
          className="absolute"
          style={{ bottom: "30%", left: "8%", width: "60px", height: "10px" }}
          viewBox="0 0 60 10"
        >
          <line x1="0" y1="5" x2="15" y2="5" stroke={colors.dash} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="25" y1="5" x2="40" y2="5" stroke={colors.dash} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="50" y1="5" x2="60" y2="5" stroke={colors.dash} strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        {/* Dots cluster — bottom right */}
        <svg
          className="absolute"
          style={{ bottom: "15%", right: "25%", width: "60px", height: "60px" }}
          viewBox="0 0 60 60"
        >
          <circle cx="10" cy="15" r="2" fill={colors.dot} />
          <circle cx="30" cy="10" r="2.5" fill={colors.dot} />
          <circle cx="50" cy="20" r="2" fill={colors.dot} />
          <circle cx="20" cy="40" r="3" fill={colors.dot} />
          <circle cx="45" cy="50" r="2" fill={colors.dot} />
        </svg>

        {/* Small ring — center */}
        <svg
          className="plx-rotate absolute"
          style={{ top: "35%", left: "70%", width: "50px", height: "50px" }}
          viewBox="0 0 50 50"
          fill="none"
        >
          <circle cx="25" cy="25" r="18" stroke={colors.ring1} strokeWidth="0.8" strokeDasharray="3 5" />
        </svg>
      </div>
    </div>
  );
};

export default ParallaxBackground;
