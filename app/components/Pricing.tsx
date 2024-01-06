"use client";

import Image from "next/image";
import React from "react";
import { lora } from "../fonts";
import { Fade } from "react-awesome-reveal";

function Pricing({
  dict,
}: {
  dict: {
    heading: string;
    subheading: string;
    lite: string[];
    priority: string[];
  };
}) {
  return (
    <section id="pricing" className="px-6 lg:px-28 py-40">
      <Fade direction="down">
        <h1
          className={`text-center text-3xl leading-snug font-semibold ${lora.className} mb-4`}
        >
          {dict.heading}
        </h1>
      </Fade>
      <Fade direction="up">
        <p className="text-[#7C7C7C] font-medium text-lg text-center mb-16 lg:mb-20">
          {dict.subheading}
        </p>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 mb-12 lg:h-[40.5rem]">
        <Fade direction="left">
          <div className="p-6 bg-[#F66F6F] rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white lg:order-last lg:h-full lg:flex flex-col justify-between items-baseline">
            <div className="space-y-10 mb-10 lg:mb-0">
              <button className="border-[1.5px] border-white rounded px-4 py-2 text-lg">
                Lite
              </button>
              <h1 className="text-4xl font-medium">Rp400.000</h1>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>
                    Digital Invitations for 200 Guests, Sent via Virtuwed's
                    Official Account
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>Premium Design</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>360-Degree Virtual Reception</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>360-Degree Virtual Memories</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>Digital Gifts</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>1-Year Access</span>
                </div>
              </div>
            </div>
            <button className="w-full text-xl border-2 border-black bg-black rounded text-center font-medium py-4">
              Get Started
            </button>
          </div>
        </Fade>
        <Fade direction="right">
          <div className="p-6 bg-[#FFFFF0] rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:h-full lg:flex flex-col justify-between items-baseline">
            <div className="space-y-10 mb-10 lg:mb-0">
              <button className="border-[1.5px] border-black rounded px-4 py-2 text-lg">
                Priority
              </button>
              <h1 className="text-4xl font-medium">Rp5.000.000</h1>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>
                    Digital Invitations for 200 Guests, Sent via Virtuwed's
                    Official Account
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>Premium Design</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>360-Degree Virtual Reception</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>360-Degree Virtual Memories</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>Digital Gifts</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>360-Degree Live Streaming Wedding</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>360-Degree Photo & Video Documentation</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    priority={true}
                    src="/assets/tick-pricing.svg"
                    alt="benefit"
                    width={24}
                    height={24}
                  />
                  <span>Lifetime Access</span>
                </div>
              </div>
            </div>
            <button className="w-full text-xl border-2 border-black rounded text-center font-medium py-4">
              Get Started
            </button>
          </div>
        </Fade>
      </div>
      <div
        className={`grid grid-cols-2 lg:grid-cols-4 gap-4 text-white ${lora.className} text-lg lg:text-2xl`}
      >
        <div className="flex flex-col justify-between gap-8 p-4 lg:p-8 bg-[#F66F6F] rounded-lg">
          <Image
            src="/assets/addons-1.svg"
            alt="add ons"
            width={60}
            height={60}
          />
          <span>Additional Invited Guests</span>
          <span>Rp1.500</span>
        </div>
        <div className="flex flex-col justify-between gap-8 p-4 lg:p-8 bg-[#F66F6F] rounded-lg">
          <Image
            src="/assets/addons-2.svg"
            alt="add ons"
            width={60}
            height={60}
          />
          <span>Lifetime Access Upgrade</span>
          <span>Rp500.000</span>
        </div>
        <div className="flex flex-col justify-between gap-8 p-4 lg:p-8 bg-[#F66F6F] rounded-lg">
          <Image
            src="/assets/addons-3.svg"
            alt="add ons"
            width={60}
            height={60}
            className="lg:w-[80px]"
          />
          <span>360-Degree Live Streaming Wedding</span>
          <span>Rp5.000.000</span>
        </div>
        <div className="flex flex-col justify-between gap-8 p-4 lg:p-8 bg-[#F66F6F] rounded-lg">
          <Image
            src="/assets/addons-4.svg"
            alt="add ons"
            width={60}
            height={60}
            className="lg:w-[80px]"
          />
          <span>360-Degree Photo & Video Documentation</span>
          <span>Rp4.000.000</span>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
