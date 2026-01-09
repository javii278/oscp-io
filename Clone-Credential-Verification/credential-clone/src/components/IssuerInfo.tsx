import Link from "next/link";
import { ExternalLink } from "lucide-react";
import OffSecLogo from "./OffSecLogo";

export default function IssuerInfo() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-[#343a44]">More about the Issuer</h2>

      <div className="flex items-center gap-4 mb-4">
        <OffSecLogo className="w-14 h-14" />
        <h3 className="text-xl font-semibold text-[#343a44]">OffSec</h3>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="https://www.offsec.com"
          target="_blank"
          className="flex items-center gap-1 text-[#5c5cd6] hover:underline"
        >
          Visit Issuer Website
          <ExternalLink className="w-4 h-4" />
        </Link>

        <Link
          href="https://www.offensive-security.com/pre-reg/"
          target="_blank"
          className="flex items-center gap-1 text-[#5c5cd6] hover:underline"
        >
          Sign up for this Course
          <ExternalLink className="w-4 h-4" />
        </Link>

        <Link
          href="https://www.offsec.com/courses/pen-200/"
          target="_blank"
          className="flex items-center gap-1 text-[#5c5cd6] hover:underline"
        >
          Visit Course Page
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>

      <div className="pt-4">
        <h4 className="text-lg font-semibold text-[#343a44] mb-2">More credentials from the Issuer</h4>
        <Link
          href="/profile"
          className="text-[#5c5cd6] hover:underline"
        >
          View All Credentials
        </Link>
      </div>
    </div>
  );
}
