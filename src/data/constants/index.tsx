import { FiSettings } from "react-icons/fi";
import { IoApps } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import {
  getCastPath,
  getMoviesPath,
  getOverviewPath,
  getTrailersPath,
} from "src/routers/paths";

import {
  handleGoogleAccount,
  handleGoogleApps,
  handleImageSearch,
  handleSearch,
  handleSettings,
  handleVoiceSearch,
} from "src/utils";

export const searchBoxIcons = [
  {
    icon: require("src/assets/icons/microphone-icon-google-search.png"),
    toolTipText: "Search by voice",
    functionHandler: handleVoiceSearch,
  },
  {
    icon: require("src/assets/icons/lens-icon-google-search.png"),
    toolTipText: "Search by image",
    functionHandler: handleImageSearch,
  },
  {
    icon: require("src/assets/icons/search-icon-google-search.png"),
    toolTipText: "Search",
    functionHandler: handleSearch,
  },
];

export const headerSideIcons = [
  {
    icon: <FiSettings size={20} />,
    toolTipText: "Quick settings",
    functionHandler: handleSettings,
  },
  {
    icon: <IoApps size={20} className="me-1" />,
    toolTipText: "Google apps",
    functionHandler: handleGoogleApps,
  },
  {
    icon: <RxAvatar size={30} />,
    toolTipText: "Google Account",
    functionHandler: handleGoogleAccount,
  },
];

export const categories = [
  "Images",
  "Videos",
  "News",
  "Cast",
  "Release date",
  "Netflix",
  "IMDb",
];

export const tabs = [
  {
    name: "Overview",
    path: getOverviewPath(),
  },
  {
    name: "Movies",
    path: getMoviesPath(),
  },
  {
    name: "Cast",
    path: getCastPath(),
  },
  {
    name: "Trailers",
    path: getTrailersPath(),
  },
];
