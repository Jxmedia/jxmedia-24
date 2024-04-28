import React from "react";
import Layout from "../../components/Layout";

export default function Anciom() {
  return (
    <Layout>
      <div class="pt-28 font-primary bg-gradient-to-r from-teal-200 to-sky-200">
        <div class="max-w-7xl mx-auto pt-9 pb-7 px-8">
          {" "}
          <div class="text-center">
            <p class="mt-1 text-6xl font-extrabold text-blue-900">Anciom LLC</p>
          </div>
          <div class="badges pt-7 pb-5  flex justify-center space-x-4">
            <span class="inline-flex items-center px-6 py-1 rounded-full border-2 border-gray-800 text-base font-medium text-gray-800 ">
              Web Design
            </span>{" "}
            <span class="inline-flex items-center px-6 py-1 rounded-full border-2 border-gray-800 text-base font-medium text-gray-800 ">
              Web Dev
            </span>{" "}
            <span class="inline-flex items-center px-6 py-1 rounded-full border-2 border-gray-800 text-base font-medium text-gray-800 ">
              Logo Design
            </span>{" "}
          </div>
        </div>{" "}
      </div>
      <div class="bg-darkBG grid gap-4 pt-5 pb-10 px-6">
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/06586f70-057b-11ef-bec5-7f9403a32f29-web-anciom.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/6c095c40-0575-11ef-bec5-7f9403a32f29-Avatar-alt.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/3317e050-0575-11ef-bec5-7f9403a32f29-logo-compare.png"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
