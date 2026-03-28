import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "@/assets/hero_video.MP4";
import AnimatedCounter from "./AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 2.7, suffix: "B+", prefix: "AUD ", label: "Portfolio Value", decimals: 1 },
  { value: 35, suffix: "+", label: "Major Projects" },
];

const phrases = [
  "Risk Becomes Clarity.",
  "Decisions Become Direction.",
  "Complexity Becomes Control.",
  "Projects Become Outcomes.",
];

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const phraseRef = useRef<HTMLDivElement>(null);
  
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (!container.current) return;

    // --- Entry Animation ---
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Background fade-in & scale down
      tl.fromTo(bgRef.current, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 0.6, duration: 2.5 })
        // Midground dots/lines appearing
        .fromTo(midRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5 }, "-=1.5")
        // Staggered text reveal
        .fromTo(".hero-text", { y: 40, opacity: 0, filter: "blur(10px)" }, { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.15, duration: 1.2 }, "-=1")
        .fromTo(".hero-metric", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 1 }, "-=0.8");

      // Optional: Sweep effect across the main title
      const lightSweep = gsap.to(textRef.current, {
        backgroundPosition: "200% center",
        duration: 3,
        ease: "linear",
        repeat: -1,
        delay: 2
      });

      // --- Phrase Rotation ---
      const interval = setInterval(() => {
        gsap.to(phraseRef.current, {
          y: -20, opacity: 0, duration: 0.4, onComplete: () => {
            setPhraseIndex(i => (i + 1) % phrases.length);
            gsap.fromTo(phraseRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
          }
        });
      }, 4000);

      // --- Micro Interaction (Mouse Tracker) ---
      let xToBg = gsap.quickTo(bgRef.current, "x", { duration: 1, ease: "power3" });
      let yToBg = gsap.quickTo(bgRef.current, "y", { duration: 1, ease: "power3" });
      
      let xToMid = gsap.quickTo(midRef.current, "x", { duration: 0.8, ease: "power3" });
      let yToMid = gsap.quickTo(midRef.current, "y", { duration: 0.8, ease: "power3" });
      
      let xToFront = gsap.quickTo(frontRef.current, "x", { duration: 0.5, ease: "power3" });
      let yToFront = gsap.quickTo(frontRef.current, "y", { duration: 0.5, ease: "power3" });

      const onMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
        const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1

        xToBg(x * -15);
        yToBg(y * -15);

        xToMid(x * -30);
        yToMid(y * -30);

        xToFront(x * -10);
        yToFront(y * -10);
      };

      window.addEventListener("mousemove", onMouseMove);

      // --- Parallax on Scroll ---
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(midRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        clearInterval(interval);
        lightSweep.kill();
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="origin" className="relative h-screen overflow-hidden bg-black text-white" aria-label="Hero">
      
      {/* Layer 1: Background */}
      <div ref={bgRef} className="absolute inset-[-5%] w-[110%] h-[110%]">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
      </div>

      {/* Layer 2: Midground Elements (Blueprint dots/nodes) */}
      <div ref={midRef} className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-[15%] w-32 h-32 border border-vivid-amber/20 rounded-full" />
        <div className="absolute bottom-[30%] right-[10%] w-64 h-px bg-vivid-amber/20" />
        <div className="absolute top-[40%] right-[20%] w-1 h-1 bg-vivid-amber rounded-full shadow-[0_0_10px_2px_rgba(240,74,0,0.8)]" />
      </div>

      {/* Layer 3: Foreground Content */}
      <div ref={frontRef} className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        
        <p className="hero-text text-micro uppercase tracking-[0.25em] text-vivid-amber/80 mb-5">
          Risk-Led Project Management Consulting
        </p>

        <h1 
          ref={textRef}
          className="hero-text font-display font-bold text-transparent bg-clip-text bg-[linear-gradient(110deg,#FFFFFF,45%,#7a7a7a,55%,#FFFFFF)] bg-[length:250%_100%] leading-tight text-balance"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", marginBottom: "0.2em" }}
        >
          Where Strategy Meets Delivery.
        </h1>

        <div className="font-display font-bold leading-tight mb-4 text-center text-vivid-amber" style={{ fontSize: "clamp(1.8rem, 4.5vw, 4rem)", minHeight: "1.5em" }}>
          <div ref={phraseRef}>
            {phrases[phraseIndex]}
          </div>
        </div>

        <div className="hero-text w-24 h-px bg-vivid-amber/50 mb-6" />

        <p className="hero-text text-sm md:text-lg text-white/55 max-w-xl mb-12 px-2">
          Independent, principal-led consulting specialising in risk-led
          governance for complex infrastructure.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-20">
          {metrics.map((m, i) => (
            <div key={m.label} className="hero-metric text-center">
              <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
              <p className="text-micro uppercase tracking-widest text-white/40 mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="hero-text text-micro uppercase tracking-[0.2em] text-white/25">Scroll</span>
        <div className="hero-text w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-vivid-amber animate-bounce" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
