import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import moreVideo from "../assets/more.mp4";
import logo from "../assets/essgee_logo.jpeg";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const container = useRef<HTMLDivElement>(null);
  const videoContainer = useRef<HTMLDivElement>(null);
  const contentContainer = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ onComplete });

      // Initialize initial states for GSAP animation
      gsap.set(logoRef.current, { scale: 0.8, opacity: 0 });
      gsap.set([titleRef.current, subtitleRef.current], { y: 15, opacity: 0 });
      gsap.set(progressContainerRef.current, { y: 10, opacity: 0 });
      gsap.set(progressBarRef.current, { width: "0%" });

      timeline
        // 1. Fade in the ambient layout & logo
        .to(logoRef.current, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" })
        // 2. Fade in text elements
        .to(titleRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.4")
        .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.3")
        // 3. Fade in progress bar
        .to(progressContainerRef.current, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.2");

      // Fade in the background video (desktop only)
      if (videoContainer.current) {
        timeline.fromTo(
          videoContainer.current,
          { opacity: 0 },
          { opacity: 0.35, duration: 1.0, ease: "power2.out" },
          0 // start at time 0
        );
      }

      // 4. Progress bar counter animation
      const progressObj = { value: 0 };
      timeline.to(progressObj, {
        value: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          const currentVal = Math.floor(progressObj.value);
          if (percentTextRef.current) {
            percentTextRef.current.innerText = `${currentVal}%`;
          }
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${currentVal}%`;
          }
        }
      });

      // 5. Hold state briefly to confirm completion
      timeline.to({}, { duration: 0.4 });

      // 6. Transition out (fade out elements, slide up preloader)
      timeline
        .to(contentContainer.current, { opacity: 0, y: -20, duration: 0.5, ease: "power2.in" })
        .to(videoContainer.current, { opacity: 0, duration: 0.4, ease: "power2.in" }, "-=0.5")
        .to(container.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "-=0.2");
    }, container);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[110] bg-slate-navy overflow-hidden flex flex-col items-center justify-center px-6"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* Ambient Radial Glows (Beautiful modern look, works great on mobile) */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-vivid-amber/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-teal-accent/5 blur-[120px] pointer-events-none" />

      {/* Background Video (Desktop only to prevent mobile performance / loading issues) */}
      <div
        ref={videoContainer}
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-35"
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.4]"
          src={moreVideo}
        />
      </div>

      {/* Centered Premium Content */}
      <div ref={contentContainer} className="relative z-10 flex flex-col items-center text-center">
        {/* Logo with clean glowing glassmorphic wrapper */}
        <div
          ref={logoRef}
          className="w-24 h-24 md:w-28 md:h-28 rounded-2xl p-1 bg-gradient-to-tr from-white/10 to-white/5 border border-white/20 shadow-[0_0_40px_rgba(245,158,11,0.15)] backdrop-blur-md mb-6 flex items-center justify-center overflow-hidden"
        >
          <img
            src={logo}
            alt="ESSGEE Projects"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-xl md:text-2xl font-bold tracking-[0.25em] font-display text-vivid-amber uppercase mb-2"
        >
          ESSGEE PROJECTS
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-[10px] md:text-xs tracking-[0.35em] font-body text-white/50 uppercase mb-8"
        >
          Sustainability Through Strategy
        </p>

        {/* Progress Section */}
        <div ref={progressContainerRef} className="flex flex-col items-center gap-3">
          {/* Progress Bar Track */}
          <div className="w-48 md:w-56 h-[3px] bg-white/10 rounded-full overflow-hidden relative">
            <div
              ref={progressBarRef}
              className="absolute left-0 top-0 bottom-0 bg-vivid-amber shadow-[0_0_10px_rgba(245,158,11,0.5)] rounded-full transition-all duration-75"
            />
          </div>

          {/* Percentage Counter */}
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] font-body text-vivid-amber/90">
            <span ref={percentTextRef}>0%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

