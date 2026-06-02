import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Check, Star } from 'lucide-react';

interface ServiceLayoutProps {
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introContent: React.ReactNode;
  midTitle?: string;
  midContent?: React.ReactNode;
  conclusionTitle?: string;
  conclusionContent?: React.ReactNode;
}

export default function ServiceLayout({
  heroImage,
  heroTitle,
  heroSubtitle,
  introTitle,
  introContent,
  midTitle,
  midContent,
  conclusionTitle,
  conclusionContent
}: ServiceLayoutProps) {
  const profiles = [
    { name: 'Jeevika', desc: 'If you are looking for a companion to accompany you wherever you want, I am the...', image: '/image7.png' },
    { name: 'Niyati', desc: 'Step into the electrifying world of Gurugram\'s escorts scene, where Niyati shines like a beacon! Wit...', image: '/image10.png' },
    { name: 'Ekta', desc: 'She is Ekta Independent Escort Living in Sushant Lok, Gurgaon. Ekta\'s smile is simply...', image: '/image11.png' },
    { name: 'Akshara', desc: 'I know you are looking for dates with a girl from a foreign with whom you can have fun and ta...', image: '/image12.png' }
  ];

  const categories = [
    { title: 'Russian Escorts in Gurgaon', desc: 'If you are looking forward to meeting Russian escorts in Gurgaon, then you are at the right place. With us, you can expect hot and beautiful Russian escorts who will be happy to accompany you anywhere you want.', image: '/image13.png' },
    { title: 'Independent Escorts in Gurgaon', desc: 'Independent escorts are available 24/7 you can meet them for their amazing service like girlfriend experience. Independent Escorts in Gurgaon are highly skilled in foreplay as they know it is extremely important for pleasure.', image: '/image14.png' },
    { title: 'Model Escorts in Gurgaon', desc: 'If you are looking forward to meeting Models escorts in Gurgaon, then you are at the right place. At Roshni Khanna, expect hot and beautiful Models escorts, happy to accompany you anywhere you want.', image: '/image15.png' },
    { title: 'Foreigner Call Girls Gurgaon', desc: 'Want to have fun with the best exotic, lavishing, slender, perfect and juicy foreigner call girls then you are at the right doorstep to have your desires fulfilled in a way that even you can not have even imagine.', image: '/image16.png' }
  ];

  const locations = [
    { title: 'Escorts Service in MG Road', desc: 'Men always face issues while searching for the best independent escorts in MG Road. That is why we are to help you all. Before we say anything about the quality, experience...', image: '/image17.png' },
    { title: 'Escorts Service in Mahipalpur', desc: 'Our escort service agency is one of the most renowned escort services in Mahipalpur, New Delhi offering a big portfolio of hot, cute and beautiful independent escorts & call girls...', image: '/image18.png' },
    { title: 'Escorts Service in Aerocity', desc: 'Aerocity escorts are your true companions for all kinds of experiences. Whether you hire them for sexual experiences, or you get their companionship, or occasions and gatherings...', image: '/image19.png' },
    { title: 'Escorts Service in Dwarka', desc: 'We provide the best escort services in Dwarka, where only hot and genuine girls are available for your pleasure. Do not expect just sexual satisfaction as our girls provide...', image: '/image20.png' }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#0f1115] overflow-hidden min-h-[380px] flex items-center justify-center pt-8 pb-12">
        <img 
          src={heroImage} 
          alt={heroTitle} 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 mix-blend-luminosity grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-[#1a1d24]/80"></div>
        <div className="relative z-10 text-center flex flex-col items-center mt-8 px-4 w-full max-w-4xl">
           <div className="flex items-center gap-2 bg-[#d4af37]/10 backdrop-blur-md border border-[#d4af37]/30 text-[#d4af37] py-1.5 px-4 rounded-none text-[10px] font-bold uppercase tracking-widest mb-4">
             Curated Service Tier
          </div>
          <h1 className="text-white text-4xl md:text-[50px] font-serif font-bold tracking-wide mb-6 drop-shadow-md leading-tight">
            {heroTitle}
          </h1>
          <p className="text-gray-400 font-light text-[15px] mb-8 max-w-2xl">{heroSubtitle}</p>
          <div className="flex gap-4">
            <a href="tel:9996265679" className="bg-[#d4af37] text-[#0f1115] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors hover:bg-white flex items-center gap-2">
              <Phone size={14} /> Immediate Dispatch
            </a>
            <Link to="/escorts" className="bg-transparent border border-[#d4af37] text-[#d4af37] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase hover:bg-[#d4af37] hover:text-[#0f1115] transition-colors">
              Access Roster
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-[1240px] mx-auto px-4 py-20">
        <div className="mb-2 border-b border-gray-100 pb-12 relative pl-8">
           <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>
           <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-6">{introTitle}</h2>
           <div className="text-gray-500 font-light text-[15px] leading-[2] space-y-6 max-w-4xl">
             {introContent}
           </div>
        </div>
      </div>

      {/* Top Rated Escort */}
      <div className="max-w-[1240px] mx-auto px-4 pb-20">
        <div className="border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row gap-10 bg-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full pointer-events-none"></div>
          <div className="w-full md:w-5/12">
            <div className="relative aspect-[3/4] p-2 border border-gray-100 shadow-inner">
               <img src="/image11.png" alt="Ekta" className="w-full h-full object-cover grayscale mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-700" />
            </div>
          </div>
          <div className="w-full md:w-7/12 flex flex-col justify-center">
            <div className="mb-8">
               <h2 className="text-[12px] font-bold text-[#d4af37] uppercase tracking-widest mb-3">Top Rated In-Call and Out-Call Escort of the Month</h2>
               <h3 className="text-[40px] font-serif font-bold text-[#0f1115] mb-2 leading-none">Ekta</h3>
               <div className="flex items-center gap-1">
                 {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-[#d4af37] text-[#d4af37]" />)}
                 <span className="text-[12px] text-gray-400 ml-3 italic">(Extensive Client Feedback)</span>
               </div>
            </div>
            
            <p className="text-gray-500 font-light text-[14px] leading-[1.8] mb-8 pb-8 border-b border-gray-100">
              She is Ekta Independent Escort Living in Sushant Lok, Gurgaon. Ekta's smile is simply mesmerizing. She is always able to lift the mood for anyone. An extremely equal escort girl with a perfect sexy body. A hot and delightful blonde who will help you break free and forget about one of all your problems. It can also be playful for anyone who prefers to add some pepper to their pastime, Call For Booking — +91-9967580977
            </p>
            
            <h4 className="text-[16px] font-serif font-bold text-[#0f1115] mb-5">Curated Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              <div className="flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0"><Check size={10} className="text-[#d4af37]" /></div><span className="text-[13px] text-gray-600 font-medium">Girlfriend Experience (GFE)</span></div>
              <div className="flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0"><Check size={10} className="text-[#d4af37]" /></div><span className="text-[13px] text-gray-600 font-medium">Intimate Protocol</span></div>
              <div className="flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0"><Check size={10} className="text-[#d4af37]" /></div><span className="text-[13px] text-gray-600 font-medium">Full Body Sensual Therapy</span></div>
              <div className="flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0"><Check size={10} className="text-[#d4af37]" /></div><span className="text-[13px] text-gray-600 font-medium">In-Call & Outcall Deployment</span></div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-auto">
              <Link to="/escorts" className="bg-[#0f1115] text-[#d4af37] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#1a1d24] transition-colors">Access Profile</Link>
              <a href="tel:9996265679" className="bg-transparent border border-[#0f1115] text-[#0f1115] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#0f1115] hover:text-[#d4af37] transition-colors">Direct Dispatch</a>
            </div>
          </div>
        </div>
      </div>

      {/* Profiles */}
      <div className="max-w-[1240px] mx-auto px-4 pb-20">
        <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-10 text-center md:text-left relative inline-block">
          Featured Roster Availabilities
          <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#d4af37]"></div>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, i) => (
            <div key={i} className="bg-white border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-500 relative cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={profile.image} alt={profile.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="font-serif font-bold text-[18px] text-[#0f1115] mb-2 group-hover:text-[#d4af37] transition-colors">{profile.name}</h3>
                <p className="text-gray-500 font-light text-[13px] leading-relaxed mb-5 flex-grow">
                  {profile.desc}
                </p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <Link to="/escorts" className="text-[#0f1115] text-[10px] font-bold tracking-widest uppercase group-hover:text-[#d4af37] transition-colors before:absolute before:inset-0 before:z-0">
                    Access File
                  </Link>
                  <div className="flex gap-3 relative z-10">
                    <a href="tel:9996265679" className="text-gray-400 hover:text-[#0f1115] transition-colors"><Phone size={14} /></a>
                    <a href="#" className="text-gray-400 hover:text-[#25D366] transition-colors"><MessageCircle size={14} /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mid Content */}
      <div className="max-w-[1240px] mx-auto px-4 pb-20">
        <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-8">{midTitle || 'Incall & Outcall Dispatching in All Regions of GurgaonHQ'}</h2>
        <div className="text-gray-500 font-light text-[15px] leading-[2] space-y-6 max-w-4xl border-l-2 border-[#d4af37] pl-8">
          {midContent || (
            <>
              <p>
                If you are looking forward to meeting In-Call and Out-Call escorts in Gurgaon, then you are at the right place. At Roshni Khanna, expect hot and beautiful In-Call and Out-Call escorts, happy to accompany you anywhere you want for an unforgettable experience. These In-Call and Out-Call girls will make sure you have fun and enjoyable time with them, every time you hire their services.
              </p>
              <p>
                Girlfriend experience or in an event, these In-Call and Out-Call girls in Gurgaon will make you feel special. No matter if you are looking for a girlfriend experience or just someone who can be by your side in a high-profile party, these beautiful In-Call and Out-Call girls will never let you down. The rates of these escorts depend on the duration of time you hire them for. You can check our prices page for In-Call and Out-Call escorts rates hourly wise.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Pricing Packages */}
      <div className="w-full bg-[#1a1d24] text-white py-24 relative border-y border-[#0f1115]">
        <div className="absolute top-0 right-1/4 w-1/4 h-[1px] bg-gradient-to-l from-[#d4af37] to-transparent"></div>
        <div className="max-w-[1240px] mx-auto px-4 text-center">
          <h2 className="text-[32px] md:text-[40px] font-serif font-bold mb-8 text-[#d4af37]">Service Retainers</h2>
          <p className="text-[14px] text-gray-400 font-light leading-[1.8] mb-16 max-w-4xl mx-auto">
            The pricing packages for In-Call and Out-Call escorts service start from 15000 rupees for 2 hours, and for Russian escorts, the package starts from 20000 rupees for 2 hours. These are the basic packages, and for additional services like massage additional charges are payable. The basic pricing package excludes the cost of accommodation. For services with accommodation in 3-star hotel, the package starts from 20000 rupees for 3 hours, for 5-star hotels, package starts from 25000 rupees. We also have different nationalities of girls, and their price varies. We also have packages for long-duration services starting from 30000 rupees. Call us to enquire more about pricing packages for the best escort services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10 max-w-5xl mx-auto">
            <div className="bg-[#0f1115] border border-gray-800 p-10 flex flex-col items-center group hover:border-[#d4af37]/50 transition-colors">
              <div className="h-[1px] w-12 bg-[#d4af37] mb-6 opactity-50 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-[32px] font-serif font-bold mb-2 text-white">₹ 15,000</h3>
              <p className="text-[#d4af37] text-[11px] tracking-widest uppercase font-bold">1-2 Hour Session</p>
              <div className="h-[1px] w-12 bg-[#d4af37] mt-6 opactity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="bg-[#0f1115] border border-[#d4af37] p-10 flex flex-col items-center transform scale-105 shadow-[0_0_30px_rgba(212,175,55,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#d4af37]/10 rounded-bl-full"></div>
              <div className="h-[1px] w-12 bg-[#d4af37] mb-6"></div>
              <h3 className="text-[32px] font-serif font-bold mb-2 text-white">₹ 20,000</h3>
              <p className="text-[#d4af37] text-[11px] tracking-widest uppercase font-bold">2-4 Hour Session</p>
              <div className="h-[1px] w-12 bg-[#d4af37] mt-6"></div>
              <div className="absolute top-4 left-4 border border-[#d4af37]/50 text-[#d4af37] text-[8px] py-1 px-2 uppercase tracking-wide">Popular</div>
            </div>
            <div className="bg-[#0f1115] border border-gray-800 p-10 flex flex-col items-center group hover:border-[#d4af37]/50 transition-colors">
              <div className="h-[1px] w-12 bg-[#d4af37] mb-6 opactity-50 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-[32px] font-serif font-bold mb-2 text-white">₹ 25,000</h3>
              <p className="text-[#d4af37] text-[11px] tracking-widest uppercase font-bold">5-6 Hour Session</p>
              <div className="h-[1px] w-12 bg-[#d4af37] mt-6 opactity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-transparent border border-[#d4af37] text-[#d4af37] px-10 py-3.5 text-[11px] uppercase tracking-widest font-bold hover:bg-[#d4af37] hover:text-[#0f1115] transition-colors">Schedule Consultation</Link>
          </div>
        </div>
      </div>

      {/* Erotic Entertainment */}
      <div className="max-w-[1240px] mx-auto px-4 py-20 border-b border-gray-100 mb-20 text-center">
        <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-8">Erotic Entertainment with Incall Escorts in Gurgaon – Let's Check Out the Fun!</h2>
        <div className="text-gray-500 font-light text-[15px] leading-[1.8] space-y-6 max-w-4xl mx-auto">
          <p>
            Let the world of entertainment give you a warm welcome with lots of love and cosiness. It's time for you to enjoy the sensational in-call escorts in Gurgaon. Dear gentlemen, incall services are the finest kind of escort services that you should hire right away. These services require you to go to the location as dictated by your sexiest escort girl. The services are offered to you in a discreet environment. You feel easy and comfortable when an incall escort accompanies you. She can call you at a hotel, workplace, her flat, or apartment.
          </p>
          <p>
            The dating experiences are private, and the intimate fun is absolutely genuine. All the in-call escort services in Gurgaon are premium and top-tier. The experiences are unique with the touch of sensuality. You have immense fun 24/7 with ease of hiring as well. There is no stress you need to take when meeting an incall escort in Gurgaon. She takes the responsibility for your entertainment and sensual fulfillment. So get ready for a hassle-free experience with incall services. Create beautiful lifetime memories with romance and endless pleasure.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-[1240px] mx-auto px-4 pb-20">
        <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-6">Explore Service Categories</h2>
        <p className="text-gray-500 font-light text-[14px] mb-12 leading-[1.8] max-w-3xl border-l border-[#d4af37] pl-6">
          At Roshni Khanna, you can fulfill your craziest fantasies by meeting the girl of your dream. Here, you can choose to meet beautiful girls from various categories and ethnic backgrounds. Browse more categories or Call us to find exactly what you are looking for.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white border border-gray-100 p-8 text-center flex flex-col items-center hover:shadow-2xl transition-all duration-500 relative group cursor-pointer">
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-6 border border-gray-200">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-500" />
              </div>
              <h3 className="font-serif font-bold text-[18px] text-[#0f1115] mb-4 leading-tight group-hover:text-[#d4af37] transition-colors">{cat.title}</h3>
              <p className="text-gray-500 font-light text-[13px] leading-relaxed mb-6 flex-grow">{cat.desc}</p>
              <Link to="/categories" className="text-[#0f1115] font-bold text-[10px] tracking-widest uppercase group-hover:text-[#d4af37] mt-auto transition-colors border-b border-transparent group-hover:border-[#d4af37] pb-1 before:absolute before:inset-0 before:z-0">
                Access Sector
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
          <Link to="/categories" className="bg-transparent border border-[#0f1115] text-[#0f1115] px-10 py-3.5 text-[11px] uppercase tracking-widest font-bold hover:bg-[#0f1115] hover:text-[#d4af37] transition-colors w-full md:w-auto text-center">Deploy Full Catalog</Link>
          <a href="tel:9996265679" className="bg-[#0f1115] text-[#d4af37] px-10 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#1a1d24] transition-colors w-full md:w-auto text-center flex items-center justify-center gap-2">
            <Phone size={14}/> Secure Line
          </a>
        </div>
      </div>

      {/* Outcall escorts content */}
      <div className="max-w-[1240px] mx-auto px-4 pb-20 pt-10 border-t border-gray-100">
        <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-8">Gurgaon Outcall Escorts for Convenience and Ease – Unlimited Passion Unlocked!</h2>
        <div className="text-gray-500 font-light text-[15px] leading-[2] space-y-6">
          <p>
            Sexual entertainment and fetishes are something that we all desire. All handsome hunks seek women for sex and adult dating. Most of these guys have privacy concerns. They are unsure of meeting the girls at their apartments. Hence, they look for outcall escorts in Gurgaon. Yes, outcall services are those services where escorts move to your desired location. You can call the girl to join you at your home, office, hotel room, etc. The girls will be on time as they are very punctual. Their professions make them stand out in the adult world. Outcall escort services in Gurgaon eliminate all the privacy threats.
          </p>
          <p>
            Our agency ensures you free doorstep delivery as well. There is no hidden cost that our clients have to bear, as we maintain complete transparency with the prices. As far as your location address or personal details are concerned, they are kept confidential. Our outcall escorts in Gurgaon will ensure you experience pleasure with an exclusive variety of services. They greet you with passion that never ends. They are full of enthusiasm, and their boldness makes you fall in love. So trust these exotic outcall escorts who bring pleasure and unlimited passion. Their companionship ensures 100% fulfillment – Hire now!
          </p>
        </div>
      </div>

      {/* Top Escorts Locations */}
      <div className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="max-w-[1240px] mx-auto px-4">
          <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-12 text-center">Top Escorts Service Locations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((loc, i) => (
              <div key={i} className="bg-white border border-gray-200 p-5 text-center group hover:-translate-y-2 transition-transform duration-500">
                <div className="overflow-hidden mb-6 relative">
                  <img src={loc.image} alt={loc.title} className="w-full h-[180px] object-cover grayscale mix-blend-luminosity opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-[#0f1115]/10"></div>
                </div>
                <h3 className="font-serif font-bold text-[18px] text-[#0f1115] mb-3">{loc.title}</h3>
                <p className="text-gray-500 font-light text-[13px] leading-relaxed mb-5 line-clamp-3">{loc.desc}</p>
                <Link to="/locations" className="text-[#0f1115] font-bold text-[10px] tracking-widest uppercase hover:text-[#d4af37] transition-colors border-b border-transparent hover:border-[#d4af37] pb-1">Access Zone</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Book */}
      <div className="max-w-[1240px] mx-auto px-4 py-20 flex flex-col items-center border-b border-gray-100">
        <h2 className="text-[32px] md:text-[40px] font-serif font-bold text-[#0f1115] mb-16 relative">
          Acquisition Protocol
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#d4af37]"></div>
        </h2>
        
        <div className="grid grid-cols-3 gap-12 w-full max-w-3xl mb-16 relative">
          {/* Connector Line */}
          <div className="absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-gray-200 -z-10 hidden md:block"></div>
          
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 text-[#0f1115] shadow-sm hover:border-[#d4af37] transition-colors">
              <Phone size={28} />
            </div>
            <p className="font-bold text-[14px] text-[#0f1115] uppercase tracking-widest text-center">Secure<br/>Voice Line</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] rounded-full bg-[#0f1115] flex items-center justify-center mb-6 text-[#d4af37] shadow-lg transform scale-110">
              <Mail size={32} />
            </div>
            <p className="font-bold text-[14px] text-[#0f1115] uppercase tracking-widest text-center">Encrypted<br/>Email</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 text-[#0f1115] shadow-sm hover:border-[#d4af37] transition-colors">
              <MessageCircle size={28} />
            </div>
            <p className="font-bold text-[14px] text-[#0f1115] uppercase tracking-widest text-center">Direct<br/>Messaging</p>
          </div>
        </div>
        
        <Link to="/contact" className="bg-[#0f1115] text-[#d4af37] px-10 py-4 text-[12px] font-bold uppercase tracking-widest hover:bg-[#1a1d24] transition-colors hover:shadow-xl inline-flex items-center gap-2">
           Initialize Contact <Mail size={14}/>
        </Link>
      </div>

      {/* Booking Form Footer Section */}
      <div className="max-w-[1240px] mx-auto px-4 py-24 flex flex-col md:flex-row shadow-2xl relative mb-8">
        <div className="w-full md:w-1/2 relative bg-[#1a1d24]">
          <img src="/image9.png" alt="Executive Scheduling" className="w-full h-full object-cover min-h-[400px] mix-blend-luminosity opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f1115]/80"></div>
        </div>
        <div className="w-full md:w-1/2 bg-[#0f1115] p-10 md:p-16 flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 w-2 h-full bg-[#d4af37]"></div>
          
          <h2 className="text-[32px] md:text-[38px] font-serif font-bold text-white mb-3 leading-tight">Priority Booking</h2>
          <p className="text-[#d4af37] text-[13px] tracking-widest uppercase mb-10 font-bold border-b border-gray-800 pb-4">Discreet & Expedited Routing</p>
          
          <form className="space-y-6">
            <input type="text" placeholder="Designation / Alias" className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-[#d4af37] transition-colors text-[14px] placeholder:text-gray-600 font-light" />
            <input type="email" placeholder="Secure Return Address" className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-[#d4af37] transition-colors text-[14px] placeholder:text-gray-600 font-light" />
            
            <div className="grid grid-cols-2 gap-6">
              <select defaultValue="" className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-[#d4af37] transition-colors text-[14px] font-light appearance-none rounded-none opacity-80">
                <option value="" disabled className="text-gray-900">Quadrant HQ</option>
                <option value="hq" className="text-gray-900">GurgaonHQ</option>
                <option value="d" className="text-gray-900">Delhi Field</option>
                <option value="n" className="text-gray-900">Noida Range</option>
              </select>
              
              <select defaultValue="" className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-[#d4af37] transition-colors text-[14px] font-light appearance-none rounded-none opacity-80">
                <option value="" disabled className="text-gray-900">Deployment Vector</option>
                <option value="any" className="text-gray-900">Unspecified</option>
                <option value="in" className="text-gray-900">In-Call</option>
                <option value="out" className="text-gray-900">Out-Call</option>
              </select>
            </div>
            
            <button type="button" className="w-full bg-[#d4af37] text-[#0f1115] py-4 text-[12px] font-bold uppercase tracking-widest mt-6 hover:bg-white transition-colors">Transmit Request</button>
          </form>
          
          <p className="text-left text-gray-500 font-light text-[11px] mt-8 flex items-start gap-2">
            <Check size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
            Strict operational security maintained. Data purged routinely.
          </p>
        </div>
      </div>

    </div>
  );
}