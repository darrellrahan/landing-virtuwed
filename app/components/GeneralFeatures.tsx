"use client";

import Image from "next/image";
import React from "react";
import { lora } from "../fonts";
import { Fade, Zoom } from "react-awesome-reveal";

function GeneralFeatures() {
  return (
    <section id="general-features" className="p-6 lg:my-32">
      <Fade direction="down">
        <h1
          className={`text-center text-3xl leading-snug font-semibold ${lora.className} mb-8`}
        >
          Virtuwed is the first virtual wedding platform in Indonesia with{" "}
          <br className="hidden lg:inline-block" /> the most complete features
        </h1>
      </Fade>
      <Fade direction="up">
        <p className="text-[#7C7C7C] font-medium text-lg text-center px-4 mb-24 lg:mb-28">
          Bring your wedding experience into the virtual world
        </p>
      </Fade>
      <Zoom>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-40 lg:gap-16 gap-24">
          <div className="border border-[rgba(124,124,124,0.30)] rounded-[0.625rem] bg-white/50 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 h-[300px] relative flex items-center">
            <Image
              priority={true}
              src="/assets/gf-1.svg"
              alt="Premium Digital Invitation"
              width={100}
              height={100}
              className="absolute inset-x-1/2 -top-12 -translate-x-1/2"
            />
            <div>
              <h3
                className={`${lora.className} text-center text-3xl font-semibold my-8`}
              >
                Premium Digital Invitation
              </h3>
              <p className="text-lg font-medium text-center">
                Send your Digital Invitations Exclusively, Safely and Reliably
              </p>
            </div>
          </div>
          <div className="border border-[rgba(124,124,124,0.30)] rounded-[0.625rem] bg-white/50 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 h-[300px] relative flex items-center">
            <Image
              priority={true}
              src="/assets/gf-2.svg"
              alt="360° Virtual Reception"
              width={100}
              height={100}
              className="absolute inset-x-1/2 -top-12 -translate-x-1/2"
            />
            <div>
              <h3
                className={`${lora.className} text-center text-3xl font-semibold my-8`}
              >
                360° Virtual Reception
              </h3>
              <p className="text-lg font-medium text-center">
                Host a wedding, anytime, anywhere
              </p>
            </div>
          </div>
          <div className="border border-[rgba(124,124,124,0.30)] rounded-[0.625rem] bg-white/50 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 h-[300px] relative flex items-center">
            <Image
              priority={true}
              src="/assets/gf-3.svg"
              alt=" 360° Virtual Memories"
              width={100}
              height={100}
              className="absolute inset-x-1/2 -top-12 -translate-x-1/2"
            />
            <div>
              <h3
                className={`${lora.className} text-center text-3xl font-semibold my-8`}
              >
                360° Virtual Memories
              </h3>
              <p className="text-lg font-medium text-center">
                View unforgettable memories at anytime, accessible at anytime
              </p>
            </div>
          </div>
        </div>
      </Zoom>
    </section>
  );
}

export default GeneralFeatures;
