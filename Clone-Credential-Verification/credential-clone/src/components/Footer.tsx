import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div>
            <Link href="https://www.accredible.com" target="_blank" className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 40 40" className="text-[#5c5cd6]">
                <rect x="4" y="8" width="8" height="24" fill="currentColor" />
                <rect x="16" y="8" width="8" height="24" fill="currentColor" />
                <rect x="28" y="8" width="8" height="24" fill="currentColor" />
              </svg>
              <span className="font-semibold text-lg text-[#343a44]">Accredible</span>
            </Link>
          </div>

          {/* Issue Credentials */}
          <div>
            <h4 className="font-semibold text-[#343a44] mb-3">Issue Credentials</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.accredible.com/issuing-with-accredible/" target="_blank" className="text-gray-600 hover:text-[#5c5cd6] transition-colors">
                  About Accredible
                </Link>
              </li>
              <li>
                <Link href="https://www.accredible.com/contact/" target="_blank" className="text-gray-600 hover:text-[#5c5cd6] transition-colors">
                  Request a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Credential Recipients */}
          <div>
            <h4 className="font-semibold text-[#343a44] mb-3">Credential Recipients</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#5c5cd6] transition-colors">
                  Retrieve a Credential
                </Link>
              </li>
              <li>
                <Link href="https://help.accredible.com" target="_blank" className="text-gray-600 hover:text-[#5c5cd6] transition-colors">
                  Help
                </Link>
              </li>
              <li>
                <Link href="https://www.coursefinder.io/" target="_blank" className="text-gray-600 hover:text-[#5c5cd6] transition-colors">
                  Coursefinder
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-200 pt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <Link href="https://www.accredible.com/terms/" target="_blank" className="hover:text-[#5c5cd6] transition-colors">
            Terms of Service
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="https://www.accredible.com/data-privacy/" target="_blank" className="hover:text-[#5c5cd6] transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="#" className="hover:text-[#5c5cd6] transition-colors">
            Accessibility
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="#" className="hover:text-[#5c5cd6] transition-colors">
            Site Map
          </Link>
        </div>
      </div>
    </footer>
  );
}
