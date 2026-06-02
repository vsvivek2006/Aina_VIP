import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicesList = [
    {
      title: 'Girlfriend Experience (GFE)',
      desc: 'Escorts can provide you with an experience similar to a girlfriend. But the only difference is that she will be much better with you than your girlfriend.',
      image: '/image20.png',
      path: '/services/girlfriend-experience'
    },
    {
      title: 'Erotic Massage',
      desc: 'A sensual full body massage provides relaxation and rejuvenation to the body. It is also a great sex booster as it opens all the blocked blood vessels...',
      image: '/image19.png',
      path: '/services/erotic-massage'
    },
    {
      title: '24X7 Available',
      desc: 'Escort services are available anytime, anywhere in gurgaon as per your need. Escorts operate either with agencies or independently...',
      image: '/image17.png',
      path: '/services/24x7-available'
    },
    {
      title: 'In-Call and Out-Call Services',
      desc: 'Beauty of our escort agency is nothing but there is a chance for each and everyone to choose the escort girls on their own taste.',
      image: '/image18.png',
      path: '/services/in-call-out-call'
    },
    {
      title: 'Escort Service for 1 2 3 Hours',
      desc: 'Experience erotic fun and entertainment In your love life with the companionship of the most seductive women.',
      image: '/image8.png',
      path: '/services/hourly'
    },
    {
      title: 'Escort Service Full Night',
      desc: 'It is our pleasure to have you here, where you will find the most exotic and high-end Gurgaon escort service for full night.',
      image: '/image3.png',
      path: '/services/full-night'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative bg-[#0f1115] overflow-hidden min-h-[400px] flex items-center justify-center pt-8 pb-12 border-b border-[#1a1d24]">
        <img 
          src="/image18.png" 
          alt="Premium Services" 
          className="absolute inset-0 w-full h-full object-cover object-top opacity-20 mix-blend-luminosity grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-transparent"></div>
        <div className="relative z-10 text-center flex flex-col items-center mt-4 max-w-4xl px-4">
          <div className="flex items-center gap-2 bg-[#d4af37]/10 backdrop-blur-md border border-[#d4af37]/30 text-[#d4af37] py-1.5 px-4 rounded-none text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 inline-block"></span> VIP Core Services
          </div>
          <h1 className="text-white text-3xl md:text-[50px] font-serif font-bold tracking-wide mb-8 drop-shadow-md leading-tight">
            Premium Elite Companionship & <span className="text-[#d4af37]">Discreet Experiences</span>
          </h1>
          <div className="flex gap-4">
            <a href="tel:9996265679" className="bg-[#d4af37] text-[#0f1115] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase hover:bg-white transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0f1115] rounded-full inline-block"></span> Secure Line
            </a>
            <Link to="/escorts" className="bg-transparent border border-[#d4af37] text-[#d4af37] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase hover:bg-[#d4af37] hover:text-[#0f1115] transition-colors">
              Access Roster
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-20">
        {/* Intro */}
        <div className="mb-20 border-b border-gray-100 pb-16 relative">
          <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#d4af37]/30 opacity-50"></div>
          <div className="text-gray-500 font-light text-[15px] leading-[2] space-y-6 max-w-4xl">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#0f1115] first-letter:mr-2 first-letter:float-left">
              In times like today when it is hard to manage a personal life between the busy working hours and socializing, it is usual to feel lonely and find the right company. Killing that loneliness is what we try to achieve with our Escort Service in Gurgaon.
            </p>
            <p>
              With our escort services, you can expect a beautiful female escort accompanying you wherever you wish. You want to go out for a coffee, enjoy a movie or just have a dinner before enjoying the dessert, you can meet independent girls, Russian girls or high-profile models in just a phone call. These beautiful ladies are fun to be around and knows very well how to get the party started. Hosting an event? You can choose to meet multiple escorts at the same time to bring a spark to your event with their charming personality and beautiful smile.
            </p>
            <p>
              We are available 24×7 over the phone, so you can reach out to us any time you need someone to spend some good and fun time. No matter if it is 3 AM in the morning, and your Saturday didn't go as expected, meet these girls for fun in Gurgaon and enjoy to the fullest in their company.
            </p>
          </div>
          <div className="flex gap-4 mt-10">
            <a href="tel:9996265679" className="bg-[#0f1115] text-[#d4af37] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#1a1d24] transition-colors">
              Dispatch: +91-9996265679
            </a>
            <a href="mailto:charlescharles6353@gmail.com" className="bg-transparent border border-[#0f1115] text-[#0f1115] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#0f1115] hover:text-[#d4af37] transition-colors">
              Executive Email Support
            </a>
          </div>
        </div>

        {/* Services Offered Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-[1px] w-8 bg-[#d4af37]"></div>
                <span className="text-[#d4af37] font-bold tracking-widest text-[10px] uppercase">Service Architecture</span>
                <div className="h-[1px] w-8 bg-[#d4af37]"></div>
             </div>
             <h2 className="text-[32px] md:text-[40px] font-serif font-bold text-[#0f1115]">
               Curated Experiences
             </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {servicesList.map((service, idx) => (
              <Link to={service.path} key={idx} className="bg-white border border-gray-100 group flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="bg-[#0f1115] text-[#d4af37] text-center py-4 px-6 border-b border-gray-800">
                  <h3 className="font-serif font-bold text-[18px] tracking-wide">{service.title}</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between items-center text-center">
                  <p className="text-gray-500 font-light text-[13px] leading-relaxed mb-6 line-clamp-3">
                    {service.desc}
                  </p>
                  <span className="text-[#0f1115] font-bold text-[10px] uppercase tracking-widest group-hover:text-[#d4af37] transition-colors border-b border-transparent group-hover:border-[#d4af37] pb-1">
                     Explore Detail
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12 pt-8 border-t border-gray-100">
            <Link to="/escorts" className="bg-transparent border border-[#0f1115] text-[#0f1115] px-10 py-3.5 text-[11px] uppercase tracking-widest font-bold hover:bg-[#0f1115] hover:text-[#d4af37] transition-colors inline-block">
              Review Roster
            </Link>
          </div>
        </div>

        {/* Content Section 1 */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24 pb-8 border-b border-gray-100">
          <div className="w-full md:w-2/3">
            <h2 className="text-[26px] md:text-[32px] font-serif font-bold text-[#0f1115] mb-6 leading-tight relative">
              <span className="absolute -left-6 top-2 w-[3px] h-3/4 bg-[#d4af37] hidden md:block"></span>
              Elite-class Gurgaon Escorts Service Offer Full-Night Sensual Entertainment
            </h2>
            <div className="text-gray-500 font-light text-[14px] leading-[2] space-y-5">
              <p>
                Are you feeling lonely and depressed? Do you want a companion who can meet your sexual expectations? Do you wish to fulfil all your sexual needs and fantasies? If yes, then all you need to do is to hire our Gurgaon escorts service. They are the most fascinating, high profile and seductive escorts available at your service. They are the elite-class escorts available in the city of Gurgaon.
              </p>
              <p>
                These are the women you need to make your sexual life exciting and entertaining. Their companionship will not disappoint you. You will always have satisfaction in your sex life when our girls are your female partners. Make these wonderful women a part of your love life, as they are the ones you need to have all the fun fetishes and romantic adventures.
              </p>
              <p>
                Our girls are excited, passionate and eager to meet you. Their curiosity to know your sexual fantasies is something out of the world. So, what are you wondering about? Choose such elite-class models and have a full night of sensual entertainment experience like never before.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="relative border border-gray-200 p-2 shadow-2xl bg-white">
               <img src="/image3.png" alt="Elite Class Escorts" className="w-full h-auto object-cover grayscale mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-700" />
            </div>
          </div>
        </div>

        {/* Content Section 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-24 pb-8 border-b border-gray-100">
          <div className="w-full md:w-2/3">
            <h2 className="text-[26px] md:text-[32px] font-serif font-bold text-[#0f1115] mb-6 leading-tight relative text-left">
              Top-Tier Escort Services with Ease and Convenience, 100% Safe
            </h2>
            <div className="text-gray-500 font-light text-[14px] leading-[2] space-y-5">
              <p>
                Escort services in Gurgaon are in huge demand these days. Many men want to enjoy our services. Therefore, we are truly desirable and remain on the bucket list of almost every man who comes to Gurgaon. The Hitech City is now popular, not only for its nightlife fun but also for the companionship services we bring to you. Therefore, if you also want to experience the unmatched services we bring to you, connect with us right now.
              </p>
              <p>
                We bring our top-tier escort services to you with complete ease and convenience. Hiring these services is absolutely easy. All you need to do is check out the girl you want today through our gallery and schedule an appointment with the help of our team members. Our team is very professional and always there to assist you. They will resolve all your queries. You can just dial our phone number, and we are available 24 by 7. This experience is truly convenient, as we are there to assist you anytime, anywhere, with no hassles.
              </p>
              <p>
                Moreover, we ensure your complete safety. All the call girls we have are medically fit. Therefore, connecting with them for a sexual experience is not a big deal for you. Moreover, they ensure complete privacy and security for you. They are highly professional girls who take complete care of your confidentiality. They never reveal your personal details to anybody else. So get ready for a 100 percent safe and reliable experience with our top-tier escorts service Gurgaon.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="relative border border-gray-200 p-2 shadow-2xl bg-white">
               <img src="/image16.png" alt="Top Tier Escorts" className="w-full h-auto object-cover grayscale mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-700" />
            </div>
          </div>
        </div>

        {/* Content Section 3 */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24 pb-8 border-b border-gray-100">
          <div className="w-full md:w-2/3">
            <h2 className="text-[26px] md:text-[32px] font-serif font-bold text-[#0f1115] mb-6 leading-tight relative">
               <span className="absolute -left-6 top-2 w-[3px] h-3/4 bg-[#d4af37] hidden md:block"></span>
              Sexiest Model Girls to Bring Premium and Worthwhile Gurgaon Escort Service
            </h2>
            <div className="text-gray-500 font-light text-[14px] leading-[2] space-y-5">
              <p>
                Escort girls in Gurgaon that will bring you a truly glamorous and seductive model. They exude glamour, seduction, and allure in their every move. We have different categories of adult entertainers available to entertain you. These adult models are the best in the adult entertainment industry. They are perfectionist models who are talented, smart, and elegant. Unlike others, they are not just here for sexual experiences, but they are here to give you all that you crave. Their companionship escorts service Gurgaon are perfect for all occasions and gatherings.
              </p>
              <p>
                You can take them for private parties, Business meetings, dinner dates, nightlife exploration, clubbing, city tours, travelling, etc. They are never going to let you down. Moreover, when you are indulging in sex experiences with our Gurgaon Escort Service, our girls will take complete care of your comfort. They will give you complete privacy so you can feel easy and relaxed.
              </p>
              <p>
                The love-making services they offer are truly erotic and exotic. This includes oral sex, threesomes, hookups, one-night stands, strip teasing, lap dancing, naughty plays, sex toy play, etc. Such experiences are rare to find anywhere else. All the services are completely safe and secure. So why wait? Hire them right away to have a wholesome experience like no other.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3">
             <div className="relative border border-gray-200 p-2 shadow-2xl bg-white">
                <img src="/image1.png" alt="Sexiest Model Girls" className="w-full h-auto object-cover grayscale mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-700" />
             </div>
          </div>
        </div>

        {/* Content Section 4 */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-16">
          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-[26px] md:text-[32px] font-serif font-bold text-[#0f1115] mb-6 leading-tight relative">
              Exclusive Models to Assist you 24/7 with a Variety of Gurgaon Escort Services
            </h2>
            <div className="text-gray-500 font-light text-[14px] leading-[2] space-y-5">
              <p>
                Until now, you must have understood the variety of Gurgaon escort services we bring to you. All these services are impeccable. Search services will give you an unparalleled experience. You will have an experience like never before, where everything is in your favour. Moreover, our exclusive models are there to assist you 24 by 7. Time is never a barrier for you when you want to get our girls. They are available round the clock, wherever and whenever you want.
              </p>
              <p>
                So forget about your hectic schedule and break the monotony with the connection of our Escort Service. These girls will build an intimate relationship with you. This relationship will last for long. However, there is no space for any commitments. Our girls are conscious of their feelings, but the experiences they offer you will be completely genuine and realistic. It's time to make your every dream come true with such high-class companions.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3">
             <div className="relative border border-gray-200 p-2 shadow-2xl bg-white">
                <img src="/image17.png" alt="Exclusive Models" className="w-full h-auto object-cover grayscale mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-700" />
             </div>
          </div>
        </div>
      </div>

      {/* Footer Call to Action */}
      <div className="bg-[#0f1115] py-20 px-4 relative border-t border-[#1a1d24]">
        <div className="absolute top-0 right-1/4 w-1/4 h-[1px] bg-gradient-to-l from-[#d4af37] to-transparent"></div>
        <div className="absolute inset-0 bg-[#d4af37]/5 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <h2 className="text-[#d4af37] font-serif text-[28px] md:text-[36px] font-bold mb-6">
            Initiate Contact Details To Reserve Kinks Now
          </h2>
          <p className="text-gray-400 font-light text-[15px] leading-[1.8] max-w-3xl mx-auto mb-10">
            Indulge in overnight kinks and fetishes right away. Dear gentleman, our girls are all set to accompany you. They are eager to meet you and greet you. So what are you waiting for? It's time for you to connect with us for escort services. Dial our phone number and find the perfect match for you. It will be our pleasure to host you with warmth, love and hugs!
          </p>
          <div className="flex gap-4 justify-center">
             <Link to="/contact" className="bg-[#d4af37] text-[#0f1115] px-10 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
               Access Dispatch
             </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
