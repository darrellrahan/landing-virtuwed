import Image from "next/image";
import React from "react";
import { lora } from "../fonts";

function Footer() {
  return (
    <section
      id="footer"
      className="bg-[#F66F6F] px-6 lg:px-28 py-16 lg:pt-24 lg:pb-8 text-white"
    >
      <div className="lg:flex justify-between items-start mb-16 lg:mb-24">
        <Image
          src="/assets/logo-footer.svg"
          alt="virtuwed"
          width={280}
          height={60}
          className="mx-auto lg:mx-0 lg:translate-y-8 mb-20 lg:mb-0"
        />
        <div className="space-y-16 lg:space-y-0 lg:flex gap-24">
          <div className="flex flex-col items-center lg:items-baseline gap-4 text-lg">
            <h3 className={`text-2xl font-semibold ${lora.className}`}>
              Quick Lines
            </h3>
            <a href="/">Home</a>
            <a href="/">Portofolio</a>
            <a href="/">Theme</a>
            <a href="/">Blog</a>
          </div>
          <div className="flex flex-col items-center lg:items-baseline gap-4 text-lg">
            <h3 className={`text-2xl font-semibold ${lora.className}`}>
              Company
            </h3>
            <a href="/">Our Story</a>
            <a href="/">Our Impact</a>
            <a href="/">Careers</a>
          </div>
          <div className="flex flex-col items-center lg:items-baseline gap-4 text-lg">
            <h3 className={`text-2xl font-semibold ${lora.className}`}>
              Connect With Us
            </h3>
            <a href="/">WhatsApp</a>
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
          </div>
        </div>
      </div>
      <p className="font-bold text-center">
        © 2023 Virtuwed. All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
