import { ReactNode, useContext } from "react";
import Header from "src/components/common/header";
import TabsHeader from "src/components/common/tabs-header";
import AboutContainer from "src/components/containers/about-container";
import TabContext from "src/hooks/contexts/tabContext";

interface MovieSearchLayoutProps {
  children?: ReactNode;
}

export default function MovieSearchLayout({
  children,
}: MovieSearchLayoutProps) {
  const { activeTab } = useContext(TabContext);

  return (
    <div>
      <Header />
      <div className="ms-56">
        <TabsHeader />
        <div
          className={`flex ${
            activeTab === 2 ? "flex-col" : "flex-row"
          } mt-12 w-full`}
        >
          <div className="w-3/5">{children}</div>
          <div
            className={`w-4/6 ${activeTab === 2 ? "self-end" : "self-start"} `}
          >
            <AboutContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
