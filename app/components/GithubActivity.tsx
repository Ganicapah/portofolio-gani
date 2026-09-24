"use client";
import dynamic from "next/dynamic";

interface GitHubCalendarProps {
  username: string;
  colorScheme?: "light" | "dark";
  theme?: any;
}

const GitHubCalendar = dynamic<GitHubCalendarProps>(
  () =>
    import("react-github-calendar").then((mod) => mod.GitHubCalendar as any),
  {
    ssr: false,
    loading: () => (
      <p className="text-gray-500 text-sm">Loading GitHub Activity...</p>
    ),
  },
);

export default function GithubActivity() {
  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto py-24 px-6 md:px-12 flex flex-col items-center border-t border-gray-800">
      <h2 className="text-sm text-gray-500 tracking-[0.3em] uppercase mb-12 text-center">
        Consistent Contributions
      </h2>
      <div className="w-full flex justify-center overflow-x-auto pb-4">
        <GitHubCalendar
          username="Ganicapah"
          colorScheme="dark"
          theme={{
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
        />
      </div>
    </section>
  );
}
