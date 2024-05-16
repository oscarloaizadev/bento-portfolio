import React from "react";
import * as Fa from "react-icons/fa";
import * as Io from "react-icons/io";
import * as Ri from "react-icons/ri";
import * as Si from "react-icons/si";
import * as Di from "react-icons/di";
import * as Fa6 from "react-icons/fa6";

function SocialLinks({ index, value, name, label }) {
  let Icon = "";
  let bgColor = "";
  let textColor = "";

  if (type === "io") {
    Icon = Io[reactIcon];
  } else if (type === "fa") {
    Icon = Fa[reactIcon];
  } else if (type === "ri") {
    Icon = Ri[reactIcon];
  } else if (type === "si") {
    Icon = Si[reactIcon];
  } else if (type === "di") {
    Icon = Di[reactIcon];
  } else if (type === "fa6") {
    Icon = Fa6[reactIcon];
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
  }

  return (
    <span key={index} className="bento py-1 flex-[1]">
      <a href="#" className="opacity-50">
        {social.label}
      </a>
    </span>
  );
}

export default SocialLinks;
