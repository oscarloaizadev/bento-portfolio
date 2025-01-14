import React from "react";
import * as Fa from "react-icons/fa";
import * as Io from "react-icons/io";
import * as Ri from "react-icons/ri";
import * as Si from "react-icons/si";
import * as Di from "react-icons/di";
import * as Fa6 from "react-icons/fa6";
import * as Gr from "react-icons/gr";
import * as Ai from "react-icons/ai";
import * as Tb from "react-icons/tb";
import * as Md from "react-icons/md";
import * as Pi from "react-icons/pi";
import * as Bi from "react-icons/bi";
import data from "/public/assets/data/data.json";

const iconMap = {
  io: Io,
  fa: Fa,
  ri: Ri,
  si: Si,
  di: Di,
  fa6: Fa6,
  gr: Gr,
  ai: Ai,
  tb: Tb,
  md: Md,
  pi: Pi,
  bi: Bi,
};

const colorMap = {
  Bootstrap: { bgColor: "bg-bootstrap-darken", textColor: "text-bootstrap" },
  React: { bgColor: "bg-react-darken", textColor: "text-react" },
  Sass: { bgColor: "bg-sass-darken", textColor: "text-sass" },
  Javascript: { bgColor: "bg-js-darken", textColor: "text-js" },
  PHP: { bgColor: "bg-php-darken", textColor: "text-php" },
  JQuery: { bgColor: "bg-jquery-darken", textColor: "text-jquery" },
  Figma: { bgColor: "bg-figma-darken", textColor: "text-figma" },
  MySql: { bgColor: "bg-mysql-darken", textColor: "text-mysql" },
  Twitter: { bgColor: "bg-twitter-darken", textColor: "text-twitter" },
  Discord: { bgColor: "bg-discord-darken", textColor: "text-discord" },
  LinkedIn: { bgColor: "bg-linkedin-darken", textColor: "text-linkedin" },
  Github: { bgColor: "bg-github-darken", textColor: "text-github" },
  Behance: { bgColor: "bg-behance-darken", textColor: "text-behance" },
  Facebook: { bgColor: "bg-facebook-darken", textColor: "text-facebook" },
  Youtube: { bgColor: "bg-youtube-darken", textColor: "text-youtube" },
  Instagram: { bgColor: "bg-instagram-darken", textColor: "text-instagram" },
  WhatsApp: { bgColor: "bg-whatsapp-darken", textColor: "text-whatsapp" },
  Gmail: { bgColor: "bg-gmail-darken", textColor: "text-gmail" },
  Jira: { bgColor: "bg-jira-darken", textColor: "text-jira" },
  HTML: { bgColor: "bg-html-darken", textColor: "text-html" },
  CSS: { bgColor: "bg-css-darken", textColor: "text-css" },
  Blender: { bgColor: "bg-blender-darken", textColor: "text-blender" },
  Illustrator: { bgColor: "bg-illustrator-darken", textColor: "text-illustrator" },
  Canva: { bgColor: "bg-canva-darken", textColor: "text-canva" },
  Photoshop: { bgColor: "bg-photoshop-darken", textColor: "text-photoshop" },
  Premiere: { bgColor: "bg-premiere-darken", textColor: "text-premiere" },
  TailwindCSS: { bgColor: "bg-tailwind-darken", textColor: "text-tailwind" },
  NextJS: { bgColor: "bg-black", textColor: "text-[#d7d7d7]" },
  After: { bgColor: "bg-after-darken", textColor: "text-after" },
  Audition: { bgColor: "bg-audition-darken", textColor: "text-audition" },
  default: { bgColor: "bg-red-400", textColor: "text-red-900" },
};

function StackEntry({
  value,
  type,
  className = "flex flex-column",
  textClassName = "items-center hover:transition hover:-translate-y-[2px] hover:scale-[1.05] duration-300 ease-in-out",
}) {
  const item = data[type] ? data[type].find((item) => item.name === value) : false;

  if (!item) {
    return null;
  }

  const { reactIcon, type: itemType, name } = item;
  const IconComponent = iconMap[itemType]?.[reactIcon.trim()];
  const { bgColor, textColor } = colorMap[name] || colorMap.default;

  return (
    <span className={`${bgColor} ${className}`}>
      {IconComponent && (
        <IconComponent className={`h-full w-full text-2xl drop-shadow-sm ${textColor} ${textClassName}`} />
      )}
    </span>
  );
}

export default StackEntry;
