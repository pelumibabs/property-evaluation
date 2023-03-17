import * as React from "react";
import { BounceLoader } from "react-spinners";
export interface IAuthBtnProps {
  text: String;
  valid: Boolean;
  loading: Boolean;
}

export function AuthBtn(props: IAuthBtnProps) {
  return (
    <button
      className={`${
        props.valid ? "bg-bgBlack" : "bg-textGrey"
      }  w-full h-full rounded-[2rem]  text-[white]`}
    >
      {props.loading ? (
        <BounceLoader
          color={"white"}
          // loading={loading}
          // cssOverride={override}
          size={30}
          className="mt-1"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        props.text
      )}
    </button>
  );
}
