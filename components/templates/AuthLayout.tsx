import * as React from "react";
import Image from "next/image";
import { TopNav } from "../organisms/TopNav";
import { Button } from "../atoms/Button";
import authBg from "../../assets/auth/authBg.svg";
export interface IAuthLayoutProps {
  children?: JSX.Element;
}

export function AuthLayout(props: IAuthLayoutProps) {
  return (
    <div className="bg-bgBlack pb-10  min-h-[700px] font-inter ">
      <TopNav />
      <div className="grid grid-cols-[auto] justify-around lg:grid-cols-[27rem_33rem] lg:justify-between w-full px-20 pt-[10vh]">
        <div className="hidden lg:block text-[white] p-2">
          <h1 className="text-4xl font-bold">Value with us</h1>
          <p className="text-xl tracking-wider mt-8 text-[#FFFFFFCC]">
            Access to accurate real estate valuation that are important to
            stakeholders.
          </p>
          <div className="relative h-[400px] w-[400px] mt-10">
            <Image src={authBg} alt="" fill />
          </div>
        </div>
        <div className=" max-w-[35rem]">{props.children}</div>
      </div>
    </div>
  );
}
