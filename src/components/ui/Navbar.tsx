"use client";

import { cn } from "@/lib/utils";
import { Menu, MenuItem } from "./navbar-menu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const router = useRouter();
  const logoutRequest = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/logout", {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.success === true) {
            router.push("/login");
          } else {
            toast.error(data.error, {
              position: "bottom-left",
              autoClose: 3001,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu>
        <Link
          href="/admin/password"
          className="hover:text-sky-700 text-lg font-semibold"
        >
          Password change
        </Link>
        <button
          onClick={logoutRequest}
          className="hover:text-sky-700 text-lg font-semibold"
        >
          logout
        </button>
      </Menu>
      <ToastContainer />
    </div>
  );
}

export default Navbar;
