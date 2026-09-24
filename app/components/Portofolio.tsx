"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="portofolio"
      className="relative z-10 w-full max-w-6xl mx-auto py-32 px-6 md:px-12"
    >
      <h2 className="text-6xl text-white font-bold text-center tracking-widest mb-32">
        PORTOFOLIO
      </h2>

      <div ref={containerRef} className="relative">
        <div className="hidden md:flex flex-col items-center w-8 absolute left-1/3 top-0 bottom-0 z-10">
          <motion.div
            className="absolute top-0 w-[2px] bg-yellow-500 z-10 origin-top"
            style={{ height }}
          ></motion.div>
          <motion.div
            className="absolute w-3 h-3 bg-yellow-500 rounded-full z-20"
            style={{ top: height, y: "-50%" }}
          ></motion.div>
        </div>

        <div className="flex flex-col md:flex-row relative">
          <div className="w-full md:w-1/3 md:sticky top-40 h-fit mb-8 md:mb-0 text-right pr-8 md:pr-16">
            <h3 className="text-2xl text-white font-medium hover:text-yellow-500 transition-colors">
              <a
                href="https://layanan-fst.uinjakarta.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Layanan FST
              </a>
            </h3>
          </div>

          <div className="hidden md:flex flex-col items-center w-8 relative">
            <div className="absolute top-0 bottom-0 w-[2px] bg-gray-800"></div>
          </div>

          <div className="w-full md:w-2/3 pl-0 md:pl-12 pb-32">
            <p className="text-gray-400 mb-8 leading-relaxed">
              Engineered a hybrid web application to digitize university
              document approvals using a modular monolith architecture. Secured
              transactions and validated digital signatures by implementing
              AES-256 encryption and SHA-256 data hashing, significantly
              reducing manual bureaucratic delays.
            </p>
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden mb-6 aspect-video relative group cursor-pointer border border-gray-800 hover:border-gray-600 transition-colors">
              <a
                href="https://layanan-fst.uinjakarta.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-full"
              >
                <Image
                  src="/layanan-fst.png"
                  alt="Layanan FST Project"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="px-4 py-2 border border-gray-700 rounded-full text-gray-400">
                PHP (Laravel)
              </span>
              <span className="px-4 py-2 border border-gray-700 rounded-full text-gray-400">
                MySQL
              </span>
              <span className="px-4 py-2 border border-gray-700 rounded-full text-gray-400">
                Cryptography
              </span>
              <span className="px-4 py-2 border border-gray-700 rounded-full text-gray-400">
                Agile Scrum
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row relative mt-12">
          <div className="w-full md:w-1/3 md:sticky top-40 h-fit mb-8 md:mb-0 text-right pr-8 md:pr-16">
            <h3 className="text-2xl text-white font-medium hover:text-yellow-500 transition-colors">
              <a
                href="https://www.capahbuilds.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CapahBuilds
              </a>
            </h3>
          </div>

          <div className="hidden md:flex flex-col items-center w-8 relative">
            <div className="absolute top-0 bottom-0 w-[2px] bg-gray-800"></div>
          </div>

          <div className="w-full md:w-2/3 pl-0 md:pl-12 pb-16">
            <p className="text-gray-400 mb-8 leading-relaxed">
              Developed a scalable, white-label website platform tailored for
              small businesses to enhance their digital presence. Integrated the
              Meta Ads ecosystem for direct traffic monitoring and innovated a
              WhatsApp AI-driven CMS, allowing non-technical clients to
              dynamically update their catalogs directly via chat.
            </p>
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden mb-6 aspect-video relative group cursor-pointer border border-gray-800 hover:border-gray-600 transition-colors">
              <a
                href="https://www.capahbuilds.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-full"
              >
                <Image
                  src="/capahbuilds.png"
                  alt="CapahBuilds Project"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="px-4 py-2 border border-gray-700 rounded-full text-gray-400">
                Next.js / Node.js
              </span>
              <span className="px-4 py-2 border border-gray-700 rounded-full text-gray-400">
                WhatsApp AI
              </span>
              <span className="px-4 py-2 border border-gray-700 rounded-full text-gray-400">
                Meta Ads API
              </span>
              <span className="px-4 py-2 border border-gray-700 rounded-full text-gray-400">
                White-label
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
