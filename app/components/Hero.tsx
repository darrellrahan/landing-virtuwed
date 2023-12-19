import Image from "next/image";
import React from "react";
import { lora } from "../fonts";

function Hero() {
  return (
    <section
      id="hero"
      className="mt-28 py-36 lg:py-0 lg:h-screen lg:mt-0 lg:grid grid-cols-2"
    >
      <div className="lg:bg-[url('/assets/hero-accent-lg.svg')] bg-cover relative">
        <div className="absolute bottom-0 inset-x-0 h-[300px] bg-[url('/assets/hero-accent-sm.svg')] lg:hidden bg-cover"></div>
        <div className="relative mb-12 w-fit mx-auto lg:translate-y-44 lg:translate-x-24 -translate-y-20">
          <Image
            src="/assets/hero-phone.svg"
            alt="wedding mockup"
            width={260}
            height={475}
          />
          <Image
            src="/assets/mockup-frame.svg"
            alt="wedding mockup"
            width={260}
            height={55}
            className="absolute bottom-8 -left-12"
          />
          <div className="lg:flex items-center gap-3 absolute inset-y-1/2 left-36 hidden">
            <hr className="w-[130px] border-2 border-black border-dashed" />
            <span className="w-[100px] text-white text-lg font-semibold">
              Play Video
            </span>
          </div>
        </div>
      </div>
      <div className="order-first lg:flex items-center mx-6 lg:mx-12">
        <div className="space-y-6">
          <h3
            className={`${lora.className} text-4xl lg:text-6xl lg:leading-tight font-semibold`}
          >
            Virtual
            <br />
            Wedding Platform
          </h3>
          <p className="text-[#7C7C7C] font-medium text-lg">
            Make your luxurious and elegant wedding a reality, virtually.
          </p>
          <button className="text-lg py-2 px-3 text-white bg-[#F66F6F] rounded-md">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
