import sideProfile from "../assets/images/home/ducati_side_profile.webp"
import Hotspot from "./hotspot";
import { Link } from "react-router-dom";

export default function SpecsHighlight() {

  return (

    <section className="relative min-h-screen bg-black overflow-hidden">

      {/* Section Heading */}
      <div className="pt-28 pb-12 text-center">

        <p
          className="
            text-sm
            tracking-[0.35em]
            uppercase
            text-neutral-500
            mb-4
          "
        >
          ENGINEERED IN DETAIL
        </p>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-light
            tracking-[-0.04em]
            text-white
          "
        >
          All Highlights At A Glance.
        </h2>

      </div>

      {/* Bike Image */}
      <div
        className="
          relative
          w-full
          flex
          items-center
          justify-center
          px-6
          md:px-12
          pb-24
        "
      >

        <img
          src={sideProfile}
          alt="Ducati Panigale V4 Side Profile"
          className="
            w-full
            max-w-[1600px]
            h-[500px]
            object-cover
            object-[center_85%]
            select-none
            pointer-events-none
          "
        />

        <Hotspot
        label="BREMBO BRAKING"
        x="29%"
        y="64%"
        side="left"
        lineWidth="w-20"
        target="brakes"
        />

        <Hotspot
        label="DESMOSEDICI STRADALE"
        x="50%"
        y="50%"
        side="right"
        lineWidth="w-90"
        target="engine"
        />

        <Hotspot
        label="AERODYNAMIC WINGLET"
        x="72%"
        y="38%"
        side="right"
        lineWidth="w-20"
        target="aero"
        />

        <Hotspot
        label="ÖHLINS SUSPENSION"
        x="69%"
        y="52%"
        side="right"
        lineWidth="w-30"
        target="suspension"
        />

        <Hotspot
        label="AKRAPOVIČ EXHAUST"
        x="40%"
        y="67%"
        side="left"
        lineWidth="w-30"
        target="exhaust"
        />

        <Hotspot
        label="PIRELLI PERFORMANCE TYRES"
        x="28%"
        y="37%"
        side="left"
        lineWidth="w-15"
        target="tyres"
        />

      </div>

      <div className="flex relative z-30 flex justify-center pb-10 lg:-mt-15">
  <Link
    to="/machine"
    onClick={()=> window.scrollTo(0,0)}
    className="
      group
      text-white/70
      uppercase
      tracking-[0.35em]
      text-sm
      transition-all
      duration-300
      hover:text-white
    "
  >
    Explore Engineering

    <span
      className="
        ml-3
        inline-block
        transition-transform
        duration-300
        group-hover:translate-x-2
      "
    >
      →
    </span>
  </Link>
</div>

    </section>

  )
}