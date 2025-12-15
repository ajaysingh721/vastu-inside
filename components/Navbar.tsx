"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative logo-glow">
              <span className="text-3xl md:text-4xl animate-pulse">🕉️</span>
              <div className="absolute inset-0 text-3xl md:text-4xl text-primary-400 animate-ping opacity-20">🕉️</div>
            </div>
            <span className="text-2xl md:text-3xl font-bold font-serif bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-clip-text text-transparent animate-gradient-x">
              VastuInside
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link-hover text-gray-700 hover:text-primary-500 font-medium transition-all duration-300 stagger-1 nav-item-enter-active">
              Home
            </Link>
            
            <div className="relative group stagger-2 nav-item-enter-active">
              <Link
                href="/services"
                className="nav-link-hover text-gray-700 hover:text-primary-500 font-medium transition-all duration-300 inline-flex items-center gap-1"
              >
                Services
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <div className="absolute left-0 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-all duration-200">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 min-w-[240px] overflow-hidden">
                  <Link
                    href="/services/basic-vastu"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                  >
                    Basic Vastu
                  </Link>
                  <Link
                    href="/services/beneficial-vastu"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                  >
                    Beneficial Vastu
                  </Link>
                  <Link
                    href="/services/super-beneficial-vastu"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                  >
                    Super Beneficial Vastu
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/gallery" className="nav-link-hover text-gray-700 hover:text-primary-500 font-medium transition-all duration-300 stagger-3 nav-item-enter-active">
              Gallery
            </Link>
            
            <Link href="/about" className="nav-link-hover text-gray-700 hover:text-primary-500 font-medium transition-all duration-300 stagger-4 nav-item-enter-active">
              About Us
            </Link>
            
            <Link href="/faq" className="nav-link-hover text-gray-700 hover:text-primary-500 font-medium transition-all duration-300 stagger-5 nav-item-enter-active">
              FAQ
            </Link>
            
            <Link href="/contact" className="btn-primary shimmer pulse-glow inline-flex items-center gap-2 stagger-6 transform hover:scale-105 transition-all duration-300">
              <FaPhone className="w-4 h-4" />
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-primary-500 transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
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
          <div className="md:hidden py-4 border-t mobile-menu-enter-active">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="nav-link-hover text-gray-700 hover:text-primary-500 font-medium transition-all duration-300 stagger-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                href="/services" 
                className="nav-link-hover text-gray-700 hover:text-primary-500 font-medium transition-all duration-300 stagger-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              <div className="pl-4 -mt-2 space-y-3">
                <Link
                  href="/services/basic-vastu"
                  className="text-gray-700 hover:text-primary-500 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ⭐ Basic Vastu
                </Link>
                <Link
                  href="/services/beneficial-vastu"
                  className="text-gray-700 hover:text-primary-500 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ✨ Beneficial Vastu
                </Link>
                <Link
                  href="/services/super-beneficial-vastu"
                  className="text-gray-700 hover:text-primary-500 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🌟 Super Beneficial Vastu
                </Link>
              </div>
              
              <Link 
                href="/gallery" 
                className="nav-link-hover text-gray-700 hover:text-primary-500 font-medium transition-all duration-300 stagger-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              
              <Link 
                href="/faq" 
                className="nav-link-hover text-gray-700 hover:text-primary-500 font-medium transition-all duration-300 stagger-4"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              
              <Link 
                href="/about" 
                className="nav-link-hover text-gray-700 hover:text-primary-500 font-medium transition-all duration-300 stagger-5"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Social Media Icons */}
              <div className="stagger-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3 font-semibold">Follow Us</p>
                <div className="flex gap-3">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61581478106818" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md"
                    aria-label="Facebook"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.instagram.com/acharaya.vikash_27/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md"
                    aria-label="Instagram"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@Acharayavikashkumar" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md"
                    aria-label="YouTube"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaYoutube className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://wa.me/917858992627" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md"
                    aria-label="WhatsApp"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <Link 
                href="/contact" 
                className="btn-primary inline-block text-center shimmer pulse-glow stagger-7 transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaPhone className="inline w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
