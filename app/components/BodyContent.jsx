import React from "react";
import StackEntry from "./StackEntry";
import data from "/public/assets/data/data.json";
import { HiFolderDownload } from "react-icons/hi";

function BodyContent() {
  return (
    <section className="p-4 pt-0 md:p-4 md:ps-0">
      <div className="rounded-lg max-lg:justify-between font-light">
        <section className="flex w-full max-lg:justify-center max-lg:items-start flex-wrap gap-x-2 gap-y-2">
          {/* Portafolio y repositorios */}
          <div className="flex flex-[1_1_100%] lg:flex-[1_1_25%] flex-row gap-x-2 gap-y-2">
            <span className="bento bg-purpleGrape-400 text-slate-200">
              <p className="text-lg font-bold">Proyectos</p>
              <p>Portafolio y repositorio</p>
            </span>
            <div className="flex flex-col gap-y-2">
              {data.portfolio.map((value, index) => (
                <a key={index} className="bento p-0 cursor-pointer">
                  <StackEntry
                    key={index}
                    index={index}
                    value={value}
                    name={value.name}
                    reactIcon={value.reactIcon}
                    type={value.type}
                    className="flex grow flex-[1_1_100%] px-2 items-center justify-center"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-[1_1_100%] lg:flex-[1_1_25%] flex-row gap-x-2 gap-y-2">
            <span className="bento flex-1 bg-lime-400 text-lime-950">
              <p className="text-lg font-bold">Contacto</p>
              <p className="font-medium">Aquí podremos hablar fácilmente</p>
            </span>
            <div className="flex flex-col gap-y-2">
              {data.contact.map((value, index) => (
                <a key={index} className="bento p-0 cursor-pointer">
                  <StackEntry
                    key={index}
                    index={index}
                    value={value}
                    name={value.name}
                    reactIcon={value.reactIcon}
                    type={value.type}
                    className="flex grow flex-[1_1_100%] px-2 items-center justify-center"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-[1_1_100%] lg:flex-[1_1_25%] flex-row gap-x-2 gap-y-2">
            <span className="bento flex-1 bg-slate-700 text-slate-200">
              <p className="text-lg font-bold">Redes</p>
              <p>Un poco más sobre mí</p>
            </span>
            <div className="grid grid-cols-2 gap-y-2 gap-x-2">
              {data.social.map((value, index) => (
                <a key={index} className="bento p-0 cursor-pointer">
                  <StackEntry
                    key={index}
                    index={index}
                    value={value}
                    name={value.name}
                    reactIcon={value.reactIcon}
                    type={value.type}
                    className="flex flex-1 px-2 items-center justify-center"
                  />
                </a>
              ))}
            </div>
          </div>

          <a
            className="bento p-0 relative overflow-hidden rounded-full drop-shadow-md"
            href="assets/documents/cv.pdf"
            download={"(2024) Oscar Loaiza CV.pdf"}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFED99_0%,#FFE066_25%,#FFD633_50%,#FFED99_75%,#FFED99_100%)]" />
            <div className="flex grow items-center p-4 justify-center rounded-full text-lg font-bold text-yellow-950 relative z-10 backdrop-blur-3xl">
              Descarga mi CV
              <HiFolderDownload size={25} className="ms-2" />
            </div>
          </a>

          {/* REDES SOCIALES 
   
           REDES SOCIALES */}
        </section>

        <div className="md:mt-3 flex w-full max-lg:justify-center max-lg:items-start flex-wrap gap-x-4">
          <div className="md:max-w-[200px] w-full">
            <p className="text-lg font-semibold">Proyectos</p>
            {data.projects.map((project, index) => (
              <span key={index} className="flex justify-between w-full my-1">
                <p>
                  <span>
                    {project.name}
                    {project.new && (
                      <span className="whitespace-nowrap rounded-md px-[6px] leading-0 ml-2 py-[3px] text-purpleGrape-300 text-xs ms-2 font-bold bg-purpleGrape-800">
                        Nuevo
                      </span>
                    )}
                  </span>
                </p>
                <p className="opacity-50">{project.year}</p>
              </span>
            ))}
          </div>

          <div className="w-full md:max-w-[210px]">
            <p className="text-lg font-semibold">Stack</p>
            {data.stack.map((value, index) => (
              <>
                <span className="flex justify-between w-full text-center align-middle items-center mb-1">
                  <StackEntry
                    key={index}
                    index={index}
                    value={value}
                    name={value.name}
                    reactIcon={value.reactIcon}
                    type={value.type}
                  />
                  <p>{value.name}</p>
                  <p>Web design</p>
                </span>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BodyContent;
