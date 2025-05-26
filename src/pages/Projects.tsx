import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <h1>{t("projects.title")}</h1>
      <h2>{t("projects.description")}</h2>
    </div>
  );
};

export default Projects;
