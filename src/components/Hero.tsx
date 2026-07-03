import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "@/assets/hero_video.MP4";
import AnimatedCounter from "./AnimatedCounter";
import { Link } from "react-router-dom";
import { metrics } from "@/data/siteContent";

gsap.registerPlugin(ScrollTrigger);

const phrases = [
  "Strategy Creates Direction.",
  "Governance Builds Confidence.",
  "Delivery Ensures Outcomes.",
  "Sustainability Drives Value.",
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

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(bgRef.current, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 0.78, duration: 2.5 })
        .fromTo(midRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5 }, "-=1.5")
        .fromTo(".hero-text", { y: 40, opacity: 0, filter: "blur(10px)" }, { y: 0, opacity: 1, filter: "blur(0px)", clearProps: "filter", stagger: 0.15, duration: 1.2 }, "-=1")
        .fromTo(".hero-metric", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 1 }, "-=0.8");

      const lightSweep = gsap.to(textRef.current, {
        backgroundPosition: "200% center",
        duration: 3,
        ease: "linear",
        repeat: -1,
        delay: 2
      });

      const interval = setInterval(() => {
        gsap.to(phraseRef.current, {
          y: -20, opacity: 0, duration: 0.4, onComplete: () => {
            setPhraseIndex(i => (i + 1) % phrases.length);
            gsap.fromTo(phraseRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
          }
        });
      }, 4000);

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
        clearInterval(interval);
        lightSweep.kill();
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="origin" className="relative min-h-screen lg:h-screen overflow-hidden bg-black text-white" aria-label="Hero">
      
      {/* Layer 1: Background */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        {/* @ts-ignore */}
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          fetchpriority="high"
          preload="auto"
          className="w-full h-full object-cover opacity-90 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/25" />
      </div>

      {/* Layer 2: Midground Elements */}
      <div ref={midRef} className="absolute inset-0 pointer-events-none opacity-40">
      </div>

      {/* Layer 3: Foreground Content */}
      <div ref={frontRef} className="relative z-10 min-h-screen lg:h-full flex flex-col justify-center items-center text-center px-6 pt-28 pb-12 lg:pt-48 lg:pb-24">

        <h1 
          ref={textRef}
          className="hero-text font-display font-bold text-transparent bg-clip-text bg-[linear-gradient(110deg,#FFFFFF,45%,#7a7a7a,55%,#FFFFFF)] bg-[length:250%_100%] leading-tight text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", marginBottom: "0.2em" }}
        >
          Sustainability Through Strategy!
        </h1>

        <div className="font-display font-bold leading-tight mb-4 text-center text-vivid-amber drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]" style={{ fontSize: "clamp(1.8rem, 4.5vw, 4rem)", minHeight: "1.5em" }}>
          <div ref={phraseRef}>
            {phrases[phraseIndex]}
          </div>
        </div>

        <div className="hero-text w-24 h-px bg-vivid-amber/50 mb-6" />

        <p className="hero-text text-sm md:text-base font-semibold text-white/90 mb-2 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          Bridging Strategy, Governance and Delivery
        </p>

        <p className="hero-text text-sm md:text-lg text-white/75 max-w-3xl mb-8 lg:mb-12 px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] leading-relaxed">
          ESSGEE Projects acknowledges the Traditional Custodians of the lands on which we live, work and deliver projects across Australia. We pay our respects to Elders past and present and recognise their continuing connection to land, waters, culture and community. We extend that respect to all Aboriginal and Torres Strait Islander peoples.
        </p>

        <div className="hero-text mb-8 lg:mb-12 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Link to="/contact#connect" className="btn-pop animate-pulse hover:animate-none w-full sm:w-auto">Discuss Your Opportunity</Link>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {metrics.slice(0, 3).map((m) => (
            <div key={m.label} className="hero-metric text-center">
              <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
              <p className="text-micro uppercase tracking-widest text-white/40 mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
