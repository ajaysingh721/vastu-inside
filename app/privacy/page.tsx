import type { Metadata } from "next";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Privacy Policy - Vastu Inside",
  description: "Privacy Policy for Vastu Inside.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white overflow-hidden">
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl mb-4">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-body">
              This Privacy Policy explains how Vastu Inside collects, uses, and
              protects your information when you use our website and services.
            </p>
            <p className="text-sm text-gray-500 mt-3">Last updated: December 16, 2025</p>
          </div>
        </div>
      </section>

      <WaveDivider color="white" />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <h2 className="heading-md mb-3">Information We Collect</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Contact details you submit (name, phone number, email).</li>
                <li>Messages you send through forms or WhatsApp links.</li>
                <li>Basic technical data (browser type, device, pages visited) for performance and security.</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-md mb-3">How We Use Your Information</h2>
              <ul className="space-y-2 text-gray-700">
                <li>To respond to inquiries and provide consultations/services.</li>
                <li>To improve our website content, performance, and user experience.</li>
                <li>To prevent fraud and maintain security of our systems.</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-md mb-3">Sharing of Information</h2>
              <p className="text-gray-700">
                We do not sell your personal information. We may share limited
                information with service providers who help us operate the
                website (e.g., hosting, analytics) only as needed to provide
                their services.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Cookies</h2>
              <p className="text-gray-700">
                Our website may use cookies or similar technologies to remember
                preferences and understand site usage. You can control cookies
                through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Data Retention</h2>
              <p className="text-gray-700">
                We retain personal information only as long as necessary for the
                purposes described above, or as required by law.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Your Choices</h2>
              <p className="text-gray-700">
                You may request access, correction, or deletion of your personal
                information by contacting us.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Contact</h2>
              <p className="text-gray-700">
                For privacy questions, contact us at
                {" "}
                <a className="text-primary-600 hover:underline" href="mailto:support@vastuinside.com">
                  support@vastuinside.com
                </a>
                .
              </p>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                  Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
