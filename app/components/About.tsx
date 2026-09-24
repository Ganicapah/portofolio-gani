import Image from "next/image";

const techStack = [
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 flex flex-col w-full min-h-[90vh] items-center justify-center overflow-hidden pt-20"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="absolute top-24 md:top-32 w-full max-w-5xl flex justify-between px-8 text-gray-500 italic font-serif text-sm md:text-base z-20">
        <span>build scalable systems</span>
        <span>and optimize backend</span>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full max-w-[1400px] flex justify-between items-center z-0 select-none pointer-events-none px-4 md:px-12">
        <h1 className="text-[25vw] md:text-[18vw] font-black text-yellow-500/200 tracking-tighter uppercase leading-none">
          WEB
        </h1>
        <h1 className="text-[25vw] md:text-[18vw] font-black text-yellow-500/200 tracking-tighter uppercase leading-none">
          DEV
        </h1>
      </div>
      <div className="relative z-10 w-[280px] h-[360px] md:w-[380px] md:h-[480px] mt-10 drop-shadow-2xl group">
        <Image
          src="/foto-profile.png"
          alt="Gani Samanta Capah"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
          priority
        />
      </div>{" "}
      «
      <div className="relative z-20 w-full max-w-5xl bg-[#111111]/90 backdrop-blur-md border border-gray-800 rounded-2xl p-6 md:p-8 mt-[-30px] md:mt-[-50px] flex flex-col md:flex-row items-center justify-between shadow-2xl mb-8">
        <div className="flex flex-col gap-2 text-sm text-gray-400 md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
          <span className="text-yellow-500 font-bold tracking-wider uppercase">
            Software Engineer
          </span>
          <p className="leading-relaxed">
            Cumlaude software engineer specializing in scalable backend
            architecture, digital security, and full-stack development.
            Experienced in designing secure financial systems and hybrid digital
            signature gateways using Node.js, Next.js, and Laravel.
          </p>
        </div>

        <div className="bg-[#1a1a1a] border border-gray-700 text-white px-8 py-3 rounded-full flex flex-col items-center shadow-inner">
          <span className="font-bold tracking-widest text-lg">
            GANI SAMANTA CAPAH
          </span>
          <span className="text-xs text-yellow-500 mt-1 uppercase tracking-widest">
            Web Developer
          </span>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-sm text-gray-400 md:w-1/3 mt-6 md:mt-0 text-center md:text-right">
          <a
            href="mailto:ganivcapah@gmail.com"
            className="hover:text-white transition"
          >
            ganivcapah@gmail.com
          </a>
          <div className="flex items-center gap-3 justify-center md:justify-end w-full">
            <div className="hidden md:block w-8 h-[1px] bg-gray-600"></div>
            <p>Tangerang, Indonesia</p>
          </div>
        </div>
      </div>
      <div className="relative z-20 w-full max-w-5xl overflow-hidden flex flex-col items-center mb-24">
        <p className="text-xs text-gray-600 tracking-[0.3em] uppercase mb-6 z-10 bg-[#0a0a0a] px-4">
          Core Tech Stack
        </p>

        <div className="relative w-full flex overflow-hidden mask-image-linear">
          <div className="flex w-max animate-marquee gap-4 py-2">
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-2.5 border border-gray-800 bg-[#151515] text-gray-300 rounded-full text-sm font-medium hover:border-yellow-500/50 hover:text-yellow-500 transition-colors cursor-default whitespace-nowrap shrink-0"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-5 h-5 shrink-0"
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#portofolio"
        className="absolute bottom-10 flex flex-col items-center space-y-2 text-xs text-gray-500 cursor-pointer group hover:text-yellow-500 transition-colors duration-500 z-20"
      >
        <span>[ Scroll down ]</span>
        <span className="animate-bounce">🖱️</span>
      </a>
    </section>
  );
}
