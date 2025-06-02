import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import BackgroundCanvas from "../components/BackgroundCanvas";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <BackgroundCanvas theme="light" />
      <h1>{t("projects.title")}</h1>
      <h2>{t("projects.description")}</h2>
    </div>
  );
};

export default Projects;
