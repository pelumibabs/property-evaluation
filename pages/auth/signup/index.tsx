import * as React from "react";
import { AuthLayout } from "@/components/templates/AuthLayout";
import { InputField } from "@/components/atoms/auth/InputField";
import { AuthBtn } from "@/components/atoms/AuthBtn";
import { useState } from "react";
import { SetStateAction } from "react";
import Link from "next/link";

export interface IIndexProps {}

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export default function Index(props: IIndexProps) {
  const [inputs, setInputs] = useState<Inputs>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  console.log(inputs);
  const setInputsHandler = (name: any, value: String) => {
    setInputs((prev: any) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  const firstNameHandler = (value: String) => {
    setInputsHandler("firstName", value);
  };
  const lastNameHandler = (value: String) => {
    setInputsHandler("lastName", value);
  };
  const email = (value: String) => {
    setInputsHandler("email", value);
  };
  const password = (value: String) => {
    setInputsHandler("password", value);
  };
  return (
    <AuthLayout>
      <div className="bg-[white]  w-full  rounded-2xl py-10 px-14">
        <h1 className="text-2xl text-bold">Sign up now</h1>

        {/* INPUTS */}
        <div className="mt-8 grid grid-cols-[48%_48%] justify-between">
          <div className="">
            <InputField handler={firstNameHandler} name="First name" />
          </div>
          <div className="">
            <InputField handler={lastNameHandler} name="Last name" />
          </div>
        </div>
        <div className="mt-2">
          <InputField handler={email} name="Email address" />
        </div>
        <div className="mt-2">
          <InputField handler={password} name="Password" />
        </div>

        {/*  */}
        <div className="text-xs text-textGrey mt-1">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </div>
        <div className="grid grid-cols-[auto_auto] gap-x-2 mt-4">
          <input type="checkbox" className="h-4 mt-1" />
          <div className="text-sm">
            By creating an account, I agree to our{" "}
            <Link href="" className="underline">
              Terms of use
            </Link>{" "}
            and Privacy
            <Link href="" className="underline">
              {" "}
              Policy
            </Link>
          </div>
        </div>
        <div className=" grid grid-cols-[auto_auto] gap-x-2 mt-4">
          <input type="checkbox" className="h-4 mt-1 " />
          <div className="text-sm ">
            By creating an account, I am also consenting to receive SMS messages
            and emails, including product new feature updates, events, and
            marketing promotions.
          </div>
        </div>
        {/*  */}
        <div className="mt-4 grid grid-cols-[8rem_auto]">
          <div className=" w-28 h-10  ">
            <AuthBtn text="Sign up" valid={false} />
          </div>
          <span className="mt-2">
            Already have an account?
            <Link href="/auth/login" className="underline">
              {" "}
              Log in
            </Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
}
