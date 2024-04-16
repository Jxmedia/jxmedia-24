import React from "react";
import Layout from "../../components/Layout";

export default function AtlasBMS() {
  return (
    <Layout>
      <div class="pt-28 font-primary bg-gradient-to-r from-teal-200 to-cyan-200">
        <div class="max-w-7xl mx-auto pt-9 pb-7 px-8">
          {" "}
          <div class="text-center">
            <p class="mt-1 text-6xl font-extrabold text-blue-900">
              Atlas Business <span class="block">Maintenance Specialists</span>
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
            src="https://imgix.cosmicjs.com/a98b2ac0-fc2a-11ee-bec5-7f9403a32f29-web-atlas.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/c3f50450-fc28-11ee-bec5-7f9403a32f29-Logo-main.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/c3edb150-fc28-11ee-bec5-7f9403a32f29-Logo-main-alt.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/c3fa0d60-fc28-11ee-bec5-7f9403a32f29-Logo-main-alt2.png"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
