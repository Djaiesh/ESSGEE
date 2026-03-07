import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedCounter from "./AnimatedCounter";

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
  // 3 phases: "zoom" → image animating, "content" → text visible, triggered after zoom
  const [showContent, setShowContent] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [showPhrase, setShowPhrase] = useState(false);

  useEffect(() => {
    // Step 1: after zoom completes, show static content
    const t1 = setTimeout(() => setShowContent(true), 1700);
    // Step 2: after a beat, start rotating phrases
    const t2 = setTimeout(() => setShowPhrase(true), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Phrase rotation interval — only runs after showPhrase is true
  useEffect(() => {
    if (!showPhrase) return;
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }, 3600);
    return () => clearInterval(id);
  }, [showPhrase]);

  return (
    <section
      id="origin"
      className="relative h-screen overflow-hidden bg-black"
      aria-label="Hero"
    >
      {/* ── Construction site — zooms out cinematically ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.55 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={heroBg}
          alt="Major infrastructure construction site"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* ── Dark overlay fades in ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.84 }}
        style={{ background: "hsl(210 28% 8%)" }}
        transition={{ delay: 0.4, duration: 1.8, ease: "easeInOut" }}
      />

      {/* ── Amber glow at bottom ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
        style={{ background: "linear-gradient(to top, hsla(19,100%,47%,0.07) 0%, transparent 100%)" }}
      />

      {/* ── Cinematic letterbox bars ── */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20 bg-black"
        initial={{ height: "12vh" }} animate={{ height: 0 }}
        transition={{ delay: 0.1, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 bg-black"
        initial={{ height: "12vh" }} animate={{ height: 0 }}
        transition={{ delay: 0.1, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

        {/* Eyebrow */}
        <AnimatePresence>
          {showContent && (
            <motion.p
              key="eyebrow"
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-micro uppercase tracking-[0.25em] text-vivid-amber/80 mb-5"
            >
              {/* Risk-Led Project Management Consulting */}
            </motion.p>
          )}
        </AnimatePresence>

        {/* LINE 1 — static */}
        <AnimatePresence>
          {showContent && (
            <motion.h1
              key="line1"
              initial={{ opacity: 0, y: 36, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.1, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-white text-balance leading-tight"
              style={{ fontSize: "clamp(1.6rem, 4.5vw, 3.8rem)", marginBottom: "0.2em" }}
            >
              Where Strategy Meets Delivery.
            </motion.h1>
          )}
        </AnimatePresence>

        {/* LINE 2 — rotating orange phrases */}
        <div
          className="font-display font-bold leading-tight mb-4 text-center"
          style={{ fontSize: "clamp(1.6rem, 4.5vw, 3.8rem)", minHeight: "1.5em" }}
        >
          <AnimatePresence mode="wait">
            {showPhrase && (
              <motion.span
                key={phraseIndex}
                initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "block" }}
                className="text-vivid-amber"
              >
                {phrases[phraseIndex]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Divider */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              key="divider"
              className="bg-vivid-amber/50 mb-4"
              style={{ height: "1px" }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
        </AnimatePresence>

        {/* Body text */}
        <AnimatePresence>
          {showContent && (
            <motion.p
              key="body"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-body-lg text-white/55 max-w-xl mb-10 px-2"
            >
              Independent, principal-led consulting specialising in risk-led
              governance for complex infrastructure.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Metrics */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              key="metrics"
              className="flex flex-wrap justify-center gap-8 md:gap-20"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                >
                  <AnimatedCounter
                    value={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    decimals={m.decimals}
                  />
                  <p className="text-micro uppercase tracking-widest text-white/40 mt-2">
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Scroll indicator ── */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <span className="text-micro uppercase tracking-[0.2em] text-white/25">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-vivid-amber"
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
