import Image from "next/image";
import React from "react";
import { lora } from "../fonts";

function Video() {
  return (
    <section id="video" className="py-32 relative overflow-hidden">
      <div className="z-10 relative px-6 lg:px-48">
        <h1
          className={`text-center text-3xl font-semibold ${lora.className} mb-16`}
        >
          Explore our comprehensive guide for beginners{" "}
          <br className="hidden lg:inline-block" /> on navigating our virtual
          wedding platform
        </h1>
        <div className="flex items-center justify-center h-[270px] lg:h-[500px] bg-[url('/assets/video-thumbnail.svg')] bg-cover bg-center rounded-[10px]">
          <button>
            <Image
              src="/assets/play-video.svg"
              alt="play video"
              width={90}
              height={90}
            />
          </button>
        </div>
      </div>
      <Image
        src="/assets/video-line.svg"
        alt="line"
        width={750}
        height={300}
        className="absolute bottom-0 lg:hidden"
      />
      <Image
        src="/assets/video-line-lg.svg"
        alt="line"
        width={1500}
        height={300}
        className="absolute bottom-0 hidden lg:inline-block"
      />
    </section>
  );
}

export default Video;
