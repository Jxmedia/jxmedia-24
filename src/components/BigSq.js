import React from "react";

const BigSquare = (props) => {
  return (
    <article class="col-span-2 row-span-2 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 hover:opacity-90">
      <a href={props.href}>
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
        <h3 class="mt-3 text-xl leading-6 text-white opacity-80">
          {props.alt}
        </h3>
      </a>
    </article>
  );
};

export default BigSquare;
