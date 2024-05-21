import React from "react";
import StackEntry from "./StackEntry";
import data from "/public/assets/data/data.json";
import { HiFolderDownload } from "react-icons/hi";
import SimpleSlider from "./SimpleSlider";
import Image from "next/image";

function BodyContent() {
  return (
    <section className="p-4 pt-0 md:p-4 md:ps-0">
      <div className="rounded-lg max-lg:justify-between font-light">
        <section className="flex w-full max-lg:justify-center max-lg:items-start flex-wrap gap-x-2 gap-y-2">
          <a
            className="bento p-0 relative flex-[1_0_100%] overflow-hidden rounded-full drop-shadow-md"
            href="assets/documents/cv.pdf"
            download={"(2024) Oscar Loaiza CV.pdf"}
          >
            <span className="absolute inset-[-10000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFED99_0%,#FFE066_25%,#FFD633_50%,#FFED99_75%,#FFED99_100%)]" />
            <div className="flex grow items-center p-2 justify-center rounded-full text-lg font-bold text-yellow-950 relative z-10 backdrop-blur-3xl">
              Descarga mi CV
              <HiFolderDownload size={25} className="ms-2" />
            </div>
          </a>
          {/* Portafolio y repositorios */}
          <div className="flex flex-[1_1_100%] lg:flex-[1_1_25%] flex-row gap-x-2 gap-y-2">
            <span className="bento bg-purpleGrape-400 text-slate-200">
              <p className="text-lg font-bold">Proyectos</p>
              <p>Portafolio y repositorio</p>
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-y-2 gap-x-2">
              {data.portfolio.map((value, index) => (
                <a key={index} className="bento p-0 cursor-pointer">
                  <StackEntry
                    key={index}
                    index={index}
                    value={value}
                    name={value.name}
                    reactIcon={value.reactIcon}
                    type={value.type}
                    className="flex grow flex-[1_1_100%] px-4 lg:px-2 items-center justify-center text-2xl lg:text-xl"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-row-reverse flex-[1_1_100%] lg:flex-[1_1_27%] lg:flex-row gap-x-2 gap-y-2">
            <span className="bento text-right lg:text-left flex-1 bg-indigo-700 text-indigo-200">
              <p className="text-lg font-bold">Contacto</p>
              <p className="font-medium">Aquí podremos hablar fácilmente</p>
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-y-2 gap-x-2">
              {data.contact.map((value, index) => (
                <a key={index} className="bento p-0 cursor-pointer">
                  <StackEntry
                    key={index}
                    index={index}
                    value={value}
                    name={value.name}
                    reactIcon={value.reactIcon}
                    type={value.type}
                    className="flex grow flex-[1_1_100%] px-4 lg:px-2 items-center justify-center text-2xl lg:text-xl"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-[1_1_100%] lg:flex-[1_1_25%] flex-row gap-x-2 gap-y-2">
            <span className="bento flex-1 bg-slate-700 text-slate-200">
              <p className="text-lg font-bold">Mis otras redes</p>
              <p className="max-lg:hidden">Un poco más sobre mí</p>
            </span>
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-y-2 gap-x-2">
              {data.social.map((value, index) => (
                <a key={index} className="bento p-0 cursor-pointer">
                  <StackEntry
                    key={index}
                    index={index}
                    value={value}
                    name={value.name}
                    reactIcon={value.reactIcon}
                    type={value.type}
                    className="flex grow flex-[1_1_100%] px-4 lg:px-2 items-center justify-center text-2xl lg:text-xl"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-[1_1_100%] lg:flex-[1_1_49%] flex-col gap-x-2 gap-y-2">
            <span className="bento grow-0 px-4 py-1 bg-lime-300 text-lime-950">
              <p className="text-lg font-bold">Experiencia laboral</p>
            </span>
            <div className="bento text-pretty p-0 relative rounded-2xl overflow-hidden">
              <SimpleSlider>
                {data.experience.map((value, index) => (
                  <div
                    style={{ wordBreak: "break-word" }}
                    className={`p-4 grow flex-[1_0_100%] sm:text-xl md:text-base text-base rounded-2xl me-[0.5rem] ${(() => {
                      switch (index) {
                        case 0:
                          return "bg-[#08217f] text-[#d9e1ff]";
                        case 1:
                          return "bg-indigo-800 text-indigo-100";
                        case 2:
                          return "bg-violet-800 text-violet-100";
                        default:
                          return "";
                      }
                    })()}`}
                    key={index}
                  >
                    <div className="mb-4">
                      <div className="flex divide-x divide-white/50 items-center">
                        <Image
                          src={"/logos/" + value.logo}
                          alt={value.empresa}
                          width={100}
                          height={100}
                          className="me-2"
                        />
                        <span className="ps-2 text-lg font-semibold">
                          {value.cargo}
                          <span
                            className={`rounded-md px-[6px] leading-0 py-[3px] text-xs font-black ms-2 ${(() => {
                              switch (index) {
                                case 0:
                                  return "bg-[#bdcbff] text-[#030d2e]";
                                case 1:
                                  return "bg-indigo-200 text-indigo-900";
                                case 2:
                                  return "bg-violet-200 text-violet-800";
                                default:
                                  return "";
                              }
                            })()}`}
                          >
                            {value.contrato}
                          </span>
                        </span>
                      </div>
                      <div className="flex divide-x divide-white/50 items-end">
                        <span className="pe-2 text-sm font-medium">{value.empresa}</span>
                        <span className="ps-2 text-sm">{value.periodo}</span>
                      </div>
                    </div>
                    <ul className="ps-4">
                      {value.descripcion.map((item, i) => (
                        <li className={`list-outside list-disc`} key={i}>
                          {item}
                        </li>
                      ))}{" "}
                    </ul>
                  </div>
                ))}
              </SimpleSlider>
            </div>
          </div>

          <div className="flex flex-[1_1_100%] lg:flex-[1_1_49%] flex-col gap-x-2 gap-y-2">
            <span className="bento grow-0 px-4 py-1 bg-sky-300 text-sky-950">
              <p className="text-lg font-bold">Formación académica</p>
            </span>
            <div className="bento text-pretty p-0 relative rounded-2xl overflow-hidden">
              <SimpleSlider>
                {data.grades.map((value, index) => (
                  <div
                    style={{ wordBreak: "break-word" }}
                    className={`p-4 grow flex-[1_0_100%] sm:text-xl md:text-base text-base rounded-2xl me-[0.5rem] ${(() => {
                      switch (index) {
                        case 0:
                          return "bg-rose-950 text-rose-50";
                        case 1:
                          return "bg-indigo-800 text-indigo-100";
                        case 2:
                          return "bg-violet-800 text-violet-100";
                        default:
                          return "";
                      }
                    })()}`}
                    key={index}
                  >
                    <div className="mb-4">
                      <div className="flex divide-x divide-white/50 items-center">
                        <Image
                          src={"/logos/" + value.logo}
                          alt={value.empresa}
                          width={100}
                          height={100}
                          className="me-2"
                        />
                        <span className="ps-2 text-lg font-semibold">
                          {value.cargo}
                          <span
                            className={`rounded-md px-[6px] leading-0 py-[3px] text-xs font-black ms-2 ${(() => {
                              switch (index) {
                                case 0:
                                  return "bg-rose-200 text-rose-950";
                                case 1:
                                  return "bg-indigo-200 text-indigo-900";
                                case 2:
                                  return "bg-violet-200 text-violet-800";
                                default:
                                  return "";
                              }
                            })()}`}
                          >
                            {value.contrato}
                          </span>
                        </span>
                      </div>
                      <div className="flex divide-x divide-white/50 items-end">
                        <span className="pe-2 text-sm font-medium">{value.empresa}</span>
                        <span className="ps-2 text-sm">{value.periodo}</span>
                      </div>
                    </div>
                    <ul className="ps-4">
                      {value.descripcion.map((item, i) => (
                        <li className={`list-outside list-disc`} key={i}>
                          {item}
                        </li>
                      ))}{" "}
                    </ul>
                  </div>
                ))}
              </SimpleSlider>
            </div>
          </div>
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
