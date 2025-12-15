"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <span className="text-3xl md:text-4xl animate-pulse">🕉️</span>
              <div className="absolute inset-0 text-3xl md:text-4xl text-primary-400 animate-ping opacity-20">🕉️</div>
            </div>
            <span className="text-2xl md:text-3xl font-bold font-serif bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-clip-text text-transparent animate-gradient-x">
              Vastu Inside
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Home
            </Link>
            
            <Link href="/services" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Services
            </Link>
            
            <Link href="/about" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              About Us
            </Link>
            
            {/* Social Media Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsSocialOpen(true)}
              onMouseLeave={() => setIsSocialOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary-500 font-medium transition-colors flex items-center gap-1">
                Social Media
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isSocialOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Social Media Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                isSocialOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <a 
                  href="https://www.facebook.com/profile.php?id=61581478106818" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors duration-200"
                >
                  <FaFacebookF className="w-4 h-4 text-blue-600" />
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/acharaya.vikash_27/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors duration-200"
                >
                  <FaInstagram className="w-4 h-4 text-pink-500" />
                  Instagram
                </a>
                <a 
                  href="https://www.youtube.com/@Acharayavikashkumar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors duration-200"
                >
                  <FaYoutube className="w-4 h-4 text-red-500" />
                  YouTube
                </a>
                <a 
                  href="https://wa.me/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors duration-200"
                >
                  <FaWhatsapp className="w-4 h-4 text-green-500" />
                  WhatsApp
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors duration-200"
                >
                  <FaLinkedin className="w-4 h-4 text-blue-700" />
                  LinkedIn
                </a>
              </div>
            </div>
            
            <Link href="/contact" className="btn-primary shimmer pulse-glow">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-primary-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Social Media */}
              <div>
                <button 
                  className="w-full text-left text-gray-700 hover:text-primary-500 font-medium transition-colors flex items-center justify-between"
                  onClick={() => setIsSocialOpen(!isSocialOpen)}
                >
                  Social Media
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isSocialOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isSocialOpen && (
                  <div className="ml-4 mt-2 space-y-2 animate-fadeIn">
                    <a 
                      href="https://facebook.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-primary-500 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaFacebookF className="w-4 h-4 text-blue-600" />
                      Facebook
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-primary-500 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaInstagram className="w-4 h-4 text-pink-500" />
                      Instagram
                    </a>
                    <a 
                      href="https://youtube.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-primary-500 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaYoutube className="w-4 h-4 text-red-500" />
                      YouTube
                    </a>
                    <a 
                      href="https://wa.me/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-primary-500 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaWhatsapp className="w-4 h-4 text-green-500" />
                      WhatsApp
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-primary-500 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaLinkedin className="w-4 h-4 text-blue-700" />
                      LinkedIn
                    </a>
                  </div>
                )}
              </div>
              
              <Link 
                href="/contact" 
                className="btn-primary inline-block text-center shimmer pulse-glow"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
