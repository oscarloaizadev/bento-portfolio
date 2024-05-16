"use client";

import Image from "next/image";
import React from "react";
import data from "/public/assets/data/data.json";
import SimpleSlider from "./SimpleSlider";

function SideImage() {
  return (
    <>
      <aside className="flex basis-full lg:basis-1/3 flex-col h-dvh max-h-100 top-0 md:sticky p-4">
        <div className="h-full grid grid-rows-12 gap-4">
          <section className="flex flex-col object-center row-span-9 relative bg-purpleGrape-100 rounded-2xl">
            <div className="flex grow h-[60%] sm:h-[75%] md:h-full">
              <Image
                src="/images/yo.png"
                alt="image"
                blurDataURL
                width={1000}
                height={1000}
                className="object-cover rounded-2xl object-center"
              />
            </div>
            <div className="absolute top-0 left-0 p-8 w-full h-full">
              <p className="text-4xl font-bold drop-shadow-md">Hola, soy Oscar</p>
              <span className="relative inline-block overflow-hidden rounded-full p-[0px] mt-2 drop-shadow-md">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#93C54B_0%,#5F9937_25%,#3D6F25_50%,#5F9937_75%,#93C54B_100%)]" />
                <div className="inline-flex h-full w-full items-center justify-center rounded-full px-3 py-1 text-xs font-medium bg-black/70 text-lime-200 backdrop-blur-3xl">
                  Disponible para trabajar.
                </div>
              </span>
            </div>
            <p className="text-center md:text-left object-center text-3xl md:text-xl p-4 text-purpleGrape-950  [&>strong]:text-purpleGrape-950 [&>strong]:underline [&>strong]:decoration-purpleGrape-300 [&>strong]:decoration-wavy [&>strong]:font-black [&>strong]:decoration-2">
              <strong>Ingeniero en Multimedia con enfásis en desarrollo web</strong> de Bogotá, Colombia <kbd>CO</kbd>.
            </p>
          </section>

          <section className="bento p-0 rounded-2xl row-span-3 relative">
            <SimpleSlider>
              {data.AboutMeDescriptions.map((value, index) => (
                <p
                  className={`font-light p-4 grow flex-[1_0_100%] text-xl md:text-base rounded-2xl me-[0.5rem] ${(() => {
                    switch (index) {
                      case 0:
                        return "bg-purpleGrape-600 text-purpleGrape-50";
                      case 1:
                        return "bg-indigo-700 text-indigo-50";
                      case 2:
                        return "bg-cyan-800 text-cyan-50";
                      default:
                        return "";
                    }
                  })()}`}
                  key={index}
                >
                  {value.text}
                </p>
              ))}
            </SimpleSlider>
          </section>
        </div>
      </aside>
    </>
  );
}

export default SideImage;
