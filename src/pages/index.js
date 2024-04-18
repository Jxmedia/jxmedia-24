import * as React from "react";
import Logo from "../images/hi_reslogo-01_white.svg";
import Curve from "../images/curve.png";
import HeroBg from "../images/hero-bg.jpg";
import Hero from "../images/hero.png";
import Projects from "../components/Projects";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jxmedia | Official Quality & Style</title>

        <meta
          name="description"
          content="Complete the image of your business with custom design assets for your marketing campaigns and/or branding projects. With over 10 years experience in the design space, utilizing the newest tools and programs available, we surpass the expectations of our clients time and time again."
        />
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="Jxmedia | Official Quality & Style"
        ></meta>
        <meta
          property="og:description"
          content="Complete the image of your business with custom design assets for your marketing campaigns and/or branding projects. With over 7 years experience in the design space, utilizing the newest tools and programs available, we surpass the expectations of our clients time and time again."
        ></meta>
        <meta
          property="og:site_name"
          content="Jxmedia | Official Quality & Style"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          name="twitter:description"
          content="Complete the image of your business with custom design assets for your marketing campaigns and/or branding projects. With over 7 years experience in the design space, utilizing the newest tools and programs available, we surpass the expectations of our clients time and time again."
        ></meta>
        <meta
          name="twitter:title"
          content="Jxmedia | Official Quality & Style"
        ></meta>
        <link
          rel="icon"
          href="https://imgix.cosmicjs.com/f25e6a80-fb54-11ea-9c2f-cb7d732c4747-Web-logo.png"
        />
      </Helmet>

      <div className="relative bg-darkBG">
        <div className="relative z-50">
          <div className="bg-darkBG relative mx-auto">
            <div className=" relative isolate overflow-hidden">
              <Header />
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
                  <a href="mailto:josh@thejxmediagroup.com">
                    <button
                      type="button"
                      className="font-primary rounded-2xl bg-[#a1ffce] px-12 py-4 text-xl font-bold text-gray-900 hover:opacity-80 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                    >
                      Contact Us Today
                    </button>
                  </a>
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
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-darkBG pt-[10%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="intro bg-gradient-to-t from-[#0e150c] to-darkBG">
        <div class="pb-10 px-4 text-left sm:px-6 flex items-center justify-center sm:max-w-7xl mx-auto">
          <div class="font-primary sm:text-center">
            <p class="text-amber-200 max-w-6xl mt-1 mx-auto text-3xl sm:text-6xl font-extrabold leading-tight">
              Independently-owned, the{" "}
              <span className="block">
                One-stop shop for design and development.
              </span>
            </p>
            <p class="max-w-5xl mx-auto mt-7 text-2xl text-white leading-relaxed">
              Complete the image of your business with custom assets ranging
              from graphic design and branding, website/app design and
              development, to packaging design, advertising etc. With over a
              decade in the space, utilizing the newest tools and programs
              available, we surpass the expectations of our clients time and
              time again.
            </p>
          </div>
        </div>
        <div class="pt-6 pb-20">
          <p class="max-w-5xl mx-auto -mb-10 text-sm text-yellow-100 leading-relaxed uppercase font-bold font-primary text-center">
            Some services we can provide your business
          </p>
          <div class="mx-auto max-w-7xl px-6 lg:px-20">
            <div class="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center sm:max-w-xl sm:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                class="h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/1ff1a8a0-fb5f-11ee-bec5-7f9403a32f29-Psd.png"
                alt="Photoshop"
              />
              <img
                class="h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/46cb7d70-fb5f-11ee-bec5-7f9403a32f29-Ai.png"
                alt="Illustrator"
              />
              <img
                class="h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/729004d0-fb5f-11ee-bec5-7f9403a32f29-Ae.png"
                alt="After Effects"
              />
              <img
                class="h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/9ddc00d0-fb5f-11ee-bec5-7f9403a32f29-Premiere.png"
                alt="Premiere"
              />
              <img
                class="h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/19ce6420-fb61-11ee-bec5-7f9403a32f29-Blender.png"
                alt="Blender"
              />
              <img
                class="h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/de1950d0-fb5f-11ee-bec5-7f9403a32f29-Js.png"
                alt="JS"
              />
              <img
                class="h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/0c2cf850-fb60-11ee-bec5-7f9403a32f29-React.png"
                alt="React"
              />
              <img
                class="h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/5a7085e0-fb60-11ee-bec5-7f9403a32f29-Html.png"
                alt="Html"
              />
              <img
                class="h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/a0d52720-fb60-11ee-bec5-7f9403a32f29-Node.png"
                alt="Node"
              />
              <img
                class="h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/ce78d950-fb61-11ee-bec5-7f9403a32f29-wordpress.png"
                alt="Wordpress"
              />
            </div>
          </div>
        </div>

        <Projects />
      </div>

      <Footer />
    </>
  );
};

export default IndexPage;
