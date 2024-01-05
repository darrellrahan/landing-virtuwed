"use client";

import Image from "next/image";
import React from "react";
import { lora } from "../fonts";
import { Fade } from "react-awesome-reveal";

function SpecificFeatures({
  dict,
}: {
  dict: {
    title: string;
    body: string;
  }[];
}) {
  return (
    <section id="specific-features" className="px-6 py-32 lg:py-24 relative">
      <div className="absolute bottom-0 inset-x-0 h-[220px] lg:h-[380px] bg-[url('/assets/sf-wave.svg')] lg:bg-[url('/assets/sf-wave-lg.svg')] bg-cover bg-no-repeat"></div>
      <div className="z-10 relative lg:flex items-start gap-8 justify-center">
        <Fade direction="left" className="lg:hidden">
          <Image
            priority={true}
            src="/assets/sf.svg"
            alt="virtuwed panel"
            width={345}
            height={275}
            className="mx-auto"
          />
        </Fade>
        <Image
          priority={true}
          src="/assets/sf-lg.svg"
          alt="virtuwed panel"
          width={600}
          height={545}
          className="hidden lg:inline-block sticky top-32"
        />
        <div className="mt-16 lg:mt-0 lg:w-[500px]">
          <div className="lg:h-[70vh] lg:flex items-center">
            <div>
              <h1
                className={`text-center lg:text-left text-3xl lg:text-4xl leading-snug font-semibold ${lora.className} mb-6 lg:leading-snug`}
              >
                {dict[0].title}
              </h1>
              <p className="text-[#7C7C7C] font-medium text-lg">
                {dict[0].body}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex h-screen items-center">
            <div>
              <h1
                className={`text-center lg:text-left text-3xl lg:text-4xl leading-snug font-semibold ${lora.className} mb-6 lg:leading-snug`}
              >
                {dict[1].title}
              </h1>
              <p className="text-[#7C7C7C] font-medium text-lg">
                {dict[1].body}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex h-[70vh] items-center">
            <div>
              <h1
                className={`text-center lg:text-left text-3xl lg:text-4xl leading-snug font-semibold ${lora.className} mb-6 lg:leading-snug`}
              >
                {dict[2].title}
              </h1>
              <p className="text-[#7C7C7C] font-medium text-lg">
                {dict[2].body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecificFeatures;
