import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <h1>{t("welcome")}</h1>
    </div>
  );
};

export default Home;
