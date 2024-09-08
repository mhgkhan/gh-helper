import LatestBlogsContainer from "@/Components/UI/home/LatestBlogsContainer";
import { webSiteHeadingFont } from "./layout";

export default function Home() {
  return (
   <>
    <main className="h-[80vh] relative mt-[-60px] -z-10">
      <div className=" mainBg relative w-full h-full bg-black block"></div>
      <div className=" main-content absolute w-full h-full top-0 left-0 bg-transparent ">
        <div className="container mx-auto px-2 w-full h-full flex-col gap-6 flex items-center justify-center">
          <h1 className={`text-5xl text-bold text-white text-center ${webSiteHeadingFont.className}`}>
            Unlock knowledge, embrace growth—every step counts
          </h1>
          <h2 className={`text-4xl text-bold text-white text-center ${webSiteHeadingFont.className} text-fuchsia-200`}>
            WELCOME TO GH HELPER
          </h2>
          <button className="w-auto p-2 mt-12 border-none bg-white text-black rounded-lg font-bold cursor-pointer transition duration-500 hover:bg-pink-600 hover:text-white hover:border-2 hover:border-pink-300 ">Explorer </button>
        </div>
      </div>
    </main>
    <LatestBlogsContainer />
   </>
  );
}
