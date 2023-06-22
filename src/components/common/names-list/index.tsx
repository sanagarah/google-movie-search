import { useState } from "react";
import { useTranslation } from "react-i18next";

interface NamesListProps {
  title: string;
  list: string[];
}
export default function NamesList({ title, list }: NamesListProps) {
  const [t] = useTranslation();

  const [showFullList, setShowFullList] = useState(false);

  const renderedList = showFullList ? list : list?.slice(0, 3);

  const handleMoreClick = () => {
    setShowFullList(true);
  };

  return (
    <div className="text-sm font-bold mt-6">
      {title + " "}
      {renderedList?.map((item, index) => (
        <span key={index} className="text-blue-200 font-normal pe-1">
          {item}
        </span>
      ))}
      {!showFullList && list && list.length > 3 && (
        <span
          className="text-blue-200 font-normal cursor-pointer"
          onClick={handleMoreClick}
        >
          {t("buttons.more")}
        </span>
      )}
    </div>
  );
}
