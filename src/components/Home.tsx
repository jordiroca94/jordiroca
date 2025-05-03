import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="text-3xl">
      <h1>{t("welcome")}</h1>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("es")}>ES</button>
      <Link
        to={`/${i18n.language}/${t("routes.about")}`}
        className="underline text-blue-500"
      >
        GO TO ABOUT
      </Link>
    </div>
  );
};

export default Home;
