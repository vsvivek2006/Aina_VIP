import React, { useState, useMemo } from 'react';
import { Phone, Mail, MessageSquare, CheckCircle, Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hotels() {
  const [showAllHotels, setShowAllHotels] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Top 5 Highlighted Hotels for the top banner cards
  const topHotels = [
    { name: 'Pllazio Hotel', desc: 'Here you will discover proficient escort benefits in Gurgaon close to The Pllazio Hotel', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600&h=400', path: '/hotels/pllazio' },
    { name: 'Bristol Hotel', desc: 'Spice up your night with these gorgeous escorts available near Bristol Hotel in gurgoan', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600&h=400', path: '/hotels/bristol' },
    { name: 'The Oberoi Hotel', desc: 'Our escort service offer attractive call girl escorts near the oberoi hotel and you can choose the girl', image: 'https://images.unsplash.com/photo-1542314831-c6a4d2759e32?auto=format&fit=crop&q=80&w=600&h=400', path: '/hotels/oberoi' },
    { name: 'Leela Ambience Hotel', desc: 'Sexy call girl escorts near Leela Ambience Hotel are available 24/7 to entertain their clients', image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80&w=600&h=400', path: '/hotels/leela' },
    { name: 'Taj City Centre Hotel', desc: 'Experience the best call girl escorts near Taj City Centre Hotel available for premium clients', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=600&h=400', path: '/hotels/taj' },
  ];

  // 1. Luxury / 5-Star Hotels (From Image)
  const luxuryHotels = [
    'Trident, Gurgaon', 'The Oberoi, Gurgaon', 'The Westin Gurgaon, New Delhi',
    'Le Méridien Gurgaon, Delhi NCR', 'Taj City Centre Gurugram',
    'The Leela Ambience Gurugram Hotel & Residences', 'ITC Grand Bharat'
  ];

  // 2. Popular Business & Premium Hotels (From Image)
  const businessPremiumHotels = [
    'Radisson Hotel Sector 29 Gurugram', 'Crowne Plaza Gurgaon, an IHG Hotel',
    'The Pllazio Hotel', 'Golden Tulip, Sector 29, Gurugram',
    'Lemon Tree Premier, City Center, Gurugram', 'Lemon Tree Premier-1, Leisure Valley, Gurugram',
    'Lemon Tree Premier, Leisure Valley 2, Gurugram', 'Dia Park Premier Hotel',
    'CLARENS HOTEL', 'The Bristol Hotel, Gurgaon 5 Star Deluxe Hotel',
    'DoubleTree by Hilton Hotel Gurgaon - New Delhi NCR', 'The Place Gurugram, a member of Radisson Individuals',
    'Nemesia City Center - Gurugram, Sector 29', 'Lemon Tree Hotel, Sector 60 - Gurugram',
    'ibis Gurgaon Golf Course Road'
  ];

  // 3. Budget & Mid-Range Hotels (From Image)
  const budgetMidRangeHotels = [
    'Country Inn & Suites by Radisson, Gurgaon Sector 12', 'Park Inn, Gurgaon',
    'Skycity Hotel Gurgaon', 'DS Clarks Inn Gurgaon', 'Quality Inn Gurgaon',
    'Hotel 91 HUDA City Centre Gurgaon', 'Five Elements Hotel Gurugram (The Claire)'
  ];

  // 4. Other Previous Hotels (From old code to not lose data)
  const otherHotels = [
    'Courtyard by Marriott Hotel', 'Hyatt Regency Hotel', 'Hilton Garden Inn Hotel', 'Anya Hotel', 
    'Ahuja Residency DLF Phase 2', 'Asian Suites HUDA City Centre', 'Asian Suites IFFCO Metro Station', 
    'Bloom Boutique Hotel', 'Chaupal Hotel and Banquet', 'Citrus Check Inns', 'Corporate Stays Suncity',
    'DLF City Club 4 Hotel', 'Eddison Hotel', 'FabHotel Premium Nest', 'Fortune Select Global', 
    'Gazebo Inn and Suites', 'Grand Hyatt Hotel', 'Heritage Village Resorts', 'Holiday Inn Sector 90', 
    'HollyHocks Residency Hotel', 'Hotel Anandam', 'Hotel AZAD Square', 'Hotel City Premier', 
    'Hotel Golf View Suites', 'Hotel Green Earth', 'Hotel Hyatt Place', 'Hotel Imperial Park', 
    'Hotel Indiyaah Inn', 'Hotel Levante', 'Hotel Mulberry Retreat', 'Hotel Redbrick Villa', 
    'Hotel Sai Village', 'Hotel Tavisha Villa', 'Inde Hotel Cyber City', 'Inde Hotel Signature Tower', 
    'Inde Hotel Vista Woods', 'iSTAY LushGreen Villa', 'Kabul Hotel Medanta', 'Lemon Tree Hotel Sohna', 
    'Paradise inn hotel', 'Park Plaza Gurugram', 'Ramada Gurgaon Central', 'Rosewood Apartment Hotel', 
    'Royal Residence MG Road', 'Savoy Suites Manesar', 'Square 9 Inn Hotel', 'Staayz Premium Hotel', 
    'The Atara Hotel', 'The Iris A Boutique Hotel', 'The Palms Town', 'Treebo IFFCO Chowk', 
    'Treebo Premium Eden Residency', 'Treebo White Castle', 'TreeHouse Queens Pearl', 
    'Trinity Corporate Suites', 'Tulalip Hotel', 'Vivid Boutique Hotel'
  ].sort();

  // Combined list for search filtering
  const allHotelsList = [...luxuryHotels, ...businessPremiumHotels, ...budgetMidRangeHotels, ...otherHotels];

  const getHotelPath = (hotelName: string) => {
    const norm = hotelName.toLowerCase();
    if (norm.includes('taj')) return '/hotels/taj';
    if (norm.includes('oberoi')) return '/hotels/oberoi';
    if (norm.includes('leela')) return '/hotels/leela';
    if (norm.includes('bristol')) return '/hotels/bristol';
    if (norm.includes('crowne plaza')) return '/hotels/crowne-plaza';
    if (norm.includes('pllazio')) return '/hotels/pllazio';
    return `/contact?hotel=${encodeURIComponent(hotelName)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName) return;
    setFormSubmitted(true);
  };

  // Search Filter logic
  const filteredHotels = useMemo(() => {
    if (!searchQuery) return [];
    return allHotelsList.filter(hotel => 
      hotel.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Helper component to render hotel cards
  const HotelCard = ({ hotel }: { hotel: string }) => (
    <Link 
      to={getHotelPath(hotel)} 
      className="bg-white border border-gray-200 hover:border-[#d4af37] text-[#0f1115] hover:text-[#d4af37] text-center p-4 text-[12px] font-bold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center min-h-[80px]"
    >
      {hotel}
    </Link>
  );

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative bg-[#0f1115] overflow-hidden min-h-[350px] flex items-center justify-center pt-8 pb-12">
        <img 
          src="https://images.unsplash.com/photo-1541971875076-8f970d473a81?auto=format&fit=crop&q=80&w=2000&h=800" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover object-top opacity-20 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-[#1a1d24]/80"></div>
        <div className="relative z-10 text-center flex flex-col items-center mt-4">
          <h1 className="text-white text-4xl md:text-[50px] font-serif font-bold tracking-wide mb-8">
            Partner Hotels
          </h1>
          <div className="flex gap-4">
            <a href="tel:9996265679" className="bg-[#d4af37] text-[#0f1115] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors hover:bg-white">
              Direct Booking
            </a>
            <Link to="/escorts" className="bg-transparent border border-[#d4af37] text-[#d4af37] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase hover:bg-[#d4af37] hover:text-[#0f1115] transition-colors">
              View Catalog
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-12">
        
        {/* Intro */}
        <div className="mb-16 border-b border-gray-100 pb-12 relative pl-8">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>
          <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-6">
            Relax With Your Partner in World-Class Hotels
          </h2>
          <div className="text-gray-500 font-light text-[15px] leading-[1.8] space-y-6">
            <p>
              Gurgaon has some of the best hotels in the country. With world-class infrastructure and best-in-class facilities, hotels in Gurgaon offer a leisurely stay for you. All sorts of hotels are available as per your budget. All the hotels are couple friendly and offer safe accommodation. You do not have to worry about your security and privacy. These beautiful hotels offer a luxurious stay and are a hot choice amongst travellers from all over the world.
            </p>
          </div>
          <div className="flex gap-4 mt-10">
            <a href="tel:9996265679" className="bg-[#0f1115] text-[#d4af37] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#1a1d24] transition-colors border border-[#0f1115]">
              +91-9996265679
            </a>
            <a href="mailto:charlescharles6353@gmail.com" className="bg-transparent text-[#0f1115] border border-[#0f1115] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#0f1115] hover:text-[#d4af37] transition-colors">
              Email Dispatch
            </a>
          </div>
        </div>

        {/* Top Hotels Showcase */}
        <div className="mb-16">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-[32px] md:text-[38px] font-serif font-bold text-[#0f1115] mb-4 text-center">
              Top Featured Hotels
            </h2>
            <div className="h-[2px] w-16 bg-[#d4af37]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {topHotels.map((hotel, idx) => (
              <Link to={hotel.path} key={idx} className="relative aspect-[4/3] group overflow-hidden bg-[#0f1115] block transition-transform duration-500 hover:shadow-2xl">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center z-10 border border-transparent group-hover:border-[#d4af37]/30 transition-colors">
                  <h3 className="text-white font-serif font-bold text-[22px] mb-3 drop-shadow-md">{hotel.name}</h3>
                  <div className="h-[1px] w-8 bg-[#d4af37] mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <p className="text-white/80 font-light text-[13px] leading-relaxed line-clamp-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {hotel.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* --- Search & Filter Directory --- */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-10 bg-gray-50 py-10 px-4 rounded-sm border border-gray-100 shadow-sm">
            <h2 className="text-[28px] md:text-[32px] font-serif font-bold text-[#0f1115] mb-4 text-center">
              Find Your Preferred Hotel
            </h2>
            <div className="h-[2px] w-16 bg-[#d4af37] mb-8"></div>
            
            {/* Search Input */}
            <div className="relative w-full max-w-2xl">
              <input 
                type="text" 
                placeholder="Search across Luxury, Business, Premium, or Budget hotels..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-300 px-12 py-4 text-[15px] focus:outline-none focus:border-[#d4af37] transition-colors rounded-none shadow-md"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d4af37]" size={22} />
            </div>
          </div>

          {/* Search Results State */}
          {searchQuery ? (
            <div>
              <h3 className="text-xl font-serif font-bold text-[#0f1115] mb-6 flex items-center gap-2">
                Search Results ({filteredHotels.length})
              </h3>
              {filteredHotels.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 animate-in fade-in duration-300">
                  {filteredHotels.map((hotel, idx) => <HotelCard key={idx} hotel={hotel} />)}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-10 bg-gray-50 border border-gray-100">
                  No hotels found matching "{searchQuery}". Try a different keyword.
                </div>
              )}
            </div>
          ) : (
            /* Categorized View (Shows when Search is empty) */
            <div className="space-y-16 animate-in fade-in duration-500">
              
              {/* Category 1 */}
              <div>
                <h3 className="text-[22px] font-serif font-bold text-[#0f1115] mb-6 border-b-2 border-gray-100 pb-2 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#d4af37] inline-block rotate-45"></span> Luxury / 5-Star Hotels
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {luxuryHotels.map((hotel, idx) => <HotelCard key={idx} hotel={hotel} />)}
                </div>
              </div>

              {/* Category 2 */}
              <div>
                <h3 className="text-[22px] font-serif font-bold text-[#0f1115] mb-6 border-b-2 border-gray-100 pb-2 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#d4af37] inline-block rotate-45"></span> Popular Business & Premium Hotels
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {businessPremiumHotels.map((hotel, idx) => <HotelCard key={idx} hotel={hotel} />)}
                </div>
              </div>

              {/* Category 3 */}
              <div>
                <h3 className="text-[22px] font-serif font-bold text-[#0f1115] mb-6 border-b-2 border-gray-100 pb-2 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#d4af37] inline-block rotate-45"></span> Budget & Mid-Range Hotels
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {budgetMidRangeHotels.map((hotel, idx) => <HotelCard key={idx} hotel={hotel} />)}
                </div>
              </div>

              {/* Toggle for the rest of the old hotels */}
              <div>
                <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2 mb-6">
                  <h3 className="text-[22px] font-serif font-bold text-[#0f1115] flex items-center gap-2">
                    <span className="w-3 h-3 bg-gray-400 inline-block rotate-45"></span> Other Popular Locations
                  </h3>
                  <button 
                    onClick={() => setShowAllHotels(!showAllHotels)}
                    className="text-[12px] text-[#d4af37] font-bold uppercase tracking-widest hover:text-[#0f1115] transition-colors"
                  >
                    {showAllHotels ? 'Hide Locations' : 'Show All Locations'}
                  </button>
                </div>

                {showAllHotels && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    {otherHotels.map((hotel, idx) => (
                       <Link 
                         to={getHotelPath(hotel)} 
                         key={idx} 
                         className="bg-gray-50 border border-gray-100 text-gray-500 hover:bg-white hover:border-[#d4af37] hover:text-[#0f1115] text-center p-3 text-[12px] font-light transition-colors block flex items-center justify-center min-h-[60px]"
                       >
                         {hotel}
                       </Link>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}
        </div>
      </div>

      {/* Pricing Packages */}
      <section className="bg-[#0f1115] py-20 px-4 relative border-t border-[#1a1d24]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#d4af37]"></div>
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-white text-[32px] md:text-[38px] font-serif font-bold mb-4 text-center">Service Packages</h2>
            <div className="h-[2px] w-16 bg-[#d4af37]"></div>
          </div>
          <p className="text-gray-400 font-light text-[15px] leading-relaxed mb-14 max-w-5xl mx-auto text-center">
            The pricing packages for Indian escorts start from 15000 rupees for 2 hours, and for Russian escorts, the package starts from 20000 rupees for 2 hours. These are the basic packages, and for additional services like massage additional charges are payable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-800 bg-[#1a1d24]">
            <div className="text-center py-12 px-6 border-b md:border-b-0 md:border-r border-gray-800">
              <h3 className="text-[#d4af37] font-serif font-bold text-[32px] mb-3">₹15,000</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[11px] font-bold">1-2 Hour Booking</p>
            </div>
            <div className="text-center py-12 px-6 border-b md:border-b-0 md:border-r border-gray-800 bg-[#0f1115]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-[#0f1115] text-[9px] font-bold uppercase tracking-widest px-3 py-1 hidden md:block">Popular</div>
              <h3 className="text-[#d4af37] font-serif font-bold text-[32px] mb-3">₹20,000</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[11px] font-bold">2-4 Hour Booking</p>
            </div>
            <div className="text-center py-12 px-6">
              <h3 className="text-[#d4af37] font-serif font-bold text-[32px] mb-3">₹25,000</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[11px] font-bold">5-6 Hour Booking</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="bg-[#d4af37] hover:bg-white text-[#0f1115] px-10 py-4 text-[12px] font-bold uppercase tracking-widest shadow transition-colors inline-block">
              Request Full Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* How To Book */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-[#0f1115] text-[32px] md:text-[38px] font-serif font-bold mb-4 text-center">Protocol to Secure</h2>
            <div className="h-[2px] w-16 bg-[#d4af37]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] border-t border-dashed border-[#d4af37]/50 -translate-y-1/2 z-0"></div>
            
            <div className="flex flex-col items-center text-center relative z-10 bg-white">
              <div className="w-20 h-20 bg-[#0f1115] flex items-center justify-center mb-6 text-[#d4af37] shadow-lg rotate-45 transform hover:rotate-0 transition-all duration-300">
                <Phone size={32} className="-rotate-45 hover:rotate-0 transition-transform duration-300" />
              </div>
              <h3 className="font-serif font-bold text-[20px] text-[#0f1115]">Discrete Coordination</h3>
              <p className="text-gray-500 text-[13px] font-light mt-3 max-w-[220px]">Ring our line directly for swift, private organization.</p>
            </div>
            <div className="flex flex-col items-center text-center relative z-10 bg-white">
              <div className="w-20 h-20 bg-[#0f1115] flex items-center justify-center mb-6 text-[#d4af37] shadow-lg rotate-45 transform hover:rotate-0 transition-all duration-300">
                <MessageSquare size={32} className="-rotate-45 hover:rotate-0 transition-transform duration-300" />
              </div>
              <h3 className="font-serif font-bold text-[20px] text-[#0f1115]">Email Verification</h3>
              <p className="text-gray-500 text-[13px] font-light mt-3 max-w-[220px]">Dispatch your requests to our secure digital inbox.</p>
            </div>
            <div className="flex flex-col items-center text-center relative z-10 bg-white">
              <div className="w-20 h-20 bg-[#0f1115] flex items-center justify-center mb-6 text-[#d4af37] shadow-lg rotate-45 transform hover:rotate-0 transition-all duration-300">
                <Mail size={32} className="-rotate-45 hover:rotate-0 transition-transform duration-300" />
              </div>
              <h3 className="font-serif font-bold text-[20px] text-[#0f1115]">Encrypted SMS</h3>
              <p className="text-gray-500 text-[13px] font-light mt-3 max-w-[220px]">Ping our dispatch number via secure text routes.</p>
            </div>
          </div>
          
          <div className="bg-[#1a1d24] border border-gray-800 text-center p-14 text-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>
            <h2 className="text-[28px] md:text-[34px] font-serif font-bold mb-4 relative z-10">Direct Contact</h2>
            <p className="text-[14px] font-light text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed relative z-10">
              Contact us 24/7 for Escort Services in Aerocity. You will select the girl of your choice before you confirm your appointment.
            </p>
            <a href="tel:9996265679" className="bg-[#d4af37] hover:bg-white text-[#0f1115] px-10 py-4 text-[12px] font-bold uppercase tracking-widest shadow transition-colors inline-block relative z-10">
              Engage Agency
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
