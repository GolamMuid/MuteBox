"use client";

import { MessageForm } from "@/components/home/MessageForm";
import { SparklesPreview } from "@/components/home/SparklesPreview";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-white relative ">
      <div className="h-screen lg:overflow-hidden ">
        <div className="h-full w-full  p-[1vh]">
          <div className="lg:h-[90vh] max-lg:mb-24">
            <div className="flex max-lg:flex-col h-full w-full">
              <div className="w-6/12 max-lg:w-full flex justify-center items-center ">
                <SparklesPreview />
              </div>
              <div className="w-6/12 max-lg:w-full  p-[1vh] lg:px-12 flex items-center justify-center ">
                <MessageForm />
              </div>
            </div>
          </div>

          <div className="lg:h-[10vh]   flex justify-center items-center gap-4">
            <Image
              src="/next.svg"
              width={20}
              height={80}
              className="max-h-[40px] w-auto"
              alt="news"
            />
            <div className="text-start">
              © {currentYear} &nbsp;
              <Link
                href="https://www.creativematter.agency/"
                target="_blank"
                className="hover:underline cursor-pointer"
              >
                Creative Matter
              </Link>
              . All rights reserved. <br />
              Trade marks are owned by or licensed to the &nbsp;
              <Link
                href="https://www.atilimited.net/"
                target="_blank"
                className="hover:underline cursor-pointer"
              >
                ATI Limited.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
