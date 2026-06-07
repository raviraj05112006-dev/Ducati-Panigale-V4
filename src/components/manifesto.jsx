import mainBike from "../assets/images/home/side_front.webp"
import detailShot from "../assets/images/home/top_logo_flex.webp"
import topView from "../assets/images/home/top_front.webp"
import logoDesigned from "../assets/images/home/ducati_logo_designed.webp"
export default function Manifesto() {
return (
<section className="bg-black px-6 py-28 sm:px-10 lg:px-16">
	<div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
		<div className="flex flex-col justify-between gap-12 lg:gap-16">
			<div className="max-w-xl">
				<h2 className="text-5xl font-light uppercase leading-[1.06] tracking-[0.08em] text-zinc-100 sm:text-6xl md:text-7xl"
				style={{fontFamily: "General Sans-Light"}}>
					La velocità incontra l’eleganza.
				</h2>
				<p className="mt-8 text-sm uppercase tracking-[0.36em] text-zinc-500 sm:text-base lg:text-lg"
				style={{fontFamily: "General Sans-Medium"}}>
					Where speed meets elegance
				</p>
			</div>
			<div className="self-start overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950/70 shadow-[0_30px_80px_-46px_rgba(255,255,255,0.08)]">
				<img
					src={detailShot}
					alt="Ducati Detail"
					className="h-full w-full object-cover"
					/>
			</div>
		</div>
		<div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/20 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.75)]">
			<img
				src={mainBike}
				alt="Ducati Panigale V4"
				className="h-full w-full object-cover"
				/>
		</div>
	</div>
	<div className="mt-10 flex justify-end lg:-mt-70 lg:mr-5">
		<div className="w-full max-w-[360px] overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950/55 shadow-[0_35px_90px_-62px_rgba(0,0,0,0.72)]">
			<img
				src={logoDesigned}
				alt="Ducati brand"
				className="h-full w-full object-cover"
				/>
		</div>
	</div>
	<div className="mt-24 flex flex-col items-start gap-10 lg:mt-10 lg:-ml-10 lg:flex-row lg:items-center">
		<div className="w-full max-w-[780px] overflow-hidden rounded-[30px] border border-white/10 bg-zinc-950/60 shadow-[0_40px_110px_-72px_rgba(0,0,0,0.72)] lg:-mr-10">
			<img
				src={topView}
				alt="Top View Ducati"
				className="h-full w-full object-cover"
				/>
		</div>
		<div className="flex h-full items-center pl-10 lg:pl-50">
			<div className="flex flex-col leading-[0.80]">
				<span className="text-5xl font-extralight uppercase tracking-[0.10em] text-zinc-100 sm:text-6xl md:text-7xl"
				style={{fontFamily: "General Sans-Light"}}>
				Eleganza
				Scolpita
				dalla
				velocità.
				</span>
				{/* Translation */}
				<p className="mt-10 max-w-[260px] text-sm uppercase tracking-[0.36em] text-zinc-600 lg:text-lg"
				style={{fontFamily: "General Sans-Medium"}}>
					Elegance sculpted by speed
				</p>
			</div>
		</div>
	</div>

<div className="flex justify-center py-32 md:py-40 lg:mt-40 italic"
style={{fontFamily: "Bebas"}}>
  <div className="text-center">

    <p
      className="
        text-2xl
        md:text-4xl
        lg:text-8xl
        font-light
        leading-relaxed
        tracking-wide
        text-white/80
      "
    >
      Would <span className="text-white">THE GLOW</span> ever shine
    </p>

    <p
      className="
        mt-4
        text-2xl
        md:text-4xl
        lg:text-8xl
        font-light
        leading-relaxed
        tracking-wide
        text-white/80
      "
    >
      without <span className="text-red-500">THE DARK</span>?
    </p>

  </div>
</div>
</section>
)
}