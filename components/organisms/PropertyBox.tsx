import * as React from "react";
import Image from "next/image";
export interface IPropertyBoxProps {
  items: any;
}

export function PropertyBox(props: IPropertyBoxProps) {
  return (
    <div className="grid grid-cols-4 gap-x-4">
      {props.items.map((item: any) => {
        return (
          <div key={item.text} className="shadow-lg p-4 rounded-md">
            <div className="h-48 w-full relative">
              <Image fill alt="" src={item.image} />
            </div>
            <h1 className="text-sm font-bold mt-2">{item.text}</h1>
            <button className="w-full py-2 bg-bgBlack text-[white] rounded-md mt-8">
              View Details
            </button>
          </div>
        );
      })}
    </div>
  );
}
