import * as React from "react";
import { TopNav } from "../organisms/TopNav";
export interface IMainLayoutProps {
  children: any;
}

export function MainLayout(props: IMainLayoutProps) {
  return (
    <div className="bg-bgBlack pb-10">
      <TopNav />
      <div>{props.children}</div>
    </div>
  );
}
