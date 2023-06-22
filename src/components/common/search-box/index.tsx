import { useState } from "react";
import { searchBoxIcons } from "src/data/constants";
import Tooltip from "src/components/common/tooltip";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";

interface SearchBoxProps {
  handleSearch: (searchText: string) => void;
}

export default function SearchBox({ handleSearch }: SearchBoxProps) {
  const [t] = useTranslation();

  const [searchText, setSearchText] = useState("");
  const [stretch, setStretch] = useState(false);

  const handleInputFocus = () => {
    setStretch(true);
  };

  const handleInputBlur = () => {
    setStretch(false);
  };

  const handleInputChange = (movieName: string) => {
    setSearchText(movieName);
  };

  return (
    <div
      className={`flex justify-between items-center border border-gray-200 shadow-md rounded-full px-4 transition-all duration-500 ${
        stretch ? "w-3/4" : "w-2/5"
      }`}
    >
      {stretch && <AiOutlineSearch className="text-gray-300" size={25} />}
      <input
        placeholder={t("header.searchPlaceholder") || ""}
        type="text"
        className="w-full bg-transparent focus:outline-0 px-4"
        value={searchText}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      {searchBoxIcons.map((icon, index) => (
        <Tooltip key={index} text={icon.toolTipText} isSearchIcon={true}>
          <button
            className="flex items-center m-2 rounded-lg"
            onFocus={() => handleSearch(searchText)}
          >
            <img src={icon.icon} alt="Search icon" className="w-10" />
          </button>
        </Tooltip>
      ))}
    </div>
  );
}
