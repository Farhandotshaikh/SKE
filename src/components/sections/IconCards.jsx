// src/components/sections/IconCards.jsx
import { Link } from "react-router-dom";
import { ICONS } from "./icons";

// variant "light": Quick links (4 across)   variant "dark": Programmes Offered (3 across)
export default function IconCards({ items, variant = "light" }) {
  const dark = variant === "dark";
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${dark ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {items.map((it) => {
        const Icon = ICONS[it.icon] ?? ICONS.book;
        return (
          <Link
            key={it.title}
            to={it.to}
            className={`flex gap-4 p-7 transition ${
              dark
                ? "border border-white/20 bg-white/10 hover:bg-white/15"
                : "border border-slate-200 bg-white hover:shadow-md"
            }`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center ${
                dark ? "bg-[#fbbf24] text-[#3a3187]" : "bg-[#ecebf6] text-[#3a3187]"
              }`}
            >
              <Icon size={18} />
            </span>
            <span>
              <span className={`block font-[Poppins] text-lg font-medium ${dark ? "text-white" : "text-slate-900"}`}>
                {it.title}
              </span>
              <span className={`mt-2 block text-sm leading-relaxed ${dark ? "text-white/70" : "text-slate-500"}`}>
                {it.text}
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}