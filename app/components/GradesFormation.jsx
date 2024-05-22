import Image from "next/image";
import React from "react";
import StackEntry_NEW from "./StackEntry_NEW";

function GradesFormation({ data, backgroundColors, badgeColors }) {
  return (
    <>
      {data.map((value, index) => (
        <div
          style={{ wordBreak: "break-word" }}
          className={`p-4 grow content-center flex-[1_0_100%] items-center sm:text-xl md:text-base text-base rounded-2xl me-[0.5rem] ${backgroundColors[index]}`}
          key={index}
        >
          <div className="mb-6">
            <div className="flex flex-col items-center">
              <Image
                src={"/logos/" + value.logo}
                alt={value.empresa}
                width={value.width}
                height={value.height}
                className="mb-2 drop-shadow"
              />
              <div className="ps-2 text-lg font-semibold items-center text-center	text-pretty">
                {value.cargo}
                <span
                  className={`rounded-md px-[6px] leading-none py-[3px] text-xs font-black ms-2 shadow ${badgeColors[index]}`}
                >
                  {value.contrato}
                </span>
              </div>
              <div className="justify-center text-center divide-x divide-white/50">
                <span className="pe-2 text-sm font-medium">{value.empresa}</span>
                <span className="ps-2 text-sm">{value.periodo}</span>
              </div>
              {value.stack && (
                <div className="justify-center flex flex-wrap">
                  {value.stack.map((item, i) => (
                    <StackEntry_NEW
                      value={item}
                      type="stack"
                      className="flex p-[6px] rounded-xl mx-[2px] mt-1 shadow"
                      key={i}
                    />
                  ))}{" "}
                </div>
              )}
              {value.design && (
                <div className="justify-center flex flex-wrap">
                  {value.design.map((item, i) => (
                    <StackEntry_NEW
                      value={item}
                      type="design"
                      className="flex p-[6px] rounded-xl mx-[2px] mt-1 shadow"
                      key={i}
                    />
                  ))}{" "}
                </div>
              )}
            </div>
          </div>
          <ul className="ps-6">
            {value.descripcion.map((item, i) => (
              <li style={{ wordBreak: "break-word" }} className={`list-outside list-disc text-pretty`} key={i}>
                {item}
              </li>
            ))}{" "}
          </ul>
        </div>
      ))}
    </>
  );
}

export default GradesFormation;
