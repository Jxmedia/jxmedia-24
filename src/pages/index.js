import * as React from "react";
import Logo from "../images/hi_reslogo-01_white.svg";
import Curve from "../images/curve.png";

const IndexPage = () => {
  return (
    <>
      <div className="top-0 z-50 backdrop-blur-sm  bg-darkBG text-white">
        <div className="flex justify-between items-center px-5 lg:px-7.5 xl:px-10">
          <a className="block w-[9rem] xl:mr-8" href="#hero">
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
      <div className="relative bg-darkBG">
        <div className="relative z-1 px-5 lg:px-7.5 xl:px-10">
          <h1 className="relative gradient__text font-primary font-bold block text-center py-10 xl:mr-8 text-7xl">
            Let us help take your business to
            <span className="block">
              greater heights.
              <img
                src={Curve}
                className="pt-4 w-11/12 mx-auto"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
