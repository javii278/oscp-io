import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-[#f6f6fa] rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar placeholder - no profile picture */}
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-semibold text-gray-500">J</span>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-semibold text-[#343a44] mb-2">
                Javier Sanchez Torrecilla
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                <Link
                  href="https://www.linkedin.com/in/javier-sanchez-torrecilla-059826144"
                  target="_blank"
                  className="text-[#5c5cd6] hover:underline flex items-center gap-1"
                >
                  LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#343a44] mb-6">Credentials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* OSCP Credential Card */}
            <Link href="/" className="group">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <img
                    src="/oscp-badge.webp"
                    alt="OSCP Badge"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#343a44] text-center group-hover:text-[#5c5cd6] transition-colors">
                  OffSec Certified Professional (OSCP)
                </h3>
                <p className="text-gray-500 text-center text-sm mt-2">
                  Issued December 13, 2025
                </p>
                <div className="flex justify-center mt-3">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Active
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#f6f6fa] rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-[#343a44]">1</p>
              <p className="text-gray-500 text-sm">Total Credentials</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#343a44]">1</p>
              <p className="text-gray-500 text-sm">Badges</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#343a44]">1</p>
              <p className="text-gray-500 text-sm">Certificates</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#343a44]">30</p>
              <p className="text-gray-500 text-sm">Skills</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
