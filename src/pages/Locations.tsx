import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replaceAll('--', '-');
};

export default function Locations() {
  const [activeTab, setActiveTab] = useState('locations'); // 'locations', 'sectors', 'societies'

  const locations = [
    'MG Road', 'South City', 'Manesar', 'Cyber City',
    'DLF City', 'Huda City Center', 'Sushant Lok', 'Sohna Road',
    'Golf Course Road', 'Near Metro Station', 'Dwarka', 'Mahipalpur'
  ];

  const sectors = [
    'Sector 14', 'Sector 15', 'Sector 17', 'Sector 21',
    'Sector 22', 'Sector 23', 'Sector 25', 'Sector 26',
    'Sector 29', 'Sector 35', 'Sector 42', 'Sector 43',
    'Sector 45', 'Sector 46', 'Sector 49', 'Sector 50',
    'Sector 53', 'Sector 52', 'Sector 54', 'Sector 56',
    'Sector 57', 'Sector 60', 'Sector 65', 'Sector 70',
    'Sector 72', 'Sector 78', 'Sector 80', 'Sector 82'
  ];

  const societies = [
    'Beverly Park 2', 'DLF Magnolias', 'DLF Camellias', 'DLF The Crest Elan',
    'Chaupal Hotel and Banquet', 'The Presidential', 'Ambience Creacions', 'DLF Imperial Residences',
    'Ireo Skyon', 'Sector 35', 'Sector 42', 'Sector 43',
    'Sector 45', 'Vatika city', 'M3M Golf Estate', 'SS Hibiscus',
    'Ireo The Corridors', 'Tata Raisina Residency', 'Vipul Greens', 'DLF Park Place',
    'Sobha city'
  ];

  const currentList = activeTab === 'locations' ? locations : activeTab === 'sectors' ? sectors : societies;

  return (
    <div className="w-full bg-[#f9f9f9]">
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
            <span className="text-[#d4af37] tracking-[0.2em] uppercase text-[10px] font-bold">VIP Destinations</span>
            <div className="h-[1px] w-8 bg-[#d4af37]"></div>
          </div>
          <h1 className="text-white text-4xl md:text-[50px] font-serif font-bold tracking-wide mb-8">
            Service Areas
          </h1>
          <div className="flex gap-4">
            <a href="tel:9996265679" className="bg-[#d4af37] text-[#0f1115] hover:bg-white px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase shadow-lg transition-colors flex items-center gap-2">
               Direct Booking
            </a>
            <Link to="/escorts" className="bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0f1115] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors">
              View Gallery
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-16 bg-white mt-8 mb-16 shadow-lg border border-gray-100 relative">
        {/* Intro */}
        <div className="mb-16 border-b border-[#0f1115]/10 pb-12 max-w-4xl mx-auto text-center">
          <h2 className="text-[32px] md:text-[38px] font-serif font-bold text-[#0f1115] mb-8 leading-[1.2]">
            Elite Companionship Across <span className="italic text-[#791b29]">Gurgaon & Beyond</span>
          </h2>
          <div className="text-gray-500 font-light text-[15.5px] leading-relaxed space-y-6">
            <p>
              In times like today when it is hard to manage a personal life between the busy working hours and socializing, it is usual to feel lonely and find the right company. Killing that loneliness is what we try to achieve with our <strong>Premium Companionship Services</strong> across key affluent neighborhoods.
            </p>
            <p>
              With our escort services, you can expect a beautiful female escort to accompany you wherever you wish. If you want to go out for a coffee, enjoy a movie or just have dinner before enjoying the dessert, you can meet <strong>independent girls, Russian models, or high-profile escorts</strong> with just a phone call. These beautiful ladies are fun to be around and know exactly how to set the mood.
            </p>
            <p>
              Available 24×7 over the phone or WhatsApp, allowing you to secure immediate out-calls directly to your 5-star hotel suite or premium residential address. 
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-12 max-w-4xl mx-auto border border-gray-200">
          <button 
            onClick={() => setActiveTab('locations')}
            className={`py-5 text-[12px] font-bold tracking-[0.15em] uppercase transition-all ${activeTab === 'locations' ? 'bg-[#0f1115] text-[#d4af37]' : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-[#0f1115]'}`}
          >
            Distinct Locations
          </button>
          <button 
            onClick={() => setActiveTab('sectors')}
            className={`py-5 text-[12px] font-bold tracking-[0.15em] uppercase transition-all border-l border-r border-gray-200 ${activeTab === 'sectors' ? 'bg-[#0f1115] text-[#d4af37] border-transparent' : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-[#0f1115]'}`}
          >
            Gurgaon Sectors
          </button>
          <button 
            onClick={() => setActiveTab('societies')}
            className={`py-5 text-[12px] font-bold tracking-[0.15em] uppercase transition-all ${activeTab === 'societies' ? 'bg-[#0f1115] text-[#d4af37]' : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-[#0f1115]'}`}
          >
            Luxury Societies
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-2 md:p-6">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
             {currentList.map((item, idx) => (
               <Link 
                 key={idx} 
                 to={`/locations/${slugify(item)}`}
                 className="group outline outline-1 outline-gray-200 hover:outline-[#d4af37] bg-white hover:bg-[#0f1115] hover:-translate-y-1 text-center py-6 px-4 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-xl"
               >
                 <span className="text-[#0f1115] group-hover:text-[#d4af37] font-bold tracking-wide transition-colors">{item}</span>
                 <span className="block mt-2 h-[1px] w-6 bg-[#d4af37]/30 group-hover:bg-[#d4af37] mx-auto transition-colors"></span>
               </Link>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
}
