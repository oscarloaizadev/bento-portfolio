import React from "react";
import StackEntry from "./StackEntry";
import StackEntry_NEW from "./StackEntry_NEW";
import data from "/public/assets/data/data.json";
import { HiFolderDownload } from "react-icons/hi";
import SimpleSlider from "./SimpleSlider";
import GradesFormation from "./GradesFormation";
import ProjectLoader from "./ProjectLoader";
import Image from "next/image";

function BodyContent() {
  const BG_GRADES = ["bg-lime-900 text-lime-50", "bg-lime-950 text-lime-50"];
  const BADGE_GRADES = ["bg-lime-200 text-lime-900", "bg-lime-200 text-lime-900"];

  const BG_EXPERIENCE = ["bg-blue-900 text-blue-100", "bg-blue-950 text-blue-200", "bg-blue-950 text-blue-200"];
  const BADGE_EXPERIENCE = ["bg-blue-100 text-blue-900", "bg-blue-200 text-blue-950", "bg-blue-200 text-blue-950"];

  return (
    <section className="p-4 pt-0 md:p-4 md:ps-0 initial-translate">
      <div className="rounded-lg max-lg:justify-between font-light">
        <section className="flex w-full max-lg:justify-center max-lg:items-start flex-wrap gap-x-2 gap-y-2">
          <a
            className="initial-translate-3600ms bento p-0 relative flex-[1_0_100%] overflow-hidden rounded-full drop-shadow-md shadow-md duration-300 transition ease-out hover:shadow-yellow-200/50"
            href="assets/documents/cv.pdf"
            download="(2024) Oscar Loaiza CV.pdf"
          >
            <span className="absolute inset-[-10000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFED99_0%,#FFE066_25%,#FFD633_50%,#FFED99_75%,#FFED99_100%)]" />
            <div className="flex grow items-center p-2 justify-center rounded-full text-lg font-bold text-yellow-950 relative z-10 backdrop-blur-3xl">
              Descarga mi CV
              <HiFolderDownload size={25} className="ms-2" />
            </div>
          </a>
          {/* Portafolio y repositorios */}
          <div className="initial-translate-3400ms flex flex-[1_1_100%] lg:flex-[1_1_25%] flex-row gap-x-2 gap-y-2">
            <span className="complement-translate bento bg-magestic-200 text-magestic-950">
              <p className="text-xl font-bold">Proyectos</p>
              <p className="max-sm:hidden">Portafolio y repositorio</p>
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-y-2 gap-x-2">
              {data.personalLinks[0].links.map((value, index) => (
                <a
                  href={data.personalLinks[0].src[index]}
                  key={index}
                  target="_blank"
                  className="bento grow p-0 cursor-pointer"
                >
                  <StackEntry_NEW
                    value={value}
                    type="portfolio"
                    className="complement-translate flex grow flex-[1_1_100%] rounded-full px-4 lg:px-2 items-center justify-center"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="initial-translate-3200ms flex flex-row-reverse flex-[1_1_100%] lg:flex-[1_1_27%] lg:flex-row gap-x-2 gap-y-2">
            <span className="complement-translate bento text-right lg:text-left flex-1 bg-magestic-200 text-magestic-950">
              <p className="text-xl font-bold">Contacto</p>
              <p className="max-sm:hidden">Aquí podremos hablar fácilmente</p>
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-y-2 gap-x-2">
              {data.personalLinks[2].links.map((value, index) => (
                <a
                  href={data.personalLinks[2].src[index]}
                  key={index}
                  target="_blank"
                  className="bento grow p-0 cursor-pointer"
                >
                  <StackEntry_NEW
                    value={value}
                    type="contact"
                    className="complement-translate flex grow flex-[1_1_100%] rounded-full px-4 lg:px-2 items-center justify-center"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="initial-translate-3000ms flex flex-[1_1_100%] lg:flex-[1_1_25%] flex-row gap-x-2 gap-y-2">
            <span className="complement-translate bento justify-center bg-magestic-200 text-magestic-950">
              <p className="text-xl font-bold">Mis otras redes</p>
            </span>
            <div className="grid grid-cols-2 gap-y-2 gap-x-2">
              {data.personalLinks[1].links.map((value, index) => (
                <a
                  href={data.personalLinks[1].src[index]}
                  key={index}
                  target="_blank"
                  className="bento grow p-0 cursor-pointer hover:scale-105 hover:transition duration-300 ease-in-out"
                >
                  <StackEntry_NEW
                    value={value}
                    type="social"
                    className="complement-translate flex grow flex-[1_1_100%] rounded-full px-4 py-2 lg:px-2 items-center justify-center"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="initial-translate-2800ms flex flex-[1_1_100%] lg:flex-[1_1_55%] xl:flex-[1_1_65%] flex-col">
            <span className="hidden bento grow-0 bg-blue-800 text-blue-100">
              <p className="text-xl font-bold text-center">Experiencia laboral</p>
            </span>
            <div className="bento text-pretty p-0 rounded-2xl overflow-hidden">
              <SimpleSlider>
                <GradesFormation
                  data={data.experience}
                  backgroundColors={BG_EXPERIENCE}
                  badgeColors={BADGE_EXPERIENCE}
                />
              </SimpleSlider>
            </div>
          </div>

          <div className="initial-translate-2600ms flex flex-[1_1_100%] lg:flex-[1_1_40%] xl:flex-[1_1_34%] flex-col">
            <span className="hidden bento grow-0 bg-lime-800 text-lime-100">
              <p className="text-xl font-bold text-center">Formación académica</p>
            </span>
            <div className="bento text-pretty p-0 relative rounded-2xl overflow-hidden">
              <SimpleSlider>
                <GradesFormation data={data.grades} backgroundColors={BG_GRADES} badgeColors={BADGE_GRADES} />
              </SimpleSlider>
            </div>
          </div>

          <div className="initial-translate-2400ms flex flex-row xl:flex-col flex-[1_1_100%] xl:flex-[1_1_15%] gap-x-2 gap-y-2">
            <div className="complement-translate flex flex-[1_1_49%] flex-row gap-x-2 gap-y-2">
              <span className="bento p-2 xl:p-0 justify-center bg-cream-900 text-cream-200 items-center">
                <p className="font-bold uppercase">Inglés</p>
                <p className="text-xl font-bold">B2</p>
              </span>
            </div>

            <div className="flex flex-[1_1_49%] flex-row gap-x-2 gap-y-2">
              <span className="bento p-0 justify-center bg-cream-900 text-cream-200 items-center">
                <p className="font-bold uppercase">Español</p>
                <p className="text-xl font-bold">nativo</p>
              </span>
            </div>
          </div>

          <div className="initial-translate-2200ms flex flex-row  flex-[1_1_100%] lg:flex-[1_1_50%] xl:flex-[1_1_49%] gap-x-2 gap-y-2">
            <div className="flex flex-[1_1_100%] xl:flex-[1_1_39%] gap-x-2 gap-y-2">
              <span className="bento justify-center bg-purpleGrape-200 text-purpleGrape-900 items-center">
                <p className="complement-translate font-bold text-xl mb-4 text-center">Mi stack principal</p>
                <div className="complement-translate grid grid-cols-3 gap-x-2 gap-y-2">
                  {data.favoriteApps.stack.slice(0, 3).map((value, index) => (
                    <div key={index} className="bento grow flex-col p-0">
                      <StackEntry_NEW
                        value={value}
                        type="stack"
                        className="complement-translate flex grow flex-[1_1_100%] rounded-2xl p-2 sm:p-3 items-center justify-center [&>svg]:text-3xl"
                      />
                    </div>
                  ))}
                </div>
              </span>
            </div>

            <div className="flex flex-[1_1_100%] xl:flex-[1_1_39%] gap-x-2 gap-y-2">
              <span className="bento justify-center bg-purpleGrape-200 text-purpleGrape-900 items-center">
                <p className=" complement-translate font-bold text-xl mb-4 text-center">Mi stack favorito</p>
                <div className=" complement-translate grid grid-cols-3 gap-x-2 gap-y-2">
                  {data.favoriteApps.stack.slice(3, 6).map((value, index) => (
                    <div key={index} className="bento grow flex-col p-0">
                      <StackEntry_NEW
                        value={value}
                        type="stack"
                        className=" complement-translate flex grow flex-[1_1_100%] rounded-2xl p-2 sm:p-3 items-center justify-center [&>svg]:text-3xl"
                      />
                    </div>
                  ))}
                </div>
              </span>
            </div>
          </div>

          <div className="initial-translate-2000ms flex flex-[1_1_100%] xl:flex-[1_1_34%] gap-x-2 gap-y-2 w-full">
            <span className="bento justify-center bg-magestic-700 text-magestic-100 items-center w-full">
              <p className="complement-translate font-bold text-xl text-center mb-2 sm:mb-4">Suelo diseñar con</p>
              <div className="complement-translate grid grid-cols-7 xl:grid-cols-4 gap-x-2 gap-y-2">
                {data.favoriteApps.design.map((value, index) => (
                  <div key={index} className="bento grow flex-col p-0">
                    <StackEntry_NEW
                      value={value}
                      type="design"
                      className="complement-translate flex grow flex-[1_1_100%] rounded-2xl p-2 sm:p-3 items-center justify-center [&>svg]:text-2xl"
                    />
                  </div>
                ))}
              </div>
            </span>
          </div>

          <div className="initial-translate rounded-2xl flex flex-[1_1_100%] w-full overflow-hidden">
            <div className="bento text-pretty p-0 rounded-2xl overflow-hidden duration-300 transition-all ease-out gap-x-2 gap-y-2">
              <ProjectLoader />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default BodyContent;
