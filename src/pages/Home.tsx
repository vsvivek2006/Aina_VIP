import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROFILES, SERVICES, ZIGZAGS } from '../data';
import ProfileModal from '../components/ProfileModal';

export default function Home() {
  const topProfiles = PROFILES.slice(0, 8); // Only show top 8 profiles on home page
  const [selectedProfile, setSelectedProfile] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProfile = (profile: any) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  return (
    <>
    {/* Hero Section */}
      <div className="relative bg-[#0f1115] w-full min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/image21.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-top opacity-30 mix-blend-luminosity" 
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#1a1d24]/60 to-[#0f1115]/80"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full text-center flex flex-col items-center px-4 max-w-4xl mx-auto pt-10 pb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-[#d4af37]"></div>
            <span className="text-[#d4af37] tracking-[0.3em] uppercase text-[10px] md:text-xs font-semibold">Alina VIP Portfolio</span>
            <div className="h-[1px] w-12 bg-[#d4af37]"></div>
          </div>
          
          <h1 className="text-white text-3xl sm:text-4xl md:text-[50px] font-serif font-bold tracking-tight mb-4 leading-[1.1] drop-shadow-2xl">
            Elite Companionship in <br className="hidden sm:block" />
            <span className="text-[#d4af37] italic">Gurgaon & Aerocity</span>
          </h1>
          
          <p className="text-gray-300 text-[15px] mb-8 font-light max-w-2xl leading-relaxed drop-shadow-md">
            Experience the pinnacle of luxury with our 100% verified, genuine models. Exclusive discretion for discerning gentlemen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="tel:9996265679" className="bg-[#d4af37] hover:bg-[#b8972e] text-[#0f1115] px-8 py-3.5 text-[13px] font-bold tracking-[0.15em] uppercase transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <Phone size={16} className="fill-current" strokeWidth={0} /> Direct Booking
            </a>
            <Link to="/escorts" className="bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0f1115] px-8 py-3.5 text-[13px] font-bold tracking-[0.15em] uppercase transition-all flex items-center justify-center">
              View Gallery
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 w-full">
        
        {/* Top Class Escorts Text */}
        <section className="py-20 md:py-28 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-[#d4af37]/30"></div>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[40px] font-serif text-[#0f1115] leading-[1.2] mb-8">
              Exquisite Models Tailored for <span className="italic text-[#791b29]">Unforgettable Moments</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6 font-light">
              Welcome to a realm of fantasies and refined romance. At Alina VIP Escorts, we dedicate ourselves to providing our elite clients with the ultimate intimate experiences. Our selection of high-profile, independent female companions is unparalleled. Available 24/7 for both discretion-assured in-calls and premium out-calls to 5-star properties, each companion possesses a unique charm, radiant personality, and cultured elegance.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-10 font-light">
              From stunning Russian models to sophisticated corporate professionals, our diverse portfolio allows you to select a partner who perfectly aligns with your impeccable taste. Choose from over 100 active companions. Your sanctuary of warmth and passion awaits.
            </p>
            <div className="flex justify-center gap-8">
              <Link to="/escorts" className="font-medium text-[#791b29] hover:text-[#0f1115] text-[13px] uppercase tracking-widest border-b border-[#791b29] pb-1 transition-colors">See Profiles</Link>
              <Link to="/categories" className="font-medium text-[#791b29] hover:text-[#0f1115] text-[13px] uppercase tracking-widest border-b border-[#791b29] pb-1 transition-colors">Browse Categories</Link>
            </div>
          </div>
        </section>

        {/* Profiles Grid */}
        <section className="py-12">
          <div className="flex flex-col items-center mb-16">
            <span className="text-[#791b29] tracking-[0.2em] uppercase text-xs font-semibold mb-3">Featured Gallery</span>
            <h2 className="text-[34px] md:text-[42px] font-serif text-center text-[#0f1115]">
              Elite VIP Companions
            </h2>
            <div className="w-16 h-[2px] bg-[#d4af37] mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {topProfiles.map((profile, i) => (
              <div key={i} className="bg-white group flex flex-col hover:shadow-2xl transition-all duration-500 rounded-sm">
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
                    <div className="flex gap-2">
                       <a href="tel:9996265679" onClick={e => e.stopPropagation()} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-white transition-colors">
                         <Phone size={14} className="fill-current" strokeWidth={0} />
                       </a>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col border border-t-0 border-gray-100">
                  <div className="flex justify-between items-center mb-1">
                    <h3 
                      className="font-serif font-bold text-[20px] text-[#0f1115] group-hover:text-[#791b29] transition-colors cursor-pointer"
                      onClick={() => handleOpenProfile(profile)}
                    >
                      {profile.name}
                    </h3>
                    <div className="flex">
                      {profile.rating > 0 && [...Array(1)].map((_, idx) => (
                        <Star key={idx} size={14} className="fill-[#d4af37] text-[#d4af37]" strokeWidth={1} />
                      ))}
                      <span className="text-gray-900 text-xs font-medium ml-1">5.0</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-[13px] font-light leading-relaxed line-clamp-2">
                    {profile.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 mb-8">
            <Link to="/escorts" className="border border-[#0f1115] text-[#0f1115] hover:bg-[#0f1115] hover:text-[#d4af37] px-10 py-4 text-[13px] font-bold tracking-[0.15em] uppercase transition-all inline-block">
              View Complete Gallery
            </Link>
          </div>
        </section>

        {/* Informational Text */}
        <section className="py-20 border-t border-gray-100 mt-8 relative">
          <div className="max-w-4xl mx-auto">
            <span className="block text-center flex items-center justify-center gap-4 text-[#d4af37] tracking-[0.2em] font-semibold text-xs mb-8">
               <span className="h-[1px] w-10 bg-[#d4af37]/40"></span>
               THE ALINA VIP DIFFERENCE
               <span className="h-[1px] w-10 bg-[#d4af37]/40"></span>
            </span>
            <h2 className="text-[32px] md:text-[38px] font-serif text-center text-[#0f1115] mb-8 leading-[1.2]">
              Uncompromising Standards for <br/>Orgasmic Erotic Pleasure
            </h2>
            <div className="prose max-w-none text-gray-500 font-light text-[15px] leading-relaxed mb-16 text-center space-y-6">
              <p>
                Prepare for the most enthralling and sensory experience of your life. It fills us with immense pride to introduce our elite portfolio of <a href="#" className="text-[#0f1115] border-b border-gray-300 font-medium hover:text-[#791b29]">escorts in Gurgaon</a>. These are not just visually captivating models, but cultured, highly-educated women who understand the true art of companionship. 
              </p>
              <p>
                Our standards are uncompromising. We do not tolerate bait-and-switch tactics or low-class interactions. Every lady in our gallery is precisely who you will meet at your door. They possess the social grace to accompany you to high-profile executive dinners, as well as the wild, uninhibited passion required to set your bedroom on fire. 
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-8 bg-gray-50/50 border border-gray-100">
                 <div className="w-12 h-12 rounded-full bg-[#0f1115] flex items-center justify-center mx-auto mb-5 text-[#d4af37]">
                    <Star size={18} className="fill-current" />
                 </div>
                 <h3 className="font-serif text-[18px] text-[#0f1115] font-bold mb-3">Verified Authenticity</h3>
                 <p className="text-gray-500 font-light text-[13.5px] leading-relaxed">
                    100% genuine photos matched with video verifications. What you see is exactly who will arrive at your suite.
                 </p>
              </div>
              <div className="text-center p-8 bg-gray-50/50 border border-gray-100">
                 <div className="w-12 h-12 rounded-full bg-[#0f1115] flex items-center justify-center mx-auto mb-5 text-[#d4af37]">
                    <Star size={18} className="fill-current" />
                 </div>
                 <h3 className="font-serif text-[18px] text-[#0f1115] font-bold mb-3">Ironclad Privacy</h3>
                 <p className="text-gray-500 font-light text-[13.5px] leading-relaxed">
                    Operated by professionals. Your identity, location, and billing details are entirely encrypted and securely purged.
                 </p>
              </div>
              <div className="text-center p-8 bg-gray-50/50 border border-gray-100">
                 <div className="w-12 h-12 rounded-full bg-[#0f1115] flex items-center justify-center mx-auto mb-5 text-[#d4af37]">
                    <Star size={18} className="fill-current" />
                 </div>
                 <h3 className="font-serif text-[18px] text-[#0f1115] font-bold mb-3">Impeccable Hygiene</h3>
                 <p className="text-gray-500 font-light text-[13.5px] leading-relaxed">
                    Our models maintain rigorous grooming and hygiene standards, ensuring flawless skin and a pristine experience.
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 border-t border-gray-100 mb-10">
          <div className="flex flex-col items-center mb-16">
            <span className="text-[#791b29] tracking-[0.2em] uppercase text-xs font-semibold mb-3">Curated Experiences</span>
            <h2 className="text-[34px] md:text-[42px] font-serif text-center text-[#0f1115]">
              Bespoke Service Offerings
            </h2>
            <div className="w-16 h-[2px] bg-[#d4af37] mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
             {SERVICES.map((srv, idx) => (
                <div key={idx} className="group relative overflow-hidden">
                  <div className="relative w-full h-[280px] overflow-hidden bg-[#0f1115]">
                   <img 
                              src={srv.image} 
                              alt={srv.title} 
                              className="w-full h-full object-cover opacity-50 grayscale mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal"
                            />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/50 to-transparent"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h3 className="text-[#d4af37] font-serif text-[22px] font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{srv.title}</h3>
                      <p className="text-gray-300 font-light text-[13px] leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                </div>
             ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="border border-[#791b29] text-[#791b29] hover:bg-[#791b29] hover:text-white px-10 py-4 text-[13px] font-bold tracking-[0.15em] uppercase transition-all inline-block">
              View All Services
            </Link>
          </div>
        </section>

        {/* Zig Zag Sections */}
        <div className="py-20 border-t border-gray-100">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-[34px] md:text-[42px] font-serif text-center text-[#0f1115]">
              Ignite Your Deepest Fantasies
            </h2>
            <div className="w-16 h-[2px] bg-[#d4af37] mt-6"></div>
          </div>
          
          <div className="space-y-24">
            {ZIGZAGS.map((item, idx) => {
              const zigzagServicePaths = [
                '/services/24x7-available',
                '/services/in-call-out-call',
                '/services/erotic-massage',
                '/services/girlfriend-experience',
                '/services/girlfriend-experience',
                '/services/girlfriend-experience'
              ];
              const targetPath = zigzagServicePaths[idx] || '/services';

              return (
                <div key={idx} className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Images Block (Luxurious Off-Set Collage) */}
                  <div className="w-full md:w-1/2 shrink-0 relative h-[450px] hidden md:block">
                    <img src={item.images[0]} className="absolute top-0 left-0 w-[65%] h-[80%] object-cover shadow-2xl z-10 filter grayscale contrast-125" alt="elegant escort" />
                    <img src={item.images[1]} className="absolute bottom-0 right-0 w-[60%] h-[70%] object-cover shadow-2xl z-20 border-8 border-white" alt="beautiful model" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[85%] border border-[#d4af37]/30 z-0"></div>
                  </div>
                  
                  {/* Mobile image fallback */}
                  <div className="w-full md:hidden h-[300px] mb-8 relative">
                     <img src={item.images[0]} className="w-full h-full object-cover shadow-xl filter grayscale" alt="escort" />
                     <div className="absolute inset-0 bg-[#0f1115]/10 border border-[#d4af37]/50 m-4"></div>
                  </div>

                  {/* Content Block */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-[1px] w-8 bg-[#d4af37]"></div>
                      <span className="text-[#d4af37] tracking-[0.2em] uppercase text-[10px] font-bold">Premium Tier</span>
                    </div>
                    <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] leading-[1.2] mb-6">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 font-light text-[15px] leading-relaxed mb-8">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-6">
                      {item.btn.toLowerCase().includes('call') ? (
                        <a href="tel:9996265679" className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors inline-block text-center shadow-lg">
                          {item.btn}
                        </a>
                      ) : (
                        <Link to="/contact" className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors inline-block text-center shadow-lg">
                          {item.btn}
                        </Link>
                      )}
                      <Link to={targetPath} className="font-medium text-[#791b29] text-[13px] uppercase tracking-widest hover:text-[#0f1115] transition-colors border-b border-transparent hover:border-[#0f1115] pb-1">Discover More</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Sensual Getaway Banner */}
      <section className="bg-[#1a1d24] relative py-24 px-4 shadow-2xl relative z-10 overflow-hidden border-t-[4px] border-[#d4af37]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37] via-transparent to-transparent"></div>
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <h2 className="text-[#d4af37] text-[32px] md:text-[44px] font-serif font-bold mb-8 leading-[1.1]">
            A Majestic Erotic Getaway <br/>Awaits You
          </h2>
          <p className="text-gray-300 font-light text-[15px] md:text-[17px] leading-relaxed mx-auto max-w-3xl mb-12">
            At Alina VIP Escort Service, we transcend the ordinary. We offer an escape into a world of pure indulgence, refined passion, and genuine connection. Our hand-picked portfolio of stunning female escorts in Gurgaon are available 24/7, securing unforgettable moments tailored precisely to your highest expectations. Let us orchestrate your perfect evening. 
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="https://wa.me/919996265679" className="bg-[#d4af37] hover:bg-white hover:text-[#0f1115] text-[#0f1115] px-10 py-4 text-[13px] font-bold tracking-[0.15em] uppercase transition-colors flex items-center justify-center gap-2">
              <MessageCircle size={16} className="fill-current" strokeWidth={1} /> Reach on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ProfileModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        profile={selectedProfile} 
      />
    </>
  );
}
