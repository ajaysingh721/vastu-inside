import type { Metadata } from "next";
import Link from "next/link";
import { FaGem } from "react-icons/fa";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Beneficial Vastu - Vastu Inside",
  description:
    "Advanced Vastu consultation with detailed room-by-room analysis, element balancing, color recommendations, and comprehensive remedies for enhanced prosperity and well-being.",
};

export default function BeneficialVastuPage() {
  return (
    <div className="bg-white overflow-hidden">
      <section className="section-padding bg-gray-50 relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg ring-2 ring-secondary-200">
              <FaGem className="w-8 h-8 text-secondary-600" aria-hidden="true" />
            </div>
            <h1 className="heading-xl mb-4">
              Beneficial <span className="text-gradient">Vastu</span>
            </h1>
            <p className="text-body">
              Advanced Vastu consultation with detailed room-by-room analysis,
              element balancing, color recommendations, and comprehensive
              remedies for enhanced prosperity and well-being.
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
              This service fits homeowners and businesses who want deeper
              improvements with more detailed recommendations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
