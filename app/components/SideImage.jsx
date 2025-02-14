import Image from 'next/image';
import React from 'react';
import data from '/public/assets/data/data.json';
import SimpleSlider from './SimpleSlider';

function SideImage() {
  return (
    <>
      <aside
        className="initial-translate flex basis-auto md:basis-[75%] lg:basis-[50%] flex-col min-h-dvh h-dvh top-0 md:sticky p-4 sm:p-2 sm:py-4">
        <div className="h-full flex flex-col gap-2">
          {/* Definimos filas automáticas y ajustables */}
          <section
            className="initial-translate flex flex-col basis-[100%] flex-grow object-center relative bg-purpleGrape-100 rounded-2xl overflow-hidden">
            <div
              className="flex grow h-[50%] sm:h-[75%] md:h-full overflow-hidden">
              <Image
                src="/images/yo.png"
                alt="image"
                blurDataURL
                width={1000}
                height={1000}
                className="object-cover object-middle rounded-2xl w-full h-full"
                priority={true}
              />
            </div>
            <div className="absolute top-0 left-0 p-8 w-full h-full text-end">
              <h1
                className="text-4xl sm:text-6xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold drop-shadow text-white [&>span]:underline [&>span]:decoration-purpleGrape-400 [&>span]:decoration-wavy [&>span]:decoration-2">
                ¡Hola! 😎
                <br/>
                soy <span>Oscar</span>
              </h1>
              <span
                className="relative inline-block overflow-hidden rounded-full p-[0px] mt-2 drop-shadow-md">
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#5A67D8_0%,#434190_25%,#312E81_50%,#434190_75%,#5A67D8_100%)]"/>
              <div
                className="inline-flex h-full w-full items-center justify-center rounded-full px-3 py-1 text-xs font-medium bg-black/30 text-indigo-100 backdrop-blur-3xl">
                Desarrollador Web Full-Stack
              </div>
            </span>

            </div>
            <p
              className="text-center text-balance md:text-left object-center sm:text-xl p-4 text-purpleGrape-950  [&>strong]:text-purpleGrape-950 [&>strong]:underline [&>strong]:decoration-purpleGrape-200 [&>strong]:decoration-wavy [&>strong]:font-black [&>strong]:decoration-2">
              <strong>Ingeniero en Multimedia</strong> especializado en la
              creación de soluciones web autoadministrables para organizaciones
              de primer nivel.
            </p>
          </section>

          <section
            className="bento text-pretty p-0 rounded-2xl overflow-hidden relative flex-shrink-0">
            <SimpleSlider>
              {data.AboutMeDescriptions.map((value, index) => (
                <p
                  style={{ wordBreak: 'break-word' }}
                  className={`font-light p-4 pb-16 grow flex-[1_0_100%] sm:text-xl md:text-base text-base rounded-2xl me-[0.5rem] ${(() => {
                    switch (index) {
                      case 0:
                        return 'bg-purpleGrape-600 text-purpleGrape-50';
                      case 1:
                        return 'bg-indigo-700 text-indigo-50';
                      case 2:
                        return 'bg-cyan-800 text-cyan-50';
                      default:
                        return '';
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
