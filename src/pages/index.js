import * as React from "react";
import Logo from "../images/hi_reslogo-01_white.svg";

const IndexPage = () => {
  return (
    <>
      <div className="top-0 z-50 backdrop-blur-sm border-b border-gray-800 bg-gray-900 text-white">
        <div className="flex justify-between items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[10rem] xl:mr-8" href="#hero">
            <img src={Logo} className=""></img>
          </a>
          <a className="block xl:mr-8 text-gray-300" href="#hero">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-20 h-20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="backdrop-blur-sm border-b border-gray-800 bg-gray-900 text-white">
        <div className="flex justify-between items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a
            className="font-primary font-bold block w-[10rem] xl:mr-8 text-5xl"
            href="#hero"
          >
            Tdragie
          </a>
          <a className="block xl:mr-8 text-gray-300" href="#hero">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-20 h-20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
