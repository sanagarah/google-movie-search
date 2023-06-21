import { ReactNode, useState } from "react";

interface TooltipProps {
  text: string;
  isSearchIcon: boolean;
  children: ReactNode;
}

export default function Tooltip({
  text,
  isSearchIcon,
  children,
}: TooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div
          className={`absolute z-10 p-2  flex items-center w-fit h-7 text-white text-bold shadow whitespace-nowrap ${
            isSearchIcon
              ? "bg-black"
              : "bg-gray-400 rounded -bottom-10 -left-24"
          }`}
        >
          {text}
        </div>
      )}
    </div>
  );
}
