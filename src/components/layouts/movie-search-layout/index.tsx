import { ReactNode } from "react";
import Header from "src/components/common/header";
import AboutContainer from "src/components/containers/about-container";
import TabsHeaderContainer from "src/components/containers/tabs-header-container";

interface MovieSearchLayoutProps {
  children?: ReactNode;
}

export default function MovieSearchLayout({
  children,
}: MovieSearchLayoutProps) {
  return (
    <div>
      <Header />
      <div className="ms-56">
        <TabsHeaderContainer />
        <div className="flex mt-12 w-full">
          <div className="w-3/5">{children}</div>
          <div className="w-4/6">
            <AboutContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
