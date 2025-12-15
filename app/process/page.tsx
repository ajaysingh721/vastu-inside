import type { Metadata } from "next";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Our Process - Vastu Inside",
  description: "Learn about our simple 4-step Vastu consultation process. From booking to implementation, discover how we transform spaces with ancient wisdom.",
};

export default function ProcessPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="gradient-mesh section-padding particles relative min-h-[60vh] flex items-center">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-2xl float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary-400/20 rounded-full blur-3xl float-delayed"></div>
        <div className="container-custom text-center relative z-10">
          <h1 className="heading-xl mb-6 animate-fade-in">Our <span className="text-gradient">Process</span></h1>
          <p className="text-body max-w-3xl mx-auto animate-fade-in-delay">
            How It Works - Simple 4-step process to transform your space
          </p>
        </div>
      </section>

      <WaveDivider color="white" />

      <WaveDivider color="white" />

      {/* Process Steps Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-lg mb-4">Our <span className="text-gradient">4-Step Process</span></h2>
            <p className="text-body max-w-2xl mx-auto">
              We follow a systematic approach to ensure every Vastu consultation delivers maximum benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="card glass hover-lift animate-slide-in text-center" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Book Appointment</h3>
              <p className="text-gray-600">
                Schedule a free initial consultation with our experts to discuss your needs and requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="card glass hover-lift animate-slide-in text-center" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Site Analysis</h3>
              <p className="text-gray-600">
                We analyze your property's floor plan, directions, and energy flow to identify Vastu principles.
              </p>
            </div>

            {/* Step 3 */}
            <div className="card glass hover-lift animate-slide-in text-center" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Get Report</h3>
              <p className="text-gray-600">
                Receive a detailed Vastu report with practical remedies and implementation recommendations.
              </p>
            </div>

            {/* Step 4 */}
            <div className="card glass hover-lift animate-slide-in text-center" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-lg">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Implementation</h3>
              <p className="text-gray-600">
                We guide you through implementing the changes with ongoing support and follow-up consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="gray" flip />

      {/* Why Our Process Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="heading-lg mb-6">Why Our <span className="text-gradient">Process Works</span></h2>
              <div className="space-y-6">
                <div className="flex gap-4 glass p-4 rounded-xl hover-lift">
                  <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-lg flex items-center justify-center text-2xl text-white shadow-lg">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">Every consultation is tailored to your specific space and lifestyle needs.</p>
                  </div>
                </div>
                <div className="flex gap-4 glass p-4 rounded-xl hover-lift">
                  <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-lg flex items-center justify-center text-2xl text-white shadow-lg">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Practical Solutions</h3>
                    <p className="text-gray-600">We provide actionable remedies that work within your existing space constraints.</p>
                  </div>
                </div>
                <div className="flex gap-4 glass p-4 rounded-xl hover-lift">
                  <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-lg flex items-center justify-center text-2xl text-white shadow-lg">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">Continuous guidance ensures successful implementation and lasting results.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-mesh rounded-3xl p-8 lg:p-12 animate-fade-in-delay">
              <div className="space-y-6">
                <div className="glass rounded-xl p-6 shadow-lg hover-lift">
                  <h3 className="font-bold text-xl mb-2 text-gradient">Free Initial Consultation</h3>
                  <p className="text-gray-700">Start your Vastu journey with a complimentary 15-minute consultation.</p>
                </div>
                <div className="glass rounded-xl p-6 shadow-lg hover-lift">
                  <h3 className="font-bold text-xl mb-2 text-gradient">Detailed Analysis</h3>
                  <p className="text-gray-700">Comprehensive evaluation using traditional Vastu Shastra principles.</p>
                </div>
                <div className="glass rounded-xl p-6 shadow-lg hover-lift">
                  <h3 className="font-bold text-xl mb-2 text-gradient">Expert Guidance</h3>
                  <p className="text-gray-700">Step-by-step implementation support from certified Vastu experts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="heading-lg mb-4 text-white animate-fade-in">Ready to Start Your Vastu Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 animate-fade-in-delay">
              Book your free consultation today and take the first step towards a harmonious living space.
            </p>
            <Link href="/contact" className="inline-block bg-white text-primary-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg inline-flex items-center gap-2">
              <FaCalendarAlt className="w-5 h-5" />
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}