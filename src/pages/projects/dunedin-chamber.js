import React from "react";
import Layout from "../../components/Layout";

export default function DunedinChamber() {
  return (
    <Layout>
      <div class="pt-28 font-primary bg-gradient-to-r from-amber-200 to-yellow-200">
        <div class="max-w-7xl mx-auto pt-9 pb-7 px-8">
          {" "}
          <div class="text-center">
            <p class="mt-1 text-6xl font-extrabold text-amber-900">
              Dunedin Chamber of Commerce
            </p>
          </div>
          <div class="badges pt-7 pb-5  flex justify-center space-x-4">
            <span class="inline-flex items-center px-6 py-1 rounded-full border-2 border-gray-800 text-base font-medium text-gray-800 ">
              Web Design
            </span>{" "}
            <span class="inline-flex items-center px-6 py-1 rounded-full border-2 border-gray-800 text-base font-medium text-gray-800 ">
              Web Dev
            </span>{" "}
            <span class="inline-flex items-center px-6 py-1 rounded-full border-2 border-gray-800 text-base font-medium text-gray-800 ">
              Brand Identity
            </span>{" "}
          </div>
        </div>{" "}
      </div>
      <div class="bg-darkBG grid gap-4 pt-5 pb-10 px-6">
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/a518cec0-fc25-11ee-bec5-7f9403a32f29-web-dunedin.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/cc7d9060-fc23-11ee-bec5-7f9403a32f29-Logo-main.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/cc74b6c0-fc23-11ee-bec5-7f9403a32f29-Logo-main-alt2.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/cc709810-fc23-11ee-bec5-7f9403a32f29-Logo-main-alt.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/cc835cc0-fc23-11ee-bec5-7f9403a32f29-Logo-icons.png"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
