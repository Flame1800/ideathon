"use client";

import Image from "next/image";
import { useState } from "react";
import TypingEffect from "../compoents/TypingEffect";

const textsStep = [
  "Да. Оно просто закрылось. Думаешь тут что-то появиться?",
  "Спешу тебя огорчить, нооо... нет (",
  "Можешь ждать тут хоть вечность",
  "Но больше ничего не случится",
  "Ты сам захотел закрыть это окно!",
  "А что ты ожидал от кнопки «закрыть»?",
  "Я даже не могу представить...",
  "Ну ладно, ты слишком настойчив, нажми на текст который появится внизу",
];

export default function Title() {
  const [close, setClose] = useState(false);
  const [stepEnd, setStepEnd] = useState(0);

  const closeHandle = () => {
    setClose(true);

    setInterval(() => {
      setStepEnd((prev) => prev + 1);
    }, 3000);
  };

  if (close) {
    return (
      <section className="mt-[70px] realtive z-30">
        <div>
          {stepEnd > 0 ? (
            <div className="text-center mt-10">
              {textsStep.map((text, i) => {
                if (stepEnd < i + 1) {
                  return;
                }

                return <TypingEffect key={text} text={text} />;
              })}
              {stepEnd > 8 && (
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                >
                  Восстановить окно
                </a>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }

  const mainTexts = [
    `СИЭУиП запускает соревнование в котором студентам предстоит решать
    разные задачи путем создания новых идей и серьёзных проектов для
    будущего стартапа - это и называется «ИДЕАТОН». Мы подготовили
    номинации и призы, идеатон будет идти два дня с 13 по 14 декабря,
    площадки будут оборудованы всем, что необходимо.`,
    `Если вы студент и хотите поучавстовать тогда, соберите команду из 5
    человек и придумайте название, а далее заполните форму, которая
    будет ниже. Если у вас уже есть команда осталось только нажать на
    кнопку внизу что бы заполнить форму...`,
  ];

  return (
    <section className="mt-[70px] w-full flex flex-col items-center realtive z-30 font-primary">
      <div className="block flex flex-col max-w-[640px] w-[100%] mb-[160px] border border-orange bg-white">
        <div className="head h-[50px] flex items-center justify-between border-b border-orange pl-[20px]">
          <div className="name text-[20px] font-primary flex">welcome.exe</div>
          <div
            onClick={closeHandle}
            className="flex items-center justify-center h-full border-l border-orange w-[100px] font-primary text-[20px] text-orange hover:bg-orange hover:text-white cursor-pointer"
          >
            X
          </div>
        </div>
        <div className="mx-auto max-w-[490px] flex flex-col items-center font-pr">
          <b className="text-center font-primary mt-[40px] max-w-[380px] mb-[40px]">
            Второй городской идеатон SLM BRAIN HACK в Сургуте будет проходить с
            13 по 14 декабря в СИЭУиП на Мелик-Карамова 18/1.
            <br />
            <br />
            Открытие идеатона будет 13 деакбря в <br /> Школе 21 на ул. Иосифа
            Каролинского, 14/1, Сургут, за всеми анонсами следите в <br />
            <a
              className="underline decoration-1 text-orange"
              target="_blank"
              href="https://t.me/slm_brain_hack"
            >
              телеграм канале идеатона
            </a>
            <br />
            <br />
            Создавайте команду и присоединяйтесь!
          </b>
          <span className="mx-2 mb-10 font-primary">
            {mainTexts[0]}
          </span>
          <span className="mx-2 font-primary">
            {mainTexts[1]}
          </span>
          <a
            href="https://forms.yandex.ru/u/655efcd7693872021ddcaab5/"
            target="_blank"
            className="button mt-[45px] w-[285px] h-[65px] flex items-center justify-center font-primary bg-orange text-white"
          >
            <b>ХОЧУ УЧАВСТВОВАТЬ</b>
          </a>
          <a
            href="https://t.me/slm_brain_hack"
            target="_blank"
            className="flex mt-[50px] mb-[50px]"
          >
            <Image
              className="w-[26px] h-[26px] mr-[13px]"
              src="./img/tg-logo.svg"
              alt="tg-logo"
              width={26}
              height={26}
            />
            <span className=" font-primary underline decoration-1 font-[16px]">
              Чат в телеграм
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
