"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";
import ScrollAnimation from "@/components/ScrollAnimations";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "construction", name: "Construction" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/project-1.jpg",
      title: "Modern Villa Design",
      category: "residential",
      location: "Delhi NCR",
      description: "Luxury villa with complete Vastu compliance"
    },
    {
      id: 2,
      src: "/images/gallery/project-2.jpg",
      title: "Corporate Office",
      category: "commercial",
      location: "Mumbai",
      description: "Modern office space with optimal energy flow"
    },
    {
      id: 3,
      src: "/images/gallery/project-3.jpg",
      title: "Residential Apartment",
      category: "residential",
      location: "Bangalore",
      description: "3BHK apartment interior with Vastu principles"
    },
    {
      id: 4,
      src: "/images/gallery/project-4.jpg",
      title: "Construction Site",
      category: "construction",
      location: "Pune",
      description: "Pre-construction Vastu planning and execution"
    },
    {
      id: 5,
      src: "/images/gallery/project-5.jpg",
      title: "Retail Space",
      category: "commercial",
      location: "Hyderabad",
      description: "Boutique store with enhanced customer flow"
    },
    {
      id: 6,
      src: "/images/gallery/project-6.jpg",
      title: "Independent House",
      category: "residential",
      location: "Chennai",
      description: "Complete home design with Vastu corrections"
    },
    {
      id: 7,
      src: "/images/gallery/project-7.jpg",
      title: "Office Interior",
      category: "commercial",
      location: "Kolkata",
      description: "Workspace optimization for productivity"
    },
    {
      id: 8,
      src: "/images/gallery/project-8.jpg",
      title: "New Construction",
      category: "construction",
      location: "Ahmedabad",
      description: "Foundation to completion Vastu consultation"
    },
    {
      id: 9,
      src: "/images/gallery/project-9.jpg",
      title: "Luxury Penthouse",
      category: "residential",
      location: "Gurgaon",
      description: "High-rise apartment with panoramic Vastu design"
    },
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="gradient-mesh section-padding particles relative min-h-[60vh] flex items-center">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-2xl float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary-400/20 rounded-full blur-3xl float-delayed"></div>
        <div className="container-custom text-center relative z-10">
          <h1 className="heading-xl mb-6 animate-fade-in">Our <span className="text-gradient">Project Gallery</span></h1>
          <p className="text-body max-w-3xl mx-auto animate-fade-in-delay">
            Explore our portfolio of successful Vastu projects. Each space tells a story of transformation, 
            harmony, and prosperity through expert Vastu consultation and implementation.
          </p>
        </div>
      </section>

      <WaveDivider color="white" />

      {/* Filter Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <ScrollAnimation key={image.id} animation="fade-up" delay={index * 100}>
                <div 
                  className="card glass card-hover-3d cursor-pointer overflow-hidden"
                  onClick={() => setLightboxImage(image.src)}
                >
                  <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="text-sm font-semibold">Click to enlarge</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gradient">{image.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{image.location}</span>
                    </div>
                    <p className="text-sm text-gray-600">{image.description}</p>
                    <div className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full capitalize">
                      {image.category}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-primary-400 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <WaveDivider color="gray" flip />

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Want Your Project Featured Here?</h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Let us help you create a harmonious and prosperous space with our expert Vastu consultation services.
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
