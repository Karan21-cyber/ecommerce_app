import React from "react";

function BlogCard() {
  return (
    <div className="w-[350px] h-[40vh] no-scrollbar">
      <div className="relative w-full h-[28vh] md:h-[28vh overflow-hidden ">
        <img
          src={require("../assets/blackpant.webp")}
          alt="blackpant"
          loading="lazy"
          className="w-full h-full object-cover hover:scale-110 transistion duration-700 ease-out cursor-pointer "
        />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-sans font-semibold text-gray-800 cursor-pointer hover:text-blue-600">
          The Easiest Way to Break Out
        </h1>
        <p className="text-gray-400">
          By <span className="text-black">admin</span> on{" "}
          <span className="text-black">November 17, 2021</span>
        </p>
        <p className="text-ellipsis overflow-hidden mt-2 w-full h-[5vh] font-md text-gray-500 font-sans ">
          Nemo enim ipsa Nemo enim ipsaNemo enim ipsaNemo enim iafdafdaf afdafda
          afdafd psaNemo enim ipsa voluptatem quia voluptas sit aspernatur out
          odit
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
