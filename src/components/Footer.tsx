import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0f1115] mt-12 pt-20 pb-10 border-t border-[#2a2d36] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"></div>
      <div className="max-w-[1240px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-6 flex flex-col">
              <Link to="/">
                <img src="/logo.png" alt="Alina VIP Escorts Logo" className="h-12 md:h-14 w-auto object-contain" />
              </Link>
            </div>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-6">
              Experience the pinnacle of luxury companionship in Gurgaon and Aerocity. Verified profiles, extreme discretion, and unforgettable moments.
            </p>
          </div>
          <div>
            <h3 className="text-white font-serif tracking-wider uppercase text-[14px] mb-6 border-b border-[#2a2d36] inline-block pb-1">Main Menu</h3>
            <ul className="space-y-3.5">
              <li><Link to="/about" className="text-gray-400 hover:text-[#d4af37] text-[13px] font-medium transition-colors uppercase tracking-wider">About Us</Link></li>
              <li><Link to="/escorts" className="text-gray-400 hover:text-[#d4af37] text-[13px] font-medium transition-colors uppercase tracking-wider">Escorts</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-[#d4af37] text-[13px] font-medium transition-colors uppercase tracking-wider">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#d4af37] text-[13px] font-medium transition-colors uppercase tracking-wider">Contact Us</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-[#d4af37] text-[13px] font-medium transition-colors uppercase tracking-wider">Categories</Link></li>
              <li><Link to="/locations" className="text-gray-400 hover:text-[#d4af37] text-[13px] font-medium transition-colors uppercase tracking-wider">Locations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-serif tracking-wider uppercase text-[14px] mb-6 border-b border-[#2a2d36] inline-block pb-1">Top Categories</h3>
            <ul className="space-y-3.5">
               {['Russian Call Girls', 'High Profile Call Girls', 'College Girls', 'Air Hostess Escorts', 'VIP Call Girls'].map(item => (
                <li key={item}><Link to="/categories" className="text-gray-400 hover:text-[#d4af37] text-[13px] font-medium transition-colors uppercase tracking-wider">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-serif tracking-wider uppercase text-[14px] mb-6 border-b border-[#2a2d36] inline-block pb-1">Contact Details</h3>
            <div className="text-gray-400 text-[13px] space-y-4">
              <p className="text-[18px] font-serif text-[#d4af37] tracking-wider">+91-9996265679</p>
              <p className="tracking-wide">charlescharles6353@gmail.com</p>
              <div className="inline-block px-3 py-1 bg-[#1a1d24] text-white/50 text-xs font-medium rounded-sm mt-4 border border-[#2a2d36] uppercase tracking-widest">
                DMCA SECURED
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-[#2a2d36] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[12px] uppercase tracking-widest">Copyright &copy; 2026 All Right Reserved Alina VIP</p>
          <div className="flex gap-4">
            <span className="text-gray-500 text-[12px] uppercase tracking-widest hover:text-[#d4af37] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-gray-500 text-[12px] uppercase tracking-widest hover:text-[#d4af37] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}