import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Star, ShieldCheck, Heart, Sparkles, Check, ArrowLeft } from 'lucide-react';
import { PROFILES } from '../data';
import ProfileModal from '../components/ProfileModal';

// Original Category List copy to read descriptive details from
const GLOBAL_CATEGORIES = [
  { title: "Russian Escorts in Gurgaon", desc: "If you are looking forward to meeting Russian escorts in Gurgaon, then you are at the right place. With us, you can expect hot and beautiful Russian escorts who will be happy to accompany you anywhere you want. These Russian girls will make sure you have a fun and enjoyable time with them, every time you hire their services.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Independent Escorts in Gurgaon", desc: "Independent escorts are available 24/7 you can meet them for their amazing service like girlfriend experience. Independent Escorts in Gurgaon are highly skilled in foreplay as they know it is extremely important for pleasure. You can just have fun and forget that you even met her. They are professionals and are there just to please and satisfy you.", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Model Escorts in Gurgaon", desc: "If you are looking forward to meeting Models escorts in Gurgaon, then you are at the right place. At Roshni Khanna, expect hot and beautiful Models escorts, happy to accompany you anywhere you want for an unforgettable experience. These Models girls will make sure you have fun and enjoyable time with them, every time you hire their services.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Foreigner Call Girls Gurgaon", desc: "Want to have fun with the best exotic, lavishing, slender, perfect and juicy foreigner call girls then you are at the right doorstep to have your desires fulfilled in a way that even you can not have even imagine. These foreigner girls have the perfect assets in the city and can not be matched by anyone in any means. Your desires will be attained at a very rapid pace and you will not be satisfied but amazed by what you will get.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Young Call Girls Gurgaon", desc: "Meet the most beautiful and ravishing young girls in Gurgaon region. These young girls are very horny to get penetrated deep down and they are really fed up with the artificial ways to get their arousing feelings get satisfied. Now they are hunting for real men like you to kick the hell out of them and show them who really is their daddy.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Indian Escorts in Gurgaon", desc: "Meet hot Indian escort at a lightning fast speed on your call and you can also get the pleasure and nasty feeling by enjoying our premium call girls services. The naughty girls will surely drive the hell out of you. Girls are professional in nature and they know very well how to drain your thirst. So what are you waiting for!! Just hit the call number and bang the best Indian escorts available in Gurgaon.", image: "https://images.unsplash.com/photo-1515155075601-2003c2069b2d?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Housewife Escorts in Gurgaon", desc: "Get the desire you want by enjoying with Desperate Housewife escorts at the tip of your fingertips. Meet trusted housewives at the lightening fast speed as soon as you call to us. These housewives are very desperate and craving something really big and special. They have the perfect body and the moves to get you kneel down to your knees and do all the naughty stuffs that you want to have with them.", image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Air Hostess Escorts in Gurgaon", desc: "Treat yourself to high-flying luxury with desperate Air Hostess escorts waiting to meet you in Gurgaon. Trained in elite hospitality, safety and etiquette, they bring a distinct flair of elegance and sophistication to your stays. These beautiful ladies have gorgeous, slender body shapes and the exact skills required to melt your stress away.", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "VIP Call Girls in Gurgaon", desc: "If you are looking forward to meeting VIP escorts in Gurgaon, then you are at the right place. At Roshni Khanna, expect hot and beautiful VIP escorts, happy to accompany you anywhere you want for an unforgettable experience. These VIP girls will make sure you have fun and enjoyable time with them, every time you hire their services. Girlfriend experience or in an event, these VIP girls in Gurgaon will make you feel special.", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "College Call Girls in Gurgaon", desc: "Today, having a girl by side as secretary for business works is quite common among most of the businessmen. And, it has become a matter of interest for men to have girls to accompany them on their tours or business trips. Men have different preferences when they choose a girl and hence they take into consideration several aspects.", image: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "High Profile Escorts in Gurgaon", desc: "Warm welcome to everyone. If you are a person who prefers class and high profile escorts and hookers in Gurgaon, then we are the right option for you. There are a lot of nicely groomed escorts who thrive to get a position for them in the leisure Industry. To remain their struggle and to fulfill their physical needs they have joined our services as part time occupation.", image: "https://images.unsplash.com/photo-1534068590799-09895a7090bb?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Punjabi Call Girls in Gurgaon", desc: "There is no doubt that Punjabi girls are very exciting and enthralling. These girls are always full of energy and excitement. They are the most passionate girls you can find in the adult entertainment industry. Punjabi call girls in Gurgaon are always popular among handsome hunks. They are in huge demand, as they always meet the expectations of clients and go beyond their imagination.", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Busty Escorts in Gurgaon", desc: "Sexual pleasure is the need of every man. We all want sexual pleasure in our love life. However, to have perfect sexual experiences, we need to have an ideal female companion. But it is also true that not every man is lucky enough to get the right female partner. There are a number of men who are single and do not have a spouse or girlfriend.", image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Slim Escorts in Gurgaon", desc: "Having a perfect match in our lives is very important. We want a girl in our lives who is slim, sexy, and bored. However, findings are that girls have never been an easy affair for men. Gentlemen face numerous hurdles on their way to finding slim and trim girls in the town. If you are also someone who is dealing with similar kinds of challenges, you are at the right place.", image: "https://images.unsplash.com/photo-1515155075601-2003c2069b2d?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Affordable Escorts in Gurgaon", desc: "Enjoying adult entertainment services is something that we all desire. We all crave the companionship of the most beautiful and glamorous girl in the town. However, most of the gentlemen often take a step back from escort services. Do you know why? Well, this is because of their low budget. They think that hiring services is an expensive affair for them.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Celebrity Escorts in Gurgaon", desc: "Some people dream of having a celebrity as a sex partner. They play different roles assuring the clients to be happy and satisfied through their interesting activities and with their experience also which they show on the bed with you. The roles of the celebrities that are often hired by the individuals are to entertain as well as please with perfect pleasure and to complete their dream of having sex with a celebrity.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Asian Escorts in Gurgaon", desc: "Get the most exclusive companionship of Asian Escorts. They are the finest escorts available to indulge in an immersive experience with you. These lovely girls are your ultimate companions for lovemaking experiences. When you are indulging in an erotic experience with an Asian girl, your love life becomes very exciting and soothing. These girls assure you of all the love and fetishes that you have been Craving for a long time.", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Aunty Escorts in Gurgaon", desc: "Do you crave orgasmic fun? Is it your desire to experience something sensational in your love life? Are you looking forward to having adult entertainment like never before? Do you want something exceptional in your love life that you have never experienced? If that is the case, look no further than Aunty Escorts in Gurgaon. These aunty escorts are very horny and busty.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=500" },
  { title: "Teen Escorts in Gurgaon", desc: "Are you looking for sensual fetishes? Do you want a break from monotony? Is it your desire to experience something intense and exciting? If your answer to any of these questions is yes, then hire teen escorts right away. Yes, teen escorts in Gurgaon are your perfect choice to have limitless entertainment. They are young and energetic girls who are eager to meet you. They will greet you with orgasmic fun and erotic services.", image: "https://images.unsplash.com/photo-1534068590799-09895a7090bb?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Mature Escorts in Gurgaon", desc: "Indulge in an immersive experience with the finest girls we bring to you. Dear gentlemen, welcome to the world of romance and sensuality. You are the ultimate destination where your dream girl is waiting for you. Meet our top-notch mature escorts in Gurgaon. They are your perfect choice for sensual entertainment and fetishes. If you are fed up with your unfulfilled desires, you are at the right place.", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400&h=300" },
  { title: "Russian Escorts in Aerocity", desc: "Are you looking for a memorable encounter with a Russian Escorts in Aerocity? Look no further. We offer Russian escorts to make your nights romantic. These Russian girls bring a unique touch of elegance and charm. They are experienced, skilled, and trusted to make your time unforgettable. Russian escorts offer a mix of culture, class, and warmth. They understand the art of true companionship.", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400&h=300" }
];

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replaceAll('--', '-');
};

export default function CategoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedProfile, setSelectedProfile] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Find corresponding category from the static list
  const category = GLOBAL_CATEGORIES.find(c => slugify(c.title) === slug) || GLOBAL_CATEGORIES.find(c => slugify(c.title).includes(slug || '')) || GLOBAL_CATEGORIES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleOpenProfile = (profile: any) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName) return;
    setFormSubmitted(true);
  };

  // Select suitable models to display
  const isRussian = category.title.toLowerCase().includes('russian');
  const matchedProfiles = PROFILES.filter(p => {
    const nameLower = p.name.toLowerCase();
    if (isRussian) {
      return nameLower.includes('julia') || nameLower.includes('kiara') || nameLower.includes('ellison') || nameLower.includes('sandra') || nameLower.includes('akshara');
    }
    return true;
  }).slice(0, 8);

  return (
    <div className="w-full bg-[#f9f9f9]">
      {/* Hero Banner */}
      <div className="relative bg-[#0f1115] overflow-hidden min-h-[380px] flex items-center justify-center pt-8 pb-12">
        <img 
          src={category.image}
          alt={category.title} 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-[#1a1d24]/60"></div>
        <div className="relative z-10 text-center flex flex-col items-center mt-6 px-4 max-w-4xl">
          <div className="flex items-center gap-2 bg-[#d4af37]/10 backdrop-blur-md border border-[#d4af37]/30 text-[#d4af37] py-1.5 px-4 rounded-none text-xs font-bold uppercase tracking-widest mb-4">
            <Heart size={14} className="fill-current" /> Curated Category: {category.title}
          </div>
          <h1 className="text-white text-4xl md:text-[50px] font-serif font-bold tracking-wide mb-6">
            {category.title}
          </h1>
          <p className="text-gray-300 text-[15px] leading-[1.7] mb-8 max-w-3xl mx-auto font-light">
            {category.desc}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:9996265679" className="bg-[#d4af37] text-[#0f1115] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors flex items-center gap-2 hover:bg-white">
              Direct Booking
            </a>
            <Link to="/categories" className="bg-transparent border border-[#d4af37] text-[#d4af37] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase hover:bg-[#d4af37] hover:text-[#0f1115] transition-colors">
              Back to Categories
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-12">
        
        {/* Intro */}
        <div className="bg-white border border-gray-100 p-8 md:p-12 mb-16 relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>
          <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-6 flex items-center gap-3">
            <Sparkles className="text-[#d4af37]" /> Premium Companion Handbook
          </h2>
          <div className="text-gray-500 font-light text-[15px] leading-[1.8] space-y-6 mb-10 pb-10 border-b border-[#0f1115]/10">
            <p>
              Opting for <strong>{category.title}</strong> ensures you reach an elite echelon of physical perfection, charm, and outstanding hospitality. Known for their custom skills, sensual movements, and respectful boundaries, our companions transform standard business trips or mundane evenings into highly gratifying memories.
            </p>
            <p>
              Whether you are scheduling an overnight GFE, a cozy in-call, or a majestic out-call at any leading 5-star resort, our cooperative agency secures verified photos, absolute identity encryption, and an unparalleled standard of VIP luxury. Meet them at your convenience anywhere in Gurgaon and Cyber City.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-3 text-[#0f1115] text-[13px] tracking-widest uppercase font-bold opacity-80">
              <Check size={16} className="text-[#d4af37]" /> Verified Identity & Photos
            </div>
            <div className="flex items-center gap-3 text-[#0f1115] text-[13px] tracking-widest uppercase font-bold opacity-80">
              <Check size={16} className="text-[#d4af37]" /> VIP girlfriend experience
            </div>
            <div className="flex items-center gap-3 text-[#0f1115] text-[13px] tracking-widest uppercase font-bold opacity-80">
              <Check size={16} className="text-[#d4af37]" /> Available 24 Hours / 7 Days
            </div>
            <div className="flex items-center gap-3 text-[#0f1115] text-[13px] tracking-widest uppercase font-bold opacity-80">
              <Check size={16} className="text-[#d4af37]" /> Complete Personal Protection
            </div>
          </div>
        </div>

        {/* Selected Models profiles */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-[32px] md:text-[38px] font-serif font-bold text-[#0f1115] mb-4 text-center">
              Top Recommendations For {category.title}
            </h2>
            <div className="h-[2px] w-16 bg-[#d4af37]"></div>
          </div>
          <p className="text-center text-gray-500 font-light text-[15px] max-w-2xl mx-auto mb-12 leading-relaxed">
            These top-rated models match the {category.title} category requirements and are fully active in Gurgaon sectors.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {matchedProfiles.map((p, idx) => (
              <div key={idx} className="bg-white border border-gray-100 group flex flex-col hover:shadow-2xl transition-all duration-500">
                <div 
                  className="relative aspect-[3/4] overflow-hidden cursor-pointer"
                  onClick={() => handleOpenProfile(p)}
                >
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-[#0f1115]/80 backdrop-blur text-white font-bold text-[9px] uppercase px-3 py-1.5 tracking-widest flex items-center gap-1.5 border border-white/20">
                    <ShieldCheck size={11} className="text-[#d4af37]" /> 100% verified
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

        {/* Pricing tier block */}
        <div className="bg-[#0f1115] text-white py-14 px-10 mb-16 relative">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d4af37]"></div>
          <h2 className="text-[28px] md:text-[34px] font-serif font-bold mb-6">Guaranteed Rates ({category.title})</h2>
          <p className="text-gray-400 font-light text-[15px] leading-[1.8] mb-10 max-w-4xl">
            At Roshni Khanna, we secure professional transparency and straightforward pricing guidelines. The basic package for this category begins from ₹15,000 to ₹20,000 for standard 2-hour bookings near Gurgaon's central hubs. Outcall packages to luxury 5-star properties (Taj, Leela, Westin, Oberoi, and Bristol) are offered at the best rates with no dispatch surcharge. Check out the rates table below to proceed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-800 bg-[#1a1d24]">
            <div className="text-center py-8 px-6 border-b md:border-b-0 md:border-r border-gray-800">
              <div className="text-gray-500 uppercase tracking-widest text-[11px] font-bold mb-3 opacity-80">Standard Option</div>
              <div className="text-[#d4af37] font-serif font-bold text-[24px] mb-2">₹15,000</div>
              <p className="text-gray-500 font-light text-[12px] pt-2">1-2 Hours Date</p>
            </div>
            <div className="text-center py-8 px-6 border-b md:border-b-0 md:border-r border-gray-800">
              <div className="text-gray-500 uppercase tracking-widest text-[11px] font-bold mb-3 opacity-80">Extended Option</div>
              <div className="text-[#d4af37] font-serif font-bold text-[24px] mb-2">₹20,000</div>
              <p className="text-gray-500 font-light text-[12px] pt-2">2-4 Hours Date</p>
            </div>
            <div className="text-center py-8 px-6">
              <div className="text-gray-500 uppercase tracking-widest text-[11px] font-bold mb-3 opacity-80">Deluxe VIP Option</div>
              <div className="text-[#d4af37] font-serif font-bold text-[24px] mb-2">₹25,000</div>
              <p className="text-gray-500 font-light text-[12px] pt-2">5-6 Hours Service</p>
            </div>
          </div>
        </div>

        {/* Naughty Form */}
        <div className="bg-white border border-gray-100 shadow-xl flex flex-col md:flex-row mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="w-full md:w-1/2 relative min-h-[350px]">
            <img src={category.image} alt="Form side banner" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115]/90 to-[#0f1115]/50"></div>
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center relative z-10 bg-white">
            <div className="mb-10 text-center md:text-left">
              <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                 <div className="w-6 h-[1px] bg-[#d4af37]"></div>
                 <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest">Discrete Coordination</span>
              </div>
              <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-2">Hire {category.title}?</h2>
              <p className="text-gray-500 font-light text-[14px]">Verify your contact credentials to proceed with dispatch catalog</p>
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
                  <select className="w-full bg-transparent border-b border-gray-300 px-2 py-3 text-[14px] focus:outline-none focus:border-[#0f1115] text-gray-500 transition-colors appearance-none" defaultValue="Gurgaon">
                    <option>Gurgaon</option>
                    <option>Delhi Aerocity</option>
                  </select>
                  <select className="w-full bg-transparent border-b border-gray-300 px-2 py-3 text-[14px] focus:outline-none focus:border-[#0f1115] text-gray-500 transition-colors appearance-none" defaultValue="Any In-Call / Outcall">
                    <option>Any In-Call / Outcall</option>
                    <option>Out-Call only</option>
                    <option>In-Call only</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-3 pt-4">
                  <div className="relative flex items-center justify-center w-4 h-4">
                     <input type="checkbox" id="newsletter_cat" className="peer w-4 h-4 opacity-0 absolute cursor-pointer" />
                     <div className="w-4 h-4 border border-gray-300 bg-white peer-checked:bg-[#0f1115] peer-checked:border-[#0f1115] transition-colors flex items-center justify-center">
                        <Check size={12} className="text-white opacity-0 peer-checked:opacity-100" />
                     </div>
                  </div>
                  <label htmlFor="newsletter_cat" className="text-[13px] text-gray-500 cursor-pointer user-select-none font-light">Agree to receive direct callback from dispatchers</label>
                </div>
                
                <div className="pt-6">
                  <button type="submit" className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-3.5 text-[11px] font-bold tracking-widest uppercase transition-colors w-full border border-[#0f1115]">
                    Submit Credentials
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
                <h4 className="text-[18px] font-serif font-bold text-[#0f1115] mb-2">Verify Coordinates Received!</h4>
                <p className="text-[13.5px] text-gray-500 font-light leading-relaxed mb-6">
                  Thank you, {formName}! We have processed your local coordinate query for {category.title}. Exclusive active catalogs will be dispatched to {formEmail} shortly.
                </p>
                <button 
                  onClick={() => { setFormSubmitted(false); setFormName(''); setFormEmail(''); }}
                  className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-colors"
                >
                  Query New Category
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
