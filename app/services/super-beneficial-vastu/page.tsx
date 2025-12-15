import type { Metadata } from "next";
import Link from "next/link";
import { FaCrown } from "react-icons/fa";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Super Beneficial Vastu - Vastu Inside",
  description:
    "Premium Vastu service with complete property evaluation, personalized astrological alignment, custom remedy planning, follow-up consultations, and ongoing support for maximum benefits.",
};

export default function SuperBeneficialVastuPage() {
  return (
    <div className="bg-white overflow-hidden">
      <section className="section-padding bg-gray-50 relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg ring-2 ring-primary-200">
              <FaCrown className="w-8 h-8 text-primary-600" aria-hidden="true" />
            </div>
            <h1 className="heading-xl mb-4">
              Super Beneficial <span className="text-gradient">Vastu</span>
            </h1>
            <p className="text-body">
              Premium Vastu service with complete property evaluation,
              personalized astrological alignment, custom remedy planning,
              follow-up consultations, and ongoing support for maximum benefits.
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
              This is best for clients who want the most comprehensive planning
              and continued support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
