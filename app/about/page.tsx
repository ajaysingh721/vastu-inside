import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Vastu Inside",
  description: "Learn about our expert Vastu consultants and our mission to harmonize spaces with ancient wisdom.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">About Vastu Inside</h1>
          <p className="text-body max-w-3xl mx-auto">
            Bridging ancient Vastu wisdom with modern living to create harmonious, 
            prosperous, and energetically balanced spaces.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <div className="space-y-4 text-body">
                <p>
                  Founded with a vision to make authentic Vastu consultation accessible to everyone, 
                  Vastu Inside has grown into a trusted name in the field of Vastu Shastra. Our journey 
                  began over 15 years ago when our founder recognized the need for practical, modern 
                  applications of this ancient science.
                </p>
                <p>
                  We believe that Vastu is not just about following rigid rules, but about understanding 
                  the principles of energy flow and applying them in ways that enhance your life while 
                  respecting modern architectural constraints and lifestyle needs.
                </p>
                <p>
                  Today, we've helped over 500 clients transform their spaces, from small apartments to 
                  large corporate offices, always focusing on practical solutions that deliver real results.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-bold text-xl mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower individuals and businesses with Vastu knowledge that creates 
                    positive, prosperous, and harmonious environments.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl mb-2">👁️</div>
                  <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the most trusted Vastu consultation service, known for practical 
                    solutions and measurable results.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl mb-2">💎</div>
                  <h3 className="font-bold text-xl mb-2">Our Values</h3>
                  <p className="text-gray-600">
                    Authenticity, practicality, respect for tradition, and commitment to 
                    client success guide everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Why Choose Vastu Inside?</h2>
            <p className="text-body max-w-2xl mx-auto">
              What sets us apart in the field of Vastu consultation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Meet Our Expert Team</h2>
            <p className="text-body max-w-2xl mx-auto">
              Certified professionals dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center text-6xl">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-500 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.certifications.map((cert, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Process</h2>
            <p className="text-body max-w-2xl mx-auto">
              How we work with you to transform your space
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="card">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Get Started?</h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied clients who have transformed their spaces with Vastu Inside.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: "🎓",
    title: "Certified Experts",
    description: "All our consultants are certified in Vastu Shastra with years of practical experience."
  },
  {
    icon: "🔬",
    title: "Scientific Approach",
    description: "We combine traditional wisdom with modern understanding of energy and space."
  },
  {
    icon: "🎯",
    title: "Practical Solutions",
    description: "Focus on realistic recommendations that work with your existing space and budget."
  },
  {
    icon: "💯",
    title: "Proven Results",
    description: "Track record of successful consultations with satisfied clients across diverse projects."
  }
];

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Chief Vastu Consultant",
    avatar: "👨‍💼",
    bio: "With over 20 years of experience in Vastu Shastra, Dr. Kumar specializes in residential and commercial projects.",
    certifications: ["PhD in Vastu", "Architecture Degree", "Jyotish Expert"]
  },
  {
    name: "Priya Sharma",
    role: "Senior Consultant",
    avatar: "👩‍💼",
    bio: "Expert in modern applications of Vastu with a focus on contemporary living spaces and workplace optimization.",
    certifications: ["Vastu Certified", "Interior Design", "Feng Shui"]
  },
  {
    name: "Amit Patel",
    role: "Vastu Architect",
    avatar: "👨‍🔧",
    bio: "Combines architectural expertise with Vastu knowledge for pre-construction planning and building design.",
    certifications: ["Registered Architect", "Vastu Expert", "Green Building"]
  }
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "1000+", label: "Projects Completed" }
];

const process = [
  {
    title: "Initial Consultation",
    description: "We discuss your needs, goals, and current situation to understand your requirements."
  },
  {
    title: "Site Assessment",
    description: "Detailed evaluation of your space, measurements, and directional analysis."
  },
  {
    title: "Analysis & Report",
    description: "Comprehensive Vastu analysis with detailed recommendations and solutions."
  },
  {
    title: "Implementation Support",
    description: "Ongoing guidance and support as you implement the recommended changes."
  }
];
