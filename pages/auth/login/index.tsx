import * as React from "react";
import { AuthLayout } from "@/components/templates/AuthLayout";
import { InputField } from "@/components/atoms/auth/InputField";
import { AuthBtn } from "@/components/atoms/AuthBtn";
import Link from "next/link";
import { useState } from "react";
import { SetStateAction } from "react";
export interface IIndexProps {}

type Inputs = {
  email: "";
  password: "";
};
export default function Index(props: IIndexProps) {
  const [inputs, setInputs] = useState<Inputs>({
    email: "",
    password: "",
  });
  console.log(inputs);
  const setInputsHandler = (name: any, value: String) => {
    setInputs((prev: SetStateAction<any>) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  const email = (value: String) => {
    setInputsHandler("email", value);
  };
  const password = (value: String) => {
    setInputsHandler("password", value);
  };
  return (
    <AuthLayout>
      <div className="bg-[white] w-full mt-10 rounded-2xl py-10 px-14">
        <h1 className="text-2xl text-bold">Sign in now</h1>
        <div className="mt-8">
          <InputField
            valid={true}
            value={inputs.email}
            handler={email}
            name="Email address"
          />
        </div>
        <div className="mt-2">
          <InputField
            valid={true}
            value={inputs.password}
            handler={password}
            name="Password"
          />
        </div>
        <div className="mt-4 grid grid-cols-[auto_auto]">
          <div className=" w-28 h-10  ">
            <AuthBtn text="Sign in" valid={false} />
          </div>
          <span className="mt-2">
            Don’t have an account?{" "}
            <Link href="/auth/signup" className="underline">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
}
