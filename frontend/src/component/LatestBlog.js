import React from 'react'
import BlogCard from './BlogCard';

function LatestBlog() {
  return (
    <div className="flex flex-col justify-center no-scrollbar">
      <section className=" w-12/12 my-10 flex justify-center  ">
        <div className="flex flex-col">
          <header className="flex gap-10 ">
            <span className="w-[80px] h-[1px] bg-black mt-4"></span>
            <h1 className="text-2xl font-mono font-bold ">LATEST FROM BLOG</h1>
            <span className="w-[80px] h-[1px] bg-black mt-4"></span>
          </header>
          <h3 className="text-center pt-2 font-sans italic text-lg font-semibold text-gray-500">
            Top freshest and most exciting news
          </h3>
        </div>
      </section>
      <div className="flex flex-wrap gap-4 w-full  justify-center">
        <BlogCard />
      </div>
    </div>
  );
}

export default LatestBlog