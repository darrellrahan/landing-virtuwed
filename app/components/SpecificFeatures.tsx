"use client";

import Image from "next/image";
import React from "react";
import { lora } from "../fonts";
import { Fade } from "react-awesome-reveal";

function SpecificFeatures() {
  return (
    <section id="specific-features" className="px-6 py-32 lg:py-24 relative">
      <div className="absolute bottom-0 inset-x-0 h-[220px] lg:h-[450px] bg-[url('/assets/sf-wave.svg')] lg:bg-[url('/assets/sf-wave-lg.svg')] bg-cover bg-no-repeat"></div>
      <div className="z-10 relative lg:flex items-center gap-8 justify-center">
        <Fade direction="left">
          <Image
            src="/assets/sf.svg"
            alt="virtuwed panel"
            width={345}
            height={275}
            className="mx-auto lg:hidden"
          />
        </Fade>
        <Fade direction="left">
          <Image
            src="/assets/sf-lg.svg"
            alt="virtuwed panel"
            width={600}
            height={545}
            className="hidden lg:inline-block"
          />
        </Fade>
        <Fade direction="right">
          <div className="mt-16 lg:mt-0 lg:w-[500px]">
            <h1
              className={`text-center lg:text-left text-3xl lg:text-4xl leading-snug font-semibold ${lora.className} mb-6 lg:leading-snug`}
            >
              Integrate your Wedding with our Best Features
            </h1>
            <p className="text-[#7C7C7C] font-medium text-lg">
              With our seamlessly integrated features, personalize your virtual
              wedding experience effortlessly, ensuring a user-friendly platform
              and a delightful celebration for all participants.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default SpecificFeatures;
