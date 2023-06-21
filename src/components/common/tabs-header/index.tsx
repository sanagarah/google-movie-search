import { AiOutlineMore } from "react-icons/ai";
import { tabs } from "src/data/constants";
import Chip from "src/components/common/chip";

const Poster = require("src/assets/images/poster.jpeg");

export default function TabsHeader() {
  return (
    <div className="ms-56 mt-3">
      <p className="text-xs text-gray-400">
        About 2,040,000,000 results (0.60 seconds)
      </p>
      <div className="flex items-center mt-5">
        <div className="flex items-center">
          <img src={Poster} alt="Poster" className="h-20" />
          <div className="ms-4">
            <h1 className="text-3xl font-normal">Top Gun</h1>
            <div className="flex items-center text-sm text-gray-400">
              <p>Film series</p>
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
              text={tab.name}
              isSearchCategory={false}
              path={tab.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
