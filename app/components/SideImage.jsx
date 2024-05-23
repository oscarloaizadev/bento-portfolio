import Image from "next/image";
import React from "react";
import data from "/public/assets/data/data.json";
import SimpleSlider from "./SimpleSlider";

function SideImage() {
  return (
    <>
      <aside className="initial-translate flex basis-auto md:basis-[75%] lg:basis-[50%] flex-col min-h-dvh h-dvh top-0 md:sticky p-4 sm:p-2 sm:py-4">
        <div className="h-full flex flex-col gap-2">
          {/* Definimos filas automáticas y ajustables */}
          <section className="initial-translate flex flex-col basis-[100%] flex-grow object-center relative bg-purpleGrape-100 rounded-2xl overflow-hidden">
            <div className="flex grow h-[50%] sm:h-[75%] md:h-full overflow-hidden">
              <Image
                src="/images/yo_3.png"
                alt="image"
                blurDataURL
                width={1000}
                height={1000}
                className="object-cover object-middle rounded-2xl w-full h-full"
                priority={true}
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
            <p className="text-center md:text-left object-center sm:text-xl p-4 text-purpleGrape-950  [&>strong]:text-purpleGrape-950 [&>strong]:underline [&>strong]:decoration-purpleGrape-200 [&>strong]:decoration-wavy [&>strong]:font-black [&>strong]:decoration-2">
              <strong>Ingeniero en Multimedia con énfasis en desarrollo web</strong> de Bogotá, Colombia <kbd>CO</kbd>.
            </p>
          </section>

          <section className="bento text-pretty p-0 rounded-2xl overflow-hidden relative flex-shrink-0">
            <SimpleSlider>
              {data.AboutMeDescriptions.map((value, index) => (
                <p
                  style={{ wordBreak: "break-word" }}
                  className={`font-light p-4 pb-16 grow flex-[1_0_100%] sm:text-xl md:text-base text-base rounded-2xl me-[0.5rem] ${(() => {
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
