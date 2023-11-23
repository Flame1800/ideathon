import Image from "next/image";
import EventDate from "../src/compoents/EventDate";
import Title from "../src/compoents/Title";
import Form from "../src/compoents/Form";

// https://codepen.io/Sidstumple/pen/RwGJOow
export default function Home() {
  return (
    <>

      <main className="flex flex-col items-center ">
        <div className="bg-[url('/img/noize.png')] w-full h-[100vh] absolute z-10"></div>
        <header className="w-[440px] logo flex flex-col items-center mt-[70px]">
          <Image
            className="logo max-w-[440px]"
            width={440}
            height={32}
            src="/img/logo.svg"
            alt="logo"
          />
          <div className="sub-title font-primary text-orange text-xl">
            use your brain
          </div>
        </header>
        <section className="mt-[70px] w-screen">
          <EventDate />
          <Title />
        </section>
        <Form />
        <Image
          src="/img/ellipse.png"
          className="absolute bottom-0 z-1"
          width={1112}
          height={1014}
          alt="ellipse"
        />
      </main>
    </>
  );
}
