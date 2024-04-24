import { SparklesPreviewLogin } from "@/components/home/SparklesPreviewLogin";
import { PasswordForm } from "@/components/login/PasswordForm";

const page = () => {
  return (
    <section className="bg-white relative ">
      <div className="h-screen lg:overflow-hidden ">
        <div className="h-full w-full  p-[1vh] container">
          <div className="flex max-lg:flex-col h-full w-full">
            <div className="w-5/12 max-lg:w-full flex justify-center items-center">
              <SparklesPreviewLogin />
            </div>
            <div className="w-7/12 max-lg:w-full  p-[1vh] flex items-center justify-center ">
              <PasswordForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
