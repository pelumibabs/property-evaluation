import * as React from "react";

export interface IButtonProps {
  text?: String;
}

export function Button(props: IButtonProps) {
  return (
    <button className="bg-bgBlack text-[white] h-full w-full ">
      {props.text}
    </button>
  );
}
