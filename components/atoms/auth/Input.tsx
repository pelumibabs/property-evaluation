import * as React from "react";

export interface IInputProps {
  name?: String;
  handler: Function;
  value: string;
  valid: boolean;
}

export function Input(props: IInputProps) {
  return (
    <>
      <input
        onChange={(e) => {
          props.handler(e.target.value);
        }}
        onBlur={(e) => {
          props.handler(e.target.value);
        }}
        value={props.value}
        className={`border w-full h-10 rounded-lg px-4 outline-none ${
          !props.valid && "border-orange-700"
        }`}
      />
    </>
  );
}
