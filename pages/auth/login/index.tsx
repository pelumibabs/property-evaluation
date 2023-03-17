import * as React from "react";
import { AuthLayout } from "@/components/templates/AuthLayout";
import { InputField } from "@/components/atoms/auth/InputField";
import { AuthBtn } from "@/components/atoms/AuthBtn";
import Link from "next/link";
export interface IIndexProps {}

export default function Index(props: IIndexProps) {
  return (
    <AuthLayout>
      <div className="bg-[white] w-full mt-10 rounded-2xl py-10 px-14">
        <h1 className="text-2xl text-bold">Sign in now</h1>
        <div className="mt-8">
          <InputField name="Email address" />
        </div>
        <div className="mt-2">
          <InputField name="Password" />
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
