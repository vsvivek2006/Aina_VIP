import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, MessageCircle, Star } from 'lucide-react';
import ProfileModal from './ProfileModal';

interface HotelLayoutProps {
  hotelName: string;
  heroImage: string;
  aboutImage: string;
  aboutContent: React.ReactNode;
}

export default function HotelLayout({
  hotelName,
  heroImage,
  aboutImage,
  aboutContent,
}: HotelLayoutProps) {
  const [selectedProfile, setSelectedProfile] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProfile = (profile: any) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const profiles = [
    { name: 'Sandra', desc: 'Hello my adored my name is Sandra a young blonde escort living in Huda City Centre,...', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=500' },
    { name: 'Kiara', desc: 'My name is Kiara and I am a professional Russian Escorts in Mahipalpur, Gurgaon. I am the o...', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&h=500' },
    { name: 'Sophia', desc: 'This is Sophia Russian Escorts in Gurgaon. I am an intelligent, well behaved and of course very prett...', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&h=500' },
    { name: 'Aarohi', desc: 'Hey, This is Aarohi, a sweet and naughty vip call girls in dlf city,Gurgaon looking to spend a f...', image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&w=400&h=500' },
    { name: 'Tanisha', desc: 'With her toned physique and stunning features, Tanisha Model escort in MG Road Gurgaon is a...', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=500' },
    { name: 'Ankita', desc: 'Hello, my name is Ankita and I am a very cute and friendly 21 year old escort model living in Huda City...', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&h=500' }
  ];

  const topCategories = [
    { title: 'Russian Escorts', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=400' },
    { title: 'Independent Escorts', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&h=400' },
    { title: 'High Profile Escorts', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&h=400' }
  ];

  const topHotels = [
    { name: 'Crowne Plaza Hotel', path: '/hotels/crowne-plaza' },
    { name: 'Radisson Hotel', path: '/hotels/pllazio' }, // Keeping standard paths for demo
    { name: 'Le Meridien Hotel', path: '/hotels' },
    { name: 'The Oberoi Hotel', path: '/hotels/oberoi' },
    { name: 'Leela Ambience Hotel', path: '/hotels/leela' },
  ];

  const categories = [
    'Russian Call Girls', 'Foreigner Girls', 'College Girls', 
    'High Profile Escorts Call Girls', 'Air Hostess Escorts', 
    'Celebrity Call Girls', 'Housewife Escorts', 'In-Call and Out-Call Services',
    'Indian Girls', 'Female Models', 'VIP Call Girls', 'Punjabi Call Girls',
    'Busty Escorts', 'Slim Call Girls', 'Affordable Escorts', 'Russian Escorts in Aerocity'
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#0f1115] overflow-hidden min-h-[380px] flex items-center justify-center pt-8 pb-12">
        <img 
          src={heroImage} 
          alt={hotelName} 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-[#1a1d24]/80"></div>
        <div className="relative z-10 text-center flex flex-col items-center mt-8 px-4 w-full max-w-4xl">
           <div className="flex items-center gap-2 bg-[#d4af37]/10 backdrop-blur-md border border-[#d4af37]/30 text-[#d4af37] py-1.5 px-4 rounded-none text-[10px] font-bold uppercase tracking-widest mb-4">
            <MapPin size={12} className="fill-current" /> Premium Serviced Location
          </div>
          <h1 className="text-white text-4xl md:text-[50px] font-serif font-bold tracking-wide mb-8 drop-shadow-md">
            Escort Services Near {hotelName}
          </h1>
          <div className="flex gap-4">
            <a href="tel:9996265679" className="bg-[#d4af37] text-[#0f1115] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors hover:bg-white flex items-center gap-2">
              <Phone size={14} /> Direct Dispatch
            </a>
            <Link to="/escorts" className="bg-transparent border border-[#d4af37] text-[#d4af37] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase hover:bg-[#d4af37] hover:text-[#0f1115] transition-colors">
              View Catalog
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-16 text-gray-500 font-light text-[15px]">
        {/* Intro */}
        <div className="mb-16 border-b border-gray-100 pb-12 relative pl-8">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>
          <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-6">
            Pristine companionship curated for {hotelName}
          </h2>
          <p className="leading-[1.8] mb-4 text-gray-500">
            The escorts are totally bewitching with their sexy looks that drive any men towards them. They parade their bends while conveying charming expressions that would welcome anybody for getting to know each other and loosen up extraordinary joy. The full bosomed figure and ideal looks of the escorts in various shapes and sizes give boundless alternatives to men. Men can go insane with the overflowing excellence that exhibits every single sensual move. With the assistance of escort girls, each man can make the most of his minute with complete delight.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left Column - Profiles */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {profiles.map((profile, i) => (
                <div key={i} className="bg-white border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-500">
                  <div 
                    className="relative aspect-[3/4] overflow-hidden cursor-pointer"
                    onClick={() => handleOpenProfile(profile)}
                  >
                    <img src={profile.image} alt={profile.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 
                      className="font-serif font-bold text-[18px] text-[#0f1115] mb-1 hover:text-[#d4af37] transition-colors cursor-pointer"
                      onClick={() => handleOpenProfile(profile)}
                    >
                      {profile.name}
                    </h3>
                    <div className="flex text-[#d4af37] mb-3">
                       {[1,2,3,4,5].map(i => <Star key={i} size={11} className="fill-current" />)}
                    </div>
                    <p className="text-gray-500 font-light text-[13px] leading-relaxed mb-5 flex-grow line-clamp-3">
                      {profile.desc}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                      <button 
                        onClick={() => handleOpenProfile(profile)}
                        className="text-[#0f1115] text-[10px] font-bold tracking-widest uppercase hover:text-[#d4af37] cursor-pointer text-left transition-colors"
                      >
                        View Details
                      </button>
                      <div className="flex gap-3">
                        <a href="tel:9996265679" className="text-gray-400 hover:text-[#0f1115] transition-colors"><Phone size={14} /></a>
                        <a href="https://wa.me/919996265679" className="text-gray-400 hover:text-[#25D366] transition-colors"><MessageCircle size={14} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center border-t border-gray-100 pt-8">
               <Link to="/escorts" className="bg-transparent border border-[#0f1115] text-[#0f1115] px-10 py-3.5 text-[11px] uppercase tracking-widest font-bold hover:bg-[#0f1115] hover:text-[#d4af37] transition-colors block">
                 Browse Full Catalog
               </Link>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="w-full lg:w-1/4 flex flex-col gap-10">
            {/* Top Hotels */}
            <div className="bg-white">
              <h3 className="text-[18px] font-serif font-bold text-[#0f1115] mb-5 border-b border-gray-100 pb-3 flex items-center gap-2">
                 <div className="w-2 h-2 bg-[#d4af37] rotate-45"></div> Nearby Partners
              </h3>
              <ul className="flex flex-col border border-gray-100 bg-gray-50/50">
                {topHotels.map((hotel, i) => (
                  <li key={i} className="border-b border-gray-200/50 last:border-0">
                    <Link to={hotel.path} className="block px-4 py-3.5 text-[13px] text-gray-500 font-light hover:text-[#0f1115] hover:bg-white transition-colors">
                      {hotel.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/hotels" className="block px-4 py-3.5 text-[11px] font-bold uppercase tracking-widest text-[#d4af37] bg-[#0f1115] hover:bg-[#1a1d24] text-center transition-colors">
                    Deploy all Hotels
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-white">
              <h3 className="text-[18px] font-serif font-bold text-[#0f1115] mb-5 border-b border-gray-100 pb-3 flex items-center gap-2">
                 <div className="w-2 h-2 bg-[#d4af37] rotate-45"></div> Services
              </h3>
              <ul className="flex flex-col border border-gray-100 bg-gray-50/50 max-h-[400px] overflow-y-auto hidden-scroll">
                {categories.map((cat, i) => (
                  <li key={i} className="border-b border-gray-200/50 last:border-0">
                    <Link to="/categories" className="block px-4 py-3 text-[13px] text-gray-500 font-light hover:text-[#0f1115] hover:bg-white transition-colors">
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Info & Map Section */}
      <div className="w-full flex flex-col md:flex-row mb-16 shadow-2xl relative">
        <div className="w-full md:w-1/3 p-12 flex flex-col gap-8 bg-[#1a1d24] text-white justify-center border-r border-[#0f1115]">
           <div className="flex gap-4 items-start group">
             <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center shrink-0 group-hover:border-[#d4af37] transition-colors">
               <Phone size={16} className="text-[#d4af37]" />
             </div>
             <div>
               <p className="font-bold text-[14px] mb-1 font-serif">Support Line</p>
               <p className="text-gray-400 font-light text-[13px]">+91-9996265679</p>
             </div>
           </div>
           <div className="flex gap-4 items-start group">
             <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center shrink-0 group-hover:border-[#d4af37] transition-colors">
               <MapPin size={16} className="text-[#d4af37]" />
             </div>
             <div>
               <p className="font-bold text-[14px] mb-1 font-serif">Coordinates</p>
               <p className="text-gray-400 font-light text-[13px]">Sector 29, Gurugram HQ</p>
             </div>
           </div>
           <div className="flex gap-4 items-start group">
             <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center shrink-0 group-hover:border-[#d4af37] transition-colors">
               <Mail size={16} className="text-[#d4af37]" />
             </div>
             <div>
               <p className="font-bold text-[14px] mb-1 font-serif">Dispatch Email</p>
               <p className="text-gray-400 font-light text-[13px]">info@example.com</p>
             </div>
           </div>
        </div>
        <div className="w-full md:w-1/3 p-12 bg-[#0f1115] text-white flex flex-col justify-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37]"></div>
           <h3 className="text-[20px] font-serif font-bold mb-8 text-center">Operational Hours</h3>
           <div className="flex flex-col gap-4 font-light text-[13px] items-center text-gray-400 tracking-widest uppercase">
             <div className="flex justify-between w-full max-w-[200px] border-b border-gray-800 pb-2"><span className="text-white">Monday</span><span>24 HRS</span></div>
             <div className="flex justify-between w-full max-w-[200px] border-b border-gray-800 pb-2"><span className="text-white">Tuesday</span><span>24 HRS</span></div>
             <div className="flex justify-between w-full max-w-[200px] border-b border-gray-800 pb-2"><span className="text-white">Wednesday</span><span>24 HRS</span></div>
             <div className="flex justify-between w-full max-w-[200px] border-b border-gray-800 pb-2"><span className="text-white">Thursday</span><span>24 HRS</span></div>
             <div className="flex justify-between w-full max-w-[200px] border-b border-gray-800 pb-2"><span className="text-white">Friday</span><span>24 HRS</span></div>
             <div className="flex justify-between w-full max-w-[200px]"><span className="text-[#d4af37]">Weekend</span><span className="text-[#d4af37]">VIP 24 HRS</span></div>
           </div>
        </div>
        <div className="w-full md:w-1/3 min-h-[300px] relative">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&h=400" alt="Map Location" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-80" />
          <div className="absolute inset-0 bg-[#0f1115]/30"></div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 pb-20">
        <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-6 relative inline-block">
          Stunning Services and Categories to Choose From
          <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#d4af37]"></div>
        </h2>
        <p className="text-gray-500 font-light text-[15px] leading-[1.8] mt-8 max-w-4xl">
          From youthful school girls, house spouses, superstars, air master, outside call girls, models to prominent and VIP escorts, the alternatives are numerous to give you a night loaded with fun. The in call and out call escort administrations is accessible 24 hours on all days to take men to another universe of joy. With the organization of a hot wonderful escort, you can appreciate any occasion, party or a thrilling time around the city and restless evenings with sex more than ever. These different sorts of escorts offer assortment of administrations to satisfy your dream in the manner you need. You can pick a youthful school girl a Russian escort, a housewife or numerous girls on the double to live your dream with no limitation.
        </p>
      </div>

      <div className="w-full bg-[#0f1115] py-20 text-white text-center px-4 relative border-y border-[#1a1d24]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-3xl opacity-50 pointer-events-none translate-x-1/2"></div>
        <h2 className="text-[28px] md:text-[36px] font-serif font-bold mb-12 max-w-4xl mx-auto drop-shadow">
          Select from elite categories or browse the dispatch roster near {hotelName}
        </h2>
        
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
           {topCategories.map((cat,i) => (
             <div key={i} className="flex flex-col items-center group cursor-pointer">
               <div className="overflow-hidden w-full aspect-[4/3] mb-6 relative border border-gray-800">
                 <img src={cat.image} alt={cat.title} className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-transparent opacity-80"></div>
               </div>
               <h3 className="font-serif font-bold text-[18px] text-[#d4af37]">{cat.title}</h3>
             </div>
           ))}
        </div>
        <Link to="/categories" className="bg-transparent border border-[#d4af37] text-[#d4af37] px-10 py-3.5 text-[11px] uppercase tracking-widest font-bold hover:bg-[#d4af37] hover:text-[#0f1115] transition-colors inline-block relative z-10">
          Browse More Categories
        </Link>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-20">
         <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-8">
           Live your Fantasies with exquisite models in GurgaonHQ.
         </h2>
         <div className="text-gray-500 font-light text-[15px] leading-[1.8] space-y-6 mb-10 pb-8 border-b border-gray-100 max-w-4xl">
           <p>Meet an escort girl to include some sentiment in your ordinary exhausting life. Find lovely escorts to experience a night more than ever. Call to meet these wonderful call girls and pay just on hourly premise. These escorts are shrewd young ladies who might want to do practically anything you desire.</p>
           <p>Men are fortunate with the boundless alternatives to experience the best of life by contracting escorts who present with an extra level of fun. It's gotten so natural and convenient to have any sexy escort on bed for a wonderful and durable sex experience that is totally sentimental. Without any connections and responsibilities with the escorts, sex is only about joy and every single shrewd dream to take a stab at bed with any hot girl or girls who are all set that extra level to show what sexual delight has.</p>
           <p>From hourly administrations to evenings and days, men can have extraordinary relaxation. It's intriguing to get every single sexual need met from an obscure girl and having the best of sexual wants that have been passed up a great opportunity over the time with the girl companions. Escorts near {hotelName} anticipate the telephone calls and discover most extreme bliss in serving customers with every single sexual need straightaway. It is an exceptional vibe to engage in sexual relations with various ladies and attempt butt-centric sex and various stances and every wicked thing. Having an outsider or any more abnormal as a sex accomplice for a night and imparting all wants to various kinds of escorts is about sex and sex more than ever for men.</p>
         </div>
         <a href="tel:9996265679" className="bg-[#0f1115] text-[#d4af37] px-10 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#1a1d24] transition-colors inline-flex items-center gap-2">
           <Phone size={14}/> Secure Line
         </a>
      </div>

      <div className="w-full bg-[#1a1d24] py-20 px-4 text-white relative border-t border-[#0f1115]">
        <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-[28px] md:text-[36px] font-serif font-bold mb-6 text-[#d4af37]">Companion Matrix for Executives</h2>
          <p className="mb-8 font-light text-[16px] text-white/90 italic">Sensual experiences to accompany {hotelName} business travelers.</p>
          <div className="text-gray-400 font-light text-[14px] leading-[1.8] space-y-6 mb-10 max-w-4xl mx-auto text-left md:text-center">
            <p>A tiring excursion for work or going along for work makes men to relax and be liberated from the weights of work. Evenings without accomplices appear to resemble damnation when men travel to better places. For men who are near {hotelName} and are looking for an organization to float away the forlornness, escorts can meet them at their place. These escorts offer all administrations to address any issues of the customers so men don't have the sentiment of being without their accomplice. Be it a sentimental night after a business party or a relaxing day and night with all sexual fun, the escorts never neglect to intrigue with their sexy figures and underhanded proceeds onward bed. Escorts are accessible near {hotelName} on all days to render best administrations to customers venturing out to the city on business. The choice to pick any neighbourhood girl to draw in them on bed on their visit is basically excellent.</p>
            <p>Other than going around, Men think that its exciting as they can take the escorts with them for gatherings and occasions and consistently have a partner by side for business. The selection of escorts is another astonishing certainty that there is a lot of assortment with the choices from school girls to VIP escorts who could be the best partner on a work excursion.</p>
          </div>
          <Link to="/rates" className="bg-[#0f1115] border border-gray-800 text-[#d4af37] px-10 py-3.5 text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:text-[#0f1115] hover:border-white transition-all inline-block">
            Examine Rates
          </Link>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-20 flex flex-col md:flex-row gap-16 items-center">
         <div className="w-full md:w-3/5">
           <h2 className="text-[32px] font-serif font-bold text-[#0f1115] mb-8 relative inline-block">
             Profile: {hotelName}
             <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#d4af37]"></div>
           </h2>
           <div className="text-gray-500 font-light text-[15px] leading-[1.8] space-y-6 mb-10">
             {aboutContent}
           </div>
           <Link to="/contact" className="bg-transparent border border-[#0f1115] text-[#0f1115] px-10 py-3.5 text-[11px] uppercase tracking-widest font-bold hover:bg-[#0f1115] hover:text-[#d4af37] transition-colors inline-block">
             Submit Booking Request
           </Link>
         </div>
         <div className="w-full md:w-2/5">
           <div className="relative aspect-[4/5] border border-gray-200 p-2 bg-white shadow-2xl">
              <img src={aboutImage} alt={hotelName} className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-90 transition-all hover:grayscale-0 hover:opacity-100 duration-700" />
           </div>
         </div>
      </div>

      <ProfileModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        profile={selectedProfile} 
      />
    </div>
  );
}
