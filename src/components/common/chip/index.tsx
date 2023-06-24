import { useContext } from "react";
import TabContext from "src/hooks/contexts/tabContext";

interface ChipProps {
  id?: number;
  text: string;
  isSearchCategory: boolean;
}

export default function Chip({ id, text, isSearchCategory }: ChipProps) {
  const { activeTab, changeActiveTab } = useContext(TabContext);

  const handleClick = () => {
    if (id !== undefined) {
      changeActiveTab(id);
    }
  };

  return (
    <div
      className={`cursor-pointer border px-3 py-2 me-2 rounded-full text-sm hover:filter hover:brightness-95 ${
        isSearchCategory
          ? "border-gray-300 bg-white text-black"
          : `${activeTab === id && "border-red-200"} bg-red-100 text-red-200`
      }`}
      onClick={handleClick}
    >
      <p>{text}</p>
    </div>
  );
}
