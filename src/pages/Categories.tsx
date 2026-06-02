import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import ProfileModal from '../components/ProfileModal';

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replaceAll('--', '-');
};

export default function Categories() {
  const [selectedProfile, setSelectedProfile] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProfile = (profile: any) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };
  const categoryList = [
    { title: "Russian Escorts in Gurgaon", desc: "If you are looking forward to meeting Russian escorts in Gurgaon , then you are at the right place. With us, you can expect hot and beautiful Russian escorts who will be happy to accompany you anywhere you want. These Russian girls will make sure you have a fun and enjoyable time with them, every time you hire their services.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Independent Escorts in Gurgaon", desc: "Independent escorts are available 24/7 you can meet them for their amazing service like girlfriend experience. Independent Escorts in Gurgaon are highly skilled in foreplay as they know it is extremely important for pleasure. You can just have fun and forget that you even met her. They are professionals and are there just to please and satisfy you.", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Model Escorts in Gurgaon", desc: "If you are looking forward to meeting Models escorts in Gurgaon, then you are at the right place. At Roshni Khanna, expect hot and beautiful Models escorts, happy to accompany you anywhere you want for an unforgettable experience. These Models girls will make sure you have fun and enjoyable time with them, every time you hire their services.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Foreigner Call Girls Gurgaon", desc: "Want to have fun with the best exotic, lavishing, slender, perfect and juicy foreigner call girls then you are at the right doorstep to have your desires fulfilled in a way that even you can not have even imagine. These foreigner girls have the perfect assets in the city and can not be matched by anyone in any means. Your desires will be attained at a very rapid pace and you will not be satisfied but amazed by what you will get.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Young Call Girls Gurgaon", desc: "Meet the most beautiful and ravishing young girls in Gurgaon region.These young girls are very horny to get penetrated deep down and they are really fed up with the artificial ways to get their arousing feelings get satisfied.Now they are hunting for real men like you to kick the hell out of them and show them who really is their daddy.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Indian Escorts in Gurgaon", desc: "Meet hot Indian escort at a lightning fast speed on your call and you can also get the pleasure and nasty feeling by enjoying our premium call girls services .The naughty girls will surely drive the hell out of you.Girls are professional in nature and they know very well how to drain your thirst.So what are you waiting for!!Just hit the call number and bang the best Indian escorts available in Gurgaon.", image: "https://images.unsplash.com/photo-1515155075601-2003c2069b2d?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Housewife Escorts in Gurgaon", desc: "Get the desire you want by enjoying with Desperate Housewife escorts at the tip of your fingertips. Meet trusted housewives at the lightening fast speed as soon as you call to us. These housewives are very desperate and craving something really big and special. They have the perfect body and the moves to get you kneel down to your knees and do all the naughty stuffs that you want to have with them.", image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Air Hostess Escorts in Gurgaon", desc: "Get the desire you want by enjoying with Desperate Housewife escorts at the tip of your fingertips. Meet trusted housewives at the lightening fast speed as soon as you call to us. These housewives are very desperate and craving something really big and special. They have the perfect body and the moves to get you kneel down to your knees and do all the naughty stuffs that you want to have with them.", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "VIP Call Girls in Gurgaon", desc: "If you are looking forward to meeting VIP escorts in Gurgaon, then you are at the right place. At Roshni Khanna, expect hot and beautiful VIP escorts, happy to accompany you anywhere you want for an unforgettable experience. These VIP girls will make sure you have fun and enjoyable time with them, every time you hire their services. Girlfriend experience or in an event, these VIP girls in Gurgaon will make you feel special.", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "College Call Girls in Gurgaon", desc: "Today, having a girl by side as secretary for business works is quite common among most of the businessmen. And, it has become a matter of interest for men to have girls to accompany them on their tours or business trips. Men have different preferences when they choose a girl and hence they take into consideration several aspects.", image: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "High Profile Escorts in Gurgaon", desc: "Warm welcome to everyone. If you are a person who prefers class and high profile escorts and hookers in Gurgaon, then we are the right option for you. There are a lot of nicely groomed escorts who thrive to get a position for them in the leisure Industry. To remain their struggle and to fulfill their physical needs they have joined our services as part time occupation.", image: "https://images.unsplash.com/photo-1534068590799-09895a7090bb?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Punjabi Call Girls in Gurgaon", desc: "There is no doubt that Punjabi girls are very exciting and enthralling. These girls are always full of energy and excitement. They are the most passionate girls you can find in the adult entertainment industry. Punjabi call girls in Gurgaon are always popular among handsome hunks. They are in huge demand, as they always meet the expectations of clients and go beyond their imagination.", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Busty Escorts in Gurgaon", desc: "Sexual pleasure is the need of every man. We all want sexual pleasure in our love life. However, to have perfect sexual experiences, we need to have an ideal female companion. But it is also true that not every man is lucky enough to get the right female partner. There are a number of men who are single and do not have a spouse or girlfriend.", image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Slim Escorts in Gurgaon", desc: "Having a perfect match in our lives is very important. We want a girl in our lives who is slim, sexy, and bored. However, findings are that girls have never been an easy affair for men. Gentlemen face numerous hurdles on their way to finding slim and trim girls in the town. If you are also someone who is dealing with similar kinds of challenges, you are at the right place.", image: "https://images.unsplash.com/photo-1515155075601-2003c2069b2d?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Affordable Escorts in Gurgaon", desc: "Enjoying adult entertainment services is something that we all desire. We all crave the companionship of the most beautiful and glamorous girl in the town. However, most of the gentlemen often take a step back from escort services. Do you know why? Well, this is because of their low budget. They think that hiring services is an expensive affair for them.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Celebrity Escorts in Gurgaon", desc: "Some people dream of having a celebrity as a sex partner.They play different roles assuring the clients to be happy and satisfied through their interesting activities and with their experience also which they show on the bed with you.The roles of the celebrities that are often hired by the individuals are to entertain as well as please with perfect pleasure and to complete their dream of having sex with a celebrity.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Asian Escorts in Gurgaon", desc: "Get the most exclusive companionship of Asian Escorts. They are the finest escorts available to indulge in an immersive experience with you. These lovely girls are your ultimate companions for lovemaking experiences. When you are indulging in an erotic experience with an Asian girl, your love life becomes very exciting and soothing. These girls assure you of all the love and fetishes that you have been Craving for a long time.", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Aunty Escorts in Gurgaon", desc: "Do you crave orgasmic fun? Is it your desire to experience something sensational in your love life? Are you looking forward to having adult entertainment like never before? Do you want something exceptional in your love life that you have never experienced? If that is the case, look no further than Aunty Escorts in Gurgaon. These aunty escorts are very horny and busty.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Teen Escorts in Gurgaon", desc: "Are you looking for sensual fetishes? Do you want a break from monotony? Is it your desire to experience something intense and exciting? If your answer to any of these questions is yes, then hire teen escorts right away. Yes, teen escorts in Gurgaon are your perfect choice to have limitless entertainment. They are young and energetic girls who are eager to meet you. They will greet you with orgasmic fun and erotic services.", image: "https://images.unsplash.com/photo-1534068590799-09895a7090bb?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Mature Escorts in Gurgaon", desc: "Indulge in an immersive experience with the finest girls we bring to you. Dear gentlemen, welcome to the world of romance and sensuality. You are the ultimate destination where your dream girl is waiting for you. Meet our top-notch mature escorts in Gurgaon. They are your perfect choice for sensual entertainment and fetishes. If you are fed up with your unfulfilled desires, you are at the right place.", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400&h=300" },
    { title: "Russian Escorts in Aerocity", desc: "Are you looking for a memorable encounter with a Russian Escorts in Aerocity? Look no further. We offer Russian escorts to make your nights romantic. These Russian girls bring a unique touch of elegance and charm. They are experienced, skilled, and trusted to make your time unforgettable. Russian escorts offer a mix of culture, class, and warmth. They understand the art of true companionship.", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400&h=300" }
  ];

  const profiles = [
    { name: 'Amrita', desc: 'You will be delighted if you meet me for private pleasure. I am a feminine, charming, and...', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Mohini', desc: 'Are you looking for a companion to spend time with and share all your feelings with? I am Mohini...', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Brinda', desc: 'Hi, this is Brinda celebrity escort living in South City Gurgaon. Are you looking for a real lady? Do...', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Julia', desc: 'Hello guys, she is Julia a Russian escort girl of your dreams Living in Sushant Lok, Gurgaon. Do y...', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Diya', desc: 'Hello guys, I\'m Diya Model Escorts Living in Manesar, Gurgaon. I give services to all t...', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Jacqueline', desc: 'Do you like juicy girls with hot figures? Do you want to get intimate with them and do a...', image: 'https://images.unsplash.com/photo-1515155075601-2003c2069b2d?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Reena', desc: 'Hello, I am Reena, an independent escort in Gurgaon. I am a true Gurgaon girl who like...', image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Ellison', desc: 'Hi, This is Ellison Russian Escort Living in Aerocity. Ellison is a woman who will take you on a...', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Dhurvi', desc: 'I am Dhruvi, a qualified companion ready to bring you her expertise and caring nature. Sh...', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Aavanya', desc: 'I am Aavanya, an Indian escort girl in MG Road, Gurgaon who knows exactly what you crave. ...', image: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Nitara', desc: 'Nitara is a sensual and adventurous Escort in Sushant Lok, Gurgaon who loves to...', image: 'https://images.unsplash.com/photo-1534068590799-09895a7090bb?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Nithya Rai', desc: 'She is Nithya High Profile Escort Living in Mahipalpur. Nithya is a woman of high standards, with...', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=400&h=500' }
  ];

  const servicesList = [
    { title: 'Girlfriend Experience (GFE)', desc: 'Escorts can provide you with an experience similar to a girlfriend. But the only difference is that she will be much better with you than your girlfriend.', image: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&q=80&w=600&h=400' },
    { title: 'Full Body Sensual Massage', desc: 'A sensual full body massage provides relaxation and rejuvenation to the body. It is also a great sex booster as it opens all the blocked blood vessels...', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600&h=400' },
    { title: '24X7 Available', desc: 'Escort services are available anytime, anywhere in gurgaon as per your need. Escorts operate either with agencies or independently...', image: 'https://images.unsplash.com/photo-1534068590799-09895a7090bb?auto=format&fit=crop&q=80&w=600&h=400' }
  ];

  return (
    <div className="w-full bg-[#f9f9f9]">
      {/* Hero Banner */}
      <div className="relative bg-[#0f1115] overflow-hidden min-h-[350px] flex items-center justify-center pt-8 pb-12">
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2000&h=800" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover object-top opacity-20 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-[#1a1d24]/60"></div>
        <div className="relative z-10 text-center flex flex-col items-center mt-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#d4af37]"></div>
            <span className="text-[#d4af37] tracking-[0.2em] uppercase text-[10px] font-bold">Curated Selections</span>
            <div className="h-[1px] w-8 bg-[#d4af37]"></div>
          </div>
          <h1 className="text-white text-4xl md:text-[50px] font-serif font-bold tracking-wide mb-8">
            Companionship Categories
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

      <div className="max-w-[1240px] mx-auto px-4 py-16">
        {/* Intro */}
        <div className="mb-16 border-b border-[#0f1115]/10 pb-12 text-center max-w-4xl mx-auto">
          <h2 className="text-[32px] md:text-[38px] font-serif font-bold text-[#0f1115] mb-8 leading-[1.2]">
            Different <span className="italic text-[#791b29]">Styles of Companionship</span> For Your Pleasure
          </h2>
          <p className="text-gray-500 font-light text-[15.5px] leading-relaxed space-y-4 mb-6">
            Escort in Gurgaon are one of the best in the world. We cater to the demands and needs of our clients for all sorts of girls. We provide girls as well as accommodation for pleasure. As a lot of bachelors live in Gurgaon and nearby areas, they need girls to satisfy their need for intimacy and physical pleasure. Beautiful, independent, and professional escorts are available for your satisfaction and enjoyment at affordable prices. They provide different kinds of services. With escorts, you have to think only about yourself and what you want without worrying about what the girl needs. You can have intimate and private fun with escorts in Gurgaon. Agencies provide both in-call and out-call services. Since bachelors live in shared accommodation, they prefer outcall services because arranging a place for intimate fun is always an issue for them.
          </p>

          <h2 className="text-[26px] md:text-[28px] font-serif font-bold text-[#0f1115] mb-6 mt-12">
            Models From All Over The World
          </h2>
          <p className="text-gray-500 font-light text-[15.5px] leading-relaxed space-y-4 mb-10">
            You can have fun and secret fun with girls from all over the world. Our agency provides you with a lot of options to choose from. You can make a booking with the girl of your choice and do all sorts of dirtiest and naughtiest things with her. We have all types of girls like foreigners, housewives, working-class, college-going girls. You can realize all your fantasies with these escorts as they are there just to give you pleasure and fill your life with lust and passion. We have girls from all over the world, you name a country and the we will provide you a girl from that country. You just have to pay money and enjoy as much as you want. Some men like curvy girls with big boobs and big asses; we can provide your dream girl to you for an affordable price.
          </p>
        </div>

        {/* View Top Categories Grid */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-[32px] md:text-[38px] font-serif font-bold text-[#0f1115] mb-4 text-center">
              Curated Selections
            </h2>
            <div className="h-[2px] w-16 bg-[#d4af37]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryList.map((cat, idx) => (
              <div key={idx} className="bg-white border border-gray-100 group flex flex-col hover:shadow-2xl transition-all duration-500 rounded-sm">
                <Link to={`/categories/${slugify(cat.title)}`} className="block relative aspect-[3/2] overflow-hidden cursor-pointer">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <Link to={`/categories/${slugify(cat.title)}`} className="block">
                    <h3 className="text-[#0f1115] font-serif font-bold text-[20px] mb-3 group-hover:text-[#d4af37] transition-colors">{cat.title}</h3>
                  </Link>
                  <p className="text-gray-500 text-[13.5px] font-light leading-relaxed line-clamp-3 mb-5 flex-1">
                    {cat.desc}
                  </p>
                  <Link to={`/categories/${slugify(cat.title)}`} className="inline-flex items-center gap-2 text-[#0f1115] text-[11px] font-bold uppercase tracking-widest group-hover:text-[#d4af37] transition-colors">
                    Explore Category <span className="text-[#d4af37]">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#0f1115] text-white p-8 md:p-16">
           <div>
             <h2 className="text-[28px] md:text-[34px] font-serif font-bold mb-6 text-[#d4af37]">
               For The Discerning Gentleman
             </h2>
             <p className="text-gray-300 font-light text-[15px] leading-relaxed mb-4">
               Our Agency serves a variety of clients like service class, businessmen and politicians as well. Every client has different needs and our agency takes care of their needs. We have high-class escorts and provide different services like full body massage, girlfriend experience, 24×7 availability, and role play. High-class escorts are preferred by businessmen and people working at higher positions so that they can take these girls to parties and events as their companions. 
             </p>
             <p className="text-gray-300 font-light text-[15px] leading-relaxed">
               Escorts in Gurgaon are professionals and provide the best services to you for overall satisfaction. They know how to please a man and will do everything you want them to. You just have to pick your phone and make a booking and enjoy.
             </p>
           </div>
           <div className="hidden md:block relative aspect-square">
              <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800&h=800" alt="Discerning Gentleman" className="w-full h-full object-cover opacity-80 mix-blend-luminosity border border-white/10" />
           </div>
        </div>

        {/* Top Escort Profiles */}
        <div className="mb-16">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-[32px] md:text-[38px] font-serif font-bold text-[#0f1115] mb-4 text-center">
              Featured Profiles
            </h2>
            <div className="h-[2px] w-16 bg-[#d4af37]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {profiles.map((profile, idx) => (
              <div key={idx} className="bg-white border border-gray-100 group flex flex-col hover:shadow-2xl transition-all duration-500 rounded-sm">
                <div 
                  className="relative aspect-[3/4] overflow-hidden cursor-pointer"
                  onClick={() => handleOpenProfile(profile)}
                >
                  <img src={profile.image} alt={profile.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 
                    className="font-serif font-bold text-[#0f1115] text-[18px] mb-2 group-hover:text-[#d4af37] cursor-pointer transition-colors"
                    onClick={() => handleOpenProfile(profile)}
                  >
                    {profile.name}
                  </h3>
                  <p className="text-gray-500 font-light text-[13px] leading-relaxed mb-4 flex-1 line-clamp-2">
                    {profile.desc}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <button 
                      onClick={() => handleOpenProfile(profile)}
                      className="text-[#0f1115] text-[11px] font-bold uppercase tracking-widest hover:text-[#d4af37] cursor-pointer transition-colors"
                    >
                      View Details
                    </button>
                    <div className="flex gap-3 text-gray-400">
                       <a href="tel:9996265679" className="hover:text-[#0f1115] transition-colors"><Phone size={14} /></a>
                       <a href="https://wa.me/919996265679" className="hover:text-[#25D366] transition-colors"><Mail size={14} /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/escorts" className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-10 py-4 text-[12px] font-bold tracking-widest uppercase transition-colors inline-block border border-[#0f1115]">
              Explore Complete Gallery
            </Link>
          </div>
        </div>

        {/* Services Offered */}
        <div className="mb-16">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-[32px] md:text-[38px] font-serif font-bold text-[#0f1115] mb-4 text-center">
              Our Services
            </h2>
            <div className="h-[2px] w-16 bg-[#d4af37]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {servicesList.map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-100 group hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#0f1115]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-[20px] text-[#0f1115] mb-3 group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
                  <p className="text-gray-500 font-light text-[14px] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Pricing section matching exactly Home pricing */}
      <div className="bg-[#0f1115] border-t-[3px] border-[#d4af37] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="h-[1px] w-8 bg-[#d4af37]"></div>
             <span className="text-[#d4af37] tracking-[0.2em] font-bold text-[10px] uppercase">Transparent Value</span>
             <div className="h-[1px] w-8 bg-[#d4af37]"></div>
          </div>
          <h2 className="text-white text-3xl md:text-[42px] font-serif font-bold mb-6">VIP Memberships & Tariffs</h2>
          <p className="text-gray-400 text-[14px] leading-[1.8] max-w-3xl mx-auto mb-16 font-light">
            Discreet, pre-arranged packages tailored for the discerning executive. Premium outcall services to 5-star accommodations command bespoke rates. Connect with our coordinators for private event bookings or extended engagements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Package 1 */}
            <div className="bg-[#1a1d24] border border-[#d4af37]/30 p-8 flex flex-col items-center hover:-translate-y-2 hover:border-[#d4af37] transition-all duration-300 group">
              <span className="text-white font-bold tracking-widest text-[12px] uppercase mb-4 opacity-50 group-hover:opacity-100 transition-opacity">Briefing Date</span>
              <div className="text-[#d4af37] text-4xl font-serif font-bold mb-2">₹15,000</div>
              <div className="text-gray-400 text-[13px] mb-6">1-2 Hours (In-Call)</div>
              <div className="w-full h-[1px] bg-white/5 mb-6"></div>
              <ul className="text-gray-400 text-[13px] space-y-3 font-light mb-8 text-center">
                <li>Elite Companionship</li>
                <li>Private Meetups</li>
                <li>Beverages Included</li>
              </ul>
              <a href="tel:9996265679" className="mt-auto w-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0f1115] py-3 text-[11px] font-bold uppercase tracking-widest transition-colors block text-center">Inquire Now</a>
            </div>

            {/* Package 2 */}
            <div className="bg-gradient-to-b from-[#1a1d24] to-[#0f1115] border border-[#d4af37] p-8 flex flex-col items-center transform md:scale-105 shadow-2xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-[#0f1115] font-bold text-[9px] uppercase tracking-widest px-4 py-1.5 shadow-lg">Most Requested</div>
              <span className="text-white font-bold tracking-widest text-[12px] uppercase mb-4">Evening Escapade</span>
              <div className="text-[#d4af37] text-5xl font-serif font-bold mb-2">₹20,000</div>
              <div className="text-gray-400 text-[13px] mb-6">2-4 Hours</div>
              <div className="w-full h-[1px] bg-white/10 mb-6"></div>
              <ul className="text-gray-300 text-[13.5px] space-y-4 font-light mb-8 text-center">
                <li>Premium Selection</li>
                <li>Outcall Available</li>
                <li>Dinner Dates</li>
                <li>Unrestricted Fun</li>
              </ul>
              <a href="tel:9996265679" className="mt-auto w-full bg-[#d4af37] border border-[#d4af37] text-[#0f1115] hover:bg-white hover:border-white py-3.5 text-[11px] font-bold uppercase tracking-widest transition-colors block text-center shadow-lg">Reserve Evening</a>
            </div>

            {/* Package 3 */}
            <div className="bg-[#1a1d24] border border-[#d4af37]/30 p-8 flex flex-col items-center hover:-translate-y-2 hover:border-[#d4af37] transition-all duration-300 group">
              <span className="text-white font-bold tracking-widest text-[12px] uppercase mb-4 opacity-50 group-hover:opacity-100 transition-opacity">Overnight</span>
              <div className="text-[#d4af37] text-4xl font-serif font-bold mb-2">₹25,000</div>
              <div className="text-gray-400 text-[13px] mb-6">Full Night Stay</div>
              <div className="w-full h-[1px] bg-white/5 mb-6"></div>
              <ul className="text-gray-400 text-[13px] space-y-3 font-light mb-8 text-center">
                <li>Unlimited Passion</li>
                <li>Unrestricted Hours</li>
                <li>High Profile Models</li>
              </ul>
              <a href="tel:9996265679" className="mt-auto w-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0f1115] py-3 text-[11px] font-bold uppercase tracking-widest transition-colors block text-center">Inquire Now</a>
            </div>
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
