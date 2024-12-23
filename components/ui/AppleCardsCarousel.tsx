"use client";
import React from "react";
import { Card, Carousel } from "./Carousel";

export function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id="contact" className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold mb-10 text-neutral-800 dark:text-neutral-200 font-sans">
        Want to contact me?
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Content = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <React.Fragment key={index}>

          </React.Fragment>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Resume",
    title: "Download My Resume",
    src: "../computer.svg",
    content: <Content />,
    link: "../ADeLaCruzRubioResume.pdf", 
  },
  {
    category: "Github",
    title: "Check Out My Github",
    src: "../github.svg",
    content: (
      <a
        href="https://github.com/IntegratedSilver"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out my GitHub
      </a>
    ),
    link: "https://github.com/IntegratedSilver", 
  },
  {
    category: "Linkedin",
    title: "Check Out My Linkedin",
    src: "../linked.svg",
    content: (
      <a
        href="https://www.linkedin.com/in/alejandro-de-la-cruz-rubio-1270b9341/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out my LinkedIn
      </a>
    ),
    link: "https://www.linkedin.com/in/alejandro-de-la-cruz-rubio-1270b9341/", 
  },
];
