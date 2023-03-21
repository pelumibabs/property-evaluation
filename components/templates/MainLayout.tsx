import * as React from "react";
import { TopNav } from "../organisms/TopNav";
import logo from "../../assets/auth/LogoLight.svg";
import Image from "next/image";
import { Search } from "../atoms/Search";
import barIcon from "../../assets/dashboard/bar.svg";
import layerIcon from "../../assets/dashboard/3-layers.svg";
import checkIcon from "../../assets/dashboard/check-square.svg";
import flagIcon from "../../assets/dashboard/flag.svg";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { setUser } from "@/redux/slices/userSlice";
import { auth } from "@/firebase/firebase";
import { Toast } from "@/utils/swal";
import { useDispatch } from "react-redux";
export interface IMainLayoutProps {
  children: any;
}

export function MainLayout(props: IMainLayoutProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const NavItems = [
    {
      name: "Dashboard",
      route: "/dashboard",
      active: false,
      icon: barIcon,
    },
    {
      name: "History",
      route: "/history",
      active: false,
      icon: layerIcon,
    },
    {
      name: "Create a Ticket",
      route: "/createTicket",
      active: false,
      icon: checkIcon,
    },
    {
      name: "Locate",
      route: "/locate",
      active: false,
      icon: flagIcon,
    },
  ];

  const [navItems, setNavItems] = React.useState<any>(NavItems);
  React.useEffect(() => {
    setNavItems((prev: any) => {
      const temp = [...NavItems];
      temp.map((item, Iindex) => {
        if (router.pathname == item.route) {
          item.active = true;
        }
      });
      return temp;
    });
  }, []);
  const navHandler = (index: number, item: any) => {
    setNavItems((prev: any) => {
      const temp = [...NavItems];
      temp.map((item, Iindex) => {
        if (index == Iindex) {
          item.active = true;
        }
      });
      return temp;
    });
    router.push(item.route);
  };
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
    <div className="bg-bgBlack pb-10 min-h-[700px] h-[100vh] ">
      <TopNav />
      <div className="h-[92%] mt-8 grid grid-cols-[20rem_auto] relative ">
        <div className="flex flex-col px-8 py-8">
          <div className="relative h-[3rem] w-[8rem] mt-1">
            <Image src={logo} alt="" fill className="h-4 w-4" />
          </div>
          <div className="w-full h-10 mt-4">
            <Search placeholder="Search" />
          </div>
          <div className=" grid grid-rows-4 gap-y-2 mt-6">
            {navItems.map((item: any, index: number) => {
              return (
                <button
                  onClick={() => {
                    navHandler(index, item);
                  }}
                  className={`grid grid-cols-[2rem_auto] bg-[black] rounded-md px-4 py-2 gap-x-4 ${
                    item.active && "border"
                  }`}
                >
                  <div className="w-full h-full relative">
                    <Image src={item.icon} fill alt="icon" />
                  </div>
                  <div className="w-full h-full relative text-[white]">
                    {item.name}
                  </div>
                </button>
              );
            })}
          </div>
          <div className="mt-auto grid grid-cols-[2rem_auto] bg-[black] rounded-md px-4 py-2 gap-x-4">
            <div className="w-full h-full relative">
              <Image src={barIcon} fill alt="icon" />
            </div>
            <button
              onClick={signout}
              className="w-full h-full relative text-[white]"
            >
              Log out
            </button>
          </div>
          <hr className="my-8" />
        </div>
        <div className="border bg-[white] rounded-tl-lg rounded-bl-lg h-[80vh] overflow-scroll">
          {props.children}
        </div>
      </div>
    </div>
  );
}
