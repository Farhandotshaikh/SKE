// src/components/sections/EventList.jsx
export default function EventList({ events }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {events.map((e) => (
        <div key={`${e.day}-${e.month}-${e.title}`} className="flex items-center gap-5 border border-slate-200 bg-white p-4">
          <div className="flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-center bg-[#3a3187]">
            <span className="font-[Poppins] text-3xl font-medium leading-none text-white">{e.day}</span>
            <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#fbbf24]">
              {e.month}
            </span>
          </div>
          <div>
            <p className="font-[Poppins] font-medium text-slate-900">{e.title}</p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
              {e.venue}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
