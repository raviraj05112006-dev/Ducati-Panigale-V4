import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Taillight from "../components/taillight"
import Manifesto from "../components/manifesto"
import Reveal from "../components/revelation"
import SpecsHighlight from "../components/SpecsHighlight"
import { Routes, Route } from "react-router-dom"
import Machine from "../pages/machine"

export default function App() {
  return (
    <>
      <Navbar />
      {/* Global Italian Accent */}
<div className="pointer-events-none fixed left-0 top-[61px] lg:top-[61px] z-[9999] flex h-[5px] w-40 overflow-visible">

  <span className="w-1/3 bg-[#009246]" />

  <span className="w-1/3 bg-[#f1f1f1]" />

  <div
    className="w-1/3 bg-[#ce2b37]"
    style={{
      clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)",
    }}
  />

</div>
      <Hero />
      <Taillight />
      <Manifesto />
      <Reveal />
      <SpecsHighlight />
    </>
  )
}