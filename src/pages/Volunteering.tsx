import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Volunteering from "../components/Volunteering";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Volunteering />
      </main>
      <Footer />
    </div>
  );
}
