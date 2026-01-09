export default function OffSecLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <img
      src="/offsec-logo.png"
      alt="OffSec Logo"
      className={`${className} object-contain`}
    />
  );
}
