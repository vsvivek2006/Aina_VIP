import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Star, XCircle, Check } from 'lucide-react';
import { PROFILES } from '../data';
import ProfileModal from '../components/ProfileModal';

export default function Escorts() {
  const categories = ['Russian Call Girls', 'Foreigner Girls', 'College Girls', 'High Profile Escorts Call Girls', 'Air Hostess Escorts', 'Celebrity Call Girls', 'Housewife Escorts', 'Female Models', 'VIP Call Girls', 'Punjabi Call Girls', 'Busty Escorts', 'Slim Call Girls', 'Affordable Escorts', 'Russian Escorts in Aerocity'];
  const locations = ['Manesar', 'Cyber City', 'DLF City', 'Huda City Centre', 'MG Road', 'South City', 'Sushant Lok'];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProfile = (profile: any) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  // Filter profiles based on category and location keywords
  const filteredProfiles = PROFILES.filter(profile => {
    const descLower = profile.desc.toLowerCase();
    const nameLower = profile.name.toLowerCase();
    
    // Category filtering
    if (selectedCategory) {
      const cat = selectedCategory.toLowerCase();
      if (cat.includes('russian') && !(nameLower.includes('julia') || nameLower.includes('kiara') || nameLower.includes('sophia') || nameLower.includes('sandra') || nameLower.includes('shyla') || nameLower.includes('ellison') || descLower.includes('russian'))) {
        return false;
      }
      if (cat.includes('foreigner') && !(descLower.includes('foreign') || nameLower.includes('akshara') || nameLower.includes('julia') || nameLower.includes('ellison') || nameLower.includes('kiara'))) {
        return false;
      }
      if (cat.includes('college') && !(descLower.includes('college') || descLower.includes('school') || descLower.includes('young') || nameLower.includes('darshita') || nameLower.includes('siya'))) {
        return false;
      }
      if (cat.includes('housewife') && !(descLower.includes('housewife') || descLower.includes('matron') || nameLower.includes('mahima'))) {
        return false;
      }
      if (cat.includes('model') && !(descLower.includes('model') || nameLower.includes('aakruti') || nameLower.includes('tanisha') || nameLower.includes('diya'))) {
        return false;
      }
      if (cat.includes('vip') && !(descLower.includes('vip') || descLower.includes('premium') || nameLower.includes('aarohi') || nameLower.includes('ankita') || nameLower.includes('brinda'))) {
        return false;
      }
      // General keywords mapping if no specific rule hit
      const keyword = cat.split(' ')[0]; // E.g. "Russian", "Punjabi", "Busty", "Slim", "Affordable"
      if (!descLower.includes(keyword) && !nameLower.includes(keyword)) {
        // Safe check
        const sampleCheck = descLower.includes('escort') || descLower.includes('girl');
        if (!sampleCheck) return false;
      }
    }

    // Location filtering
    if (selectedLocation) {
      const loc = selectedLocation.toLowerCase();
      if (!descLower.includes(loc)) {
        // Fallback: match specific girls to locations
        if (loc.includes('manesar') && !nameLower.includes('diya')) return false;
        if (loc.includes('cyber city') && !(nameLower.includes('aarohi') || nameLower.includes('preet'))) return false;
        if (loc.includes('huda') && !(nameLower.includes('darshita') || nameLower.includes('ankita') || nameLower.includes('sandra'))) return false;
        if (loc.includes('mg road') && !(nameLower.includes('aakruti') || nameLower.includes('tanisha') || nameLower.includes('aavanya'))) return false;
        if (loc.includes('south city') && !(nameLower.includes('isha') || nameLower.includes('brinda'))) return false;
        if (loc.includes('sushant lok') && !(nameLower.includes('ruhi') || nameLower.includes('julia') || nameLower.includes('nitara'))) return false;
      }
    }

    return true;
  });

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative bg-[#0f1115] overflow-hidden min-h-[350px] flex items-center justify-center pt-8 pb-12">
        <img 
          src="https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=2000&h=800" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover object-top opacity-20 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-[#1a1d24]/60"></div>
        <div className="relative z-10 text-center flex flex-col items-center mt-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#d4af37]"></div>
            <span className="text-[#d4af37] tracking-[0.2em] uppercase text-[10px] font-bold">The Elite Roster</span>
            <div className="h-[1px] w-8 bg-[#d4af37]"></div>
          </div>
          <h1 className="text-white text-4xl md:text-[50px] font-serif font-bold tracking-wide mb-8">
            Complete Gallery
          </h1>
          <div className="flex gap-4">
            <a href="tel:9996265679" className="bg-[#d4af37] text-[#0f1115] hover:bg-white px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase shadow-lg transition-colors flex items-center gap-2">
              <Phone size={14} className="fill-current" strokeWidth={0} /> Direct Booking
            </a>
            <button 
              onClick={() => { setSelectedCategory(null); setSelectedLocation(null); }}
              className="bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0f1115] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-16 flex flex-col md:flex-row gap-10 bg-white">
        
        {/* Sidebar */}
        <aside className="w-full md:w-[280px] shrink-0">
          {/* Active Filter Status */}
          {(selectedCategory || selectedLocation) && (
            <div className="mb-8 border border-[#d4af37]/30 bg-gray-50/50 p-5 flex flex-col gap-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>
              <span className="text-[10px] font-bold text-[#0f1115] uppercase tracking-widest inline-flex items-center gap-1.5"><Star size={12} className="text-[#d4af37] fill-current" /> Active Refinements</span>
              
              {selectedCategory && (
                <div className="flex items-center justify-between bg-white px-3 py-2 text-[12px] border border-gray-200">
                  <span className="truncate text-gray-700 font-medium">{selectedCategory}</span>
                  <button onClick={() => setSelectedCategory(null)} className="text-gray-400 hover:text-[#0f1115] cursor-pointer">
                    <XCircle size={14} />
                  </button>
                </div>
              )}
              {selectedLocation && (
                <div className="flex items-center justify-between bg-white px-3 py-2 text-[12px] border border-gray-200">
                  <span className="truncate text-gray-700 font-medium">{selectedLocation}</span>
                  <button onClick={() => setSelectedLocation(null)} className="text-gray-400 hover:text-[#0f1115] cursor-pointer">
                    <XCircle size={14} />
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="mb-10">
            <h3 className="font-serif font-bold text-[18px] text-[#0f1115] px-2 mb-4 border-b border-[#0f1115]/10 pb-2">Filter by Category</h3>
            <ul className="space-y-1">
              {categories.map(c => {
                const isActive = selectedCategory === c;
                return (
                  <li key={c}>
                    <button 
                      onClick={() => setSelectedCategory(c)}
                      className={`w-full text-left px-3 py-2 text-[13px] transition-colors cursor-pointer flex items-center justify-between group ${
                        isActive 
                          ? 'text-[#0f1115] font-bold bg-gray-50' 
                          : 'text-gray-500 hover:text-[#d4af37] font-medium hover:bg-gray-50/50'
                      }`}
                    >
                      <span>{c}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-[18px] text-[#0f1115] px-2 mb-4 border-b border-[#0f1115]/10 pb-2">Filter by Area</h3>
            <ul className="space-y-1">
              {locations.map(c => {
                const isActive = selectedLocation === c;
                return (
                  <li key={c}>
                    <button 
                      onClick={() => setSelectedLocation(c)}
                      className={`w-full text-left px-3 py-2 text-[13px] transition-colors cursor-pointer flex items-center justify-between group ${
                        isActive 
                          ? 'text-[#0f1115] font-bold bg-gray-50' 
                          : 'text-gray-500 hover:text-[#d4af37] font-medium hover:bg-gray-50/50'
                      }`}
                    >
                      <span>{c}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Main Grid Content */}
        <main className="flex-1">
          {filteredProfiles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfiles.map((profile, i) => (
                <div key={i} className="bg-white border border-gray-100 group flex flex-col hover:shadow-2xl transition-all duration-500 rounded-sm">
                  <div 
                    className="relative aspect-[3/4] overflow-hidden cursor-pointer"
                    onClick={() => handleOpenProfile(profile)}
                  >
                    <img src={profile.image} alt={profile.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleOpenProfile(profile); }}
                        className="bg-white/90 backdrop-blur text-[#0f1115] text-[11px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-[#d4af37] hover:text-white transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 
                        className="font-serif font-bold text-[18px] text-[#0f1115] hover:text-[#d4af37] cursor-pointer transition-colors"
                        onClick={() => handleOpenProfile(profile)}
                      >
                        {profile.name}
                      </h3>
                      <div className="flex items-center">
                        {profile.rating > 0 && [...Array(1)].map((_, idx) => (
                          <Star key={idx} size={13} className="fill-[#d4af37] text-[#d4af37]" strokeWidth={1} />
                        ))}
                        <span className="text-gray-900 text-[11px] font-bold ml-1">5.0</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 text-[13px] font-light leading-relaxed mb-5 flex-1 line-clamp-2">
                      {profile.desc}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-3">
                      <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em] flex items-center gap-1">
                        <Check size={12} /> Verified
                      </span>
                      <div className="flex items-center gap-3">
                        <a href="tel:9996265679" className="text-gray-400 hover:text-[#0f1115] transition-colors">
                          <Phone size={14} className="fill-current" strokeWidth={0} />
                        </a>
                        <a href="https://wa.me/919996265679" className="text-gray-400 hover:text-[#25D366] transition-colors">
                          <MessageCircle size={14} className="fill-current" strokeWidth={0} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 p-16 text-center">
              <Star size={32} className="text-[#d4af37] mx-auto mb-4 opacity-50" />
              <p className="text-gray-500 text-[15px] mb-6 font-light">No companion currently matches your selected filters.</p>
              <button 
                onClick={() => { setSelectedCategory(null); setSelectedLocation(null); }}
                className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-3 text-[11px] font-bold cursor-pointer tracking-widest transition-colors uppercase"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredProfiles.length > 0 && (
            <div className="flex items-center justify-center mt-16 gap-3 border-t border-gray-100 pt-10">
              <span className="w-10 h-10 flex items-center justify-center bg-[#0f1115] text-[#d4af37] text-[13px] font-bold shadow-sm">1</span>
              <span className="w-10 h-10 flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-50 cursor-pointer text-gray-500 text-[13px] font-medium transition-colors">2</span>
              <span className="text-gray-400 font-bold tracking-widest px-2">...</span>
              <span className="w-10 h-10 flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-50 cursor-pointer text-gray-500 text-[13px] font-medium transition-colors">8</span>
            </div>
          )}
        </main>
      </div>

      <ProfileModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        profile={selectedProfile} 
      />
    </div>
  );
}
