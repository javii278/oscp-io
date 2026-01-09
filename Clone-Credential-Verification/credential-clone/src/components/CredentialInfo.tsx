import Link from "next/link";
import { ExternalLink, CheckCircle } from "lucide-react";
import OffSecLogo from "./OffSecLogo";

export default function CredentialInfo() {
  return (
    <div className="space-y-6">
      {/* Issuer */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <OffSecLogo className="w-12 h-12" />
          <div className="absolute -bottom-1 -right-1">
            <CheckCircle className="w-5 h-5 text-[#5c5cd6] bg-white rounded-full" />
          </div>
        </div>
        <Link
          href="https://www.offsec.com"
          target="_blank"
          className="text-[#5c5cd6] hover:underline font-semibold text-lg flex items-center gap-1"
        >
          OffSec
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl lg:text-4xl font-semibold text-[#343a44]">
        OffSec Certified Professional (OSCP)
      </h1>

      {/* Recipient Info */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 font-semibold">J</span>
          </div>
          <h2 className="text-xl font-semibold text-[#343a44]">Javier Sanchez Torrecilla</h2>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/profile"
          className="text-[#5c5cd6] hover:underline"
        >
          View All Credentials
        </Link>
        <Link
          href="https://www.linkedin.com/in/javier-sanchez-torrecilla-059826144"
          target="_blank"
          className="text-[#5c5cd6] hover:underline"
        >
          LinkedIn
        </Link>
      </div>

      {/* Description */}
      <div className="text-[#343a44] leading-relaxed space-y-4">
        <p>
          An OSCP has demonstrated the ability to use persistence, creativity, and perceptiveness to identify vulnerabilities and execute organized attacks under tight time constraints. They can:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Use information gathering techniques to identify and enumerate targets running various operating systems and services</li>
          <li>Write scripts and tools to aid in the penetration testing process</li>
          <li>Analyze, correct, modify, cross-compile, and port public exploit code</li>
          <li>Conduct remote, local privilege escalation, and client-side attacks</li>
          <li>Identify and exploit XSS, SQL injection, and file inclusion vulnerabilities in web applications</li>
          <li>Leverage tunneling techniques to pivot between networks</li>
        </ul>
        <p>
          OSCP holders have also shown they can think outside the box while managing both time and resources.
        </p>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-6 pt-4">
        <div>
          <h3 className="text-lg font-semibold text-[#343a44] mb-1">Issued on</h3>
          <p className="text-gray-600">December 13, 2025</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#343a44] mb-1">Expires on</h3>
          <p className="text-gray-600">Does not expire</p>
        </div>
      </div>
    </div>
  );
}
