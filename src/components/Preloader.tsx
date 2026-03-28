import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const container = useRef<HTMLDivElement>(null);
  const gridLinesH = useRef<HTMLDivElement>(null);
  const gridLinesV = useRef<HTMLDivElement>(null);
  const essgeeText = useRef<HTMLDivElement>(null);
  const taglineText = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete(); // Unmount or trigger next sequence
        },
      });

      // 1. Grid building
      tl.fromTo(
        ".h-line",
        { scaleX: 0, transformOrigin: "left center", opacity: 0 },
        { scaleX: 1, opacity: 0.15, duration: 1.2, ease: "power4.inOut", stagger: 0.05 }
      )
      .fromTo(
        ".v-line",
        { scaleY: 0, transformOrigin: "top center", opacity: 0 },
        { scaleY: 1, opacity: 0.15, duration: 1.2, ease: "power4.inOut", stagger: 0.05 },
        "-=1.2"
      )
      // 2. Subtle pulse glow
      .to(glow.current, { opacity: 0.4, duration: 0.8, ease: "power2.out" }, "-=0.6")
      // 3. Text reveal for ESSGEE
      .fromTo(
        ".char",
        { yPercent: 100 },
        { yPercent: 0, duration: 0.8, ease: "power4.out", stagger: 0.08 },
        "-=0.4"
      )
      // 4. Tagline fades in
      .fromTo(
        taglineText.current,
        { opacity: 0, filter: "blur(4px)" },
        { opacity: 1, filter: "blur(0px)", duration: 0.8 },
        "-=0.3"
      )
      // 5. Exit sequence: text moves out
      .to(".char", { yPercent: -100, duration: 0.6, ease: "power3.in", stagger: 0.04 }, "+=0.5")
      .to(taglineText.current, { opacity: 0, duration: 0.4 }, "<")
      // 6. Grid dissolves and background slides up
      .to(".h-line, .v-line", { opacity: 0, duration: 0.4 }, "<")
      .to(container.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      }, "-=0.2");

    }, container);

    return () => ctx.revert();
  }, [onComplete]);

  // Split text for individual character animation
  const chars = "ESSGEE".split("");

  return (
    <div
      ref={container}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Glow */}
      <div
        ref={glow}
        className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-vivid-amber rounded-full blur-[120px] opacity-0 mix-blend-screen pointer-events-none"
      />

      {/* Blueprint Grid Lines (Horizontal) */}
      <div ref={gridLinesH} className="absolute inset-0 flex flex-col justify-between py-[10vh] pointer-events-none opacity-60">
        {[...Array(10)].map((_, i) => (
          <div key={`h-${i}`} className="h-line w-full h-[1px] bg-vivid-amber" />
        ))}
      </div>

      {/* Blueprint Grid Lines (Vertical) */}
      <div ref={gridLinesV} className="absolute inset-0 flex justify-between px-[10vw] pointer-events-none opacity-60">
        {[...Array(10)].map((_, i) => (
          <div key={`v-${i}`} className="v-line w-[1px] h-full bg-vivid-amber" />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Masked Text container */}
        <div ref={essgeeText} className="overflow-hidden flex">
          {chars.map((char, index) => (
            <span
              key={index}
              className="char font-display font-medium text-white tracking-[0.1em]"
              style={{ fontSize: "clamp(4rem, 12vw, 8rem)", lineHeight: 1 }}
            >
              {char}
            </span>
          ))}
        </div>
        
        {/* Tagline */}
        <div 
          ref={taglineText}
          className="mt-6 font-display text-vivid-amber text-sm sm:text-base md:text-xl font-light tracking-widest uppercase opacity-0"
        >
          Engineering Governance. Delivered.
        </div>
      </div>
    </div>
  );
};
