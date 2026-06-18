import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO page="home" />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
