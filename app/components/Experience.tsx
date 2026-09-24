// components/Experience.tsx
"use client";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 w-full max-w-6xl mx-auto py-32 px-6 md:px-12"
    >
      <h2 className="text-5xl md:text-6xl text-white font-bold text-center tracking-widest mb-24">
        EXPERIENCE & SKILLS
      </h2>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* --- WORK EXPERIENCE TIMELINE --- */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-xl font-bold text-yellow-500 tracking-widest mb-10 uppercase">
            Work Experience
          </h3>

          <div className="relative border-l border-gray-800 ml-3 md:ml-4">
            {/* Timeline Item 1: Layanan FST */}
            <div className="relative pl-8 md:pl-12 mb-12 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#151515] border-2 border-yellow-500 rounded-full group-hover:bg-yellow-500 transition-colors duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h4 className="text-lg font-bold text-white">
                  Full-Stack Developer
                </h4>
                <span className="text-xs text-yellow-500/80 font-mono tracking-wider bg-yellow-500/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                  Jan - Jul 2026
                </span>
              </div>

              <a
                href="https://layanan-fst.uinjakarta.id"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 mb-4 hover:text-white transition-colors"
              >
                Layanan Fakultas Sains dan Teknologi UIN Jakarta
              </a>

              <ul className="space-y-2 text-sm text-gray-500 leading-relaxed list-disc list-outside ml-4 marker:text-gray-700">
                <li>
                  Built a hybrid web application to digitize campus document
                  approvals, directly replacing the slow manual bureaucratic
                  process.
                </li>
                <li>
                  Developed the backend using{" "}
                  <strong className="text-gray-300 font-medium">
                    PHP (Laravel)
                  </strong>{" "}
                  and{" "}
                  <strong className="text-gray-300 font-medium">MySQL</strong>{" "}
                  with a modular monolith approach.
                </li>
                <li>
                  Secured document transactions and validated digital signatures
                  by implementing AES-256 encryption and SHA-256 data hashing.
                </li>
              </ul>
            </div>

            {/* Timeline Item 2: PT Cabot Indonesia */}
            <div className="relative pl-8 md:pl-12 mb-12 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#151515] border-2 border-gray-600 rounded-full group-hover:bg-yellow-500 transition-colors duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h4 className="text-lg font-bold text-white">
                  IT Support Technician
                </h4>
                <span className="text-xs text-gray-400 font-mono tracking-wider bg-gray-800/50 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                  Oct 2025 - Mar 2026
                </span>
              </div>

              <span className="block text-sm text-gray-400 mb-4">
                PT CABOT INDONESIA — Jakarta Selatan
              </span>

              <ul className="space-y-2 text-sm text-gray-500 leading-relaxed list-disc list-outside ml-4 marker:text-gray-700">
                <li>
                  Managed end-user device lifecycles, printing infrastructure,
                  and Microsoft Teams Rooms to ensure seamless daily office
                  operations.
                </li>
                <li>
                  Maintained physical network infrastructure via structured
                  switch cable management, UTP crimping, and proactive IP
                  scanning.
                </li>
                <li>
                  Deployed wireless CCTV security systems using CPEs, Access
                  Points, and Power over Ethernet (PoE) technology.
                </li>
              </ul>
            </div>

            {/* Timeline Item 3: BUMDes Pekiringan */}
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#151515] border-2 border-gray-600 rounded-full group-hover:bg-yellow-500 transition-colors duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h4 className="text-lg font-bold text-white">
                  Back-End Developer
                </h4>
                <span className="text-xs text-gray-400 font-mono tracking-wider bg-gray-800/50 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                  Apr - Aug 2025
                </span>
              </div>

              <a
                href="https://www.bumdesa-pekiringan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 mb-4 hover:text-white transition-colors"
              >
                BUMDes Financial Management System – Desa Pekiringan
              </a>

              <ul className="space-y-2 text-sm text-gray-500 leading-relaxed list-disc list-outside ml-4 marker:text-gray-700">
                <li>
                  Automated cash flow records by building a scalable backend
                  with{" "}
                  <strong className="text-gray-300 font-medium">Node.js</strong>{" "}
                  and{" "}
                  <strong className="text-gray-300 font-medium">MySQL</strong>,
                  replacing manual bookkeeping.
                </li>
                <li>
                  Designed robust database schemas to accurately track
                  transactions and prevent data duplication.
                </li>
                <li>
                  Developed RESTful APIs enabling real-time profit and loss
                  monitoring for end-users, ensuring optimal time and space
                  complexity.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SKILLS & INTERESTS GRID --- */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-xl font-bold text-yellow-500 tracking-widest mb-10 uppercase">
            Skills & Expertise
          </h3>

          <div className="flex flex-col gap-6">
            {/* Category 1: Programming & Databases */}
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
              <h4 className="text-white font-medium tracking-wide mb-4 text-sm uppercase">
                Programming & Databases
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "PHP (Laravel)",
                  "Node.js",
                  "Next.js",
                  "JavaScript",
                  "Python",
                  "MySQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 bg-[#1a1a1a] border border-gray-800 rounded-full text-xs text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2: Architecture & Methodology */}
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
              <h4 className="text-white font-medium tracking-wide mb-4 text-sm uppercase">
                Architecture & Methodology
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Modular Monolith", "RESTful API", "Agile Scrum"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 bg-[#1a1a1a] border border-gray-800 rounded-full text-xs text-gray-400"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Category 3: Soft Skills & Concepts */}
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
              <h4 className="text-white font-medium tracking-wide mb-4 text-sm uppercase">
                Soft Skills & Core Concepts
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Big O Notation",
                  "Teamwork",
                  "Leadership",
                  "Highly Organized",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 bg-[#1a1a1a] border border-gray-800 rounded-full text-xs text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
