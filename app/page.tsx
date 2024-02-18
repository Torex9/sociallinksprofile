import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-stone-950 w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-neutral-900 p-10 rounded-xl h-auto">
        <img
          className=" w-24 h-24 rounded-full mb-6 top-0"
          src="/avatar-jessica.jpeg"
          alt="Jessica's avatar"
        />

        <h1 className=" font-sans text-2xl font-semibold text-white pb-1">
          Jessica Randall
        </h1>
        <p className="font-sans text-lime-400 text-sm font-bold pb-6">
          London, United Kingdom
        </p>
        <p className="font-sans text-slate-300 text-sm pb-5">
          "Front-end developer and avid reader"
        </p>
        <div className="flex flex-col justify-center items-center w-full gap-5 ">
          <button className=" bg-neutral-800 rounded-md w-full py-2 text-white font-sans text-sm font-bold hover:bg-lime-500 hover:text-neutral-800">
            Github
          </button>
          <button className="bg-neutral-800 rounded-md w-full py-2 text-white font-sans text-sm font-bold hover:bg-lime-400 hover:text-neutral-800">
            Frontend Mentor
          </button>
          <button className="bg-neutral-800 rounded-md w-full py-2 text-white font-sans text-sm font-bold hover:bg-lime-400 hover:text-neutral-800">
            LinkedIn
          </button>
          <button className="bg-neutral-800 rounded-md w-full py-2 text-white font-sans text-sm font-bold hover:bg-lime-400 hover:text-neutral-800">
            Twitter
          </button>
          <button className="bg-neutral-800 rounded-md w-full py-2 text-white font-sans text-sm font-bold hover:bg-lime-400 hover:text-neutral-800">
            Instagram
          </button>
        </div>
      </div>
    </main>
  );
}
