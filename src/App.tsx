import PagesContainer from "./components/containers/pages-container";
import "src/styles/theme.scss";
import { getDirection } from "./services/helpers";
import { useTranslation } from "react-i18next";

export default function App() {
  const [t] = useTranslation();

  const isMobile = window.innerWidth < 640;

  return (
    <div dir={getDirection()}>
      {isMobile ? (
        <p className="text-lg text-center mt-96">{t("errors.smallScreen")}</p>
      ) : (
        <PagesContainer />
      )}
    </div>
  );
}
