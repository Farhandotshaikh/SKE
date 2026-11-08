import { partners } from '../../data/site'

export default function Partners() {
  return (
    <section className="border-y border-line bg-white">
      <div className="grid grid-cols-2 md:grid-cols-5">
        {partners.map((p, i) => (
          <div
            key={p + i}
            className="flex h-[91px] items-center justify-center border-line px-4 text-center font-display text-[16px] font-medium text-ink md:h-[91px] md:border-r md:last:border-r-0"
          >
            {p}
          </div>
        ))}
      </div>
    </section>
  )
}
