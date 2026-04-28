import Image from 'next/image';
import { FaCameraRetro, FaCode, FaPenNib } from 'react-icons/fa6';

const highlights = [
  {
    title: 'Engineer @ Snap',
    description: 'Building performance-critical iOS systems across media delivery, storage, diagnostics, and network quality for products at massive scale.',
    icon: FaCode,
  },
  {
    title: 'Photographer / visual artist',
    description: 'Creating cinematic visual work for people, brands, artists, and scenes with a focus on mood, composition, and honest presence.',
    icon: FaCameraRetro,
  },
  {
    title: 'Designer / creative technologist',
    description: 'Blending software, taste, and product intuition to make digital experiences feel precise, expressive, and useful.',
    icon: FaPenNib,
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#fbf7ef] px-5 py-24 text-black sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute -inset-4 rounded-[2.4rem] border border-[#386FA4]/20 bg-[#386FA4]/8" />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_30px_100px_rgba(56,111,164,0.22)]">
            <Image
              src="/prof.png"
              alt="Abraham Belayneh portrait"
              width={700}
              height={850}
              priority
              className="aspect-[4/5] w-full rounded-[1.55rem] object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-[#386FA4]">Identity</p>
          <h2 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-black sm:text-6xl lg:text-7xl">
            I build with an engineer&apos;s rigor and a photographer&apos;s eye.
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-black/70">
            <p>
              I&apos;m Abraham Belayneh, a software engineer, designer, and photographer based in Los Angeles. My work moves between product systems, visual storytelling, and the communities that form around both.
            </p>
            <p>
              At{' '}
              <a
                href="https://www.snap.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#386FA4] underline decoration-[#386FA4]/25 underline-offset-4 transition hover:decoration-[#386FA4]"
              >
                Snap
              </a>
              , I work on core mobile infrastructure that reaches 800M+ users. I&apos;m drawn to product work where engineering taste matters: fast surfaces, thoughtful defaults, reliable systems, and tiny details that change how people feel inside an app.
            </p>
            <p>
              I&apos;m especially interested in AI as a product layer, not just a technical category. The exciting part is turning powerful models into tools that feel personal, useful, and creatively amplifying: software that helps people make decisions, express themselves, learn faster, and build with less friction.
            </p>
            <p>
              Outside of engineering, I create visual media through{' '}
              <a
                href="https://alterastudios.org/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#386FA4] underline decoration-[#386FA4]/25 underline-offset-4 transition hover:decoration-[#386FA4]"
              >
                ALTERA Studios
              </a>{' '}
              and explore the overlap between design, AI, climate, and social impact.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-[0_18px_70px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-1 hover:border-[#386FA4]/30 hover:shadow-[0_24px_90px_rgba(56,111,164,0.16)]"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#386FA4] text-white shadow-lg shadow-[#386FA4]/20">
                    <Icon />
                  </div>
                  <h3 className="text-base font-black tracking-tight text-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/62">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
