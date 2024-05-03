import React from "react";
import Layout from "../../components/Layout";

export default function Sesh() {
  return (
    <Layout>
      <div class="pt-28 font-primary bg-gradient-to-r from-red-300 to-rose-400">
        <div class="max-w-7xl mx-auto pt-9 pb-7 px-8">
          {" "}
          <div class="text-center">
            <p class="mt-1 text-6xl font-extrabold text-gray-900">DJ Sesh</p>
          </div>
          <div class="badges pt-7 pb-5  flex justify-center space-x-4">
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
            src="https://imgix.cosmicjs.com/5e1816e0-0952-11ef-9eca-7d347081a9fb-sesh-2.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/5e199d80-0952-11ef-9eca-7d347081a9fb-sesh-1.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/5e1530b0-0952-11ef-9eca-7d347081a9fb-sesh-3.png"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
