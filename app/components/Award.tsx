import Image from "next/image";
import React from "react";
import { lora } from "../fonts";

function Award() {
  return (
    <section
      id="award"
      className="p-6 my-24 lg:my-0 lg:px-12 bg-[#F6F6F6] block lg:flex justify-center gap-32"
    >
      <div className="flex justify-between items-center gap-4">
        <Image
          priority={true}
          src="/assets/award-left.svg"
          alt="award"
          width={60}
          height={100}
        />
        <p className={`${lora.className} text-[#D2BB65] text-lg`}>
          <span className="font-bold">Nominated as Startup Of The Year</span>,
          Asia Pacific ICT Awards, APICTA 2023
          <br />
          [Hong Kong]
        </p>
        <Image
          priority={true}
          src="/assets/award-right.svg"
          alt="award"
          width={60}
          height={100}
        />
      </div>
      <div className="lg:flex justify-between items-center gap-4 hidden">
        <Image
          priority={true}
          src="/assets/award-left.svg"
          alt="award"
          width={60}
          height={100}
        />
        <p className={`${lora.className} text-[#D2BB65] text-lg`}>
          <span className="font-bold">Nominated as Startup Of The Year</span>,
          Asia Pacific ICT Awards, APICTA 2023
          <br />
          [Hong Kong]
        </p>
        <Image
          priority={true}
          src="/assets/award-right.svg"
          alt="award"
          width={60}
          height={100}
        />
      </div>
      <div className="lg:flex justify-between items-center gap-4 hidden">
        <Image
          priority={true}
          src="/assets/award-left.svg"
          alt="award"
          width={60}
          height={100}
        />
        <p className={`${lora.className} text-[#D2BB65] text-lg`}>
          <span className="font-bold">Nominated as Startup Of The Year</span>,
          Asia Pacific ICT Awards, APICTA 2023
          <br />
          [Hong Kong]
        </p>
        <Image
          priority={true}
          src="/assets/award-right.svg"
          alt="award"
          width={60}
          height={100}
        />
      </div>
    </section>
  );
}

export default Award;
