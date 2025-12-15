import type { Metadata } from "next";
import Link from "next/link";
import { FaCompass, FaCrown, FaGem, FaRocket } from "react-icons/fa";
import WaveDivider from "@/components/WaveDivider";
import ScrollAnimation from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Services - Vastu Inside",
  description: "Comprehensive Vastu consultation services for residential, commercial, and pre-construction projects.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="gradient-mesh section-padding particles relative min-h-[60vh] flex items-center">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-2xl float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary-400/20 rounded-full blur-3xl float-delayed"></div>
        <div className="container-custom text-center relative z-10">
          <h1 className="heading-xl mb-6 animate-fade-in">Our <span className="text-gradient">Services</span></h1>
          <p className="text-body max-w-3xl mx-auto animate-fade-in-delay">
            Comprehensive Vastu consultation services tailored to your needs. 
            From residential spaces to large commercial projects, we provide expert guidance 
            to create harmonious and prosperous environments.
          </p>
        </div>
      </section>

      <WaveDivider color="white" />

      <WaveDivider color="white" />

      {/* Services Detail Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-5xl mb-4 float">{service.icon}</div>
                  <h2 className="heading-md mb-4"><span className="text-gradient">{service.title}</span></h2>
                  <p className="text-body mb-6">{service.description}</p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <ScrollAnimation key={idx} animation="fade-left" delay={idx * 50}>
                        <div className="flex items-start gap-3 glass p-3 rounded-lg card-hover-glow">
                          <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      </ScrollAnimation>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-primary shimmer pulse-glow inline-flex items-center gap-2">
                    <FaRocket className="w-4 h-4" />
                    Get Started
                  </Link>
                </div>
                <div className={`gradient-mesh rounded-3xl p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="glass rounded-xl p-6 shadow-lg hover-lift">
                        <h3 className="font-bold text-lg mb-2 text-gradient">{highlight.title}</h3>
                        <p className="text-gray-700 text-sm">{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                  
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="gray" flip />

      {/* Service Tiers Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="heading-lg mb-4">Service <span className="text-gradient">Tiers</span></h2>
            <p className="text-body max-w-2xl mx-auto">
              Choose the tier that best fits your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {vastuTiers.map((tier, index) => (
              <div
                key={tier.href}
                className="card glass hover-lift animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md ring-2 ring-gray-100">
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{tier.title}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <Link
                  href={tier.href}
                  className="btn-outline w-full text-center inline-flex items-center justify-center gap-2"
                >
                  <FaRocket className="w-4 h-4" />
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="heading-lg mb-4 text-white">Not Sure Which Service You Need?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Schedule a free 15-minute consultation to discuss your specific needs and get personalized recommendations.
            </p>
            <Link href="/contact" className="inline-block bg-white text-primary-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    id: "vastu",
    icon: "🕉️",
    title: "Vastu",
    description: "Expert Vastu consultation for homes and businesses to create positive energy flow and harmonious living spaces. Our comprehensive analysis covers directional influences, element balance, and placement optimization for maximum prosperity and well-being.",
    gradient: "from-blue-100 to-blue-200",
    features: [
      "Complete property analysis and consultation",
      "Directional and elemental assessment",
      "Room-by-room Vastu guidance",
      "Energy flow optimization",
      "Color and material recommendations",
      "Detailed written report with diagrams"
    ],
    highlights: [
      {
        title: "Comprehensive Analysis",
        description: "Complete evaluation of your space's energy dynamics"
      },
      {
        title: "Personalized Solutions",
        description: "Tailored recommendations for your specific needs"
      },
      {
        title: "Proven Methodology",
        description: "Traditional wisdom with modern application"
      }
    ],
    subcategories: [
      {
        name: "Basic Vastu",
        icon: "⭐",
        description: "Essential Vastu principles for foundational harmony. Includes basic directional analysis, main entrance assessment, and simple remedies for positive energy flow."
      },
      {
        name: "Beneficial Vastu",
        icon: "✨",
        description: "Advanced Vastu consultation with detailed room-by-room analysis, element balancing, color recommendations, and comprehensive remedies for enhanced prosperity and well-being."
      },
      {
        name: "Super Beneficial Vastu",
        icon: "🌟",
        description: "Premium Vastu service with complete property evaluation, personalized astrological alignment, custom remedy planning, follow-up consultations, and ongoing support for maximum benefits."
      }
    ]
  },
  {
    id: "interior",
    icon: "🏠",
    title: "Interior",
    description: "Complete interior design solutions that blend aesthetics with Vastu principles for optimal functionality and harmony. We create beautiful, balanced spaces that not only look stunning but also promote positive energy flow and well-being.",
    gradient: "from-purple-100 to-purple-200",
    features: [
      "Interior design with Vastu compliance",
      "Furniture layout and placement",
      "Color scheme optimization",
      "Lighting and ambiance design",
      "Material and texture selection",
      "Space utilization planning"
    ],
    highlights: [
      {
        title: "Design & Vastu Integration",
        description: "Beautiful aesthetics with energetic harmony"
      },
      {
        title: "Functional Spaces",
        description: "Practical layouts that enhance daily life"
      },
      {
        title: "Complete Solutions",
        description: "From concept to final implementation"
      }
    ]
  },
  {
    id: "construction",
    icon: "🏗️",
    title: "Construction",
    description: "Pre-construction planning and Vastu-compliant construction services for new buildings and renovations. We ensure your project starts with the right foundation, incorporating Vastu principles from the initial planning stages for optimal results.",
    gradient: "from-green-100 to-green-200",
    features: [
      "Pre-construction Vastu planning",
      "Plot selection and evaluation",
      "Building orientation guidance",
      "Architectural plan review",
      "Construction phase monitoring",
      "Material selection with Vastu consideration"
    ],
    highlights: [
      {
        title: "Foundation Planning",
        description: "Starting your project with Vastu-aligned foundations"
      },
      {
        title: "Construction Oversight",
        description: "Ensuring Vastu compliance throughout building"
      },
      {
        title: "Long-term Benefits",
        description: "Investing in prosperity from day one"
      }
    ]
  }
];

const vastuTiers = [
  {
    title: "Basic Vastu",
    href: "/services/basic-vastu",
    icon: <FaCompass className="w-7 h-7 text-primary-600" aria-hidden="true" />,
    description:
      "Essential Vastu principles for foundational harmony. Includes basic directional analysis, main entrance assessment, and simple remedies for positive energy flow.",
  },
  {
    title: "Beneficial Vastu",
    href: "/services/beneficial-vastu",
    icon: <FaGem className="w-7 h-7 text-secondary-600" aria-hidden="true" />,
    description:
      "Advanced Vastu consultation with detailed room-by-room analysis, element balancing, color recommendations, and comprehensive remedies for enhanced prosperity and well-being.",
  },
  {
    title: "Super Beneficial Vastu",
    href: "/services/super-beneficial-vastu",
    icon: <FaCrown className="w-7 h-7 text-primary-600" aria-hidden="true" />,
    description:
      "Premium Vastu service with complete property evaluation, personalized astrological alignment, custom remedy planning, follow-up consultations, and ongoing support for maximum benefits.",
  },
];
