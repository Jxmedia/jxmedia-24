import React, { useState } from "react";
import Layout from "../../components/Layout";

export default function CopCookie() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Layout>
      <div class="pt-28 font-primary bg-gradient-to-r from-cyan-200 to-blue-200">
        <div class="max-w-7xl mx-auto pt-9 pb-7 px-8">
          {" "}
          <div class="text-center">
            <p class="mt-1 text-6xl font-extrabold text-tertiary">
              Cop A Cookie
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
            src="https://imgix.cosmicjs.com/13beca80-fb6a-11ee-bec5-7f9403a32f29-web-cop-a-cookie.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/e02f3ee0-fb67-11ee-bec5-7f9403a32f29-Logo-main.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://imgix.cosmicjs.com/f529baa0-fb67-11ee-bec5-7f9403a32f29-Main-logo-med.png"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
