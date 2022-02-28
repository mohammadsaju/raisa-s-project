import React from "react";

const Blog = () => {
  return (
    <section className="pt-10 lg:pt-14">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-slate-600 mb-4">
                Constructive Thinking
              </h2>
              <p className="text-xl text-slate-500">
                Enjoy this Blog section
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
          <div className="max-w-[370px] md:w-1/2 lg:w-1/3 mb-12 px-4 shadow-md rounded-lg shadow-pink-200 cursor-pointer hover:shadow-xl hover:shadow-green-300 transition">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
              <div>
              <span className="bg-sky-600 px-4 py-1 text-white font-bold inline-block mb-3">
                  Jan 05, 2023
                </span>
                  <h4
                    className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 block text-slate-600"
                  >
                    Bloog one 
                  </h4>
                <p className="text-base text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[370px] md:w-1/2 lg:w-1/3 mb-12 px-4 shadow-md rounded-lg shadow-pink-200 cursor-pointer hover:shadow-xl hover:shadow-green-300 transition">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
              <div>
              <span className="bg-sky-600 px-4 py-1 text-white font-bold inline-block mb-3">
                  Jan 05, 2023
                </span>
                <h3>
                  <a className="text-2xl font-medium text-slate-600 mb-3 block">
                    Blog Two
                  </a>
                </h3>
                <p className="text-base text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[370px] md:w-1/2 lg:w-1/3 mb-12 px-4 shadow-md rounded-lg shadow-pink-200 cursor-pointer hover:shadow-xl hover:shadow-green-300 transition">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
              <div>
                <span className="bg-sky-600 px-4 py-1 text-white font-bold inline-block mb-3">
                  Jan 05, 2023
                </span>
                  <h4 className="font-semibold text-xl block mb-3 text-slate-600"
                  >
                    Blog Three
                  </h4>
                <p className="text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
