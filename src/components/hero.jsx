import heroImage from '../assets/images/home/ducati_hero_v2.webp'

export default function Hero() {
  return (
    <main
      id="home"
      className="relative mx-auto flex min-h-screen flex-col items-center overflow-hidden bg-black px-4 py-4 sm:px-8 lg:flex-row lg:px-12"
    >
      {/* Cinematic Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(61,15,18,0.08),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.68),rgba(0,0,0,0.94))]" />

      {/* Left Content */}
      <div className="relative z-10 flex w-full max-w-[600px] flex-col gap-10 pt-8 lg:pt-0 lg:-ml-5">
        {/* Mobile Image */}
<div className="mb-8 w-full sm:hidden">
  <img
    src={heroImage}
    alt="Ducati Panigale V4"
    className="h-auto w-full rounded-2xl object-cover"
  />
</div>
        <div className="max-w-xl space-y-9">
          <p className="text-sm  uppercase sm:tracking-[0.1em] lg:tracking-[0.4em] text-zinc-400/90 sm:mt-10 lg:mt-12"
          style={{fontFamily: "General Sans-Medium"}}>
            Italian performance · luxury engineering
          </p>

          <h1 className="font-semibold uppercase leading-[0.92] tracking-[0.11em] text-zinc-100 text-3xl sm:text-5xl md:text-6xl lg:text-8xl"
          style={{fontFamily: "bebas"}}>
            PANIGALE V4
          </h1>

          <p className="max-w-xl text-lg italic text-zinc-400/85 sm:text-xl lg:text-2xl"
          style={{fontFamily: "General Sans-Light"}}>
            Fortitudo mea in levitate
          </p>

          <p className="max-w-2xl border-l border-white/10 pl-6 text-lg uppercase tracking-[0.34em] text-zinc-400/90"
          style={{fontFamily: "General Sans-Bold"}}>
            "My strength is in lightness."
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="pointer-events-none absolute right-0 top-1/2 z-0 hidden h-[86vh] w-[53vw] -translate-y-1/2 overflow-hidden rounded-l-[60px] sm:block">
        
        <img
          src={heroImage}
          alt="Ducati Panigale V4"
          className="h-full w-full scale-[1.04] object-cover object-[85%_center] brightness-[0.92] contrast-[1.08]"
        />


        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />
      </div>
    </main>
  )
}