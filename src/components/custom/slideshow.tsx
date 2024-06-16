"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Soto from "@/../public/image/soto.jpg";
import Rawon from "@/../public/image/rawon.png";
import Gule from "@/../public/image/gule.png";
import Babi from "@/../public/image/babi-goreng.jpg";
import Guacamole from "@/../public/image/guacamole.jpg";
import React from "react";

const images = [
  { image: Soto, alt: "Soto" },
  { image: Rawon, alt: "Rawon" },
  { image: Gule, alt: "Gule" },
  { image: Babi, alt: "Babi" },
  { image: Guacamole, alt: "Guacamole" },
];

export default function SlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            className={
              index === currentImageIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110'} absolute inset-0 object-cover transition duration-500 ease-in-out"
            }
            alt={image.alt}
          />
        ))}
      </div>
    </main>
  );
}
