import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hotels() {
  const [showAllHotels, setShowAllHotels] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const topHotels = [
    { name: 'Pllazio Hotel', desc: 'Here you will discover proficient escort benefits in Gurgaon close to The Pllazio Hotel', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600&h=400', path: '/hotels/pllazio' },
    { name: 'Bristol Hotel', desc: 'Spice up your night with these gorgeous escorts available near Bristol Hotel in gurgoan', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600&h=400', path: '/hotels/bristol' },
    { name: 'The Oberoi Hotel', desc: 'Our escort service offer attractive call girl escorts near the oberoi hotel and you can choose the girl', image: 'https://images.unsplash.com/photo-1542314831-c6a4d2759e32?auto=format&fit=crop&q=80&w=600&h=400', path: '/hotels/oberoi' },
    { name: 'Leela Ambience Hotel', desc: 'Sexy call girl escorts near Leela Ambience Hotel are available 24/7 to entertain their clients', image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80&w=600&h=400', path: '/hotels/leela' },
    { name: 'Taj City Centre Hotel', desc: 'Experience the best call girl escorts near Taj City Centre Hotel available for premium clients', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=600&h=400', path: '/hotels/taj' },
  ];

  const hotelList1 = [
    'Taj City Centre Hotel', 'Courtyard by Marriott Hotel', 'Hyatt Regency Hotel', 'Hilton Garden Inn Hotel',
    'Trident Hotel', 'ITC Grand Bharat Hotel', 'Le Meridien Hotel', 'Crowne Plaza Hotel',
    'Radisson Hotel', 'Anya Hotel', 'DoubleTree by Hilton Hotel', 'Westin Hotel'
  ];

  const hotelList2 = [
    'Ahuja Residency DLF Phase 2', 'Asian Suites HUDA City Centre', 'Asian Suites IFFCO Metro Station', 'Bloom Boutique Hotel',
    'Chaupal Hotel and Banquet', 'Citrus Check Inns', 'Clarens Hotel', 'Corporate Stays Suncity',
    'Country Inn and Suites', 'DLF City Club 4 Hotel', 'DoubleTree by Hilton', 'Eddison Hotel',
    'FabHotel Premium Nest', 'Fortune Select Global', 'Gazebo Inn and Suites', 'Golden Tulip Hotel',
    'Grand Hyatt Hotel', 'Heritage Village Resorts', 'Holiday Inn Sector 90', 'HollyHocks Residency Hotel',
    'Hotel Anandam', 'Hotel AZAD Square', 'Hotel City Premier', 'Hotel DS Clarks Inn',
    'Hotel Golf View Suites', 'Hotel Green Earth', 'Hotel Hyatt Place', 'Hotel Imperial Park',
    'Hotel Indiyaah Inn', 'Hotel Levante', 'Hotel Mulberry Retreat', 'Hotel Redbrick Villa',
    'Hotel Sai Village', 'Hotel Tavisha Villa', 'Inde Hotel Cyber City', 'Inde Hotel Signature Tower',
    'Inde Hotel Vista Woods', 'iSTAY LushGreen Villa', 'Kabul Hotel Medanta', 'Lemon Tree Hotel Sohna',
    'Lemon Tree Premier 1', 'Lemon Tree Premier 2', 'Paradise inn hotel', 'Park Inn Hotel',
    'Park Plaza Gurugram', 'Quality Inn Hotel', 'Ramada Gurgaon Central', 'Rosewood Apartment Hotel',
    'Royal Residence MG Road', 'Savoy Suites Manesar', 'Square 9 Inn Hotel', 'Staayz Premium Hotel',
    'The Atara Hotel', 'The Iris A Boutique Hotel', 'The Palms Town', 'Treebo IFFCO Chowk',
    'Treebo Premium Eden Residency', 'Treebo White Castle', 'TreeHouse Queens Pearl', 'Trinity Corporate Suites',
    'Tulalip Hotel', 'Vivid Boutique Hotel'
  ];

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
            Hotels
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
              Gurgaon has some of the best hotels in the country. With world-class infrastructure and best-in-class facilities, hotels in Gurgaon offer a leisurely stay for you. All sorts of hotels are available as per your budget. All the hotels are couple friendly and offer safe accommodation. You do not have to worry about your security and privacy. These beautiful hotels offer a luxurious stay and are a hot choice amongst travellers from all over the world. From serene and peaceful views to the best city lights view, you have a lot of options to choose from. Hotels in Gurgaon are available for all sorts of people and have the best facilities, along with the professionally trained staff. Some of the hotels even provide pickup and drop from the airport and chauffeur services.
            </p>
            <p>
              There are various sorts of activities like massage, spa, hair treatments, and jacuzzi available in hotels. With the best hotels like The Westin, The Oberoi, Hyatt, Ramada and The Taj offering you the best view and services like in house swimming pool and restaurants, you do not have to worry about anything apart from spending some relaxing and fun moments with your partner. Also, these hotels are easily accessible through all modes of transport like metro, cabs and also near to the International Airport. You can avail in house shopping facilities as well and these hotels also provide treks and tours to make your stay more interesting. Hotels in Gurgaon provide you a secure environment so that you can enjoy and derive as much pleasure as you want. The rooms are spacious and completely hygienic and all the facilities are available in your room like in-room dining, television and a nice shower to take your stress away. Rooms have the best class beds and equipment.
            </p>
            <p>
              Almost all the hotels in Gurgaon have lounge facilities where you can enjoy and forget the world. Clubs in Gurgaon organize parties every day and you can have a lot of fun at these parties. You can take your companion and dance your heart out to the best music. Hotels in Gurgaon are very much affordable and also provide packages to provide the best to you. Since the staff is trained, you do not have to worry about getting disturbed, you can just relax and enjoy yourself with your partner. They provide the best of everything.
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

        {/* Top Hotels */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-[32px] md:text-[38px] font-serif font-bold text-[#0f1115] mb-4 text-center">
              View Gurgaon Top Hotels
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {hotelList1.map((hotel, idx) => {
              const path = getHotelPath(hotel);
              return (
                <Link to={path} key={idx} className="bg-white border border-gray-200 hover:border-[#d4af37] text-[#0f1115] hover:text-[#d4af37] text-center p-4 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 group block shadow-sm hover:shadow-md">
                  {hotel}
                </Link>
              );
            })}
          </div>

          <div className="text-center mb-10">
             <button 
                onClick={() => setShowAllHotels(!showAllHotels)}
                className="bg-transparent border border-[#0f1115] hover:bg-[#0f1115] hover:text-[#d4af37] text-[#0f1115] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest transition-colors cursor-pointer"
             >
                {showAllHotels ? 'Collapse Locations' : 'Discover All Partners'}
             </button>
          </div>

          {showAllHotels && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 animate-in fade-in duration-500 hidden-scroll">
              {hotelList2.map((hotel, idx) => {
                const path = getHotelPath(hotel);
                return (
                  <Link to={path} key={idx} className="bg-gray-50 border border-gray-100 text-gray-500 hover:bg-white hover:border-[#d4af37] hover:text-[#0f1115] text-center p-3 text-[12px] font-light transition-colors block">
                    {hotel}
                  </Link>
                );
              })}
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
            The pricing packages for Indian escorts start from 15000 rupees for 2 hours, and for Russian escorts, the package starts from 20000 rupees for 2 hours. These are the basic packages, and for additional services like massage additional charges are payable. The basic pricing package excludes the cost of accommodation. For services with accommodation in 3-star hotel, the package starts from 20000 rupees for 3 hours, for 5-star hotels, package starts from 25000 rupees. We also have different nationalities of girls, and their price varies. We also have packages for long-duration services starting from 30000 rupees you can also check our rates page. Call us to enquire more about pricing packages for the best escort services.
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
              Contact us 24/7 for Escort Services in Aerocity. You will select the girl of your choice before you confirm your appointment. Call or fill the contact form below to get started.
            </p>
            <a href="tel:9996265679" className="bg-[#d4af37] hover:bg-white text-[#0f1115] px-10 py-4 text-[12px] font-bold uppercase tracking-widest shadow transition-colors inline-block relative z-10">
              Engage Agency
            </a>
          </div>

          {/* Form */}
          <div className="mt-16 border border-gray-100 flex flex-col md:flex-row shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-3xl translate-x-1/3 pointer-events-none"></div>
            
            <div className="w-full md:w-1/2 min-h-[400px] relative">
              <img src="https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=800&h=800" alt="Form side" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115]/90 to-[#0f1115]/50"></div>
            </div>
            
            <div className="w-full md:w-1/2 p-10 md:p-14 bg-white flex flex-col justify-center relative z-10">
              <div className="mb-10 text-center md:text-left">
                <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                   <div className="w-6 h-[1px] bg-[#d4af37]"></div>
                   <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest">Discrete Coordination</span>
                </div>
                <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-2">Feeling Naughty?</h2>
                <p className="text-gray-500 font-light text-[14px]">Get real photos of female escorts with phone number</p>
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
                  <select className="w-full bg-transparent border-b border-gray-300 px-2 py-3 text-[14px] font-light focus:outline-none focus:border-[#0f1115] text-gray-500 transition-colors appearance-none" defaultValue="Gurgaon">
                    <option>Gurgaon</option>
                    <option>Delhi</option>
                    <option>Noida</option>
                  </select>
                  <select className="w-full bg-transparent border-b border-gray-300 px-2 py-3 text-[14px] font-light focus:outline-none focus:border-[#0f1115] text-gray-500 transition-colors appearance-none" defaultValue="Any">
                    <option>Any</option>
                    <option>In-Call</option>
                    <option>Out-Call</option>
                  </select>
                  
                  <div className="flex items-center gap-3 pt-4">
                    <div className="relative flex items-center justify-center w-4 h-4">
                       <input type="checkbox" id="newsletter" className="peer w-4 h-4 opacity-0 absolute cursor-pointer" />
                       <div className="w-4 h-4 border border-gray-300 bg-white peer-checked:bg-[#0f1115] peer-checked:border-[#0f1115] transition-colors flex items-center justify-center">
                          <CheckCircle size={12} className="text-white opacity-0 peer-checked:opacity-100" />
                       </div>
                    </div>
                    <label htmlFor="newsletter" className="text-[13px] text-gray-500 cursor-pointer user-select-none font-light">Sign me up for the catalog newsletter.</label>
                  </div>
                  
                  <div className="pt-6">
                    <button type="submit" className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-3.5 text-[11px] font-bold tracking-widest uppercase transition-colors w-full border border-[#0f1115]">
                      Submit Details
                    </button>
                  </div>
                  
                  <p className="text-center text-[12px] text-gray-400 pt-4 font-light">
                    We <strong>never</strong> index or share your credentials setup.
                  </p>
                </form>
              ) : (
                <div className="bg-gray-50 border border-gray-200 p-8 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] flex items-center justify-center mx-auto mb-4 bg-white">
                    <CheckCircle size={20} className="text-[#d4af37] animate-bounce" />
                  </div>
                  <h4 className="text-[18px] font-serif font-bold text-[#0f1115] mb-2">Request Received Successfully!</h4>
                  <p className="text-[13.5px] text-gray-500 font-light leading-relaxed mb-6">
                    Thank you, {formName}! We have registered your inquiry and custom packages matching your location will be dispatched to {formEmail} shortly.
                  </p>
                  <button 
                    onClick={() => { setFormSubmitted(false); setFormName(''); setFormEmail(''); }}
                    className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-colors"
                  >
                    Send Another Response
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
