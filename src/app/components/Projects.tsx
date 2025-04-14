'use client';

export default function Projects() {
  const experiences = [
    {
      title: 'Cloud Infrastructure Intern',
      company: 'NVIDIA',
      year: 'Summer 2022',
      image: '/nvidia.png',
    },
    {
      title: 'Cloud Optimization Intern',
      company: 'NVIDIA',
      year: 'Summer 2023',
      image: '/nvidia.png',
    },
    {
      title: 'Client Foundation Intern',
      company: 'Snap',
      year: 'Summer 2024',
      image: '/snap.png',
    },
    {
      title: 'Software Engineer',
      company: 'Snap',
      year: 'Current',
      image: '/snap.png',
    },
  ];

  return (
    <section className="px-6 md:px-16 py-16 text-black min-h-screen md:h-screen" id="exp">
      <h2 className="text-xl font-semibold mb-12 text-[#386FA4] ml-27">"EXPERIENCE"</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-16">
        {experiences.reverse().map((exp, index) => (
          <div key={index} className="flex flex-col items-start text-left">
            {/* Boxed Logo */}
            <div className="w-full h-80 flex items-center justify-center px-6 py-6 border border-white/20 hover:border-[#FFB703] transition duration-300 bg-black/10 p-4 md:p-6 rounded-lg shadow-lg relative group">
              <img
                src={exp.image}
                alt={`${exp.company} logo`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text below */}
            <div className="mt-4">
              <p className="text-lg font-medium">{exp.title}</p>
              <p className="text-black/70">{exp.company}</p>
              <p className="text-black/40">{exp.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
