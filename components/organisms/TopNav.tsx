import * as React from "react";
import logo from "../../assets/auth/Logo.svg";
import { Button } from "../atoms/Button";
import Image from "next/image";
export interface ITopNavProps {}

export function TopNav(props: ITopNavProps) {
  return (
    <div>
      <div className="h-14 border grid grid-cols-[10rem_10rem] justify-between px-10 bg-[white] ">
        <div className="relative h-[3rem] w-[7rem] mt-1">
          <Image src={logo} alt="" fill className="h-4 w-4" />
        </div>
        <div className="border h-10 w-24 rounded-lg overflow-hidden mt-2">
          <Button text="Sign up" />
        </div>
      </div>
    </div>
  );
}
