"use client";

import { HiMiniArrowLongRight } from "react-icons/hi2";
import { TbReload } from "react-icons/tb";
import { useState, useEffect } from "react";

export default function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const isLastSlide = curr === slides.length - 1;

  return (
    <div className="overflow-hidden flex grow">
      <div
        className="flex grow text-pretty transition-transform ease-out duration-500 relative rounded-2xl"
        style={{ transform: `translateX(-${curr * 100}%) ${curr !== 0 ? `translateX(calc(-0.5 * ${curr}rem))` : ""}` }}
      >
        {slides}
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={next}
          className="p-1 absolute bottom-0 right-0 m-2 rotate-45 rounded-full text-white duration-300 ease-in-out transform bg-black opacity-50 hover:opacity-100 hover:rotate-0 hover:scale-110"
        >
          {isLastSlide ? <TbReload size={35} /> : <HiMiniArrowLongRight size={35} />}
        </button>
      </div>
    </div>
  );
}
