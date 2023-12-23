"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { lora } from "../fonts";

function Testimonial() {
  const SLIDER_DATA = [
    {
      img: "/assets/testimonial-1.svg",
      quote:
        "Highly recommended for anyone looking to host a memorable virtual wedding.",
      person: "Yoriko",
      people: "Agy & Yoriko",
    },
    {
      img: "/assets/testimonial-2.svg",
      quote:
        "The virtual experience felt truly incridible, and charming to our special day.",
      person: "Fajar",
      people: "Fajar & Tiara",
    },
    {
      img: "/assets/testimonial-3.svg",
      quote:
        "The 360 Virtual Room feature added a unique touch, making our special day truly unforgettable.",
      person: "Junghwan",
      people: "Junghwan & Pamella",
    },
  ];

  const maxIndex = SLIDER_DATA.length - 1;

  const [carouselIndex, setCarouselIndex] = useState(0);

  function nextSlide() {
    setCarouselIndex(carouselIndex === maxIndex ? 0 : carouselIndex + 1);
  }
  function prevSlide() {
    setCarouselIndex(carouselIndex === 0 ? maxIndex : carouselIndex - 1);
  }

  return (
    <section
      id="testimonial"
      className="py-16 bg-[#F66F6F] lg:flex items-center gap-32 lg:px-12"
    >
      <div className="mb-16 lg:w-[370px] text-center lg:text-left">
        <h1
          className={`text-white ${lora.className} text-4xl font-semibold mb-6 leading-snug`}
        >
          What people think about us
        </h1>
        <p className="text-[#FFFFF080] text-lg px-6 lg:px-0">
          We prioritize enhancing customer experience, consistently delivering
          exceptional service and satisfaction.
        </p>
      </div>
      <div className="lg:w-[900px]">
        <div className="flex items-center relative overflow-hidden h-[430px] mb-12">
          {SLIDER_DATA.map((data: any, index: any) => {
            let className = "translate-x-[110%]";

            if (index === carouselIndex) {
              className = "translate-x-0 z-10";
            }
            if (
              index === carouselIndex - 1 ||
              (index === maxIndex && carouselIndex === 0)
            ) {
              className = "-translate-x-[110%]";
            }

            return (
              <div
                key={data.person}
                className={`${className} absolute inset-0 duration-[0.4s] ease-linear w-[280px] mx-auto`}
              >
                <Image
                  src={data.img}
                  alt={data.person}
                  width={280}
                  height={180}
                  className="rounded-t-[0.625rem] w-full"
                />
                <div className="p-6 bg-[#FFF8EF] rounded-b-[0.625rem] h-[250px] flex flex-col justify-between">
                  <p className="text-lg font-medium">{data.quote}</p>
                  <div>
                    <h3 className="text-3xl font-semibold mb-2">
                      {data.person}
                    </h3>
                    <h4 className="text-[#F66F6F] font-medium">
                      {data.people}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center mx-6 lg:mx-0">
          <div className="flex gap-2">
            <button onClick={prevSlide}>
              <Image
                src="/assets/btn-prev.svg"
                alt="prev"
                width={40}
                height={40}
              />
            </button>
            <button onClick={nextSlide} className="hidden lg:inline-block">
              <Image
                src="/assets/btn-next.svg"
                alt="next"
                width={40}
                height={40}
              />
            </button>
          </div>
          <div className="flex gap-2">
            {SLIDER_DATA.map((data, index) => (
              <button
                onClick={() => setCarouselIndex(index)}
                key={data.person}
                className={`w-3 h-3 rounded-full ${
                  index === carouselIndex ? "bg-white" : "bg-[#EAEAEA50]"
                }`}
              ></button>
            ))}
          </div>
          <button onClick={nextSlide} className="lg:hidden">
            <Image
              src="/assets/btn-next.svg"
              alt="next"
              width={40}
              height={40}
            />
          </button>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
