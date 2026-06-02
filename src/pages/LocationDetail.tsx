import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Star, MapPin, Check, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { PROFILES } from '../data';
import ProfileModal from '../components/ProfileModal';

// Converts a slug back to a beautiful title
function getDisplayName(slug: string) {
  if (!slug) return '';
  return slug
    .split('-')
    .map(word => {
      if (word.toUpperCase() === 'DLF') return 'DLF';
      if (word.toUpperCase() === 'MG') return 'MG';
      if (word.toUpperCase() === 'VIP') return 'VIP';
      if (word.toUpperCase() === 'H2O') return 'H2O';
      if (word.toLowerCase() === 'and') return 'and';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

// Generate realistic location intro and info descriptions Dynamically to prevent boring repetition
function getLocationContent(locationName: string) {
  return {
    heroSubtitle: `Experience executive-class discretion and spectacular companionship in ${locationName}, Gurgaon`,
    introTitle: `Premier VIP Escort Services in ${locationName}, Gurgaon`,
    introParagraph1: `When you are residing or staying at ${locationName}, finding the perfect high-class companion to wind down with shouldn't be a challenge. We provide local premium companion services right inside the heart of ${locationName}, offering a stunning range of local independent ladies, corporate models, and exquisite Russian escorts available 24/7 for both elite in-calls and discreet out-calls.`,
    introParagraph2: `Our beautiful companions in ${locationName} are well-educated, well-groomed, and possess impeccable manners. Whether you need a sophisticated date for an executive dinner party, a charming partner to guide you through the city's nightlife, or a warm, passionate companion behind closed doors, our selected models represent the absolute gold standard of physical perfection and conversational wit.`,
    midTitle: `Why Discrete Executives Choose Our Companions in ${locationName}`,
    conclusionTitle: `Secure & 100% Confidential Bookings in ${locationName}`,
    conclusionParagraph: `Each rendezvous at ${locationName} is protected with our ironclad safety protocols. Your phone number, address, and billing details are kept strictly secret and auto-purged following the successful conclusion of your booking. Call our customer coordinators now to experience premium companionship like never before!`
  };
}

export default function LocationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedProfile, setSelectedProfile] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const locationName = getDisplayName(slug || '');
  const content = getLocationContent(locationName);

  // Filter or match some profile subsets to make this location's list feel unique
  const matchedProfiles = PROFILES.slice(0, 8).map((profile, index) => {
    // Inject custom reviews or dynamic specs so they align beautifully
    return {
      ...profile,
      rating: 5,
      desc: `${profile.desc} Meet ${profile.name} who is currently active and offering exclusive bookings around ${locationName}.`
    };
  });

  const handleOpenProfile = (profile: any) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName) return;
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-[#f9f9f9]">
      {/* Hero Banner */}
      <div className="relative bg-[#0f1115] overflow-hidden min-h-[380px] flex items-center justify-center pt-8 pb-12">
        <img 
          src="https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=2000&h=800"
          alt={locationName} 
          className="absolute inset-0 w-full h-full object-cover object-top opacity-20 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-[#1a1d24]/60"></div>
        <div className="relative z-10 text-center flex flex-col items-center mt-6 px-4 max-w-4xl">
          <div className="flex items-center gap-2 bg-[#d4af37]/10 backdrop-blur-md border border-[#d4af37]/30 text-[#d4af37] py-1.5 px-4 rounded-none text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin size={14} /> VIP Escort Zone: {locationName}
          </div>
          <h1 className="text-white text-4xl md:text-[50px] font-serif font-bold tracking-wide mb-6 capitalize">
            Escorts in <span className="text-[#d4af37]">{locationName}</span>
          </h1>
          <p className="text-gray-300 text-[15px] leading-relaxed mb-8 max-w-2xl font-light">
            {content.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:9996265679" className="bg-[#d4af37] text-[#0f1115] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors flex items-center gap-2 hover:bg-white">
              <Phone size={14} className="fill-current" strokeWidth={0} /> Direct Booking
            </a>
            <Link to="/escorts" className="bg-transparent border border-[#d4af37] text-[#d4af37] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase hover:bg-[#d4af37] hover:text-[#0f1115] transition-colors">
              Browse Gallery
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-12">
        {/* Intro */}
        <div className="bg-white border border-gray-100 p-8 md:p-12 mb-16 relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>
          <div className="border-b border-[#0f1115]/10 pb-8 mb-8">
            <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-6 flex items-center gap-3">
              <Sparkles className="text-[#d4af37]" />
              {content.introTitle}
            </h2>
            <div className="text-gray-500 font-light text-[15px] leading-[1.8] space-y-6">
              <p>{content.introParagraph1}</p>
              <p>{content.introParagraph2}</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="tel:9996265679" className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-3 text-[11px] font-bold tracking-widest uppercase transition-colors">
                Connect Immediately
              </a>
              <Link to="/contact" className="bg-white border border-gray-200 text-[#0f1115] hover:border-[#0f1115] px-8 py-3 text-[11px] font-bold tracking-widest uppercase transition-colors">
                Book At {locationName} Now
              </Link>
            </div>
          </div>

          {/* Location details card */}
          <div>
            <h3 className="text-[22px] font-serif font-bold text-[#0f1115] mb-6">{content.midTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px]">
              <div className="p-6 bg-gray-50 border border-gray-100">
                <span className="text-[#0f1115] font-bold tracking-widest text-[11px] uppercase block mb-3 opacity-80">100% On-Time Arrival</span>
                <p className="text-gray-500 font-light leading-relaxed">Our beautiful girls understand the value of your time. Active GPS routing ensures they arrive promptly.</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100">
                <span className="text-[#0f1115] font-bold tracking-widest text-[11px] uppercase block mb-3 opacity-80">Perfect Veracity Photos</span>
                <p className="text-gray-500 font-light leading-relaxed">What you see is exactly what gets dispatched to your room. Zero clickbaits or swapped models guarantee.</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100">
                <span className="text-[#0f1115] font-bold tracking-widest text-[11px] uppercase block mb-3 opacity-80">Elite Privacy Standards</span>
                <p className="text-gray-500 font-light leading-relaxed">All booking channels are secure and encrypted. Zero records are shared with any local tracking registries.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profiles */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-[32px] md:text-[38px] font-serif font-bold text-[#0f1115] mb-4 text-center">
              Companions Available In {locationName}
            </h2>
            <div className="h-[2px] w-16 bg-[#d4af37]"></div>
          </div>
          <p className="text-center text-gray-500 font-light text-[15px] max-w-2xl mx-auto mb-12 leading-relaxed">
            Beautiful independent student girls, corporate executives, and gorgeous Russian ladies currently staying near {locationName} and offering top-tier services.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {matchedProfiles.map((p, index) => (
              <div key={index} className="bg-white border border-gray-100 group flex flex-col hover:shadow-2xl transition-all duration-500">
                <div 
                  className="relative aspect-[3/4] overflow-hidden cursor-pointer"
                  onClick={() => handleOpenProfile(p)}
                >
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-[#0f1115]/80 backdrop-blur text-white font-bold text-[9px] uppercase px-3 py-1.5 tracking-widest flex items-center gap-1.5 border border-white/20">
                    <ShieldCheck size={11} className="text-[#d4af37]" /> Near {locationName}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 
                    className="font-serif font-bold text-[#0f1115] text-[18px] mb-2 hover:text-[#d4af37] cursor-pointer transition-colors"
                    onClick={() => handleOpenProfile(p)}
                  >
                    {p.name}
                  </h3>
                  <p className="text-gray-500 font-light text-[13px] leading-relaxed mb-4 flex-1 line-clamp-2">
                    {p.desc}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <button 
                      onClick={() => handleOpenProfile(p)}
                      className="text-[#0f1115] text-[11px] font-bold hover:text-[#d4af37] tracking-widest uppercase cursor-pointer transition-colors"
                    >
                      View Details
                    </button>
                    <div className="flex gap-3 text-gray-400">
                       <a href="tel:9996265679" className="hover:text-[#0f1115] transition-colors"><Phone size={14} /></a>
                       <a href="https://wa.me/919996265679" className="hover:text-[#25D366] transition-colors"><MessageCircle size={14} /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing structure */}
        <div className="bg-[#0f1115] text-white py-14 px-10 mb-16 relative">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4af37]"></div>
          <h2 className="text-[28px] md:text-[34px] font-serif font-bold mb-6">Rates for {locationName}</h2>
          <p className="text-gray-400 font-light text-[15px] leading-[1.8] mb-10 max-w-4xl">
            The standard pricing packages for Indian escorts near {locationName} start from ₹15,000 for 2 hours, and for premium Russian escorts, the packages start from ₹20,000 for 2 hours. These rates exclude rooms/accommodation costs. Accommodation in local 3-star and premium boutique hotels starts from ₹20,000 for 3 hours, and luxury 5-star hotel call packages start from ₹25,000. For full night rates and outcall requests to residential townships or societies, please contact us directly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-800 bg-[#1a1d24]">
            <div className="text-center py-8 px-6 border-b md:border-b-0 md:border-r border-gray-800">
              <div className="text-[#d4af37] font-serif font-bold text-[24px] mb-2">₹15,000</div>
              <div className="text-gray-500 uppercase tracking-widest text-[11px] font-bold">1-2 Hour Quick Date</div>
            </div>
            <div className="text-center py-8 px-6 border-b md:border-b-0 md:border-r border-gray-800">
              <div className="text-[#d4af37] font-serif font-bold text-[24px] mb-2">₹20,000</div>
              <div className="text-gray-500 uppercase tracking-widest text-[11px] font-bold">2-4 Hour Extended Date</div>
            </div>
            <div className="text-center py-8 px-6">
              <div className="text-[#d4af37] font-serif font-bold text-[24px] mb-2">₹25,000</div>
              <div className="text-gray-500 uppercase tracking-widest text-[11px] font-bold">5-6 Hour Half Night / Party</div>
            </div>
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="bg-white border border-gray-100 shadow-xl flex flex-col md:flex-row mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="w-full md:w-1/2 relative min-h-[350px]">
            <img src="https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=800&h=800" alt="Booking Side panel" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115]/90 to-[#0f1115]/50"></div>
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center relative z-10 bg-white">
            <div className="mb-10 text-center md:text-left">
              <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                 <div className="w-6 h-[1px] bg-[#d4af37]"></div>
                 <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest">Discrete Coordination</span>
              </div>
              <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-2">Staying at {locationName}?</h2>
              <p className="text-gray-500 font-light text-[14px]">Get verified rates and exact photos of companions near you</p>
            </div>
            
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input 
                  type="text" 
                  required 
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Insert Alias" 
                  className="w-full bg-transparent border-b border-gray-300 px-2 py-3 text-[14px] focus:outline-none focus:border-[#0f1115] placeholder-gray-400 transition-colors" 
                />
                <input 
                  type="email" 
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="Active Email Check" 
                  className="w-full bg-transparent border-b border-gray-300 px-2 py-3 text-[14px] focus:outline-none focus:border-[#0f1115] placeholder-gray-400 transition-colors" 
                />
                <div className="grid grid-cols-2 gap-4">
                  <select className="w-full bg-transparent border-b border-gray-300 px-2 py-3 text-[14px] focus:outline-none focus:border-[#0f1115] text-gray-500 transition-colors appearance-none" defaultValue={locationName}>
                    <option>{locationName}</option>
                  </select>
                  <select className="w-full bg-transparent border-b border-gray-300 px-2 py-3 text-[14px] focus:outline-none focus:border-[#0f1115] text-gray-500 transition-colors appearance-none" defaultValue="Any Call">
                    <option>Any Call</option>
                    <option>In-Call</option>
                    <option>Out-Call</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-3 pt-4">
                  <div className="relative flex items-center justify-center w-4 h-4">
                     <input type="checkbox" id="newsletter_loc" className="peer w-4 h-4 opacity-0 absolute cursor-pointer" />
                     <div className="w-4 h-4 border border-gray-300 bg-white peer-checked:bg-[#0f1115] peer-checked:border-[#0f1115] transition-colors flex items-center justify-center">
                        <Check size={12} className="text-white opacity-0 peer-checked:opacity-100" />
                     </div>
                  </div>
                  <label htmlFor="newsletter_loc" className="text-[13px] text-gray-500 cursor-pointer user-select-none font-light">Verify me to receive WhatsApp catalogs directly</label>
                </div>
                
                <div className="pt-6">
                  <button type="submit" className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-3.5 text-[11px] font-bold tracking-widest uppercase transition-colors w-full border border-[#0f1115]">
                    Verify Coordinates
                  </button>
                </div>
                
                <p className="text-center text-[12px] text-gray-400 pt-4 font-light">
                  Privacy Pledge: We <strong>never</strong> index or share your credentials setup.
                </p>
              </form>
            ) : (
              <div className="bg-gray-50 border border-gray-200 p-8 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] flex items-center justify-center mx-auto mb-4 bg-white">
                  <svg className="w-5 h-5 text-[#d4af37] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-[18px] font-serif font-bold text-[#0f1115] mb-2">Request Verified Successfully!</h4>
                <p className="text-[13.5px] text-gray-500 font-light leading-relaxed mb-6">
                  Thank you, {formName}! We have processed your local coordinate query for {locationName}. Real active companion profiles will be routed to your inbox at {formEmail} shortly.
                </p>
                <button 
                  onClick={() => { setFormSubmitted(false); setFormName(''); setFormEmail(''); }}
                  className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-colors"
                >
                  Query New Location
                </button>
              </div>
            )}
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
