import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="text-3xl">
      <h1>{t("about.title")}</h1>
      <h2>{t("about.description")}</h2>
      <Link to={`/${i18n.language}/`} className="underline text-blue-500">
        GO TO HOME
      </Link>
    </div>
  );
};

export default About;
