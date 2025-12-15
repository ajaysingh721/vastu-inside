import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="heading-xl">
                Transform Your Space with <span className="text-primary-500">Vastu Wisdom</span>
              </h1>
              <p className="text-body">
                Experience harmony, prosperity, and well-being through expert Vastu consultation. 
                We blend ancient wisdom with modern living to create spaces that nurture success and happiness.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Consultation
                </Link>
                <Link href="/services" className="btn-outline">
                  Our Services
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary-500">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏠</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Vastu Consultation</h3>
                  <p className="text-gray-600">Creating harmonious living spaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-body max-w-2xl mx-auto">
              Comprehensive Vastu solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/services" className="text-primary-500 font-semibold hover:text-primary-600 inline-flex items-center">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Why Choose Vastu Inside?</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl mb-2">Free Consultation</h3>
                  <p className="text-gray-600">Get started with a complimentary 15-minute consultation to discuss your needs.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl mb-2">Detailed Reports</h3>
                  <p className="text-gray-600">Receive comprehensive analysis and actionable recommendations.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">Follow-up consultations and support to ensure successful implementation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <p className="text-body max-w-2xl mx-auto">
              Real experiences from people who transformed their spaces
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Book your consultation today and start your journey towards a harmonious living environment.
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: "🏡",
    title: "Residential Vastu",
    description: "Complete Vastu consultation for homes, apartments, and villas to create positive energy flow."
  },
  {
    icon: "🏢",
    title: "Commercial Vastu",
    description: "Optimize your office, retail space, or business premises for success and prosperity."
  },
  {
    icon: "🏗️",
    title: "Pre-Construction",
    description: "Plan your construction with Vastu principles from the ground up for optimal results."
  },
  {
    icon: "🔧",
    title: "Vastu Remedies",
    description: "Practical solutions to correct Vastu defects without major structural changes."
  },
  {
    icon: "📐",
    title: "Site Analysis",
    description: "Comprehensive plot and land evaluation according to Vastu principles."
  },
  {
    icon: "💼",
    title: "Corporate Consulting",
    description: "Specialized services for large organizations and industrial complexes."
  }
];

const benefits = [
  {
    icon: "✓",
    title: "Certified Experts",
    description: "Our consultants are certified professionals with extensive knowledge in Vastu Shastra."
  },
  {
    icon: "✓",
    title: "Personalized Solutions",
    description: "Every consultation is tailored to your specific needs and circumstances."
  },
  {
    icon: "✓",
    title: "Modern Approach",
    description: "We blend traditional Vastu wisdom with contemporary design and lifestyle needs."
  },
  {
    icon: "✓",
    title: "Proven Results",
    description: "Track record of successful consultations with measurable positive outcomes."
  }
];

const testimonials = [
  {
    text: "The Vastu consultation transformed our home. We've experienced better harmony and prosperity since implementing the recommendations.",
    name: "Rajesh Kumar",
    role: "Homeowner"
  },
  {
    text: "Professional, knowledgeable, and practical advice. Our office productivity has significantly improved after the Vastu corrections.",
    name: "Priya Sharma",
    role: "Business Owner"
  },
  {
    text: "Excellent service! The detailed report and ongoing support made the entire process smooth and effective.",
    name: "Amit Patel",
    role: "Architect"
  }
];
