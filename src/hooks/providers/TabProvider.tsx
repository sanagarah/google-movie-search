import React, { useState } from "react";
import Context from "src/hooks/contexts/tabContext";

interface ContextState {
  activeTab: number;
  changeActiveTab: (activeTab: number) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  const [activeTab, setActiveTab] = useState(0);

  const changeActiveTab = (activeTab: number) => {
    setActiveTab(activeTab);
  };

  const contextValue: ContextState = {
    activeTab,
    changeActiveTab,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
