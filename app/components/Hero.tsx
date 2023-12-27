"use client";

import Image from "next/image";
import React from "react";
import { useTogglerContext } from "../context/toggler";
import { lora } from "../fonts";
import VideoModal from "./VideoModal";
import { Fade } from "react-awesome-reveal";

function Hero() {
  const { setVideoModal } = useTogglerContext();

  return (
    <section id="hero" className="lg:h-screen lg:grid grid-cols-2">
      <VideoModal src="https://www.youtube.com/embed/5BeOh1XHAVI?si=74V_eTkY97ocatka" />
      <div className="lg:bg-[url('/assets/hero-accent-lg.svg')] bg-cover relative h-screen flex items-center">
        <div className="absolute bottom-0 inset-x-0 h-[300px] bg-[url('/assets/hero-accent-sm.svg')] lg:hidden bg-cover"></div>
        <div className="relative w-fit mx-auto lg:translate-x-24 lg:translate-y-16">
          <Image
            src="/assets/hero-phone.svg"
            alt="wedding mockup"
            width={260}
            height={475}
          />
          <button
            onClick={() => setVideoModal(true)}
            className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px]"
          >
            <Image
              src="/assets/play-video.svg"
              alt="wedding mockup"
              width={120}
              height={120}
              className="w-full h-full"
            />
          </button>
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
      <div className="order-first lg:flex items-center mx-6 lg:mx-12 my-12">
        <Fade direction="left">
          <div className="space-y-6">
            <h3
              className={`${lora.className} text-4xl lg:text-6xl leading-snug lg:leading-[1.2] font-semibold`}
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
        </Fade>
      </div>
    </section>
  );
}

export default Hero;
