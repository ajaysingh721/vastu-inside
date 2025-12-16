import type { Metadata } from "next";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Terms & Conditions - Vastu Inside",
  description: "Terms and Conditions for using Vastu Inside website and services.",
};

export default function TermsPage() {
  return (
    <div className="bg-white overflow-hidden">
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl mb-4">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-body">
              These Terms & Conditions govern your access to and use of Vastu
              Inside’s website and services.
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
              <h2 className="heading-md mb-3">Use of Website</h2>
              <p className="text-gray-700">
                You agree to use this website for lawful purposes only and not
                to misuse, disrupt, or attempt to gain unauthorized access to
                the website or its systems.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Consultation Disclaimer</h2>
              <p className="text-gray-700">
                Vastu guidance is provided for informational purposes based on
                traditional principles and the details you share. Results may
                vary by property, conditions, and implementation.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Appointments & Communication</h2>
              <p className="text-gray-700">
                When you submit a form or contact us via phone/WhatsApp, you
                consent to receive responses regarding your inquiry and service
                updates.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Intellectual Property</h2>
              <p className="text-gray-700">
                Website content (text, design, images, and branding) is owned by
                Vastu Inside or its licensors and may not be reused without
                permission.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Limitation of Liability</h2>
              <p className="text-gray-700">
                To the maximum extent permitted by law, Vastu Inside is not
                liable for any indirect or consequential damages arising from
                your use of the website or services.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Changes to These Terms</h2>
              <p className="text-gray-700">
                We may update these Terms from time to time. Continued use of
                the website after changes means you accept the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-3">Contact</h2>
              <p className="text-gray-700">
                For questions about these Terms, email
                {" "}
                <a className="text-primary-600 hover:underline" href="mailto:support@vastuinside.com">
                  support@vastuinside.com
                </a>
                .
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                  Contact Page
                </Link>
                <Link href="/privacy" className="btn-outline inline-flex items-center justify-center">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
