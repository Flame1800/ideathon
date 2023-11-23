"use client";

import Image from "next/image";
import { useState } from "react";

export default function Title() {
  const [close, setClose] = useState(false);
  const [stepEnd, setStepEnd] = useState(0);

  const closeHandle = () => {
    setClose(true);

    setInterval(() => {
      setStepEnd(prev => prev + 1);
    }, 3000);
  }; 

  if (close) {
    return (
      <section className="mt-[70px] realtive z-30 bg-white">
        <div>
          {stepEnd > 0 ? (
            <div className="text-center mt-10">
              {stepEnd >= 1 && <p>Да. Оно просто закрылось. Думаешь тут что-то появиться?</p>}
              {stepEnd >= 2 && <p>Спешу тебя огорчить, нооо... нет (</p>}
              {stepEnd >= 3 && <p>Можешь ждать тут хоть вечность</p>}
              {stepEnd >= 4 && <p>Но больше ничего не случится</p>}
              {stepEnd >= 5 && <p>Ты сам захотел закрыть это окно!</p>}
              {stepEnd >= 6 && <p>А что ты ожидал от кнопки «закрыть»? Я даже не могу представить...</p>}
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="mt-[70px] realtive z-30 bg-white">
      <div className="block flex flex-col max-w-[640px] w-[100%] border border-orange">
        <div className="head h-[50px] flex items-center justify-between border-b border-orange pl-[20px]">
          <div className="name text-[20px] font-primary flex">welcome.exe</div>
          <div
            onClick={closeHandle}
            className="flex items-center justify-center h-full border-l border-orange w-[100px] font-primary text-[20px] text-orange hover:bg-orange hover:text-white cursor-pointer"
          >
            X
          </div>
        </div>
        <div className="mx-auto max-w-[490px] flex flex-col items-center">
          <b className="text-center font-primary mt-[40px] max-w-[380px] mb-[40px]">
            Второй городской идеатон SLM BRAIN HACK в Сургуте будет проходить
            4,5 декабря в СИУэИП на Мелик-Карамова 18/1
            <br />
            <br />
            Создавайте команду и присоединяйтесь!
          </b>
          <p className="mx-10 mb-10 font-primary">
            СИЭУиП запускает соревнование в котором студентам предстоит решать
            разные задачи путем создания новых идей и серьёзных проектов для
            будущего стартапа - это и называется «ИДЕАТОН». Мы подготовили
            номинации и призы, идеатон будет идти два дня с 4 по 5 декабря,
            площадки будут оборудованы всем, что необходимо.
          </p>
          <p className="text mx-10 font-primary">
            Если вы студент и хотите поучастовать тогда соберите команду из 5
            человек и придумайте название, а далее заполните форму которая будет
            ниже. Если у вас уже есть команда осталось только нажать на кнопку
            внизу что бы заполнить форму... | 
          </p>
          <a
            href="https://forms.yandex.ru/u/655efcd7693872021ddcaab5/"
            target="_blank"
            className="button mt-[45px] w-[285px] h-[65px] flex items-center justify-center font-primary bg-orange text-white"
          >
            <b>ХОЧУ УЧАВСТВОВАТЬ</b>
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
            <span className="font-primary underline decoration-1 font-[16px]">
              Чат в телеграм
            </span>
          </a>
        </div>
      </div>

    </section>
  );
}
