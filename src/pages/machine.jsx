import { useEffect} from "react";
export default function Machine() {
  useEffect(() => {
  const hash = window.location.hash.replace("#", "");

  if (hash) {
    setTimeout(() => {
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  }
}, []);
  const sections = [
    {
      id: "brakes",
      title: "BREMBO BRAKING",
      image: "src/assets/images/machine/brakes_ducati.png",
      description:
        "Brembo braking systems deliver immense stopping power with precise control, allowing the rider to push deeper into corners with confidence.",
      specs: [
        ["Front Discs", "330 mm Dual Semi-Floating"],
        ["Calipers", "Brembo Stylema"],
        ["Rear Disc", "245 mm"],
        ["ABS", "Cornering ABS EVO"],
      ],
      fact: "Race-derived braking technology provides exceptional feel under aggressive riding conditions.",
    },

    {
      id: "aero",
      title: "AERODYNAMIC PACKAGE",
      image: "src/assets/images/machine/aero_ducati.png",
      description:
        "MotoGP-inspired winglets and aerodynamic surfaces generate stability at speed while reducing front-end lift during acceleration.",
      specs: [
        ["Winglets", "MotoGP Derived"],
        ["Purpose", "Downforce Generation"],
        ["Benefit", "High-Speed Stability"],
        ["Design", "Integrated Fairing"],
      ],
      fact: "The aerodynamic package was developed using lessons learned directly from Ducati's racing program.",
    },

    {
      id: "engine",
      title: "DESMOSEDICI STRADALE",
      image: "src/assets/images/machine/engine_ducati.png",
      description:
        "The heart of the machine. Ducati's 90° V4 delivers explosive power, relentless acceleration, and unmistakable character.",
      specs: [
        ["Configuration", "90° V4"],
        ["Displacement", "1103 cc"],
        ["Power", "216 hp"],
        ["Torque", "120.9 Nm"],
      ],
      fact: "Its firing order is engineered to improve traction and rider confidence under acceleration.",
    },

    {
      id: "suspension",
      title: "ÖHLINS SUSPENSION",
      image: "src/assets/images/machine/suspension_ducati.png",
      description:
        "Electronically controlled Öhlins suspension constantly adapts to riding conditions, balancing comfort and performance.",
      specs: [
        ["Front Fork", "Öhlins NIX30"],
        ["Rear Shock", "Öhlins TTX36"],
        ["Adjustment", "Electronic"],
        ["Purpose", "Precision Control"],
      ],
      fact: "Suspension tuning dramatically influences rider confidence more than raw horsepower alone.",
    },

    {
      id: "exhaust",
      title: "AKRAPOVIČ EXHAUST",
      image: "src/assets/images/machine/exhaust_ducati.png",
      description:
        "Engineered for performance and emotion, the Akrapovič system improves flow while producing a distinctive Ducati soundtrack.",
      specs: [
        ["Material", "Titanium"],
        ["Weight", "Reduced Mass"],
        ["Flow", "Optimized Exhaust Path"],
        ["Focus", "Performance & Sound"],
      ],
      fact: "Titanium construction reduces weight while improving heat resistance during intense riding.",
    },

    {
      id: "tyres",
      title: "PIRELLI PERFORMANCE TYRES",
      image: "src/assets/images/machine/rear_tyre.png",
      description:
        "The only connection between machine and road. Pirelli tyres transform power into grip, confidence, and control.",
      specs: [
        ["Front", "120/70 ZR17"],
        ["Rear", "200/60 ZR17"],
        ["Type", "Performance Compound"],
        ["Manufacturer", "Pirelli"],
      ],
      fact: "A contact patch smaller than a hand controls over 200 horsepower at speed.",
    },
  ];

  return (
    <>
    {/* Global Italian Accent */}
<div className="pointer-events-none fixed left-0 top-[0px] z-[9999] flex h-[5px] w-40 overflow-visible">

  <span className="w-1/3 bg-[#009246]" />

  <span className="w-1/3 bg-[#f1f1f1]" />

  <div
    className="w-1/3 bg-[#ce2b37]"
    style={{
      clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)",
    }}
  />

</div>
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      style={{fontFamily: "General Sans-SemiBold"}}>
        <p className="uppercase tracking-[0.4em] text-white/50 text-2xl mb-10">
          ENGINEERING
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tight"
        style={{fontFamily: "bebas"}}>
          Anatomy of Performance
        </h1>

        <p className="mt-8 max-w-2xl text-white/60 text-2xl"
        style={{fontFamily: "General Sans-ExtraLight"}}>
          Every component serves a purpose.
          <br />
          Every detail serves speed.
        </p>
      </section>

      {/* SECTIONS */}
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
        >
          {/* IMAGE */}
          <div className="px-8 md:px-12 lg:px-16">
            <img
              src={section.image}
              alt={section.title}
              className="w-full rounded-[28px] border border-white/10"
            />
          </div>

          {/* CONTENT */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-light tracking-wide mb-6"
            style={{fontFamily: "bebas"}}>
              {section.title}
            </h2>

            <p className="text-white/70 text-xl leading-relaxed max-w-3xl mb-12"
            style={{fontFamily: "General Sans-ExtraLight"}}>
              {section.description}
            </p>

            {/* SPECS */}
            <div className="grid md:grid-cols-2 gap-4 mb-12"
            style={{fontFamily: "General Sans-Medium"}}>
              {section.specs.map(([label, value]) => (
                <div
                  key={label}
                  className="
                    flex
                    justify-between
                    border-b
                    border-white/10
                    py-3
                  "
                >
                  <span className="text-white/40">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>

            {/* FACT */}
            <div
              className="
                border-l
                border-white/20
                pl-6
                text-white/60
                text-lg
                italic
              "
              style={{fontFamily: "General Sans-ExtraLight"}}
            >
              {section.fact}
            </div>
          </div>
        </section>
      ))}

      {/* FINAL */}
      <section className="min-h-[100vh] flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-8xl italic font-light leading-tight"
          style={{fontFamily: "bebas"}}>
            What's the potential
            <br />
            of a mind that refuses to bend?
          </h2>
        </div>
      </section>
    </main>
    </>
  );
}