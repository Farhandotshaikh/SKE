// src/components/sections/Section.jsx  (small helper, not in the original tree)
export default function Section({ bg = "bg-[#f7f6f4]", children }) {
  return (
    <section className={`${bg} py-16 lg:py-24`}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20">{children}</div>
    </section>
  );
}