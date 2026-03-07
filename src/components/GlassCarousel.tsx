import { useRef, useEffect, useCallback, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  children: ReactNode[];
  className?: string;
}

const GlassCarousel = ({ children, className = "" }: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);          // current scroll position in px
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const speed = 0.6;                    // px per frame (~36px/s at 60fps)

  // Duplicate items for seamless loop
  const allItems = [...children, ...children];

  const getHalfWidth = () => {
    const track = trackRef.current;
    if (!track) return 0;
    // Half width = width of the original (non-duplicated) set
    return track.scrollWidth / 2;
  };

  const applyOffset = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
    }
  };

  const tick = useCallback(() => {
    if (!pausedRef.current) {
      offsetRef.current += speed;
      const half = getHalfWidth();
      if (half > 0 && offsetRef.current >= half) {
        offsetRef.current -= half; // seamless reset
      }
      applyOffset();
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const nudge = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    // Measure one card width (first child of track)
    const card = track.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 24 : 340; // 24 = gap
    const half = getHalfWidth();

    if (dir === "right") {
      offsetRef.current = (offsetRef.current + cardWidth) % (half || cardWidth);
    } else {
      offsetRef.current = (offsetRef.current - cardWidth + (half || cardWidth)) % (half || cardWidth);
    }
    applyOffset();
  };

  return (
    <div className={`relative ${className}`}>
      {/* Left arrow */}
      <button
        onClick={() => nudge("left")}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/15 transition-all duration-300 hover:scale-110 hover:border-vivid-amber"
        style={{ background: "hsla(210, 28%, 28%, 0.6)" }}
        aria-label="Previous sector"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => nudge("right")}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/15 transition-all duration-300 hover:scale-110 hover:border-vivid-amber"
        style={{ background: "hsla(210, 28%, 28%, 0.6)" }}
        aria-label="Next sector"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-4 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-slate-navy to-transparent" />
      <div className="absolute right-0 top-0 bottom-4 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-slate-navy to-transparent" />

      {/* Overflow mask */}
      <div className="overflow-hidden pb-4">
        {/* Track — JS-controlled transform */}
        <div
          ref={trackRef}
          className="flex gap-6"
          style={{ width: "max-content", willChange: "transform" }}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {allItems.map((child, i) => (
            <div
              key={i}
              className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw]"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlassCarousel;
