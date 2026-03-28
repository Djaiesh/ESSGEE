import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationProps {
  triggerRef: RefObject<HTMLElement>;
  childrenSelector: string;
  start?: string;
  stagger?: number;
  y?: number;
}

export const useScrollAnimation = ({
  triggerRef,
  childrenSelector,
  start = 'top 85%',
  stagger = 0.1,
  y = 40,
}: UseScrollAnimationProps) => {
  useEffect(() => {
    if (!triggerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(childrenSelector, triggerRef.current);
      if (elements.length === 0) return;

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: y,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
          stagger: stagger,
          scrollTrigger: {
            trigger: triggerRef.current,
            start,
            toggleActions: 'play none none reverse', // Optional: replay on scroll up? 'play none none none' is safer for performance.
          },
        }
      );
    }, triggerRef);

    return () => ctx.revert();
  }, [triggerRef, childrenSelector, start, stagger, y]);
};
