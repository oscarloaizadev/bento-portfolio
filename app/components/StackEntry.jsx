import React from "react";
import * as Fa from "react-icons/fa";
import * as Io from "react-icons/io";
import * as Ri from "react-icons/ri";
import * as Si from "react-icons/si";
import * as Di from "react-icons/di";
import * as Fa6 from "react-icons/fa6";

function StackEntry({ index, value, name, reactIcon, type, className }) {
  let Icon = "";
  let bgColor = "";
  let textColor = "";

  const trimmedReactIcon = reactIcon.trim();

  if (type === "io") {
    Icon = Io[trimmedReactIcon];
  } else if (type === "fa") {
    Icon = Fa[trimmedReactIcon];
  } else if (type === "ri") {
    Icon = Ri[trimmedReactIcon];
  } else if (type === "si") {
    Icon = Si[trimmedReactIcon];
  } else if (type === "di") {
    Icon = Di[trimmedReactIcon];
  } else if (type === "fa6") {
    Icon = Fa6[trimmedReactIcon];
  }

  if (name === "Bootstrap") {
    bgColor = `bg-bootstrap/20`;
    textColor = `text-bootstrap`;
  } else if (name === "React") {
    bgColor = `bg-react/20`;
    textColor = `text-react`;
  } else if (name === "Sass") {
    bgColor = `bg-sass/20`;
    textColor = `text-sass`;
  } else if (name === "Javascript") {
    bgColor = `bg-js/20`;
    textColor = `text-js`;
  } else if (name === "PHP") {
    bgColor = `bg-php/20`;
    textColor = `text-php`;
  } else if (name === "JQuery") {
    bgColor = `bg-jquery/20`;
    textColor = `text-jquery`;
  } else if (name === "Figma") {
    bgColor = `bg-figma/20`;
    textColor = `text-figma`;
  } else if (name === "MySql") {
    bgColor = `bg-mysql/20`;
    textColor = `text-mysql`;
  } else if (name === "Twitter") {
    bgColor = `bg-twitter/20`;
    textColor = `text-twitter`;
  } else if (name === "Discord") {
    bgColor = `bg-discord/20`;
    textColor = `text-discord`;
  } else if (name === "LinkedIn") {
    bgColor = `bg-linkedin/20`;
    textColor = `text-linkedin`;
  } else if (name === "GitHub") {
    bgColor = `bg-github/20`;
    textColor = `text-github`;
  } else if (name === "Behance") {
    bgColor = `bg-behance/20`;
    textColor = `text-behance`;
  } else if (name === "Facebook") {
    bgColor = `bg-facebook/20`;
    textColor = `text-facebook`;
  } else if (name === "Youtube") {
    bgColor = `bg-youtube/20`;
    textColor = `text-youtube`;
  } else if (name === "Instagram") {
    bgColor = `bg-instagram/20`;
    textColor = `text-instagram`;
  } else if (name === "WhatsApp") {
    bgColor = `bg-whatsapp/20`;
    textColor = `text-whatsapp`;
  } else if (name === "Gmail") {
    bgColor = `bg-gmail/20`;
    textColor = `text-gmail`;
  } else {
    bgColor = `bg-red-400/20`;
    textColor = `text-red-900`;
  }

  return (
    <span className={"p-[6px] rounded-full " + bgColor + " " + className}>
      <Icon className={textColor + " text-xl"} />
    </span>
  );
}

export default StackEntry;

/*
    <span className="flex justify-between w-full text-center align-middle items-center mb-1">
      <span className={"p-[6px] rounded-full " + bgColor}>
        <Icon className={textColor + " text-xl"} />
      </span>
      <p>{name}</p>
      <p>Web design</p>
    </span>
*/
