import { AiOutlineMore } from "react-icons/ai";
import { movieDetailsInitials, tabs } from "src/data/constants";
import Chip from "src/components/common/chip";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import MovieDetailsContext from "src/hooks/contexts/MovieDetailsContext";

export default function TabsHeader() {
  const [t] = useTranslation();

  const { movieDetails } = useContext(MovieDetailsContext);

  return (
    <div>
      {movieDetails !== movieDetailsInitials && (
        <div className="mt-3">
          <p className="text-xs text-gray-400">{t("header.resultsNumber")}</p>
          <div className="flex items-center mt-5">
            <div className="flex items-center">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}
                alt="Poster"
                className="h-20"
              />
              <div className="ms-4">
                <h1 className="text-3xl font-normal">
                  {movieDetails?.original_title}
                </h1>
                <div className="flex items-center text-sm text-gray-400">
                  <p> {t("header.filmSeries")}</p>
                  <button className="bg-white hover:filter hover:brightness-90 rounded-full p-1 m-1">
                    <AiOutlineMore className="text-black" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex ms-7">
              {tabs.map((tab, index) => (
                <Chip
                  key={index}
                  id={index}
                  text={tab.name}
                  isSearchCategory={false}
                />
              ))}
            </div>
          </div>
          <hr className="absolute left-0 mt-3 w-screen border-gray-100" />
        </div>
      )}
    </div>
  );
}
