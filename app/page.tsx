import LenisProvider from "./components/LenisProvider";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portofolio";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import GithubActivity from "./components/GithubActivity";

export default function Home() {
  return (
    <LenisProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans relative overflow-x-hidden">
        <Background />
        <Navbar />
        <About />
        <Experience />
        <Portfolio />
        <GithubActivity />
        <Footer />
      </div>
    </LenisProvider>
  );
}
