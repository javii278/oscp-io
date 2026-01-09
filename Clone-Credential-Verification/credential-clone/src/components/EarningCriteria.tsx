import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function EarningCriteria() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-[#343a44]">Earning Criteria</h2>

      <div className="border-l-4 border-[#c75410] pl-4">
        <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Required</div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span className="bg-gray-100 px-2 py-0.5 rounded">course</span>
        </div>

        <Link
          href="https://www.offsec.com/courses/pen-200/"
          target="_blank"
          className="group block"
        >
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-[#c75410] rounded flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[#5c5cd6] group-hover:underline flex items-center gap-1">
                PEN-200: Penetration Testing with Kali Linux
                <ExternalLink className="w-4 h-4" />
              </h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
