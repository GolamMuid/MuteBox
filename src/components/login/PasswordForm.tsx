"use client";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "../ui/background-gradient";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

interface IPasswordInput {
  oldPassword: string;
  newPassword: string;
}

export function PasswordForm() {
  const [isLoading, setIsLoading] = useState<boolean>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPasswordInput>();

  const onSubmit = (data: IPasswordInput) => {
    console.log("data", data);
    setIsLoading(true);
    fetch(`/api/passwordChange`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("password", data);

        if (data.success === true) {
          toast.success("Password change successfully!", {
            position: "top-left",
            autoClose: 3001,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          reset();
        } else {
          toast.error(data.error, {
            position: "top-left",
            autoClose: 3001,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <BackgroundGradient className="rounded-[22px]  max-lg:w-full  sm:p-10 bg-white dark:bg-zinc-900">
      <div className=" w-full mx-auto rounded-2xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 uppercase">
          Change Password
        </h2>

        <form className="my-8 w-full" onSubmit={handleSubmit(onSubmit)}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input
              id="current password"
              placeholder="current password"
              type="password"
              {...register("oldPassword", {
                required: true,
                minLength: 5,
              })}
            />
            {errors?.oldPassword?.type === "required" && (
              <span className="text-xs text-red-700">
                Please provide your old password
              </span>
            )}

            {errors?.oldPassword?.type === "minLength" && (
              <p className="text-xs text-red-700">
                Password must be at least 5 characters long
              </p>
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="new password">New Password</Label>
            <Input
              id="new password"
              placeholder="new password"
              type="password"
              {...register("newPassword", {
                required: true,
                minLength: 5,
              })}
            />
            {errors?.newPassword?.type === "required" && (
              <span className="text-xs text-red-700">
                Please provide your new password
              </span>
            )}

            {errors?.newPassword?.type === "minLength" && (
              <p className="text-xs text-red-700">
                Password must be at least 5 characters long
              </p>
            )}
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] "
            type="submit"
          >
            Update &rarr;
            <BottomGradient />
          </button>
          <ToastContainer />
        </form>
      </div>
    </BackgroundGradient>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
