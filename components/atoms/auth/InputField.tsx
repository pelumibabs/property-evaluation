import * as React from "react";
import { Input } from "./Input";
export interface IInputFieldProps {
  name?: String;
  handler: Function;
  value: string;
  valid: boolean;
}

export function InputField(props: IInputFieldProps) {
  return (
    <div>
      <label className="text-textGrey text-sm">{props.name}</label>
      <div className="mt-1">
        <Input
          valid={props.valid}
          value={props.value}
          handler={props.handler}
          name={props.name}
        />
      </div>
    </div>
  );
}
