import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Calendar, User, Eye, ArrowLeft } from 'lucide-react';

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState<any | null>(null);

  const posts = [
    {
      date: 'May 02, 2026',
      title: '24 Hour Escort Services in Gurgaon – What You Need to Know?',
      excerpt: 'Have you been wondering about the escort services that don\'t bring you any time barriers? Learn how 24/7 availability transforms...',
      body: `Booking a 24-hour escort service in Gurgaon offers unmatched convenience and extreme comfort for modern high-profile travelers and busy residents. 

Whether you are arriving late at night from the Indira Gandhi International Airport or looking to share an intimate dinner in dynamic Cyber City, professional agencies guarantee verified companions with flexible timetables.

### Why Choose 24/7 Service?
1. **No Rush or Restraints:** Bookings are completely custom. You can choose overnight stays or brief hourly encounters.
2. **Absolute Privacy:** Premium hotel check-ins are handled safely and discreetly.
3. **Professional Companions:** Highly trained Indian, Russian, and model escorts are available 24/7 to attend to your desires.`,
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      date: 'Mar 13, 2026',
      title: 'Exclusive Facts About Russian Escorts in Gurgaon – Hire with no Doubts!',
      excerpt: 'Explore why Russian escorts are highly requested by elite corporate leaders and luxury connoisseurs...',
      body: `Russian models and professional high-profile escorts are the ultimate gold standard in worldly companionship. Highly valued for their striking foreign aesthetics, friendly etiquette, and unmatched professionalism, they are perfect companions for high-end events.

### Essential Highlights:
- **Verified Photo Profiles:** Rest assured that you receive verified models matching the visual layouts in our catalog.
- **Multilingual Excellence:** Russian escorts speak excellent English, keeping dinner debates witty and interesting.
- **Exotic Visual Sensation:** Bring a touch of international glamour to your stay at any 5-star venue in Gurugram.`,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      date: 'Feb 16, 2026',
      title: 'Luxury Experiences to Enjoy with Gurgaon Escorts',
      excerpt: 'Step away from the stress of corporate office environments and unwind in the company of gorgeous companions...',
      body: `Gurgaon is a fast-paced business hub that demands high performance and long, stressful hours. To counteract the fatigue, elite executives frequently call upon the premium companion services of verified escorts.

### Top Luxurious Companion Options:
1. **5-Star Accommodations:** Experience VIP service in premium properties like The Oberoi, Westin, or Taj City Centre.
2. **Candlelit Dinners:** Explore gorgeous global menus with a beautiful, polite model alongside.
3. **Private Relaxation:** Select an intimate in-call massage service to melt your tension away.`,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      date: 'Jan 06, 2026',
      title: 'Top Locations To Seek Quality Companionship In Gurgaon – Find Escorts Near You!',
      excerpt: 'There is no doubt that Gurgaon is developing at a very fast pace. It is a city that is known for cyber hubs, luxury malls, and business Parks...',
      body: `Finding escorts close to your current location is simple when you are staying in the correct neighborhood. 

### Best Service Regions in Gurgaon:
- **Gurgaon Sector 29:** Popular nightlife hub with wonderful options.
- **MG Road Sector:** Filled with major hotels and shopping centers.
- **DLF Cyber City:** Premium financial and workspace area perfect for quick hotel in-call bookings.
- **HUDA City Centre:** Accessible and lively region close to major residential towers.`,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      date: 'Nov 29, 2025',
      title: 'Escort Service in Gurgaon: What Clients Should Know Before Booking',
      excerpt: 'A complete handbook with suggestions to ensure secure interactions, real photos, and elite experiences...',
      body: `To maintain high-quality results and safe, happy interactions, professional booking agencies recommend adopting a couple of key best practices.

### Essential Rules of Engagement:
- **Verify Real Photos:** Insist on verified profiles. High-quality agencies only use authentic companion representation.
- **Clear Price Agreements:** Always check pricing beforehand. Safe standard rates start at ₹15,000.
- **Polite Communication:** Treat companions with extreme care, courtesy, and respect. Good boundaries guarantee beautiful times.`,
      image: 'https://images.unsplash.com/photo-1515155075601-2003c2069b2d?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      date: 'Sep 23, 2025',
      title: 'Trusted Escort Services in Gurgaon – Ideal for Sensual Fulfillment!',
      excerpt: 'Why verified agencies represent the premier method to procure gorgeous female escorts with no safety concerns...',
      body: `Finding trustworthy partners shouldn't trigger anxiety or panic. Verified companion networks filter individual escorts to match and secure full alignment.

Whether you prefer college-going models or high-end foreign professionals, choosing are established, reliable networks guarantees absolute satisfaction without fear of unwanted surprises.`,
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400&h=300'
    }
  ];

  return (
    <div className="w-full bg-[#f9f9f9] min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-[#0f1115] overflow-hidden min-h-[380px] flex items-center justify-center pt-8 pb-12">
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2000&h=800" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover object-top opacity-20 mix-blend-luminosity grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-[#1a1d24]/80"></div>
        <div className="relative z-10 text-center flex flex-col items-center mt-4">
           <div className="flex items-center gap-2 bg-[#d4af37]/10 backdrop-blur-md border border-[#d4af37]/30 text-[#d4af37] py-1.5 px-4 rounded-none text-[10px] font-bold uppercase tracking-widest mb-4">
             Intelligence Briefs
          </div>
          <h1 className="text-white text-4xl md:text-[50px] font-serif font-bold tracking-wide mb-8 drop-shadow-md">
            Intel & Articles
          </h1>
          <div className="flex gap-4">
            <a href="tel:9996265679" className="bg-[#d4af37] text-[#0f1115] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors hover:bg-white flex items-center gap-2">
              Secure Line
            </a>
            <Link to="/escorts" className="bg-transparent border border-[#d4af37] text-[#d4af37] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase hover:bg-[#d4af37] hover:text-[#0f1115] transition-colors">
              Access Roster
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white border border-gray-100 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500">
              <div>
                <div 
                  className="relative aspect-[3/2] overflow-hidden cursor-pointer"
                  onClick={() => setActiveArticle(post)}
                >
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-[#0f1115]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute bottom-4 left-4 bg-[#0f1115] text-[#d4af37] text-[10px] tracking-widest font-bold uppercase px-3 py-1.5 border border-[#d4af37]/30">
                    {post.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 
                    onClick={() => setActiveArticle(post)}
                    className="font-serif font-bold text-[#0f1115] text-[18px] leading-tight mb-4 hover:text-[#d4af37] cursor-pointer transition-colors"
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-500 font-light text-[13px] leading-relaxed line-clamp-3">
                    {post.excerpt || 'Enjoy premium lifestyle experiences with premium models, housewife escorts, and VIP companions in Gurgaon. Learn correct booking protocols in our complete SEO resource.'}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-gray-50 mt-4">
                <button 
                  onClick={() => setActiveArticle(post)}
                  className="text-[#0f1115] text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 hover:text-[#d4af37] transition-colors pt-4 w-full justify-between"
                >
                  Access Intel <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal Overlay */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0f1115]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-[#d4af37]/20 shadow-2xl">
            <div className="absolute right-4 top-4 z-20 bg-[#0f1115]/50 hover:bg-[#d4af37] backdrop-blur-sm p-2 text-white hover:text-[#0f1115] transition-colors cursor-pointer border border-white/20" onClick={() => setActiveArticle(null)}>
              <X size={20} />
            </div>
            
            <div className="relative h-72 overflow-hidden">
              <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[#d4af37] text-[11px] uppercase tracking-widest font-bold mb-3">{activeArticle.date}</p>
                <h2 className="text-[24px] md:text-[32px] font-serif font-bold leading-tight">{activeArticle.title}</h2>
              </div>
            </div>

            <div className="p-8 md:p-10 overflow-y-auto max-h-[50vh] prose prose-sm max-w-none">
              <div className="flex gap-6 text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-8 border-b border-gray-100 pb-4">
                <span className="flex items-center gap-2"><User size={14} className="text-[#d4af37]" /> Operations</span>
                <span className="flex items-center gap-2"><Calendar size={14} className="text-[#d4af37]" /> {activeArticle.date}</span>
                <span className="flex items-center gap-2"><Eye size={14} className="text-[#d4af37]" /> Standard Read</span>
              </div>
              
              <div className="text-gray-600 font-light text-[15px] leading-[2] whitespace-pre-wrap">
                {activeArticle.body}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-6 justify-between items-center bg-gray-50 p-6">
                <button 
                  onClick={() => setActiveArticle(null)}
                  className="text-[#0f1115] hover:text-[#d4af37] text-[11px] tracking-widest uppercase font-bold flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <ArrowLeft size={14} /> Close Reader
                </button>
                <Link 
                  to="/contact" 
                  className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-3.5 text-[11px] tracking-widest uppercase font-bold transition-colors"
                >
                  Initialize Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
