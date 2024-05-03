import React from "react";
import Layout from "../../components/Layout";

export default function Eupen() {
  return (
    <Layout>
      <div class="pt-28 font-primary bg-gradient-to-r from-blue-200 to-blue-300">
        <div class="max-w-7xl mx-auto pt-9 pb-7 px-8">
          {" "}
          <div class="text-center">
            <p class="mt-1 text-6xl font-extrabold text-gray-900">
              Eupen Cable USA
            </p>
          </div>
          <div class="badges pt-7 pb-5  flex justify-center space-x-4">
            <span class="inline-flex items-center px-6 py-1 rounded-full border-2 border-gray-800 text-base font-medium text-gray-800 ">
              Marketing Material
            </span>{" "}
            <span class="inline-flex items-center px-6 py-1 rounded-full border-2 border-gray-800 text-base font-medium text-gray-800 ">
              Logo Cleanup
            </span>{" "}
          </div>
        </div>{" "}
      </div>
      <div class="bg-darkBG grid gap-4 pt-5 pb-10 px-6">
        <div>
          <img
            class="mx-auto h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/cde72840-0965-11ef-9eca-7d347081a9fb-ig.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="mx-auto h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/cdd9bac0-0965-11ef-9eca-7d347081a9fb-slide-2.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="mx-auto h-auto max-w-full rounded-[30px]"
            src="https://imgix.cosmicjs.com/cdd7e600-0965-11ef-9eca-7d347081a9fb-slide-1.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="mx-auto h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/cd6c7a00-0965-11ef-9eca-7d347081a9fb-main-slide.jpg"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
