import { createContext } from "react";

const TabContext = createContext({
  activeTab: 0,
  changeActiveTab: (activeTab: number) => {},
});

export default TabContext;
