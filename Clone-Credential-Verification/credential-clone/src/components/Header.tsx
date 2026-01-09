"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 40 40" className="text-[#5c5cd6]">
              <rect x="4" y="8" width="8" height="24" fill="currentColor" />
              <rect x="16" y="8" width="8" height="24" fill="currentColor" />
              <rect x="28" y="8" width="8" height="24" fill="currentColor" />
            </svg>
            <div className="ml-2">
              <span className="font-semibold text-lg text-[#343a44]">Accredible</span>
              <div className="text-[10px] text-gray-400 -mt-1">Credential.net</div>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="text-[#343a44] hover:text-[#5c5cd6] transition-colors hidden sm:block"
          >
            Suggested Credentials
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6 text-[#343a44]" />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute right-4 top-16 bg-white shadow-lg rounded-lg py-2 w-48 border border-gray-200 sm:hidden">
          <Link
            href="#"
            className="block px-4 py-2 text-[#343a44] hover:bg-gray-100"
          >
            Suggested Credentials
          </Link>
        </div>
      )}
    </header>
  );
}
