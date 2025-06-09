import Navbar from "../components/Navbar";
import BackgroundCanvas from "../components/BackgroundCanvas";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BackgroundCanvas theme="light" />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
