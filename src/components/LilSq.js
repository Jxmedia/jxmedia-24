import React from "react";

const LilSquare = (props) => {
  return (
    <article class="pt-[80%] relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 hover:opacity-90">
      <a href="/work/sesh/">
        <img
          src={props.img}
          alt={props.alt}
          class="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          class={`absolute inset-0 -z-10 bg-gradient-to-t ${props.color}`}
        ></div>
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          <div class="-ml-4 flex items-center gap-x-4">
            <svg
              viewBox="0 0 2 2"
              class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
          </div>
        </div>
        <h3 class="mt-3 text-lg pb-3.5 leading-6 text-white opacity-80">
          {props.alt}
        </h3>
      </a>
    </article>
  );
};

export default LilSquare;
