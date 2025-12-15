import type { Metadata } from "next";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";

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
                      <div key={idx} className="flex items-start gap-3 glass p-3 rounded-lg hover-lift">
                        <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-primary shimmer pulse-glow">
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

      {/* Pricing Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="heading-lg mb-4">Service <span className="text-gradient">Packages</span></h2>
            <p className="text-body max-w-2xl mx-auto">
              Choose the package that best fits your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`card glass hover-lift animate-slide-in ${pkg.featured ? 'ring-2 ring-primary-500 scale-105' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {pkg.featured && (
                  <div className="gradient-primary text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-gradient mb-4">
                  ${pkg.price}
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={pkg.featured ? 'btn-primary w-full text-center block' : 'btn-outline w-full text-center block'}>
                  Choose Plan
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
    id: "residential",
    icon: "🏡",
    title: "Residential Vastu",
    description: "Transform your home into a sanctuary of positive energy. Our residential Vastu services cover everything from apartment layouts to villa designs, ensuring your living space promotes health, happiness, and prosperity for you and your family.",
    gradient: "from-blue-100 to-blue-200",
    features: [
      "Complete home analysis and consultation",
      "Room-by-room Vastu guidance",
      "Direction and placement recommendations",
      "Color and element suggestions",
      "Furniture arrangement optimization",
      "Detailed written report with diagrams"
    ],
    highlights: [
      {
        title: "Site Visit",
        description: "Comprehensive on-site evaluation of your property"
      },
      {
        title: "Detailed Report",
        description: "Written analysis with actionable recommendations"
      },
      {
        title: "Follow-up Support",
        description: "30 days of consultation support"
      }
    ]
  },
  {
    id: "commercial",
    icon: "🏢",
    title: "Commercial Vastu",
    description: "Optimize your business premises for success and growth. Whether it's an office, retail space, or industrial facility, we help create an environment that enhances productivity, attracts customers, and promotes financial prosperity.",
    gradient: "from-purple-100 to-purple-200",
    features: [
      "Office layout and cabin placement",
      "Reception and entrance optimization",
      "Meeting room arrangement",
      "Employee seating guidelines",
      "Cash counter and safe positioning",
      "Marketing and branding alignment"
    ],
    highlights: [
      {
        title: "Business Analysis",
        description: "Understanding your business needs and goals"
      },
      {
        title: "Productivity Focus",
        description: "Optimizing space for maximum efficiency"
      },
      {
        title: "ROI Tracking",
        description: "Monitoring positive changes post-implementation"
      }
    ]
  },
  {
    id: "pre-construction",
    icon: "🏗️",
    title: "Pre-Construction Consultation",
    description: "Start your project on the right foundation. Our pre-construction services help you plan and design your building according to Vastu principles from the ground up, avoiding costly corrections later.",
    gradient: "from-green-100 to-green-200",
    features: [
      "Plot selection and evaluation",
      "Building orientation planning",
      "Foundation ceremony timing",
      "Floor plan review and approval",
      "Construction phase guidance",
      "Material and color selection"
    ],
    highlights: [
      {
        title: "Blueprint Review",
        description: "Vastu compliance check for architectural plans"
      },
      {
        title: "Site Selection",
        description: "Guidance on choosing the right plot"
      },
      {
        title: "Construction Phase",
        description: "Ongoing consultation during building"
      }
    ]
  },
  {
    id: "remedies",
    icon: "🔧",
    title: "Vastu Remedies",
    description: "Practical solutions for existing spaces. Not all Vastu defects require major renovations. We provide effective remedial measures using colors, elements, symbols, and minor adjustments to correct Vastu imbalances.",
    gradient: "from-orange-100 to-orange-200",
    features: [
      "Non-structural correction methods",
      "Use of colors and elements",
      "Crystal and symbol placement",
      "Mirror and lighting solutions",
      "Plant and water feature recommendations",
      "Energy enhancement techniques"
    ],
    highlights: [
      {
        title: "Cost-Effective",
        description: "Solutions without major construction"
      },
      {
        title: "Quick Implementation",
        description: "Most remedies can be applied immediately"
      },
      {
        title: "Proven Results",
        description: "Traditional remedies with modern application"
      }
    ]
  },
  {
    id: "site-analysis",
    icon: "📐",
    title: "Site Analysis",
    description: "Comprehensive evaluation of your plot or land. Before you build or buy, understand the Vastu characteristics of the site including soil quality, shape, slope, surrounding environment, and directional influences.",
    gradient: "from-pink-100 to-pink-200",
    features: [
      "Soil and terrain evaluation",
      "Shape and dimension analysis",
      "Directional assessment",
      "Surrounding environment check",
      "Road and entrance positioning",
      "Comparison of multiple sites"
    ],
    highlights: [
      {
        title: "Site Inspection",
        description: "Physical evaluation of the property"
      },
      {
        title: "Comparative Analysis",
        description: "If choosing between multiple plots"
      },
      {
        title: "Investment Guidance",
        description: "Making informed property decisions"
      }
    ]
  },
  {
    id: "corporate",
    icon: "💼",
    title: "Corporate Consulting",
    description: "Specialized services for large organizations and industrial complexes. We work with corporations to create Vastu-compliant workspaces that enhance employee well-being, productivity, and overall business success.",
    gradient: "from-teal-100 to-teal-200",
    features: [
      "Multi-location assessments",
      "Factory and warehouse planning",
      "Corporate office optimization",
      "Employee wellness programs",
      "Energy efficiency integration",
      "Long-term partnership programs"
    ],
    highlights: [
      {
        title: "Enterprise Scale",
        description: "Solutions for large organizations"
      },
      {
        title: "Team Training",
        description: "Educating facility managers and teams"
      },
      {
        title: "Ongoing Partnership",
        description: "Continuous support and monitoring"
      }
    ]
  }
];

const packages = [
  {
    name: "Basic",
    price: "299",
    description: "Perfect for small apartments or single rooms",
    features: [
      "Virtual consultation (1 hour)",
      "Basic Vastu analysis",
      "Written recommendations",
      "Email support for 7 days",
      "Digital report"
    ],
    featured: false
  },
  {
    name: "Professional",
    price: "799",
    description: "Ideal for homes and small offices",
    features: [
      "On-site visit included",
      "Comprehensive Vastu analysis",
      "Detailed written report with diagrams",
      "Remedies and solutions",
      "30 days follow-up support",
      "Video consultation included"
    ],
    featured: true
  },
  {
    name: "Premium",
    price: "1,499",
    description: "Best for large homes and commercial spaces",
    features: [
      "Multiple site visits",
      "Complete Vastu planning",
      "Architectural review",
      "3D visualization support",
      "90 days ongoing support",
      "Priority consultation access",
      "Implementation assistance"
    ],
    featured: false
  }
];
