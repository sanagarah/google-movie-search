import { FiSettings } from "react-icons/fi";
import { IoApps } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

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
    icon: require("src/assets/icons/google-search/microphone-icon-google-search.png"),
    toolTipText: i18n.t("tooltip.searchVoice"),
    functionHandler: handleVoiceSearch,
  },
  {
    icon: require("src/assets/icons/google-search/lens-icon-google-search.png"),
    toolTipText: i18n.t("tooltip.searchImage"),
    functionHandler: handleImageSearch,
  },
  {
    icon: require("src/assets/icons/google-search/search-icon-google-search.png"),
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
  {
    name: i18n.t("categories.images"),
  },
  {
    name: i18n.t("categories.videos"),
  },
  {
    name: i18n.t("categories.news"),
  },
  {
    name: i18n.t("categories.cast"),
  },
  {
    name: i18n.t("categories.releaseDate"),
  },
  {
    name: i18n.t("categories.netflix"),
  },
  {
    name: i18n.t("categories.imdb"),
  },
];

export const tabs = [
  {
    name: i18n.t("tabs.overview"),
  },
  {
    name: i18n.t("tabs.movies"),
  },
  {
    name: i18n.t("tabs.cast"),
  },
  {
    name: i18n.t("tabs.trailers"),
  },
];

export const movieDetailsInitials = {
  original_title: "",
  poster_path: "",
  production_companies: [],
  release_date: "",
  homepage: "",
};

export const googleApps = [
  {
    id: "google-search-id",
    name: "Search",
    link: "https://www.google.com",
    icon: require("src/assets/icons/google-apps/1.png"),
  },
  {
    id: "google-maps-id",
    name: "Maps",
    link: "https://maps.google.com",
    icon: require("src/assets/icons/google-apps/2.png"),
  },
  {
    id: "google-youtube-id",
    name: "Youtube",
    link: "https://www.youtube.com",
    icon: require("src/assets/icons/google-apps/3.png"),
  },
  {
    id: "google-play-id",
    name: "Play",
    link: "https://play.google.com",
    icon: require("src/assets/icons/google-apps/4.png"),
  },
  {
    id: "google-news-id",
    name: "News",
    link: "https://news.google.com",
    icon: require("src/assets/icons/google-apps/5.png"),
  },
  {
    id: "google-mail-id",
    name: "Gmail",
    link: "https://mail.google.com/mail",
    icon: require("src/assets/icons/google-apps/6.png"),
  },
  {
    id: "google-meet-id",
    name: "Meet",
    link: "https://meet.google.com",
    icon: require("src/assets/icons/google-apps/7.png"),
  },
  {
    id: "google-chat-id",
    name: "Chat",
    link: "https://chat.google.com",
    icon: require("src/assets/icons/google-apps/8.png"),
  },
  {
    id: "google-contacts-id",
    name: "Contacts",
    link: "https://contacts.google.com/",
    icon: require("src/assets/icons/google-apps/9.png"),
  },
  {
    id: "google-drive-id",
    name: "Drive",
    link: "https://drive.google.com",
    icon: require("src/assets/icons/google-apps/10.png"),
  },
  {
    id: "google-calender-id",
    name: "Calender",
    link: "https://calendar.google.com/calendar",
    icon: require("src/assets/icons/google-apps/11.png"),
  },
  {
    id: "google-translate-id",
    name: "Translate",
    link: "https://translate.google.com",
    icon: require("src/assets/icons/google-apps/12.png"),
  },
  {
    id: "google-photos-id",
    name: "Photos",
    link: "https://photos.google.com",
    icon: require("src/assets/icons/google-apps/13.png"),
  },
  {
    id: "google-myadcenter-id",
    name: "My Ad Center",
    link: "https://myadcenter.google.com",
    icon: require("src/assets/icons/google-apps/14.png"),
  },
  {
    id: "google-shopping-id",
    name: "Shopping",
    link: "https://shopping.google.com",
    icon: require("src/assets/icons/google-apps/15.png"),
  },
  {
    id: "google-finance-id",
    name: "Finance",
    link: "https://finance.google.com",
    icon: require("src/assets/icons/google-apps/16.png"),
  },
  {
    id: "google-docs-id",
    name: "Docs",
    link: "https://docs.google.com",
    icon: require("src/assets/icons/google-apps/17.png"),
  },
  {
    id: "google-sheets-id",
    name: "Sheets",
    link: "https://sheets.google.com",
    icon: require("src/assets/icons/google-apps/18.png"),
  },
  {
    id: "google-slides-id",
    name: "Slides",
    link: "https://slides.google.com",
    icon: require("src/assets/icons/google-apps/19.png"),
  },
  {
    id: "google-books-id",
    name: "Books",
    link: "https://books.google.com/",
    icon: require("src/assets/icons/google-apps/20.png"),
  },
  {
    id: "google-blogger-id",
    name: "Blogger",
    link: "https://blogger.google.com",
    icon: require("src/assets/icons/google-apps/21.png"),
  },
  {
    id: "google-hangouts-id",
    name: "Hangouts",
    link: "https://hangouts.google.com",
    icon: require("src/assets/icons/google-apps/22.png"),
  },
  {
    id: "google-keep-id",
    name: "Keep",
    link: "https://keep.google.com",
    icon: require("src/assets/icons/google-apps/23.png"),
  },
  {
    id: "google-jamboard-id",
    name: "Jamboard",
    link: "https://jamboard.google.com",
    icon: require("src/assets/icons/google-apps/24.png"),
  },
  {
    id: "google-classroom-id",
    name: "Classroom",
    link: "https://classroom.google.com",
    icon: require("src/assets/icons/google-apps/25.png"),
  },
  {
    id: "google-earth-id",
    name: "Earth",
    link: "https://earth.google.com",
    icon: require("src/assets/icons/google-apps/26.png"),
  },
  {
    id: "google-saved-id",
    name: "Saved",
    link: "https://www.google.com/save",
    icon: require("src/assets/icons/google-apps/27.png"),
  },
  {
    id: "google-artsandculture-id",
    name: "Arts and Culture",
    link: "https://artsandculture.google.com",
    icon: require("src/assets/icons/google-apps/28.png"),
  },
  {
    id: "google-ads-id",
    name: "Google Ads",
    link: "https://ads.google.com",
    icon: require("src/assets/icons/google-apps/29.png"),
  },
  {
    id: "google-one-id",
    name: "Google One",
    link: "https://one.google.com",
    icon: require("src/assets/icons/google-apps/30.png"),
  },
  {
    id: "google-travel-id",
    name: "Travel",
    link: "https://travel.google.com",
    icon: require("src/assets/icons/google-apps/31.png"),
  },
  {
    id: "google-forms-id",
    name: "Forms",
    link: "https://forms.google.com",
    icon: require("src/assets/icons/google-apps/32.png"),
  },
  {
    id: "google-chrome-id",
    name: "Chrome Web Store",
    link: "https://chrome.google.com/",
    icon: require("src/assets/icons/google-apps/33.png"),
  },
];
