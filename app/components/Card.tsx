"use client";

import React from "react";
import { Experience } from "../utils/experienceList";
import Image from "next/image";

function Card(props: Experience) {
  return (
    <div className="p-3 m-3 h-32 sm:w-96 w-full shadow-lg flex justify-evenly items-center rounded-xl">
      <div className="w-2/5 flex justify-center items-center">
        <Image
          src={props.image}
          alt={props.company}
          width={props.width}
          height={props.height}
        />
      </div>
      <div className="flex flex-col w-3/5 ml-2">
        <div className="title font-semibold text-lg">{props.company}</div>
        <div className="position flex flex-wrap">{props.position}</div>
        <div className="time font-light text-sm">{props.time}</div>
      </div>
    </div>
  );
}

export default Card;
