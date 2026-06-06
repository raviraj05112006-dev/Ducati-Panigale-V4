import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ducatiImage from "../assets/images/home/ducati_reveal.png";

export default function Revelation() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Typography scales from ~14vw up to ~250vw — growing far beyond the viewport
  const fontSize = useTransform(scrollYProgress, [0, 1], ["14vw", "250vw"]);

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.50, 0.75, 1],
    [1, 1, 0.4, 0.05, 0]
  )
  
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.40, 0.70, 1],
    [1, 1, 0.3, 0]
  )
  
  const vignetteOpacity = useTransform(
    scrollYProgress,
    [0, 0.30, 0.60, 1],
    [0.55, 0.55, 0.15, 0]
  )
  return (
    <>
      {/* Tall scroll container — sticky section lives inside */}
      <div ref={sectionRef} style={{ height: "350vh", position: "relative" }}>
        {/* Sticky viewport-filling wrapper */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {/* ── Layer 1: Ducati image — fixed, never moves, never scales ── */}
          <img
            src={ducatiImage}
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              zIndex: 0,
              userSelect: "none",
              pointerEvents: "none",
            }}
          />

          {/* ── Layer 2: Pure black overlay — NEVER fades, always present ── */}
          <motion.div
  style={{
    opacity: overlayOpacity,
  }}
  className="absolute inset-0 z-[1] bg-black"
/>

          {/* ── Layer 3: Transparent typography — the reveal aperture ── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              pointerEvents: "none",
            }}
          >
            <motion.span
              style={{
                fontSize,
                opacity: textOpacity,
                /*
                 * Keep aspect ratio perfectly uniform:
                 * scaleX is intentionally NOT set — font-size alone drives growth.
                 * lineHeight: 1 prevents vertical bleed from line metrics.
                 */
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
                fontFamily:"General Sans-SemiBold",

                /*
                 * bg-clip trick:
                 * The same Ducati image is set as the background of the text.
                 * background-clip: text clips it to glyph shapes only.
                 * color: transparent makes the glyphs themselves see-through,
                 * revealing Layer 1 (the real Ducati) through the black Layer 2.
                 *
                 * Because the background-size is 100vw × 100vh and the text is
                 * centered, the image framing inside the glyphs matches the image
                 * behind — so the reveal looks seamless.
                 */
                backgroundImage: `url(${ducatiImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",

                /*
                 * Optimized compositing:
                 * willChange signals GPU acceleration for smooth animations.
                 * The overlay fades early (by 0.50), ensuring the text's huge scale
                 * (250vw) is mostly revealed BEFORE the overlay becomes visible.
                 * The vignette fades in parallel to the overlay for consistency.
                 * This prevents the dark fluctuation during extreme scaling.
                 */
                willChange: "opacity, font-size",
                display: "block",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              216 HP
            </motion.span>
          </div>

          {/* ── Subtle vignette at edges for cinematic depth ── */}
          <motion.div
            style={{
              opacity: vignetteOpacity,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 3,
                background:
                  "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
                pointerEvents: "none",
              }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}