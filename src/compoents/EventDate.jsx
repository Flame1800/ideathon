"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

// https://codepen.io/Sidstumple/pen/RwGJOow
export default function Date() {
  const newArr = new Array(5).fill(Math.random());

  return (
    <div>
      <Marquee speed={100}>
        {newArr.map((_, i) => {
          return (
            <div key={i} className="flex items-center">
              <Image
                className="star h-[17px] mx-[30px] object-contain"
                width="17"
                height="17"
                src="/img/strar.png"
                alt="star"
              />
              <span className="font-primary text-[25px]">
                13-14 ДЕКАБРЯ 2023
              </span>
              <Image
                className="star h-[17px] mx-[30px]"
                width="17"
                height="17"
                src="/img/strar.png"
                alt="star"
              />
              <span className="font-primary text-[25px]">
                13-14 ДЕКАБРЯ 2023
              </span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
