import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import BackgroundCanvas from "../components/BackgroundCanvas";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <BackgroundCanvas theme="light" />
      <h1>{t("welcome")}</h1>
    </div>
  );
};

export default Home;
