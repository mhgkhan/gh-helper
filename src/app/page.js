import LatestBlogsContainer from "@/Components/UI/home/LatestBlogsContainer";
import { webSiteHeadingFont } from "./layout";

export default function Home() {
  return (
   <>
    <main className="md:h-[80vh] h-[100vh] relative mt-[-60px] ">
      <div className=" mainBg relative w-full h-full bg-black block"></div>
      <div className=" main-content absolute w-full h-full top-0 left-0 bg-transparent ">
        <div className="container mx-auto px-2 w-full h-full flex-col gap-6 flex items-center justify-center">
          <h1 className={`md:text-5xl text-4xl  text-bold text-white text-center ${webSiteHeadingFont.className}`}>
            Unlock knowledge, embrace growth—every step counts
          </h1>
          
          <h2 className={`text-4xl md:mt-5 mt-3 text-bold text-white text-center ${webSiteHeadingFont.className} text-yellow-300`}>
            WELCOME TO GH HELPER
          </h2>
          <p className="text-center text-gray-200 md:w-[70%] w-[95%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam sunt ea repellat dicta sit et suscipit dolore velit ipsa? Quos natus eveniet quaerat repudiandae necessitatibus dicta vel quisquam ducimus.</p>
          <button className="z-20 md:mt-9 mt-2 mx-auto px-4 py-3 font-bold text-white cursor-pointer bg-purple-800 rounded-lg hover:shadow-md hover:shadow-cyan-500 hover:outline-2 hover:outline-cyan-400">Explorer</button>
        </div>
      </div>
    </main>
    <LatestBlogsContainer />
    
   </>
  );
}
