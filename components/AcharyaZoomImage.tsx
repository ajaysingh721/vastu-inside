"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { FaSearchPlus, FaTimes } from "react-icons/fa";

type AcharyaZoomImageProps = {
  src: string;
  alt: string;
  name?: string;
};

export default function AcharyaZoomImage({ src, alt, name }: AcharyaZoomImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative w-52 h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl group transition-transform duration-300 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
          aria-label={name ? `Open full-screen photo of ${name}` : "Open full-screen photo"}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-130 group-hover:shadow-2xl"
            priority
          />

          <span className="hidden md:block absolute inset-0 rounded-full border-4 border-primary-400 pointer-events-none group-hover:border-8 transition-all duration-300"></span>

          <span className="hidden md:flex items-center justify-center absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaSearchPlus className="text-white text-3xl drop-shadow-lg" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 bg-black/80"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="absolute top-4 right-4">
            <button
              type="button"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close full-screen image"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          <div className="h-full w-full flex flex-col items-center justify-center px-4 py-10">
            <div className="relative w-full max-w-5xl h-[70vh] sm:h-[75vh] md:h-[80vh]">
              <Image src={src} alt={alt} fill className="object-contain" priority />
            </div>
            <div id={titleId} className="mt-4 text-white font-semibold text-lg text-center">
              {name ?? ""}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
