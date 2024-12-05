"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: "1",
    category: "Website",
    name: "E-commerce Website",
    description:
      "An online shopping platform built with React and Next.js. E-commerce website for first necessary need in our everyday life and all food category like candy, rice and fruits",
    image:
      "https://unsplash.com/fr/photos/un-tas-de-ballons-en-forme-de-courrier-electronique-7NT4EDSI5Ok",
  },
  {
    id: "2",
    category: "Mobile App",
    name: "Rapide App",
    description: "A mobile app for connecting with friends, built with Ionic.",
    image:
      "https://unsplash.com/fr/photos/un-tres-gros-objet-bleu-au-milieu-du-ciel-nocturne-4teb0ryKW3M",
  },
  {
    id: "3",
    category: "Mobile App",
    name: "Rapide for driver App",
    description: "A mobile app for connecting with friends, built with Ionic.",
    image:
      "https://unsplash.com/fr/photos/une-vue-aerienne-dune-ville-avec-de-grands-immeubles-qYfxWKiAV2A",
  },
  {
    id: "4",
    category: "Website",
    name: "Portfolio Website",
    description: "My personal portfolio showcasing my work.",
    image:
      "https://unsplash.com/fr/photos/une-grande-tour-dhorloge-dominant-une-ville-YOg8ZUCgXOA",
  },
  {
    id: "5",
    category: "Website",
    name: "Rapide platform",
    description: "A website for provider rapide.",
    image:
      "https://unsplash.com/fr/photos/un-homme-debout-devant-une-cascade-evFisoZaVkk",
  },
];

function ReactSlick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-3/4 mx-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white h-[450px] text-black rounded-xl"
            >
              <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img
                  src={project.image}
                  alt=""
                  className="h-44 w-44 rounded-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{project.name}</p>
                <p className="text-center">{project.description}</p>
                <button className="bg-indigo-500 text-white text-lg py-2 px-6 rounded">
                  See more
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ReactSlick;
