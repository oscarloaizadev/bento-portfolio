"use client";
import React, { useState, useEffect } from "react";
import data from "/public/assets/data/data.json";
import Image from "next/image";
import SimpleSlider from "./SimpleSlider";

function ProjectLoader() {
  const projectColors = [
    {
      id: 0,
      textColor: "text-magestic-700",
      activeTextColor: "text-magestic-100",
      bgColor: "bg-magestic-700",
      buttonColor: "bg-magestic-950",
      activeButtonColor: "bg-magestic-700",
    },
    {
      id: 1,
      textColor: "text-cry-700",
      activeTextColor: "text-cry-100",
      bgColor: "bg-cry-700",
      buttonColor: "bg-cry-950",
      activeButtonColor: "bg-cry-700",
    },
  ];

  const [bgColor, setBgColor] = useState(projectColors[0].bgColor);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const [scroll, setScroll] = useState(false);

  const changeBgColor = (index) => {
    const selectedColor = projectColors.find((color) => color.id === index);
    if (selectedColor) {
      setBgColor(selectedColor.bgColor);
      setSelectedButtonIndex(index);
      setScroll(true); // Trigger scroll after color change
    }
  };

  useEffect(() => {
    if (scroll) {
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        setScroll(false); // Reset scroll trigger
      }, 200); // Delay of 200ms
    }
  }, [scroll]);

  return (
    <>
      <div className="grid gap-2 h-full relative">
        <div className="flex max-sm:flex-col justify-center gap-2">
          {projectColors.map((color, index) => (
            <button
              key={color.id}
              className={`bento px-4 text-xl rounded-full text-center duration-150 transition-all ease-in-out font-bold select-none ${
                selectedButtonIndex === index ? color.activeButtonColor : color.buttonColor
              } ${selectedButtonIndex === index ? color.activeTextColor + " px-8" : color.textColor}`}
              onClick={() => changeBgColor(index)}
            >
              {`Proyecto #${index + 1}`}
            </button>
          ))}
        </div>

        {data.projects.map(
          (value, index) =>
            index === selectedButtonIndex && (
              <SimpleSlider key={index} url={value.url} isProyect={true}>
                {value.description.map((element, i) => (
                  <div
                    key={i}
                    className={`p-4 pb-[5rem] flex grow content-center flex-[1_0_100%] items-center rounded-2xl overflow-hidden ${bgColor}`}
                  >
                    <div className="grid grid-rows-1 xl:grid-cols-3 gap-2 sm:p-4 rounded-2xl overflow-hidden">
                      <div className="col-span-2 relative">
                        <Image
                          src={`/images/projects/${index + 1}/${i}.png`}
                          alt={value.title}
                          width={0}
                          height={0}
                          sizes="100%"
                          quality={100}
                          style={{ width: "100%", height: "auto" }}
                          className="rounded-2xl shadow-lg"
                        />
                      </div>
                      <div
                        className={`ps-4 flex flex-col items-center grow self-center ${projectColors[index].activeTextColor}`}
                      >
                        <h3 className="text-xl font-bold text-center" style={{ wordBreak: "break-word" }}>
                          {value.title}
                        </h3>
                        <span className="inline-block items-center text-center rounded-md px-[8px] leading-none py-[8px] text-xs font-black mt-2 mb-4 shadow bg-black/80">
                          {`${i + 1}/${value.description.length}`}
                        </span>
                        <p dangerouslySetInnerHTML={{ __html: element }} className="text-pretty"></p>
                      </div>
                    </div>
                  </div>
                ))}
              </SimpleSlider>
            )
        )}
      </div>
    </>
  );
}

export default ProjectLoader;
