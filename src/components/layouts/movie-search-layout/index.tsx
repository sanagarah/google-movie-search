import { ReactNode } from "react";
import Header from "src/components/common/header";
import TabsHeader from "src/components/common/tabs-header";

interface MovieSearchLayoutProps {
  children?: ReactNode;
}

export default function MovieSearchLayout({
  children,
}: MovieSearchLayoutProps) {
  return (
    <div>
      <Header />
      <TabsHeader />
      {children}
    </div>
  );
}
