import Image from "next/image";
import Marquee from "react-fast-marquee";

// https://codepen.io/Sidstumple/pen/RwGJOow
export default function Title() {
  const newArr = new Array(5).fill(Math.random());

  return (
    <Marquee speed={250}>
      {newArr.map((_, i) => {
        return (
          <>
            <Image
              key={i}
              src="/img/title.svg"
              className="object-cover max-w-fit mx-10"
              alt="logo"
              width={2713}
              height={99}
            />
          </>
        );
      })}
    </Marquee>
  );
}
