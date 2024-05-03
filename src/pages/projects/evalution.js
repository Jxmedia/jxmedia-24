import React from "react";
import Layout from "../../components/Layout";

export default function Bbrew() {
  return (
    <Layout>
      <div class="pt-28 font-primary bg-gradient-to-r from-rose-300 to-red-400">
        <div class="max-w-7xl mx-auto pt-9 pb-7 px-8">
          {" "}
          <div class="text-center">
            <p class="mt-1 text-6xl font-extrabold text-gray-900">
              DJ Evalution
            </p>
          </div>
          <div class="badges pt-7 pb-5  flex justify-center space-x-4">
            <span class="inline-flex items-center px-6 py-1 rounded-full border-2 border-gray-800 text-base font-medium text-gray-800 ">
              Presskit Design
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
            class="mx-auto h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/875de0a0-0968-11ef-9eca-7d347081a9fb-evalution-logo.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/893ed5a0-0968-11ef-9eca-7d347081a9fb-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="mx-auto h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/894abc80-0968-11ef-9eca-7d347081a9fb-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="mx-auto h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/8938e230-0968-11ef-9eca-7d347081a9fb-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="mx-auto h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/896e4a10-0968-11ef-9eca-7d347081a9fb-7.jpg"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
