"use client";

export default function BadgeGallery() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
      {/* Thumbnail */}
      <div className="flex lg:flex-col gap-4 order-2 lg:order-1">
        <div className="p-2 rounded-lg border-2 border-[#c75410] bg-white shadow-md">
          <div className="w-20 h-20 flex items-center justify-center">
            <img
              src="/obdafoef834639f/oscp-badge.webp"
              alt="OSCP Badge"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Badge Display */}
      <div className="flex-1 flex justify-center order-1 lg:order-2">
        <div className="relative">
          <img
            src="/obdafoef834639f/oscp-badge.webp"
            alt="OSCP Badge"
            className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
