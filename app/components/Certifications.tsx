// components/Certifications.tsx
"use client";

const certifications = [
  {
    platform: "Udemy",
    title: "Data Structures & Algorithms",
    date: "Sep 2026",
    points: [
      "Analyzed and optimized code performance and time/space complexity using Big O Notation.",
      "Implemented fundamental and advanced Data Structures, including Hash Tables, Graphs, and Trees (BST, AVL, Red-Black, Heaps).",
      "Solved complex computational problems applying advanced Algorithms such as Dynamic Programming, BFS/DFS, and Recursion.",
    ],
  },
  {
    platform: "Dicoding",
    title: "Belajar Back-End Pemula dengan JavaScript",
    date: "Oct - Nov 2024",
    points: [
      "Built a strong foundation in server-side development using Node.js to create reliable and high-performance systems.",
      "Implemented RESTful API principles in web architecture, using HTTP methods (GET, POST, PUT, DELETE) to manage data systematically.",
    ],
  },
  {
    platform: "Dicoding",
    title: "Belajar Dasar Pemrograman JavaScript",
    date: "Jul - Oct 2024",
    points: [
      "Strengthened logical thinking by mastering basic to intermediate JavaScript syntax, including variables, data types, and complex control structures.",
      "Implemented Object-Oriented Programming (OOP) and Functional Programming to build modular, efficient, and easy-to-maintain code.",
      "Completed a final project by developing a Node.js application, which was validated through an industry-standard code review.",
    ],
  },
  {
    platform: "Udemy",
    title: "Web Development Bootcamp",
    date: "Jul - Aug 2022",
    points: [
      "Built full-stack application projects including quizzes, user location tracking, to-do lists, and cooperative (koperasi) management systems.",
      "Implemented authentication and security features, including encryption, hashing, and salting.",
      "Designed and managed structured databases, and handled cookies and session management for secure websites.",
    ],
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative z-10 w-full max-w-6xl mx-auto py-24 px-6 md:px-12"
    >
      <h2 className="text-3xl md:text-4xl text-white font-bold text-center tracking-widest mb-16 uppercase">
        Licenses & Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-[#111] border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-colors group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6 gap-4">
              <div>
                <span className="text-xs font-bold text-yellow-500 tracking-widest uppercase block mb-2">
                  {cert.platform}
                </span>
                <h3 className="text-xl font-medium text-white group-hover:text-yellow-500 transition-colors">
                  {cert.title}
                </h3>
              </div>
              <span className="text-xs text-gray-400 font-mono tracking-wider bg-[#1a1a1a] border border-gray-800 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                {cert.date}
              </span>
            </div>

            <ul className="space-y-3 text-sm text-gray-400 leading-relaxed list-disc list-outside ml-4 marker:text-gray-700 flex-grow">
              {cert.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
