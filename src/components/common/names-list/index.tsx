import { useState } from "react";
import { useTranslation } from "react-i18next";

interface NamesListProps {
  title: string;
  list: string[];
}
export default function NamesList({ title, list }: NamesListProps) {
  const [t] = useTranslation();

  const [showFullList, setShowFullList] = useState(false);

  const renderList = showFullList ? list : list?.slice(0, 3);

  const handleListExpansion = () => {
    setShowFullList(true);
  };

  return (
    <div className="flex text-sm font-bold mt-6">
      <p className="pe-2">{`${title}:`}</p>
      {renderList.length > 0 ? (
        renderList.map((item, index) => (
          <a
            key={index}
            className="text-blue-200 font-normal pe-1"
            href={`https://www.google.com/search?q=${encodeURIComponent(item)}`}
            target="_blank"
            rel="noreferrer"
          >
            {item}
          </a>
        ))
      ) : (
        <p>{t("about.emptyList")}</p>
      )}
      {!showFullList && list.length > 3 && (
        <span
          className="text-blue-200 font-normal cursor-pointer"
          onClick={handleListExpansion}
        >
          {t("buttons.more")}
        </span>
      )}
    </div>
  );
}
