import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-[#0f1115] border-b border-[#2a2d36] z-50 sticky top-0 md:h-20 h-16 shadow-md">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-full px-4 text-white">
        {/* Logo Left */}
        <div className="flex items-center">
          <Link to="/" className="flex flex-col justify-center hover:scale-105 transition-transform duration-300 mr-8">
            <img src="/logo.png" alt="Alina VIP Escorts Logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Search & Nav */}
        <div className="hidden lg:flex items-center flex-grow justify-center">
          <nav className="flex items-center gap-6">
            <Link to="/" className={`text-[12px] xl:text-[13px] uppercase tracking-widest font-medium transition-colors duration-300 ${isActive('/') ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'}`}>Home</Link>
            <Link to="/escorts" className={`text-[12px] xl:text-[13px] uppercase tracking-widest font-medium transition-colors duration-300 ${isActive('/escorts') ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'}`}>Escorts</Link>
            <div className="relative group h-full flex items-center">
              <Link to="/services" className={`text-[12px] xl:text-[13px] uppercase tracking-widest font-medium flex items-center gap-1.5 transition-colors duration-300 ${isActive('/services') ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'}`}>Services <ChevronDown size={14} className="opacity-60" /></Link>
              <div className="absolute top-[80px] left-0 bg-[#1a1d24] shadow-2xl border-t-[2px] border-[#d4af37] min-w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 rounded-b-sm">
                <Link to="/services/in-call-out-call" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">In-Call and Out-Call Services</Link>
                <Link to="/services/erotic-massage" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Erotic Massage in Gurgaon</Link>
                <Link to="/services/girlfriend-experience" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Girlfriend Experience</Link>
                <Link to="/services/hourly" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Escort Service for 1/2/3 Hours</Link>
                <Link to="/services/full-night" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Escort Service Full Night</Link>
              </div>
            </div>
            <div className="relative group h-full flex items-center">
              <Link to="/hotels" className={`text-[12px] xl:text-[13px] uppercase tracking-widest font-medium flex items-center gap-1.5 transition-colors duration-300 ${isActive('/hotels') ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'}`}>Hotels <ChevronDown size={14} className="opacity-60" /></Link>
              <div className="absolute top-[80px] left-0 bg-[#1a1d24] shadow-2xl border-t-[2px] border-[#d4af37] min-w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 rounded-b-sm">
                <Link to="/hotels/crowne-plaza" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Crowne Plaza Hotel</Link>
                <Link to="/hotels/pllazio" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Pllazio Hotel</Link>
                <Link to="/hotels/bristol" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Bristol Hotel</Link>
                <Link to="/hotels/oberoi" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">The Oberoi Hotel</Link>
                <Link to="/hotels/leela" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Leela Ambience Hotel</Link>
                <Link to="/hotels/taj" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Taj City Centre Hotel</Link>
                <Link to="/hotels" className="block px-6 py-2.5 text-[14px] uppercase tracking-wider font-bold text-[#d4af37] hover:bg-[#2a2d36]/50 border-t border-[#2a2d36] mt-2 pt-3 transition-colors">View All Hotels</Link>
              </div>
            </div>
            <div className="relative group h-full flex items-center">
              <Link to="/locations" className={`text-[12px] xl:text-[13px] uppercase tracking-widest font-medium flex items-center gap-1.5 transition-colors duration-300 ${isActive('/locations') ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'}`}>Locations <ChevronDown size={14} className="opacity-60" /></Link>
              <div className="absolute top-[80px] left-0 bg-[#1a1d24] shadow-2xl border-t-[2px] border-[#d4af37] min-w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 rounded-b-sm">
                <Link to="/locations" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">All Locations</Link>
                <Link to="/locations" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">All Sectors</Link>
                <Link to="/locations" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">All Societies</Link>
              </div>
            </div>
            <div className="relative group h-full flex items-center">
              <Link to="/categories" className={`text-[12px] xl:text-[13px] uppercase tracking-widest font-medium flex items-center gap-1.5 transition-colors duration-300 ${isActive('/categories') ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'}`}>Categories <ChevronDown size={14} className="opacity-60" /></Link>
              <div className="absolute top-[80px] left-0 bg-[#1a1d24] shadow-2xl border-t-[2px] border-[#d4af37] min-w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 rounded-b-sm">
                <Link to="/categories" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Russian Escorts in Aerocity</Link>
                <Link to="/categories" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Russian Call Girls</Link>
                <Link to="/categories" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Foreigner Girls</Link>
                <Link to="/categories" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">High Profile Call Girls</Link>
                <Link to="/categories" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Housewife Escorts</Link>
                <Link to="/categories" className="block px-6 py-2.5 text-[14px] text-gray-400 hover:text-[#d4af37] hover:bg-[#2a2d36]/50 transition-colors">Indian Girls</Link>
                <Link to="/categories" className="block px-6 py-2.5 text-[14px] uppercase tracking-wider font-bold text-[#d4af37] hover:bg-[#2a2d36]/50 border-t border-[#2a2d36] mt-2 pt-3 transition-colors">View All Categories</Link>
              </div>
            </div>
            <Link to="/blog" className={`text-[12px] xl:text-[13px] uppercase tracking-widest font-medium transition-colors duration-300 ${isActive('/blog') ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'}`}>Blog</Link>
            <Link to="/contact" className={`text-[12px] xl:text-[13px] uppercase tracking-widest font-medium transition-colors duration-300 ${isActive('/contact') ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'}`}>Contact Us</Link>
          </nav>
        </div>

        {/* Desktop CTA & Search */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-gray-400 hover:text-[#d4af37] transition-colors">
            <Search size={18} strokeWidth={2.5} />
          </button>
          <a href="tel:9996265679" className="bg-[#d4af37] text-[#0f1115] px-6 py-2.5 text-[11px] font-bold tracking-widest uppercase hover:bg-white transition-colors border border-[#d4af37] hover:border-white">
            Dispatch Now
          </a>
        </div>
        
        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button className="text-gray-300 hover:text-[#d4af37] transition-colors">
            <Search size={22} />
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-[#d4af37] transition-colors">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1a1d24] shadow-2xl max-h-[85vh] overflow-y-auto border-t-[2px] border-[#d4af37] py-6 animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col px-6 gap-6">
            <Link onClick={() => setMobileMenuOpen(false)} to="/" className={`text-[15px] uppercase tracking-widest font-medium border-b border-[#2a2d36] pb-3 hover:text-[#d4af37] hover:pl-2 transition-all ${isActive('/') ? 'text-[#d4af37]' : 'text-gray-200'}`}>Home</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/escorts" className={`text-[15px] uppercase tracking-widest font-medium border-b border-[#2a2d36] pb-3 hover:text-[#d4af37] hover:pl-2 transition-all ${isActive('/escorts') ? 'text-[#d4af37]' : 'text-gray-200'}`}>Escorts</Link>
            
            <div className="flex flex-col">
              <span className={`text-[15px] uppercase tracking-widest font-bold mb-3 ${isActive('/services') ? 'text-[#d4af37]' : 'text-[#d4af37]'}`}>Services</span>
              <div className="pl-4 flex flex-col gap-4 py-2 border-l border-[#2a2d36]">
                <Link onClick={() => setMobileMenuOpen(false)} to="/services/in-call-out-call" className="text-[14px] text-gray-400 hover:text-[#d4af37]">In-Call and Out-Call</Link>
                <Link onClick={() => setMobileMenuOpen(false)} to="/services/erotic-massage" className="text-[14px] text-gray-400 hover:text-[#d4af37]">Erotic Massage</Link>
                <Link onClick={() => setMobileMenuOpen(false)} to="/services/girlfriend-experience" className="text-[14px] text-gray-400 hover:text-[#d4af37]">Girlfriend Experience</Link>
                <Link onClick={() => setMobileMenuOpen(false)} to="/services/hourly" className="text-[14px] text-gray-400 hover:text-[#d4af37]">Hourly Escorts</Link>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[15px] uppercase tracking-widest font-bold text-[#d4af37] mb-3">Hotels</span>
              <div className="pl-4 flex flex-col gap-4 py-2 border-l border-[#2a2d36]">
                <Link onClick={() => setMobileMenuOpen(false)} to="/hotels/crowne-plaza" className="text-[14px] text-gray-400 hover:text-[#d4af37]">Crowne Plaza Hotel</Link>
                <Link onClick={() => setMobileMenuOpen(false)} to="/hotels/pllazio" className="text-[14px] text-gray-400 hover:text-[#d4af37]">Pllazio Hotel</Link>
                <Link onClick={() => setMobileMenuOpen(false)} to="/hotels/bristol" className="text-[14px] text-gray-400 hover:text-[#d4af37]">Bristol Hotel</Link>
                <Link onClick={() => setMobileMenuOpen(false)} to="/hotels/oberoi" className="text-[14px] text-gray-400 hover:text-[#d4af37]">The Oberoi Hotel</Link>
                <Link onClick={() => setMobileMenuOpen(false)} to="/hotels/leela" className="text-[14px] text-gray-400 hover:text-[#d4af37]">Leela Ambience Hotel</Link>
                <Link onClick={() => setMobileMenuOpen(false)} to="/hotels/taj" className="text-[14px] text-gray-400 hover:text-[#d4af37]">Taj City Centre Hotel</Link>
              </div>
            </div>

            <div className="flex flex-col border-t border-[#2a2d36] pt-6 gap-6">
              <Link onClick={() => setMobileMenuOpen(false)} to="/categories" className={`text-[15px] uppercase tracking-widest font-medium hover:text-[#d4af37] hover:pl-2 transition-all ${isActive('/categories') ? 'text-[#d4af37]' : 'text-gray-200'}`}>Categories</Link>
              <Link onClick={() => setMobileMenuOpen(false)} to="/locations" className={`text-[15px] uppercase tracking-widest font-medium hover:text-[#d4af37] hover:pl-2 transition-all ${isActive('/locations') ? 'text-[#d4af37]' : 'text-gray-200'}`}>Locations</Link>
              <Link onClick={() => setMobileMenuOpen(false)} to="/blog" className={`text-[15px] uppercase tracking-widest font-medium hover:text-[#d4af37] hover:pl-2 transition-all ${isActive('/blog') ? 'text-[#d4af37]' : 'text-gray-200'}`}>Blog</Link>
              <Link onClick={() => setMobileMenuOpen(false)} to="/contact" className={`text-[15px] uppercase tracking-widest font-medium hover:text-[#d4af37] hover:pl-2 transition-all ${isActive('/contact') ? 'text-[#d4af37]' : 'text-gray-200'}`}>Contact Us</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}