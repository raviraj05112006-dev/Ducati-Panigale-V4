import logoImage from '../assets/images/home/ducati_logo_black_bg.jpg'

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950 backdrop-blur-2xl shadow-[0_25px_80px_-48px_rgba(0,0,0,0.9)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3 -ml-15">
          <img src={logoImage} alt="Ducati logo" className="h-7 w-auto object-contain brightness-[1.05]" />
          <span className="text-md uppercase tracking-[0.44em] font-thin text-slate-300/95"
          style={{fontFamily:"General Sans-Medium"}}>
            Ducati Panigale V4 - The Red
          </span>
        </div>

        
      </div>
    </nav>
  )
}
