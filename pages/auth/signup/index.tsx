import * as React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { AuthLayout } from "@/components/templates/AuthLayout";
import { InputField } from "@/components/atoms/auth/InputField";
import { AuthBtn } from "@/components/atoms/AuthBtn";
import { useState, useEffect } from "react";
import { SetStateAction } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { Toast } from "@/utils/swal";
export interface IIndexProps {}

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
};
type Valid = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
  phoneNumber: boolean;
  terms: boolean;
  sms: boolean;
};
export default function Index(props: IIndexProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [inputs, setInputs] = useState<Inputs>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [valid, setValid] = useState<Valid>({
    firstName: true,
    lastName: true,
    email: true,
    password: true,
    phoneNumber: true,
    terms: false,
    sms: false,
  });
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  // console.log(inputs);
  // console.log(valid);
  // console.log(formIsValid);
  const setInputsHandler = (name: string, value: String) => {
    setInputs((prev: SetStateAction<any>) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  const setValidHandler = (name: string, value: boolean) => {
    setValid((prev: SetStateAction<any>) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  const firstNameHandler = (value: String) => {
    setInputsHandler("firstName", value);
    value.length > 1
      ? setValidHandler("firstName", true)
      : setValidHandler("firstName", false);
  };
  const lastNameHandler = (value: String) => {
    setInputsHandler("lastName", value);
    value.length > 1
      ? setValidHandler("lastName", true)
      : setValidHandler("lastName", false);
  };
  const email = (value: String) => {
    setInputsHandler("email", value);
    value.length > 1 && value.includes("@") && value.includes(".com")
      ? setValidHandler("email", true)
      : setValidHandler("email", false);
  };
  const password = (value: String) => {
    setInputsHandler("password", value);
    value.length > 5
      ? setValidHandler("password", true)
      : setValidHandler("password", false);
  };
  const numberHander = (value: string) => {
    setInputsHandler("phoneNumber", value);
    inputs.phoneNumber &&
      (inputs.phoneNumber.length > 4
        ? setValidHandler("phoneNumber", true)
        : setValidHandler("phoneNumber", false));
  };

  useEffect(() => {
    inputs.phoneNumber &&
    inputs.firstName.length > 1 &&
    inputs.email.length > 1 &&
    inputs.email.includes("@") &&
    inputs.email.includes(".com") &&
    inputs.lastName.length > 1 &&
    inputs.phoneNumber.length > 4 &&
    inputs.password.length > 5 &&
    valid.terms &&
    valid.sms
      ? setFormIsValid(true)
      : setFormIsValid(false);
  }, [inputs, valid]);
  const submitHandler = () => {
    if (formIsValid) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((res) => {
          const docRef = doc(db, "users", res.user.uid);
          const data = {
            uid: res.user.uid,
            email: res.user.email,
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            phoneNumber: inputs.phoneNumber,
          };
          setDoc(docRef, data)
            .then((res) => {
              setLoading(false);
              Toast.fire({
                icon: "success",
                title: "Signed up successfully",
              });
              router.push("/auth/login");
            })
            .catch((err) => {
              setLoading(false);
              console.log(err);
              Toast.fire({
                icon: "error",
                title: "Failed",
              });
            });
        })
        .catch((err) => {
          console.log(err.message);
          const errorMessage =
            err.message === "Firebase: Error (auth/email-already-in-use)."
              ? "Email has been taken"
              : "Error";
          setLoading(false);
          Toast.fire({
            icon: "error",
            title: errorMessage,
          });
        });
    }
  };
  return (
    <AuthLayout>
      <div className="bg-[white]  w-full  rounded-2xl py-10 px-14">
        <h1 className="text-2xl text-bold">Sign up now</h1>

        {/* INPUTS */}
        <div className="mt-8 grid grid-cols-[48%_48%] justify-between">
          <div className="">
            <InputField
              value={inputs.firstName}
              valid={valid.firstName}
              handler={firstNameHandler}
              name="First name"
            />
          </div>
          <div className="">
            <InputField
              value={inputs.lastName}
              valid={valid.lastName}
              handler={lastNameHandler}
              name="Last name"
            />
          </div>
        </div>
        <div className="mt-2">
          <InputField
            valid={valid.email}
            value={inputs.email}
            handler={email}
            name="Email address"
          />
        </div>
        <div className="mt-2">
          <label className="text-textGrey text-sm">Phone number</label>
          <PhoneInput
            // flagUrl="https://flag.pk/flags/4x3/{xx}.svg"
            defaultCountry="US"
            onBlur={() => {
              inputs.phoneNumber &&
                (inputs.phoneNumber.length > 4
                  ? setValidHandler("phoneNumber", true)
                  : setValidHandler("phoneNumber", false));
            }}
            className={`border w-full h-10 rounded-lg px-4 outline-none ${
              !valid.phoneNumber && "border-orange-700"
            }`}
            // value={v}
            onChange={(value: string) => {
              numberHander(value);
            }}
          />
        </div>
        <div className="mt-2">
          <InputField
            valid={valid.password}
            value={inputs.password}
            handler={password}
            name="Password"
          />
        </div>

        {/*  */}
        <div className="text-xs text-textGrey mt-1">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </div>
        <div className="grid grid-cols-[auto_auto] gap-x-2 mt-4">
          <input
            type="checkbox"
            className="h-4 mt-1"
            onChange={(e: any) =>
              e.target.checked
                ? setValidHandler("terms", true)
                : setValidHandler("terms", false)
            }
          />
          <div className="text-sm">
            By creating an account, I agree to our{" "}
            <Link href="" className="underline">
              Terms of use
            </Link>{" "}
            and Privacy
            <Link href="" className="underline">
              {" "}
              Policy
            </Link>
          </div>
        </div>
        <div className=" grid grid-cols-[auto_auto] gap-x-2 mt-4">
          <input
            type="checkbox"
            className="h-4 mt-1 "
            onChange={(e: any) =>
              e.target.checked
                ? setValidHandler("sms", true)
                : setValidHandler("sms", false)
            }
          />
          <div className="text-sm ">
            By creating an account, I am also consenting to receive SMS messages
            and emails, including product new feature updates, events, and
            marketing promotions.
          </div>
        </div>
        {/*  */}
        <div className="mt-4 grid grid-cols-[8rem_auto]">
          <div className=" w-28 h-10" onClick={submitHandler}>
            <AuthBtn text="Sign up" valid={formIsValid} loading={loading} />
          </div>
          <span className="mt-2">
            Already have an account?
            <Link href="/auth/login" className="underline">
              {" "}
              Log in
            </Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
}
