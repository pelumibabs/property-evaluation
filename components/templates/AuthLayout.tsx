import * as React from "react";
import Image from "next/image";
import logo from "../../assets/auth/Logo.svg";
import { Button } from "../atoms/Button";
import authBg from "../../assets/auth/authBg.svg";
export interface IAuthLayoutProps {
  children?: JSX.Element;
}

export function AuthLayout(props: IAuthLayoutProps) {
  return (
    <div className="bg-bgBlack pb-10">
      <div className="h-14 border grid grid-cols-[10rem_10rem] justify-between px-10 bg-[white] ">
        <div className="relative h-[3rem] w-[7rem] mt-1">
          <Image src={logo} alt="" fill className="h-4 w-4" />
        </div>
        <div className="border h-10 w-24 rounded-lg overflow-hidden mt-2">
          <Button text="Sign up" />
        </div>
      </div>
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
