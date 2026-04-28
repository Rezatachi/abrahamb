import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const nextBuilds = [
  {
    title: 'Personal AI tools',
    eyebrow: 'Product experiments',
    description: 'Small, useful agents for reflection, decision-making, creative planning, and turning scattered thoughts into structured workflows.',
    href: 'https://huggingface.co/abr10',
  },
  {
    title: 'Creative model playgrounds',
    eyebrow: 'Visual systems',
    description: 'Experiments around AI-assisted art direction, image understanding, and tools that help creators move from mood to finished asset faster.',
    href: 'https://huggingface.co/abr10/spaces',
  },
  {
    title: 'Product-facing AI demos',
    eyebrow: 'Applied AI',
    description: 'Interfaces that make model behavior feel legible, controllable, and genuinely helpful instead of hidden behind a generic chat box.',
    href: 'https://huggingface.co/abr10/models',
  },
];

export default function BuildingNext() {
  return (
    <section id="building-next" className="relative overflow-hidden bg-[#fbf7ef] px-5 py-24 text-black sm:px-8 lg:px-12 lg:py-32">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl md:mb-16">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-[#386FA4]">What I&apos;m building next!</p>
          <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
            AI products that feel personal, visual, and genuinely useful.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/66">
            I&apos;m exploring the space between product taste and model capability: tools that help people think clearly, create faster, and make better decisions without losing their own voice.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {nextBuilds.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[24rem] flex-col justify-between rounded-[2rem] border border-black/10 bg-white/74 p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#386FA4]/35 hover:shadow-[0_28px_110px_rgba(56,111,164,0.18)]"
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full border border-black/10 bg-[#f6f1e8] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-black/50">
                    {item.eyebrow}
                  </span>
                  <FaArrowUpRightFromSquare className="text-black/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#386FA4]" />
                </div>
                <h3 className="text-3xl font-black leading-none tracking-[-0.02em] text-black sm:text-4xl">{item.title}</h3>
              </div>

              <p className="mt-10 text-base leading-7 text-black/64">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
