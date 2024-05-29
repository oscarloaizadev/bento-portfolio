"use client";

import { HiMiniArrowLongRight } from "react-icons/hi2";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { useState, useEffect, useCallback } from "react";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  className = "relative",
  url,
  isProyect = false,
}) {
  const [curr, setCurr] = useState(0);

  const next = useCallback(() => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }, [slides.length]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  const buttonLabel = curr === slides.length - 1 ? "Volver a empezar" : "Siguiente";
  const ButtonIcon = curr === slides.length - 1 ? TbReload : HiMiniArrowLongRight;
  const buttonIconSize = curr === slides.length - 1 ? 20 : 30;

  const projectButtonLabel = url !== undefined ? "Visita el proyecto" : "Link no disponible";
  const projectButtonAriaLabel = url !== undefined ? "Visita el proyecto" : "Proyecto no disponible";
  const projectButtonStyle =
    url !== undefined
      ? "flex justify-center items-center p-1 me-1 rounded-full text-white duration-300 ease-in-out transform bg-black opacity-100 md:opacity-75 hover:opacity-100 hover:rotate-0 hover:-translate-y-1"
      : "flex justify-center items-center p-1 me-1 rounded-full text-white duration-300 ease-in-out transform bg-gray-900 opacity-70 cursor-not-allowed";

  return (
    <div className={`flex grow rounded-2xl overflow-hidden ${className}`}>
      <div
        className="flex max-w-full basis-full text-pretty transition-transform ease-out duration-500 relative rounded-2xl gap-x-2"
        style={{
          transform: `translateX(-${curr * 100}%) ${curr !== 0 ? `translateX(calc(-0.5 * ${curr}rem))` : ""}`,
        }}
      >
        {slides}
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 items-center justify-between p-4">
        <div className="flex justify-center items-center p-1 absolute bottom-0 right-0">
          {isProyect && (
            <a
              href={url}
              target={url !== undefined ? "_blank" : "_self"}
              className={projectButtonStyle}
              aria-label={projectButtonAriaLabel}
            >
              <span className="me-1 p-2">{projectButtonLabel}</span>
              {url !== undefined && <FaExternalLinkAlt size={buttonIconSize} className="me-2" />}
            </a>
          )}

          <button
            onClick={next}
            className="flex justify-center items-center p-1 m-2 rounded-full text-white duration-300 ease-in-out transform bg-black opacity-100 md:opacity-75 hover:opacity-100 hover:rotate-0 hover:-translate-y-1"
            aria-label={buttonLabel}
          >
            <span className="me-1 p-2">{buttonLabel}</span>
            <ButtonIcon size={buttonIconSize} className="me-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
