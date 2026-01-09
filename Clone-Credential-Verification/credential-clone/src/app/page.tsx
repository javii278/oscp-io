import Header from "@/components/Header";
import BadgeGallery from "@/components/BadgeGallery";
import CredentialInfo from "@/components/CredentialInfo";
import SkillsSection from "@/components/SkillsSection";
import EarningCriteria from "@/components/EarningCriteria";
import ShareCredential from "@/components/ShareCredential";
import CredentialVerification from "@/components/CredentialVerification";
import IssuerInfo from "@/components/IssuerInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main id="main-content" className="max-w-6xl mx-auto px-4 py-6">
        {/* Badge Gallery Section */}
        <div className="bg-[#f6f6fa] rounded-lg p-8 mb-8">
          <BadgeGallery />
        </div>

        {/* Credential Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CredentialInfo />
            <SkillsSection />
            <EarningCriteria />
            <ShareCredential />
            <CredentialVerification />
            <IssuerInfo />
          </div>

          <div className="lg:col-span-1">
            {/* Sidebar could go here for additional features */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
