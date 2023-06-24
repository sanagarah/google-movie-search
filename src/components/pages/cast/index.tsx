import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "src/components/common/card";
import { castDetailsType } from "src/data/types";
import { IoIosArrowDown } from "react-icons/io";
interface CastProps {
  cast: castDetailsType[];
}

export default function Cast({ cast }: CastProps) {
  const [t] = useTranslation();

  const [showFullList, setShowFullList] = useState(false);

  const castList = showFullList ? cast : cast?.slice(0, 8);

  const handleCastExpansion = () => {
    setShowFullList(true);
  };

  return (
    <div className="flex flex-col mb-10 w-screen">
      <div className="flex flex-wrap w-3/4">
        {castList?.map((castDetails, index) => (
          <Card
            key={index}
            small={false}
            path={castDetails?.profile_path}
            title={castDetails?.name}
            subTitle={castDetails?.character}
          />
        ))}
      </div>
      {!showFullList && (
        <div className="flex items-center mt-10 w-3/4">
          <div className="flex-grow border-t border-gray-300"></div>
          <button
            className="flex items-center gap-3 mx-4 bg-gray-200 text-gray-400 text-sm py-2 px-20 rounded-full"
            onClick={handleCastExpansion}
          >
            {t("buttons.showMore")}
            <IoIosArrowDown className="mt-1" />
          </button>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      )}
    </div>
  );
}
