"use client";

import { MessageFormDemo } from "@/components/home/MessageFormDemo";
import { SparklesPreview } from "@/components/home/SparklesPreview";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubjectChange = (e: any) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subject:", subject);
    console.log("Message:", message);
    setSubject("");
    setMessage("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-white relative ">
      <div className="h-screen overflow-hidden ">
        <div className="h-full w-full  p-[1vh]">
          <div className="h-[90vh] ">
            <div className="flex h-full w-full">
              <div className="w-5/12  flex justify-center items-center">
                <SparklesPreview />
              </div>
              <div className="w-7/12  p-[1vh] flex items-center justify-center">
                <MessageFormDemo />

                {/* <form onSubmit={handleSubmit} className=" w-8/12">
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Subject check
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={handleSubjectChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={handleMessageChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                      placeholder="Enter your message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Send
                  </button>
                </form> */}
              </div>
            </div>
          </div>

          <div className="h-[10vh]  flex justify-center items-center gap-4">
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
              Trade marks are owned by or licensed to the
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

// "use client";

// const Page = () => {
//   const x = "-38vh";

//   return (
//     <section className="bg-[#E4E4E4] relative ">
//       <div className="h-screen overflow-hidden border-2 border-red-600">
//         <div className="flex h-full w-full uppercase max-lg:relative border-2 border-green-600">
//           <div className="h-full w-7/12 max-lg:w-full flex justify-end items-center relative border-2 border-sky-600 ">
//             <div className="absolute border-[1vh] border-[#E4E4E4] h-full">
//               this is page
//             </div>
//           </div>

//           <div className="h-full w-5/12 border-2 border-red-600">
//             <div className="h-[6vh]"></div>
//             <div className="h-[49vh]">
//               <div className="h-[30vh] overflow-hidden -ml-[6vh] max-lg:ml-[2vh] max-lg:h-[36vh]"></div>
//               <div className="h-[29vh] ml-[17vh] mt-[5vh] max-lg:mt-[2vh]"></div>
//             </div>
//           </div>
//         </div>
//         <div>ati limited</div>
//       </div>
//     </section>
//   );
// };

// export default Page;
