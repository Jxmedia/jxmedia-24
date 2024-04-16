import * as React from "react";
import Logo from "../images/hi_reslogo-01_white.svg";
import Curve from "../images/curve.png";
import HeroBg from "../images/hero-bg.jpg";
import Hero from "../images/hero.png";
import Projects from "../components/Projects";
import { Helmet } from "react-helmet";
import Header from "../components/Header";

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
            <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center sm:max-w-xl sm:grid-cols-6  lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                class="col-span-2 h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/1ff1a8a0-fb5f-11ee-bec5-7f9403a32f29-Psd.png"
                alt="Photoshop"
              />
              <img
                class="col-span-2 h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/46cb7d70-fb5f-11ee-bec5-7f9403a32f29-Ai.png"
                alt="Illustrator"
              />
              <img
                class="col-span-2 h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/729004d0-fb5f-11ee-bec5-7f9403a32f29-Ae.png"
                alt="After Effects"
              />
              <img
                class="col-span-2 h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/9ddc00d0-fb5f-11ee-bec5-7f9403a32f29-Premiere.png"
                alt="Premiere"
              />
              <img
                class="col-span-2 h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/19ce6420-fb61-11ee-bec5-7f9403a32f29-Blender.png"
                alt="Blender"
              />
              <img
                class="col-span-2 h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/de1950d0-fb5f-11ee-bec5-7f9403a32f29-Js.png"
                alt="JS"
              />
              <img
                class="col-span-2 h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/0c2cf850-fb60-11ee-bec5-7f9403a32f29-React.png"
                alt="React"
              />
              <img
                class="col-span-2 h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/5a7085e0-fb60-11ee-bec5-7f9403a32f29-Html.png"
                alt="Html"
              />
              <img
                class="col-span-2 h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/a0d52720-fb60-11ee-bec5-7f9403a32f29-Node.png"
                alt="Node"
              />
              <img
                class="col-span-2 h-1/2 w-full object-contain lg:col-span-1"
                src="https://imgix.cosmicjs.com/ce78d950-fb61-11ee-bec5-7f9403a32f29-wordpress.png"
                alt="Wordpress"
              />
            </div>
          </div>
        </div>

        <Projects />
      </div>
      <footer class="font-primary bg-darkBG">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between ">
          <div class="">
            <h2 class="text-5xl font-extrabold tracking-tight text-white ">
              How can we help?
            </h2>
            <div class="group inline-flex items-center text-5xl font-extrabold tracking-tight text-gray-900">
              <a
                href="mailto:josh@thejxmediagroup.com"
                class="block text-green-200 group-hover:underline"
              >
                Contact Us
              </a>
              <span class="ml-2 transform transition-all text-7xl text-green-300 group-hover:animate-pulse group-hover:translate-x-4">
                ➯
              </span>
            </div>
          </div>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class=" rounded-md">
              <div class="flex justify-center space-x-7">
                <a
                  href="https://www.facebook.com/Jxmedia"
                  class="text-white hover:text-gray-300"
                >
                  <span class="sr-only">Facebook</span>
                  <svg
                    class="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/jxmediaproductions/"
                  class="text-white hover:text-gray-300"
                >
                  <span class="sr-only">Instagram</span>
                  <svg
                    class="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.artstation.com/jxmedia"
                  class="text-white hover:text-gray-300"
                >
                  <span class="sr-only">Artstation</span>
                  <svg
                    class="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 23.63l2.703 4.672c0.552 1.094 1.667 1.781 2.885 1.781h17.943l-3.724-6.453zM32 23.661c0-0.641-0.193-1.245-0.516-1.75l-10.516-18.276c-0.557-1.057-1.656-1.719-2.854-1.719h-5.557l16.24 28.135 2.563-4.432c0.5-0.849 0.641-1.224 0.641-1.958zM17.161 19.047l-7.255-12.568-7.26 12.568"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="https://github.com/Jxmedia"
                  class="text-white hover:text-gray-300"
                >
                  <span class="sr-only">GitHub</span>
                  <svg
                    class="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <p class="mt-8 text-center text-base text-white">
                &copy; {new Date().getFullYear()} Jxmedia. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default IndexPage;
