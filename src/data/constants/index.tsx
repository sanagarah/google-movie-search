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
} from "src/services/helpers";
import i18n from "src/data/i18n/index";

export const searchBoxIcons = [
  {
    icon: require("src/assets/icons/microphone-icon-google-search.png"),
    toolTipText: i18n.t("tooltip.searchVoice"),
    functionHandler: handleVoiceSearch,
  },
  {
    icon: require("src/assets/icons/lens-icon-google-search.png"),
    toolTipText: i18n.t("tooltip.searchImage"),
    functionHandler: handleImageSearch,
  },
  {
    icon: require("src/assets/icons/search-icon-google-search.png"),
    toolTipText: i18n.t("tooltip.search"),
    functionHandler: handleSearch,
  },
];

export const headerSideIcons = [
  {
    icon: <FiSettings size={20} />,
    toolTipText: i18n.t("tooltip.quickSettings"),
    functionHandler: handleSettings,
  },
  {
    icon: <IoApps size={20} className="me-1" />,
    toolTipText: i18n.t("tooltip.googleApps"),
    functionHandler: handleGoogleApps,
  },
  {
    icon: <RxAvatar size={30} />,
    toolTipText: i18n.t("tooltip.googleAccount"),
    functionHandler: handleGoogleAccount,
  },
];

export const categories = [
  i18n.t("categories.images"),
  i18n.t("categories.videos"),
  i18n.t("categories.news"),
  i18n.t("categories.cast"),
  i18n.t("categories.releaseDate"),
  i18n.t("categories.netflix"),
  i18n.t("categories.imdb"),
];

export const tabs = [
  {
    name: i18n.t("tabs.overview"),
    path: getOverviewPath(),
  },
  {
    name: i18n.t("tabs.movies"),
    path: getMoviesPath(),
  },
  {
    name: i18n.t("tabs.cast"),
    path: getCastPath(),
  },
  {
    name: i18n.t("tabs.trailers"),
    path: getTrailersPath(),
  },
];
