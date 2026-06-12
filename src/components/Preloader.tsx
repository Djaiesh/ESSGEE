import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import moreVideo from "../assets/more.mp4";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const container = useRef<HTMLDivElement>(null);
  const videoContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ onComplete });

      timeline
        // 1. Fade in the background video
        .fromTo(
          videoContainer.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.2, ease: "power2.out" }
        )
        // 2. Hold screen state to showcase the video
        .to({}, { duration: 3.5 })
        // 3. Transition out (fade out video and slide up preloader)
        .to(videoContainer.current, { opacity: 0, duration: 0.6, ease: "power2.in" })
        .to(container.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "-=0.2");
    }, container);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={container} className="fixed inset-0 z-[110] bg-slate-navy overflow-hidden">
      {/* Background Video */}
      <div ref={videoContainer} className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen">
        <video autoPlay muted playsInline loop className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.4]" src={moreVideo} />
      </div>
    </div>
  );
};
