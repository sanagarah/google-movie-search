import Card from "src/components/common/card";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { movieDetailsType, castDetailsType } from "src/data/types";
import { useTranslation } from "react-i18next";
interface OverviewProps {
  details: movieDetailsType[];
  cast: castDetailsType[];
}

export default function Overview({ details, cast }: OverviewProps) {
  const [t] = useTranslation();

  const [showFullList, setShowFullList] = useState(false);

  const castList = showFullList ? cast : cast?.slice(0, 6);

  const handleCastExpansion = () => {
    setShowFullList(true);
  };

  return (
    <div>
      <h1 className="flex items-center gap-2 text-xl">
        {t("overview.movies")}
        <span>
          <IoIosArrowForward size={15} />
        </span>
      </h1>
      <div className="flex">
        {details?.map((moviesDetails, index) => (
          <Card
            key={index}
            small={false}
            path={moviesDetails?.poster_path}
            title={moviesDetails?.original_title}
            subTitle={moviesDetails?.release_date.slice(0, 4)}
          />
        ))}
      </div>
      <h1 className="flex items-center gap-2 text-xl mt-16">
        {t("overview.cast")}
        <span>
          <IoIosArrowForward size={15} />
        </span>
      </h1>
      <div className="flex flex-wrap w-fit relative">
        {castList?.map((castDetails, index) => (
          <Card
            key={index}
            small={true}
            path={castDetails?.profile_path}
            title={castDetails?.name}
            subTitle={castDetails?.character}
          />
        ))}
        {!showFullList && (
          <button
            className="rounded-full p-2 h-fit bg-gray-200 shadow border border-gray-100 z-10 absolute right-0 bottom-12"
            onClick={handleCastExpansion}
          >
            <IoIosArrowForward size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
