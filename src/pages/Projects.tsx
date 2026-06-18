import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectsComponent from "../components/ProjectsComponent";
import SEO from "../components/SEO";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO page="projects" />
      <Navbar />
      <main className="flex-1">
        <ProjectsComponent />
      </main>
      <Footer />
    </div>
  );
}
