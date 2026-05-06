import React from 'react';

const FooterSection = () => {
  return (
    <footer className="border-t-[3px] border-black bg-[#1a1a1a] text-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-12">
        
        {/* Brand Section */}
        <div className="md:col-span-4 border-b-[3px] md:border-b-0 md:border-r-[3px] border-white/10 px-6 md:px-10 py-10">
          <h3 className="font-oswald text-2xl font-bold uppercase tracking-tight mb-4">
            EDITORIAL COMMISSION DESK
          </h3>
          <p className="font-inter text-xs text-white/60 leading-relaxed max-w-sm">
            Connecting visionary publishers and brands with the world's most talented independent illustrators. Based in New York, working globally.
          </p>
        </div>

        {/* Navigate Section */}
        <div className="md:col-span-3 border-b-[3px] md:border-b-0 md:border-r-[3px] border-white/10 px-6 md:px-10 py-10">
          <h4 className="font-oswald text-xs font-bold uppercase tracking-[0.2em] text-[#F9FF00] mb-4">
            Navigate
          </h4>
          <div className="space-y-2">
            <a href="#work" className="block font-inter text-sm text-white/70 hover:text-[#F9FF00] transition-colors">Work</a>
            <a href="#process" className="block font-inter text-sm text-white/70 hover:text-[#F9FF00] transition-colors">Process</a>
            <a href="#roster" className="block font-inter text-sm text-white/70 hover:text-[#F9FF00] transition-colors">Roster</a>
            <a href="#inquiry" className="block font-inter text-sm text-white/70 hover:text-[#F9FF00] transition-colors">Inquiry</a>
            <a href="/dashboard" className="block font-inter text-sm text-white/70 hover:text-[#F9FF00] transition-colors">Dashboard</a>
          </div>
        </div>

        {/* Services Section */}
        <div className="md:col-span-3 border-b-[3px] md:border-b-0 md:border-r-[3px] border-white/10 px-6 md:px-10 py-10">
          <h4 className="font-oswald text-xs font-bold uppercase tracking-[0.2em] text-[#F9FF00] mb-4">
            Services
          </h4>
          <div className="space-y-2">
            <span className="block font-inter text-sm text-white/70">Editorial Illustration</span>
            <span className="block font-inter text-sm text-white/70">Brand Identity</span>
            <span className="block font-inter text-sm text-white/70">Publishing</span>
            <span className="block font-inter text-sm text-white/70">Packaging Design</span>
            <span className="block font-inter text-sm text-white/70">Motion Graphics</span>
          </div>
        </div>

        {/* Social Section */}
        <div className="md:col-span-2 px-6 md:px-10 py-10">
          <h4 className="font-oswald text-xs font-bold uppercase tracking-[0.2em] text-[#F9FF00] mb-4">
            Social
          </h4>
          <div className="space-y-2">
            <span className="block font-inter text-sm text-white/70 hover:text-[#F9FF00] transition-colors cursor-pointer">Instagram</span>
            <span className="block font-inter text-sm text-white/70 hover:text-[#F9FF00] transition-colors cursor-pointer">Behance</span>
            <span className="block font-inter text-sm text-white/70 hover:text-[#F9FF00] transition-colors cursor-pointer">Dribbble</span>
            <span className="block font-inter text-sm text-white/70 hover:text-[#F9FF00] transition-colors cursor-pointer">LinkedIn</span>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="font-inter text-[10px] text-white/40">
          © 2026 EDITORIAL COMMISSION DESK. ALL RIGHTS RESERVED.
        </span>
        <span className="font-inter text-[10px] text-white/40">
          DESIGNED IN NEW YORK
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;