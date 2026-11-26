// src/components/sections/TileGrid.jsx
import { ICONS } from "./icons";

export default function TileGrid({ tiles, caption }) {
  return (
    <div className="grid gap-1 md:grid-cols-3">
      {tiles.map((t) => {
        const Icon = ICONS[t.icon] ?? ICONS.book;
        return (
          <div key={t.title} className="relative h-[280px] overflow-hidden">
            <img src={t.image} alt={t.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1450]/90 via-[#1a1450]/20 to-transparent" />
            <div className="absolute bottom-6 left-7">
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#3a3187]">
                <Icon size={18} />
              </span>
              <p className="font-[Poppins] text-xl text-white">{t.title}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#fbbf24]">
                {caption}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}