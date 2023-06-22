import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "src/components/common/card";
import NamesList from "src/components/common/names-list";
import { recommendationsType } from "src/data/types";

interface AboutProps {
  characters?: string[];
  productionCompanies?: string[];
  directors?: string[];
  recommendations?: recommendationsType[];
}

export default function About({
  characters,
  productionCompanies,
  directors,
  recommendations,
}: AboutProps) {
  const [t] = useTranslation();

  const [showFullList, setShowFullList] = useState(false);

  const recommendationsList = showFullList
    ? recommendations
    : recommendations?.slice(0, 4);

  const handleRecommendationExpansion = () => {
    setShowFullList(true);
  };

  return (
    <div className="border-s border-gray-100 ps-4">
      <h1 className="text-lg">{t("about.title")}</h1>
      {characters ? (
        <NamesList title={t("about.characters")} list={characters} />
      ) : (
        <p>{t("about.emptyList")}</p>
      )}
      {productionCompanies ? (
        <NamesList
          title={t("about.productionCompanies")}
          list={productionCompanies}
        />
      ) : (
        <p>{t("about.emptyList")}</p>
      )}
      {directors ? (
        <NamesList title={t("about.directors")} list={directors} />
      ) : (
        <p>{t("about.emptyList")}</p>
      )}
      <hr className="border border-gray-100 mt-10 mb-3" />
      <div className="flex flex-col mt-6">
        <p>{t("about.recommendations")}</p>
        <div className="flex flex-wrap overflow-y-scroll">
          {recommendationsList?.map((recommendation, index) => (
            <Card
              small={true}
              key={index}
              path={recommendation?.poster_path}
              title={recommendation.original_title}
            />
          ))}
        </div>
        {!showFullList && (
          <button
            className="bg-gray-200 py-2 rounded-full w-3/4 self-center"
            onClick={handleRecommendationExpansion}
          >
            {t("buttons.seeMore")}
          </button>
        )}
      </div>
    </div>
  );
}
