import Image from "next/image";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";
import CountUp from "@/components/CountUp";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative particles gradient-mesh section-padding min-h-[90vh] flex items-center">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-2xl float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary-400/20 rounded-full blur-3xl float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl float-slow"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="heading-xl animate-slide-in">
                Transform Your Space with <span className="text-gradient">Vastu Wisdom</span>
              </h1>
              <p className="text-body animate-slide-in-delay-1">
                Experience harmony, prosperity, and well-being through expert Vastu consultation. 
                We blend ancient wisdom with modern living to create spaces that nurture success and happiness.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-in-delay-2">
                <Link href="/contact" className="btn-primary shimmer pulse-glow">
                  Book Consultation
                </Link>
                <Link href="/services" className="btn-outline hover-lift">
                  Our Services
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4 animate-slide-in-delay-3">
                <div className="glass p-4 rounded-xl hover-lift">
                  <div className="text-3xl font-bold text-gradient">
                    <CountUp end={500} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-700">Happy Clients</div>
                </div>
                <div className="glass p-4 rounded-xl hover-lift">
                  <div className="text-3xl font-bold text-gradient">
                    <CountUp end={15} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-700">Years Experience</div>
                </div>
                <div className="glass p-4 rounded-xl hover-lift">
                  <div className="text-3xl font-bold text-gradient">
                    <CountUp end={98} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-700">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] animate-fade-in-delay">
              <div className="absolute inset-0 gradient-primary rounded-3xl transform rotate-3 float opacity-20"></div>
              <div className="absolute inset-0 glass rounded-3xl shadow-2xl flex items-center justify-center hover-lift">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4 float">🏠</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Vastu Consultation</h3>
                  <p className="text-gray-600">Creating harmonious living spaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="white" />

      <WaveDivider color="white" />

      {/* Services Overview Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="heading-lg mb-4">Our <span className="text-gradient">Services</span></h2>
            <p className="text-body max-w-2xl mx-auto">
              Comprehensive Vastu solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card glass hover-lift animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-4 float">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/services" className="text-gradient font-semibold inline-flex items-center hover:translate-x-1 transition-transform">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="gray" flip />

      <WaveDivider color="gray" flip />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50 relative particles">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="heading-lg mb-6">Why Choose <span className="text-gradient">Vastu Inside?</span></h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 glass p-4 rounded-xl hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-lg flex items-center justify-center text-2xl text-white shadow-lg">
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
            <div className="gradient-mesh rounded-3xl p-8 lg:p-12 animate-fade-in-delay">
              <div className="space-y-6">
                <div className="glass rounded-xl p-6 shadow-lg hover-lift">
                  <h3 className="font-bold text-xl mb-2 text-gradient">Free Consultation</h3>
                  <p className="text-gray-700">Get started with a complimentary 15-minute consultation to discuss your needs.</p>
                </div>
                <div className="glass rounded-xl p-6 shadow-lg hover-lift">
                  <h3 className="font-bold text-xl mb-2 text-gradient">Detailed Reports</h3>
                  <p className="text-gray-700">Receive comprehensive analysis and actionable recommendations.</p>
                </div>
                <div className="glass rounded-xl p-6 shadow-lg hover-lift">
                  <h3 className="font-bold text-xl mb-2 text-gradient">Ongoing Support</h3>
                  <p className="text-gray-700">Follow-up consultations and support to ensure successful implementation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="white" />

      <WaveDivider color="white" />

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="heading-lg mb-4">What Our <span className="text-gradient">Clients Say</span></h2>
            <p className="text-body max-w-2xl mx-auto">
              Real experiences from people who transformed their spaces
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card glass hover-lift animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-primary-200"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="primary" flip />

      <WaveDivider color="primary" flip />

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white relative overflow-hidden particles">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl float-delayed"></div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="heading-lg mb-4 text-white animate-fade-in">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 animate-fade-in-delay">
            Book your consultation today and start your journey towards a harmonious living environment.
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 animate-slide-in-delay-2 shimmer">
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
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  },
  {
    text: "Professional, knowledgeable, and practical advice. Our office productivity has significantly improved after the Vastu corrections.",
    name: "Priya Sharma",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    text: "Excellent service! The detailed report and ongoing support made the entire process smooth and effective.",
    name: "Amit Patel",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
  }
];
