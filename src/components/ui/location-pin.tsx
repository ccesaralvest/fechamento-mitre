"use client";
import React from "react"; 

interface LocationItemProps {
  name: string;
  minutes: number
}

function LocationItem({ name, minutes }: LocationItemProps) {
  return (
    <div className="flex justify-start">
      <span>{name}</span>
      <div className="flex items-center">
        <span className="mr-1 ml-[3px] text-black font-unineue">
          <strong > - {minutes } MIN</strong>
        </span>
        <img src="/imgs/common/car-icon.svg" alt="Pin card" className="w-[13px] h-[13px]" />
      </div>
    </div>
  );
}

export default LocationItem;
