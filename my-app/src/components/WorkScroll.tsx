"use client"

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

function WorkScroll() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 2], ["1%", "-95%"]);
  
    return (
      <section ref={targetRef} className="ml-[10%] relative h-[200vh] bg-white mx-auto">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
  };
  
  const Card = ({ card }: { card: CardType }) => {
    return (
      <div
        key={card.id}
        className="h-[50vh] w-[50vh] overflow-hidden text-black cursor-pointer transition-transform hover:-translate-y-2"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[60%] rounded-xl"
        ></div>
        <div className="flex flex-col gap-y-2 mt-2 font-[Oswald]">
            <span className="border w-fit py-1 px-2 text-[#FFA41B] border-[#FFA41B] rounded-md">Category</span>
          <h3 className="text-3xl ">
            {card.title}
          </h3>
          <p className="text-[#7D7C7C]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ut, nulla perferendis optio id voluptates. Ullam repellat sapiente dicta architecto.</p>
        </div>
      </div>
    );
  };
export default WorkScroll

type CardType = {
    url: string;
    title: string;
    id: number;
  };
  
  const cards: CardType[] = [
    {
      url: "/dev.webp",
      title: "Title 1",
      id: 1,
    },
    {
      url: "/web_design.webp",
      title: "Title 2",
      id: 2,
    },
    {
      url: "SEO.webp",
      title: "Title 3",
      id: 3,
    },
    {
      url: "/web_design.webp",
      title: "Title 4",
      id: 4,
    },
    {
      url: "/dev.webp",
      title: "Title 5",
      id: 5,
    },
    {
      url: "SEO.webp",
      title: "Title 6",
      id: 6,
    },
  ];