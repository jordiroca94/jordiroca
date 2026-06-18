import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectsComponent from "../components/ProjectsComponent";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <ProjectsComponent />
      </main>
      <Footer />
    </div>
  );
}
