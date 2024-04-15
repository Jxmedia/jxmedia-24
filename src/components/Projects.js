import React from "react";
import BigSquare from "../components/BigSq";
import LilSquare from "../components/LilSq";

const Projects = () => {
  return (
    <div class="border-t border-emerald-900 bg-primary pt-10 pb-12">
      <div class="First projects-reversed px-10 bg-primary pt-4 sm:px-14 flex items-center justify-center text-center">
        <ul class="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 ">
          <LilSquare
            href="/projects/cop-a-cookie/"
            img="https://imgix.cosmicjs.com/c07f18d0-f785-11ee-b555-0d0678c27dd7-Main-logo-word-med.png"
            alt="Cop A Cookie"
            color="from-blue-900/30"
          />

          <LilSquare
            href="blah"
            img="https://imgix.cosmicjs.com/843198f0-fb5c-11ee-bec5-7f9403a32f29-avatar.png"
            alt="Atlas BMS"
            color="from-blue-900/30"
          />

          <BigSquare
            href="https://www.artstation.com/artwork/n0zYaK"
            img="https://cdna.artstation.com/p/assets/images/images/073/934/524/large/josh-sutherland-test15-edited.jpg?1710839900"
            alt="Jessica"
            color="from-blue-900/30"
          />

          <LilSquare
            href="blah"
            img="https://imgix.cosmicjs.com/021d29a0-fb5d-11ee-bec5-7f9403a32f29-ICON_DB_COLOR-WEBSITE.jpg"
            alt="Dog Butler"
            color="from-red-900/30"
          />

          <LilSquare
            href="blah"
            img="https://imgix.cosmicjs.com/548de620-fb5d-11ee-bec5-7f9403a32f29-bb-avatar.jpg"
            alt="Black Brew Bros"
            color="from-green-900/30"
          />
        </ul>
      </div>

      <div class="hidden Second px-4 bg-primary pt-4 sm:px-14 flex items-center justify-center text-center">
        <div class="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 ">
          <BigSquare
            href="blah"
            img="https://imgix.cosmicjs.com/ecab8060-b290-11ec-97bc-19d12908cbbe-vm-avatar.jpg"
            alt="Beauty by VM"
            color="from-rose-900/30"
          />

          <LilSquare
            href="blah"
            img="https://imgix.cosmicjs.com/9298a1b0-aedb-11ec-abde-779eab3b09ef-MAIN-AVATAR.png"
            alt="Dj Sesh"
            color="from-red-900/30"
          />

          <LilSquare
            href="blah"
            img="https://imgix.cosmicjs.com/8b1b4550-7880-11ec-bc8e-0b22aad4e2bd-eupen-avatar.jpg"
            alt="Eupen Cable USA"
            color="from-blue-900/30"
          />

          <LilSquare
            href="blah"
            img="https://imgix.cosmicjs.com/4607cd70-7886-11ec-bc8e-0b22aad4e2bd-bb-avatar.jpg"
            alt="BlackBrew Brothers"
            color="from-green-900/30"
          />

          <LilSquare
            href="blah"
            img="https://imgix.cosmicjs.com/6d286b10-788d-11ec-bc8e-0b22aad4e2bd-evalution-ig-post.png"
            alt="Evalution"
            color="from-gray-900/80"
          />
        </div>
      </div>

      <div class="hidden Third projects-reversed px-4 bg-primary pt-4 sm:px-14 flex items-center justify-center text-center">
        <ul class="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 ">
          <LilSquare
            href="blah"
            img="https://imgix.cosmicjs.com/380e99a0-9e61-11ec-b20b-ad2fdaf5e1bc-onpointe-avatar.jpg"
            alt="OnPointe Dance"
            color="from-pink-900/30"
          />

          <LilSquare
            href="blah"
            img="https://imgix.cosmicjs.com/537cc940-9b3d-11ec-8e3f-657e6f5f8486-retriever-avatar.jpg"
            alt="Retriever Property"
            color="from-green-900/30"
          />

          <BigSquare
            href="blah"
            img="https://imgix.cosmicjs.com/7bd8ae10-9c99-11ec-b20b-ad2fdaf5e1bc-mdl-avatar.jpg"
            alt="Marine Dock & Lift"
            color="from-blue-900/30"
          />

          <LilSquare
            href="blah"
            img="https://imgix.cosmicjs.com/8787f2a0-9e62-11ec-b20b-ad2fdaf5e1bc-win-win-avatar.jpg"
            alt="Win Win Homes"
            color="from-amber-900/30"
          />

          <LilSquare
            href="blah"
            img="https://imgix.cosmicjs.com/bfd522d0-9e63-11ec-b20b-ad2fdaf5e1bc-cai-avatar.jpg"
            alt="CAI Swimwear"
            color="from-amber-900/30"
          />
        </ul>
      </div>

      <div class="hidden bg-primary">
        <div class="flex items-start justify-center max-w-7xl mx-auto pt-32 pb-40">
          <div class="">
            <a
              href="#"
              class="max-w-3xl mt-1 text-4xl font-extrabold text-tertiary hover:underline"
            >
              View all projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
