import * as React from "react";
import { MainLayout } from "@/components/templates/MainLayout";
import { Button } from "@/components/atoms/Button";
import { AuthBtn } from "@/components/atoms/AuthBtn";
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <MainLayout>
      <section className="p-8">
        <h2 className="text-3xl">Locate a Property</h2>
        <p className="text-sm text-textGrey">
          Accurate Real Estate Valuation...{" "}
        </p>
        <h1 className="text-3xl mt-4">
          We’re excited to help you with your property sale.
        </h1>
        <h3>Enter your address to get started.</h3>
        <div className="relative mt-20  w-[50rem]  h-16">
          <input
            className="border border-borderGrey h-full w-full rounded-xl text-md pl-10 pr-40 shadow-lg"
            placeholder="125 W Muriel Dr."
          />
          <div className="absolute top-2 right-[2rem] w-32 h-[70%]">
            <AuthBtn text="Continue" valid={true} loading={false} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
