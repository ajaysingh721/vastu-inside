import type { Metadata } from "next";
import Link from "next/link";
import { FaCompass } from "react-icons/fa";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Basic Vastu - Vastu Inside",
  description:
    "Essential Vastu principles for foundational harmony. Includes basic directional analysis, main entrance assessment, and simple remedies for positive energy flow.",
};

export default function BasicVastuPage() {
  return (
    <div className="bg-white overflow-hidden">
      <section className="section-padding bg-gray-50 relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg ring-2 ring-primary-200">
              <FaCompass className="w-8 h-8 text-primary-600" aria-hidden="true" />
            </div>
            <h1 className="heading-xl mb-4">
              Basic <span className="text-gradient">Vastu</span>
            </h1>
            <p className="text-body">
              Essential Vastu principles for foundational harmony. Includes basic
              directional analysis, main entrance assessment, and simple remedies
              for positive energy flow.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary shimmer pulse-glow inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="white" />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-body">
              This service is ideal if you want a clear starting point and
              practical, easy-to-implement guidance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
