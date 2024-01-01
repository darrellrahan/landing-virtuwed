"use client";

import { X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTogglerContext } from "../context/toggler";

function MobileNavbar() {
  const { mobileNavbar, setMobileNavbar } = useTogglerContext();

  return (
    <section
      id="mobile-navbar"
      className={`fixed inset-y-0 right-0 bg-white ${
        mobileNavbar ? "left-0" : "left-[150%]"
      } z-[9999] transition-all duration-300 ease-linear px-6 py-8`}
    >
      <div className="flex justify-between items-center mb-16">
        <Image
          priority={true}
          src="/assets/logo.svg"
          alt="logo"
          width={70}
          height={40}
        />
        <button onClick={() => setMobileNavbar(false)}>
          <X size={40} />
        </button>
      </div>
      <div className="flex flex-col gap-8 font-bold text-3xl">
        <Link href="/">Home</Link>
        <Link href="/">Portofolio</Link>
        <Link href="/">Theme</Link>
        <Link href="/">Blog</Link>
      </div>
    </section>
  );
}

export default MobileNavbar;
