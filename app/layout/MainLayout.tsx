import type { ReactNode } from "react";
import { MainNavigation } from "./MainNavigation";
import { Sidebar } from "~/Sidebar";

type Props = {
  children: ReactNode;
};

function Main(props: Props) {
  return (
    <main className="h-full grow border-x-2 border-gray-50">
      {props.children}
    </main>
  );
}

function MainLayout(props: Props) {
  return (
    <div className="h-full flex max-w-7xl mx-auto">
      <MainNavigation />
      <Main>{props.children}</Main>
      <Sidebar />
    </div>
  );
}

export { MainLayout };
