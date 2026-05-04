import { Mail, MapPin, Phone, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white border-t border-[#1A1A1A]">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h1 className="text-2xl font-bold text-[#F7C600]">
            SoulOfAngola
          </h1>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Connecting the world to Angola through culture, tourism,
            transportation and local experiences in one unified platform.
          </p>

          <div className="mt-6 flex gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1A] hover:bg-[#CC092F] transition">
              <Globe className="w-5" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1A] hover:bg-[#F7C600] hover:text-black transition">
              <Mail className="w-5" />
            </div>
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h2 className="text-lg font-semibold text-[#F7C600] mb-4">
            Explore
          </h2>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-[#F7C600] cursor-pointer transition">
              About Angola
            </li>
            <li className="hover:text-[#F7C600] cursor-pointer transition">
              Interactive Map
            </li>
            <li className="hover:text-[#F7C600] cursor-pointer transition">
              Tourism
            </li>
            <li className="hover:text-[#F7C600] cursor-pointer transition">
              Services
            </li>
            <li className="hover:text-[#F7C600] cursor-pointer transition">
              Partners
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-lg font-semibold text-[#F7C600] mb-4">
            Contact
          </h2>

          <div className="space-y-4 text-sm text-gray-400">

            <div className="flex items-center gap-3">
              <MapPin className="w-4 text-[#CC092F]" />
              <span>Luanda, Angola</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 text-[#F7C600]" />
              <span>soulofangola.netlify.app</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 text-[#CC092F]" />
              <span>+244976829967</span>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#1A1A1A] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SoulOfAngola. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-gray-500">
            <span className="hover:text-[#F7C600] cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#F7C600] cursor-pointer">
              Terms
            </span>
            <span className="hover:text-[#CC092F] cursor-pointer">
              Support
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
};