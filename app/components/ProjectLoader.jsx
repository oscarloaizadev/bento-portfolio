import React from "react";
import data from "/public/assets/data/data.json";
import Image from "next/image";

function ProjectLoader() {
  return (
    <div className="bg-slate-400 flex flex-[1_1_100%] gap-x-2 gap-y-2">
      <div className="bento flex flex-[1_1_100%] xl:flex-[1_1_39%] gap-x-2 gap-y-2"></div>
      <div className="bento bg-slate-800">
        {data.projects.map((value, index) => (
          <div key={index} className="bento grow flex-col p-0">
            {value.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectLoader;
