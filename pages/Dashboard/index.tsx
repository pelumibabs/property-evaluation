import * as React from "react";
import { MainLayout } from "@/components/templates/MainLayout";
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <MainLayout>
      <div>Dashboard</div>
    </MainLayout>
  );
}
