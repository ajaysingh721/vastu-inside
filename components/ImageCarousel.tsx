"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageCarouselProps {
  images: { src: string; alt: string; title: string; description: string }[];
  autoPlayInterval?: number;
}

export default function ImageCarousel({ images, autoPlayInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 text-center p-4 sm:p-6 md:p-8 text-white">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2">{image.title}</h3>
            <p className="text-sm sm:text-base text-white/90">{image.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Previous image"
        >
          <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Next image"
        >
          <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-20 sm:bottom-24 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
