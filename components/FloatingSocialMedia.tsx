"use client";

import { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

export default function FloatingSocialMedia() {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <div className="fixed bottom-8 right-8 z-40" ref={containerRef}>
      <div className={`flex flex-row-reverse items-center gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-2xl border-2 border-primary-500 transition-all duration-300`}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative w-12 h-12 rounded-full bg-primary-500 hover:bg-primary-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
          aria-label={isExpanded ? "Collapse social media" : "Expand social media"}
        >
          <HiUserGroup className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'scale-110' : ''}`} />
        </button>
        
        {isExpanded && (
          <>
            <a 
              href="https://wa.me/917858992627" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl animate-[slideIn_0.3s_ease-out]"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span className="absolute bottom-full mb-2 px-3 py-1 bg-green-500 text-white text-sm font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                WhatsApp
              </span>
            </a>

            <a 
              href="https://www.youtube.com/@Acharayavikashkumar" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl animate-[slideIn_0.3s_ease-out_0.05s_backwards]"
              aria-label="YouTube"
            >
              <FaYoutube className="w-4 h-4" />
              <span className="absolute bottom-full mb-2 px-3 py-1 bg-red-600 text-white text-sm font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                YouTube
              </span>
            </a>
            
            <a 
              href="https://www.instagram.com/acharaya.vikash_27/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl animate-[slideIn_0.3s_ease-out_0.15s_backwards]"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
              <span className="absolute bottom-full mb-2 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                Instagram
              </span>
            </a>

            <a 
              href="https://www.facebook.com/profile.php?id=61581478106818" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl animate-[slideIn_0.3s_ease-out_0.25s_backwards]"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
              <span className="absolute bottom-full mb-2 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                Facebook
              </span>
            </a>
          </>
        )}
      </div>
    </div>
  );
}
