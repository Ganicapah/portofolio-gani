"use client";

import Link from "next/link";

export default function Navbar() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);

    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="flex justify-between items-center px-10 py-8 text-sm relative z-20">
      <div className="text-white font-bold tracking-widest">
        GANI SAMANTA CAPAH
      </div>
      <div className="hidden md:flex space-x-8">
        <Link
          href="#about"
          onClick={handleSmoothScroll}
          className="hover:text-white transition"
        >
          About me
        </Link>
        <Link
          href="#portofolio"
          onClick={handleSmoothScroll}
          className="hover:text-white transition"
        >
          Works
        </Link>
        <Link
          href="#contact"
          onClick={handleSmoothScroll}
          className="hover:text-white transition"
        >
          Contacts
        </Link>
      </div>
    </nav>
  );
}
