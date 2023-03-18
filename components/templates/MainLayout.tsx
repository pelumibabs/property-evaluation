import * as React from "react";
import { TopNav } from "../organisms/TopNav";
import logo from "../../assets/auth/LogoLight.svg";
import Image from "next/image";
import { Search } from "../atoms/Search";
import barIcon from "../../assets/dashboard/bar.svg";
import layerIcon from "../../assets/dashboard/3-layers.svg";
import checkIcon from "../../assets/dashboard/check-square.svg";
import flagIcon from "../../assets/dashboard/flag.svg";
export interface IMainLayoutProps {
  children: any;
}

export function MainLayout(props: IMainLayoutProps) {
  const NavItems = [
    {
      name: "Dashboard",
      route: "",
      active: true,
      icon: barIcon,
    },
    {
      name: "History",
      route: "",
      active: true,
      icon: layerIcon,
    },
    {
      name: "Create a Ticket",
      route: "",
      active: true,
      icon: checkIcon,
    },
    {
      name: "Locate",
      route: "",
      active: true,
      icon: flagIcon,
    },
  ];

  return (
    <div className="bg-bgBlack pb-10 h-[100vh] min-h-[800px]">
      <TopNav />
      <div className="h-[92%] mt-8 grid grid-cols-[20rem_auto] relative ">
        <div className="flex flex-col px-8 py-8">
          <div className="relative h-[3rem] w-[8rem] mt-1">
            <Image src={logo} alt="" fill className="h-4 w-4" />
          </div>
          <div className="w-full h-10 mt-4">
            <Search placeholder="Search" />
          </div>
          <div className=" grid grid-rows-4 gap-y-2 mt-6">
            {NavItems.map((item: any, index: number) => {
              return (
                <div className=" grid grid-cols-[2rem_auto] bg-[black] rounded-md px-4 py-2 gap-x-4">
                  <div className="w-full h-full relative">
                    <Image src={item.icon} fill alt="icon" />
                  </div>
                  <div className="w-full h-full relative text-[white]">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-auto grid grid-cols-[2rem_auto] bg-[black] rounded-md px-4 py-2 gap-x-4">
            <div className="w-full h-full relative">
              <Image src={barIcon} fill alt="icon" />
            </div>
            <div className="w-full h-full relative text-[white]">Log out</div>
          </div>
          <hr className="my-8" />
        </div>
        <div className="border bg-[white] rounded-tl-lg rounded-bl-lg">
          {props.children}
        </div>
      </div>
    </div>
  );
}
