import React, { useState } from "react";

export default function CopCookie() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div class="font-primary bg-gradient-to-r from-cyan-200 to-blue-200 mb-4">
        <div class="max-w-7xl mx-auto  pt-9 pb-7 px-8">
          {" "}
          <div class="text-center">
            <p class="mt-1 text-6xl font-extrabold text-tertiary">
              Cop A Cookie
            </p>
          </div>
          <div class="badges mt-7 pb-5  flex justify-center space-x-4">
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
      <div class="grid gap-4 mb-10 px-6">
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-2xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
