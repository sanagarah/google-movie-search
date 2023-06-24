import { ReactNode, useState } from "react";
import { googleAppType } from "src/data/types";

interface PopoverProps {
  content: googleAppType[];
  button: ReactNode;
}

export default function Popover({ content, button }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className="text-gray-400 py-2 px-4 rounded"
        onClick={togglePopover}
      >
        {button}
      </button>

      {isOpen && (
        <div className="flex flex-wrap absolute right-0 px-3 py-1 z-10 mt-2 w-80 h-80 overflow-y-scroll rounded-md shadow-lg shadow-gray-300 bg-white border border-gray-100">
          {content.map((content) => (
            <a
              key={content.id}
              href={content.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center justify-center w-14 h-14 p-2 mt-5 mb-1 mx-4 bg-white">
                <img
                  src={content.icon}
                  alt="icon"
                  className="w-full h-full object-contain object-center"
                ></img>
              </div>
              <div className="flex justify-center">
                <p className="text-sm text-center w-16 z-10 mb-2">
                  {content.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
