import * as React from "react";

export interface IInputProps {
  name?: String;
  handler: Function;
}

export function Input(props: IInputProps) {
  return (
    <>
      <input
        onChange={(e) => {
          props.handler(e.target.value);
        }}
        className="border w-full h-10 rounded-lg px-4 outline-none"
      />
    </>
  );
}
