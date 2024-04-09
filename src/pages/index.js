import * as React from "react";
import Logo from "../images/hi_reslogo-01_white.svg";
import Curve from "../images/curve.png";
import HeroBg from "../images/hero-bg.jpg";
import Hero from "../images/hero.png";

const IndexPage = () => {
  return (
    <>
      <div className="relative bg-darkBG pb-20">
        <div className="relative z-1">
          <div className="bg-darkBG relative mx-auto">
            <div className="border-b border-emerald-900 relative isolate overflow-hidden">
              <div className="fixed top-0 w-full z-50 backdrop-blur-sm bg-darkBG/70 text-white">
                <div className="flex justify-between items-center px-5 lg:px-7.5 xl:px-10">
                  <a className="block w-[7rem] xl:mr-8" href="#hero">
                    <img
                      src={Logo}
                      className="hover:opacity-80 transition ease-in-out duration-300"
                    ></img>
                  </a>
                  <a
                    className="block text-[#d7ffea] hover:opacity-80 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                    href="#hero"
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

              <img
                src={HeroBg}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover  opacity-20"
              />

              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a1ffce] to-green-700 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
              <div className="pt-[28%] pb-[10%] md:pt-[23%] lg:pt-[18%] xl:pt-[11%]">
                <div className="text-center px-5 lg:px-7.5 ">
                  <h1 className="relative gradient__text text-6xl lg:text-7xl xl:text-8xl font-primary font-bold block text-center">
                    Let us help take{" "}
                    <span className="block">your business to</span>
                    <span className="block">
                      greater heights.
                      <img
                        src={Curve}
                        className="pt-4 w-5/6 md:w-4/6 lg:w-3/5 mx-auto"
                        width={1248}
                        height={56}
                        alt="curve"
                      />
                    </span>
                  </h1>

                  <p className="text-lg pt-8 font-primary text-center leading-8 max-w-lg mx-auto mb-8 text-gray-200 lg:max-w-xl">
                    From logos, 3d Design, website and app Development, Jxmedia
                    has the skills to enhance your business' visual and web
                    experience in many ways, help us help you.
                  </p>
                  <button
                    type="button"
                    className="font-primary rounded-2xl bg-[#a1ffce] px-12 py-4 text-xl font-bold text-gray-900 hover:opacity-80 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                  >
                    Contact Us Today
                  </button>
                </div>
                <div className="px-4 mx-auto relative mt-20 lg:mt-28 lg:w-11/12 xl:w-10/12 lg:px-20">
                  <div className="relative rounded-2xl bg-gradient-to-r from-green-200 to-amber-300 p-4 ring-1 ring-inset ring-yellow-900/10 lg:-m-4 lg:p-4">
                    <img
                      src={Hero}
                      alt="Hero"
                      width={2432}
                      height={1442}
                      className="relative rounded-md shadow-2xl ring-1 ring-gray-900/10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
