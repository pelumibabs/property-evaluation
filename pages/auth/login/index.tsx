import * as React from "react";
import { AuthLayout } from "@/components/templates/AuthLayout";
import { InputField } from "@/components/atoms/auth/InputField";
import { AuthBtn } from "@/components/atoms/AuthBtn";
import Link from "next/link";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { SetStateAction } from "react";
import { auth, db } from "@/firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Toast } from "@/utils/swal";
import { useRouter } from "next/router";

export interface IIndexProps {}

type Inputs = {
  email: "";
  password: "";
};
type Valid = {
  email: true;
  password: true;
};
export default function Index(props: IIndexProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const [inputs, setInputs] = useState<Inputs>({
    email: "",
    password: "",
  });
  const [valid, setValid] = useState<Valid>({
    email: true,
    password: true,
  });
  useEffect(() => {
    inputs.email.length > 1 &&
    inputs.email.includes("@") &&
    inputs.email.includes(".com") &&
    inputs.password.length > 5
      ? setFormIsValid(true)
      : setFormIsValid(false);
  }, [inputs]);
  const setInputsHandler = (name: any, value: String) => {
    setInputs((prev: SetStateAction<any>) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  const setValidHandler = (name: any, value: boolean) => {
    setValid((prev: SetStateAction<any>) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
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

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        getDoc(docRef)
          .then((res: any) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      }
    });
  }, []);

  const submitHandler = () => {
    if (formIsValid) {
      setLoading(true);
      signInWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: "Sign in successful",
          });
          router.push("/Dashboard");
          console.log(res);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          const errorMessage =
            err.message == "Firebase: Error (auth/user-not-found)."
              ? "Invalid email "
              : err.message == "Firebase: Error (auth/wrong-password)." &&
                "Invalid password";
          Toast.fire({
            icon: "error",
            title: errorMessage,
          });
          setLoading(false);
        });
    }
  };
  return (
    <AuthLayout>
      <div className="bg-[white] w-full mt-10 rounded-2xl py-10 px-14">
        <h1 className="text-2xl text-bold">Sign in now</h1>
        <div className="mt-8">
          <InputField
            valid={valid.email}
            value={inputs.email}
            handler={email}
            name="Email address"
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
        <div className="mt-4 grid grid-cols-[auto_auto]">
          <div className=" w-28 h-10  " onClick={submitHandler}>
            <AuthBtn loading={loading} text="Sign in" valid={formIsValid} />
          </div>
          <span className="mt-2">
            Don’t have an account?{" "}
            <Link href="/auth/signup" className="underline">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
}
