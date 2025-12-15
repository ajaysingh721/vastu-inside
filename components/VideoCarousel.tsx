"use client";

import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";

interface VideoCarouselProps {
  videos: string[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo && isPlaying) {
      currentVideo.play().catch(() => {
        // Handle autoplay restrictions
      });
    }
  }, [currentIndex, isPlaying]);

  const nextSlide = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.pause();
    }
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.pause();
    }
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const togglePlay = () => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play().catch(() => {
          // Handle autoplay restrictions
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-full">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={video}
            className="w-full h-full object-cover"
            autoPlay={index === 0 && isPlaying}
            loop
            muted
            playsInline
            onEnded={nextSlide}
          />
        </div>
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous video"
        >
          <FaChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next video"
        >
          <FaChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Play/Pause button */}
      <button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-full transition-all duration-300 hover:scale-110"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <FaPause className="w-6 h-6 text-white" />
        ) : (
          <FaPlay className="w-6 h-6 text-white ml-1" />
        )}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const currentVideo = videoRefs.current[currentIndex];
              if (currentVideo) {
                currentVideo.pause();
              }
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 text-center p-4 sm:p-6 md:p-8 text-white">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2">Vastu Consultation</h3>
        <p className="text-sm sm:text-base text-white/90">Creating harmonious living spaces</p>
      </div>
    </div>
  );
}
