import RootLayoutPage from "@/components/layout/RootLayout";
import Image from "next/image";
import google from "../assets/image/google.png";
import github from "../assets/image/github.png";
import { signIn, useSession } from "next-auth/react";

const loginPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex gap-5">
        <div
          onClick={() =>
            signIn("google", { callbackUrl: "http://localhost:3000/" })
          }
          className="border px-8 py-5 rounded-md bg-slate-300/10 hover:bg-slate-300/20 cursor-pointer"
        >
          <Image src={google} alt="google"></Image>
        </div>
        <div
          onClick={() =>
            signIn("github", { callbackUrl: "http://localhost:3000/" })
          }
          className="border px-8 py-5 rounded-md bg-slate-300/10 hover:bg-slate-300/20 cursor-pointer"
        >
          <Image src={github} alt="google"></Image>
        </div>
      </div>
    </div>
  );
};

export default loginPage;

loginPage.getLayout = function getLayout(page) {
  return <RootLayoutPage>{page}</RootLayoutPage>;
};
