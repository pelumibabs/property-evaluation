import * as React from "react";
import { MainLayout } from "@/components/templates/MainLayout";
import { useSelector } from "react-redux";
import { SlOptionsVertical as OptionsIcon } from "react-icons/sl";
import useAutoCapitalize from "@/hooks/useAutoCapitalize";
import prop from "../../assets/dashboard/prop.svg";
import Image from "next/image";
import { PropertyBox } from "@/components/organisms/PropertyBox";
export interface IAppProps {}

export default function App(props: IAppProps) {
  const { user } = useSelector((state: any) => state.user);
  console.log(user);
  const firstName = useAutoCapitalize(user.firstName);
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
  ];
  return (
    <MainLayout>
      <div className=" px-4 py-8 font-inter">
        <div className="text-3xl font-bold">Welcome back, {firstName}</div>
        <p className="text-textGrey2 font-inter text-sm mt-2">
          Accurate Real Estate Valuation...{" "}
        </p>
        {/* WOULD BE RESTRUCTURED LATER */}
        <div className=" mt-8 grid grid-cols-3 gap-x-4 h-32">
          <div className="border rounded-lg border-borderGrey p-4 text-bold ">
            <span className="text-sm text-bgBlack font-bold">
              Total No Of Cases Initiated
            </span>
            <OptionsIcon className="float-right text-bgBlack mt-1" />
            <h1 className="text-3xl font-bold mt-4">12</h1>
          </div>
          <div className="border rounded-lg border-borderGrey p-4 text-bold ">
            <span className="text-sm text-bgBlack font-bold">
              Total Hold Tickets
            </span>
            <OptionsIcon className="float-right text-bgBlack mt-1" />
            <h1 className="text-3xl font-bold mt-4">8</h1>
          </div>
          <div className="border rounded-lg border-borderGrey p-4 text-bold ">
            <span className="text-sm text-bgBlack font-bold">
              Total No Of Scheduled Tickets
            </span>
            <OptionsIcon className="float-right text-bgBlack mt-1" />
            <h1 className="text-3xl font-bold mt-4">12</h1>
          </div>
        </div>
        <h1 className="mt-10 font-bold text-lg">Your recent tickets</h1>
        <PropertyBox items={dummyRecentTickets} />
      </div>
    </MainLayout>
  );
}
