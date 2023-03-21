import * as React from "react";
import { MainLayout } from "@/components/templates/MainLayout";
import { PropertyBox } from "@/components/organisms/PropertyBox";
import prop from "../../assets/dashboard/prop.svg";
export interface IAppProps {}

export default function App(props: IAppProps) {
  const dummyRecentTickets = [
    {
      image: prop,
      text: "8, Richmond Estate, Ikate, Elegushi",
    },
    {
      image: prop,
      text: "8, Richmond Estate, Ikate, Elegushi",
    },
    {
      image: prop,
      text: "8, Richmond Estate, Ikate, Elegushi",
    },
    {
      image: prop,
      text: "8, Richmond Estate, Ikate, Elegushi",
    },
    {
      image: prop,
      text: "8, Richmond Estate, Ikate, Elegushi",
    },
    {
      image: prop,
      text: "8, Richmond Estate, Ikate, Elegushi",
    },
    {
      image: prop,
      text: "8, Richmond Estate, Ikate, Elegushi",
    },
    {
      image: prop,
      text: "8, Richmond Estate, Ikate, Elegushi",
    },
  ];
  return (
    <MainLayout>
      <div className=" px-4 py-8 font-inter">
        <div className="text-3xl font-bold">History</div>
        <p className="text-textGrey2 font-inter text-sm mt-2">
          Accurate Real Estate Valuation...
        </p>
        <PropertyBox items={dummyRecentTickets} />
      </div>
    </MainLayout>
  );
}
