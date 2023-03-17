import * as React from "react";

export interface IAuthBtnProps {
  text: String;
  valid: Boolean;
}

export function AuthBtn(props: IAuthBtnProps) {
  return (
    <button
      className={`${
        props.valid ? "" : "bg-textGrey text-[white]"
      }  w-full h-full rounded-[2rem]`}
    >
      {props.text}
    </button>
  );
}
