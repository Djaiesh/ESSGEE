import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseParallaxProps {
  triggerRef: RefObject<HTMLElement>;
  targetRef: RefObject<HTMLElement>;
  yPercent?: number;
  scale?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export const useParallax = ({
  triggerRef,
  targetRef,
  yPercent = 20,
  scale = 1,
  start = 'top bottom',
  end = 'bottom top',
  scrub = true,
}: UseParallaxProps) => {
  useEffect(() => {
    if (!triggerRef.current || !targetRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(targetRef.current, {
        yPercent,
        scale,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start,
          end,
          scrub,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [triggerRef, targetRef, yPercent, scale, start, end, scrub]);
};
