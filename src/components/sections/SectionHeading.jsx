// src/components/sections/SectionHeading.jsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SectionHeading({ lead, accent, linkLabel, to, dark = false }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4">
      <h2 className="font-[Poppins] text-4xl leading-tight lg:text-5xl">
        <span className={`block font-semibold ${dark ? "text-white" : "text-[#3a3187]"}`}>
          {lead}
        </span>
        <span className={`block font-light italic ${dark ? "text-[#fbbf24]" : "text-slate-500"}`}>
          {accent}
        </span>
      </h2>
      {to && (
        <Link
          to={to}
          className={`flex shrink-0 items-center gap-2 pb-2 text-xs font-semibold uppercase tracking-[0.15em] ${
            dark ? "text-white" : "text-[#3a3187]"
          }`}
        >
          {linkLabel} <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}