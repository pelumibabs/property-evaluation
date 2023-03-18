import * as React from "react";
import logo from "../../assets/auth/Logo.svg";
import { Button } from "../atoms/Button";
import Image from "next/image";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
// import { dispatch } from "@/utils/firebase";
import { setUser } from "@/redux/slices/userSlice";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Toast } from "@/utils/swal";
export interface ITopNavProps {}

export function TopNav(props: ITopNavProps) {
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const signout = () => {
    signOut(auth)
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "Sign out successful",
        });
        dispatch(
          setUser({
            email: "",
            phoneNumber: "",
            lastName: "",
            firstName: "",
            uid: "",
          })
        );
        router.push("/auth/login");
      })
      .catch((error: any) => console.log(error));
  };
  return (
    <div>
      <div className="h-14 border grid grid-cols-[auto_auto] justify-between px-10 bg-[white] font-inter ">
        <div className="relative h-[3rem] w-[7rem] mt-1">
          <Image src={logo} alt="" fill className="h-4 w-4" />
        </div>
        <div className="grid grid-cols-[auto_auto] gap-x-10">
          <select className="outline-none" name="cars" id="cars">
            <option value="volvo">English(United States)</option>
            <option value="volvo">English(England)</option>
            <option value="volvo">Germany(German)</option>
          </select>
          {user.uid ? (
            <div
              className="border h-10 w-24 rounded-lg overflow-hidden mt-2"
              onClick={signout}
            >
              <Button text="Log out" />
            </div>
          ) : router.pathname == "/auth/signup" ? (
            <div
              className="border h-10 w-24 rounded-lg overflow-hidden mt-2"
              onClick={() => router.push("/auth/login")}
            >
              <Button text="Sign in" />
            </div>
          ) : (
            <div
              className="border h-10 w-24 rounded-lg overflow-hidden mt-2"
              onClick={() => router.push("/auth/signup")}
            >
              <Button text="Sign up" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
