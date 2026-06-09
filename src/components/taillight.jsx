import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import taillightImage from "../assets/images/home/tail_final.webp"
import { useSpring } from "framer-motion"

const lines = [
  "Built with class",
  "Precise as a Ducati",
  "Driven with confidence",
  "Precision through every turn",
  "Engineered by La Rossa",
]

export default function Taillight() {

    const smoothY = useSpring(0, { stiffness: 40, damping: 20 })
    y: smoothY

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] bg-black"
    >

      {/* Sticky Canvas */}
      <div className="sticky top-[72px] h-[calc(100vh-72px)] overflow-hidden">

        {/* Background */}
        <img
          src={taillightImage}
          alt="Ducati Taillight"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Cinematic Tint */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Lines */}
        {lines.map((line, index) => {

          const start = index * 0.18
          const middle = start + 0.10
          const end = start + 0.20

          const y = useTransform(
            scrollYProgress,
            [start, end],
            [80,-60]
          )

          const opacity = useTransform(
            scrollYProgress,
            [start, middle, end],
            [0, 1, 0]
          )

          return (
            <motion.div
              key={index}
              style={{
                y,
                opacity,
              }}
              className="absolute inset-0 flex items-center justify-center px-8 text-center"
            >

              <h2 className="max-w-5xl font-semibold uppercase tracking-[0.14em] text-5xl sm:text-6xl md:text-7xl lg:text-9xl"
              style={{fontFamily:"Bebas"}}>
                {line}
              </h2>

            </motion.div>
          )
        })}

      </div>

    </section>
  )
}