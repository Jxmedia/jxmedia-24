import * as React from "react";
import Logo from "../images/hi_reslogo-01_white.svg";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-50 backdrop-blur-sm bg-darkBG/70 text-white">
        <div className="flex justify-between items-center px-5 lg:px-7.5 xl:px-10">
          <a className="block w-[7rem] xl:mr-8" href="/">
            <img
              src={Logo}
              className="hover:opacity-80 transition ease-in-out duration-300"
            ></img>
          </a>
          <a
            className="block text-[#d7ffea] hover:opacity-80 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
            href="mailto:josh@thejxmediagroup.com"
          >
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

export default Header;
