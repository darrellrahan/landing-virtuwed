"use client";

import Image from "next/image";
import React from "react";
import { lora } from "../fonts";
import { Fade } from "react-awesome-reveal";

function Pricing() {
  return (
    <section id="pricing" className="px-6 lg:px-28 py-40">
      <Fade direction="down">
        <h1
          className={`text-center text-3xl leading-snug font-semibold ${lora.className} mb-4`}
        >
          Pricing Plans
        </h1>
      </Fade>
      <Fade direction="up">
        <p className="text-[#7C7C7C] font-medium text-lg text-center mb-16 lg:mb-20">
          Customize your wedding journey with pricing plans that suit you best.
        </p>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">
        <Fade direction="left">
          <div className="p-6 bg-[#F66F6F] rounded space-y-10 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white lg:order-last">
            <button className="border-[1.5px] border-white rounded px-4 py-2 text-lg">
              Priority
            </button>
            <h1 className="text-4xl font-medium">Rp10.000.000</h1>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/tick-pricing.svg"
                  alt="benefit"
                  width={24}
                  height={24}
                />
                <span>Profesional Live Streaming</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/tick-pricing.svg"
                  alt="benefit"
                  width={24}
                  height={24}
                />
                <span>Video Call with 40 inch TV</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/tick-pricing.svg"
                  alt="benefit"
                  width={24}
                  height={24}
                />
                <span>Dedicated Internet</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/tick-pricing.svg"
                  alt="benefit"
                  width={24}
                  height={24}
                />
                <span>360 Degree Documentation</span>
              </div>
            </div>
            <button className="w-full text-xl border-2 border-black bg-black rounded text-center font-medium py-4">
              Get Started
            </button>
          </div>
        </Fade>
        <Fade direction="right">
          <div className="p-6 bg-[#FFFFF0] rounded space-y-10 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <button className="border-[1.5px] border-black rounded px-4 py-2 text-lg">
              Premium
            </button>
            <h1 className="text-4xl font-medium">Rp2.000.000</h1>
            <div className="space-y-4 lg:space-y-0 lg:grid grid-cols-2 gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/tick-pricing.svg"
                  alt="benefit"
                  width={24}
                  height={24}
                />
                <span>Digital Invitation (1000 Guests)</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/tick-pricing.svg"
                  alt="benefit"
                  width={24}
                  height={24}
                />
                <span>Virtual Reseption</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/tick-pricing.svg"
                  alt="benefit"
                  width={24}
                  height={24}
                />
                <span>Wedding Photo Gallery</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/tick-pricing.svg"
                  alt="benefit"
                  width={24}
                  height={24}
                />
                <span>Video Call</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/tick-pricing.svg"
                  alt="benefit"
                  width={24}
                  height={24}
                />
                <span>Wedding Live Streaming</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/tick-pricing.svg"
                  alt="benefit"
                  width={24}
                  height={24}
                />
                <span>Digital Gift</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/tick-pricing.svg"
                  alt="benefit"
                  width={24}
                  height={24}
                />
                <span>Souvenir Delivery</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/tick-pricing.svg"
                  alt="benefit"
                  width={24}
                  height={24}
                />
                <span>1 year access</span>
              </div>
            </div>
            <button className="w-full text-xl border-2 border-black rounded text-center font-medium py-4">
              Get Started
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Pricing;
