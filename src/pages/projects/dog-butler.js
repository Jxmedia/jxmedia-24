import React from "react";
import Layout from "../../components/Layout";

export default function AtlasBMS() {
  return (
    <Layout>
      <div class="pt-28 font-primary bg-gradient-to-r from-red-200 to-rose-300">
        <div class="max-w-7xl mx-auto pt-9 pb-7 px-8">
          {" "}
          <div class="text-center">
            <p class="mt-1 text-6xl font-extrabold text-red-900">Dog Butler</p>
          </div>
          <div class="badges pt-7 pb-5  flex justify-center space-x-4">
            <span class="inline-flex items-center px-6 py-1 rounded-full border-2 border-gray-800 text-base font-medium text-gray-800 ">
              Brand Identity
            </span>{" "}
            <span class="inline-flex items-center px-6 py-1 rounded-full border-2 border-gray-800 text-base font-medium text-gray-800 ">
              Marketing Collateral
            </span>{" "}
          </div>
        </div>{" "}
      </div>
      <div class="bg-darkBG grid gap-4 pt-5 pb-10 px-6">
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/d0b75df0-fc2d-11ee-bec5-7f9403a32f29-Logo-main.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/d09222b0-fc2d-11ee-bec5-7f9403a32f29-Logo-main-alt.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/79bed9f0-fc2e-11ee-bec5-7f9403a32f29-collateral.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/d084b530-fc2d-11ee-bec5-7f9403a32f29-Logo-main-alt2.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/d0955700-fc2d-11ee-bec5-7f9403a32f29-Logo-main-alt3.png"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
