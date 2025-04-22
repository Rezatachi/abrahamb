// components/About.tsx
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="text-black dark:text-black px-6 md:px-16 min-h-screen flex flex-col justify-center md:items-center">
      <div className="flex flex-col md:flex-row items-center py-8 px-6 md:px-16 max-w-7xl mx-auto md:mt-16">
        <div className="flex-2 mb-8 md:mb-0">
          <p
        className=
        "text-xl text-[#386FA4] mb-6 font-semibold"
          >
        &quot;IDENTITY&quot;
          </p>
          <p className="text-xl md:text-xl font-semibold mt-4">
        <span className="text-[#386FA4]">hi, i&apos;m</span> <span className="text-[#386FA4]">abraham belayneh</span>
        <br />
        <br />
        a software engineer, designer, and photographer based in

        <span className="text-[#386FA4]"> los angeles</span>.
        i strive to pursue creative solutions to complex problems and develop <span className="text-[#386FA4]">innovative</span> products that make a difference.
        however, my passion is to foster <span className="text-[#386FA4]">community</span> and <span className="text-[#386FA4]">collaboration</span> through design and technology.

        <br />

        <br />
        i am currently working as a software engineer at <span className="text-[#386FA4]">snap</span>, where i am fortunate to be part of a team that is driving dynamic and cutting-edge features reaching <span className="text-[#386FA4]">800m+ users</span>. i&apos;ve previously
        led intiatives at <span className="text-[#386FA4]">nvidia</span> for two summers and pushed substantial contributions to their cloud infrastructure teams.

        <br />

        <br />
        graduating from the <span className="text-[#386FA4]">california institute of technology</span>, i carry a strong foundation in computer science and engineering. my passions lie in climate technology, social impact ai, and the intersection of design and technology. i am always eager to learn and explore new frontiers in the tech world.
          </p>
        </div>
        <div className="flex justify-center items-center ml-6 md:ml-16">
          <Image
        src="/prof.png"
        alt="About Image"
        width={500}
        height={500}
        className="rounded-full w-[500px] h-[500px] object-cover shadow-lg border-4 border-white"
          />

        </div>
      </div>

    </section>
  );
}
