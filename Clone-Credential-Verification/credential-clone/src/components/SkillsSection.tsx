import { Badge } from "@/components/ui/badge";

const skills = [
  "Kali Linux",
  "Network Vulnerability Scanning",
  "Buffer Overflow Exploits",
  "Exploitation",
  "Client Side Attacks",
  "Web Exploitation",
  "Password Attacks",
  "Pivoting",
  "Antivirus Exploitation",
  "Advanced Command Line",
  "Practical Tools",
  "Bash Scripting",
  "Active Information Gathering",
  "Passive Information Gathering",
  "Vulnerability Scanning",
  "Web Application Attacks",
  "Windows Buffer Overflow",
  "Linux Buffer Overflow",
  "Locating Public Exploits",
  "Fixing Public Exploits",
  "File Transfers",
  "Antivirus Evasion",
  "Port Redirection",
  "Tunneling",
  "Active Directory Attacks",
  "PowerShell Empire",
  "Privilege Escalation",
  "Metasploit",
  "Port Scanning",
  "Information Gathering",
];

export default function SkillsSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#343a44]">Skills / Knowledge</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="bg-gray-100 hover:bg-gray-200 text-[#343a44] px-3 py-1.5 text-sm font-normal rounded-full cursor-default"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
