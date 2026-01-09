import { CheckCircle, Link as LinkIcon } from "lucide-react";

export default function CredentialVerification() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-[#343a44]">Credential Verification</h2>

      <div className="bg-[#f6f6fa] rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-[#08a8a4]" />
          <div>
            <span className="font-semibold text-[#343a44]">
              This credential is from a <span className="text-[#08a8a4]">verified issuer</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LinkIcon className="w-6 h-6 text-[#08a8a4]" />
          <div>
            <span className="font-semibold text-[#343a44]">
              Secured by <span className="text-[#08a8a4]">Blockchain</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
