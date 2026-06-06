import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hotspot({
  label,
  x,
  y,
  target,
  side = "right",
  lineWidth = "w-20",
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={`machine#${target}`}
      className="absolute z-20"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Annotation */}
      <div
        className={`
          absolute
          top-1/2
          -translate-y-1/2
          flex
          items-center
          gap-3
          whitespace-nowrap
          transition-all
          duration-300

          ${
            side === "right"
              ? "left-8"
              : "right-8 flex-row-reverse"
          }

          ${
            hovered
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        {/* Technical Line */}
        <div
          className={`
            h-px
            bg-white/70
            transition-all
            duration-300
            ${
              hovered
                ? lineWidth
                : "w-0"
            }
          `}
        />

        {/* Label */}
        <span
          className="
            text-[11px]
            uppercase
            tracking-[0.25em]
            text-white/80
          "
        >
          {label}
        </span>
      </div>

      {/* Interactive Circle */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="
          relative
          w-6
          h-6
          cursor-pointer
        "
      >
        {/* Ring */}
        <div
          className={`
            absolute
            inset-0
            rounded-full
            border
            border-white/80
            transition-all
            duration-300

            ${
              hovered
                ? "shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                : ""
            }
          `}
        />

        {/* Dot */}
        <div
          className={`
            absolute
            top-1/2
            left-1/2
            w-2
            h-2
            rounded-full
            bg-white
            -translate-x-1/2
            -translate-y-1/2
            transition-all
            duration-300

            ${
              hovered
                ? "shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                : ""
            }
          `}
        />
      </div>
    </Link>
  );
}