import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react';

export default function ContactUs() {
  const { search } = useLocation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const hotel = params.get('hotel');
    if (hotel) {
      setMessage(`Hi Roshani, I am staying at "${hotel}" in Gurgaon. I would like to book a high-profile companion near my location. Please contact me with real photos and rates.`);
    }
  }, [search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !phoneNumber) return;
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#f9f9f9] min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-[#0f1115] overflow-hidden min-h-[380px] flex items-center justify-center pt-8 pb-12">
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000&h=800" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover object-top opacity-20 mix-blend-luminosity grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-[#1a1d24]/80"></div>
        <div className="relative z-10 text-center flex flex-col items-center mt-4">
           <div className="flex items-center gap-2 bg-[#d4af37]/10 backdrop-blur-md border border-[#d4af37]/30 text-[#d4af37] py-1.5 px-4 rounded-none text-[10px] font-bold uppercase tracking-widest mb-4">
             Priority Routing
          </div>
          <h1 className="text-white text-4xl md:text-[50px] font-serif font-bold tracking-wide mb-8 drop-shadow-md">
            Initialize Contact
          </h1>
          <div className="flex gap-4">
            <a href="tel:9996265679" className="bg-[#d4af37] text-[#0f1115] px-10 py-3.5 text-[11px] uppercase tracking-widest font-bold transition-colors hover:bg-white flex items-center gap-2">
              <Phone size={14} /> Secure Line
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Details */}
          <div className="pt-8">
            <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] mb-6">
              Establish Connection
            </h2>
            <p className="text-gray-500 font-light text-[15px] leading-[1.8] mb-12 border-l border-[#d4af37] pl-6 max-w-lg">
              We provide the best escort services in Gurgaon. Whether you are looking for an intimate evening, companionship for an event, or an overnight stay, we have a diverse portfolio of elegant escorts to meet your desires. Contact us today to make your booking.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-[#d4af37]/10 p-4 rounded-none border border-[#d4af37]/30 text-[#d4af37]">
                  <Phone size={20} />
                </div>
                <div className="mt-1">
                  <h3 className="font-serif font-bold text-[#0f1115] text-[18px] mb-1">Direct Voice Line</h3>
                  <a href="tel:9996265679" className="text-gray-500 font-light text-[14px] hover:text-[#d4af37] transition-colors tracking-wide">
                    +91-9996265679
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-[#d4af37]/10 p-4 rounded-none border border-[#d4af37]/30 text-[#d4af37]">
                  <Mail size={20} />
                </div>
                <div className="mt-1">
                  <h3 className="font-serif font-bold text-[#0f1115] text-[18px] mb-1">Encrypted Transmission</h3>
                  <a href="mailto:charlescharles6353@gmail.com" className="text-gray-500 font-light text-[14px] hover:text-[#d4af37] transition-colors tracking-wide">
                    charlescharles6353@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-[#d4af37]/10 p-4 rounded-none border border-[#d4af37]/30 text-[#d4af37]">
                  <MapPin size={20} />
                </div>
                <div className="mt-1">
                   <h3 className="font-serif font-bold text-[#0f1115] text-[18px] mb-1">Operational Zone</h3>
                   <p className="text-gray-500 font-light text-[14px] tracking-wide">
                     GurgaonHQ Sector, NCR
                   </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-[#0f1115] p-10 md:p-12 border border-[#d4af37]/20 shadow-2xl rounded-none flex flex-col justify-center relative shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
             <div className="absolute top-0 right-0 w-16 h-16 bg-[#d4af37]/5 rounded-bl-[100px] pointer-events-none"></div>
            {!isSubmitted ? (
              <>
                <h3 className="text-[24px] font-serif font-bold text-white mb-2">Priority Disptach</h3>
                <p className="text-[#d4af37] text-[10px] tracking-widest uppercase font-bold mb-8 opacity-80">Data purging enabled</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input 
                        type="text" 
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full bg-transparent border-b border-gray-800 py-3 text-white outline-none focus:border-[#d4af37] transition-colors text-[13px] placeholder:text-gray-600 font-light" 
                        placeholder="Alias / First Name *" 
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full bg-transparent border-b border-gray-800 py-3 text-white outline-none focus:border-[#d4af37] transition-colors text-[13px] placeholder:text-gray-600 font-light" 
                        placeholder="Last Name" 
                      />
                    </div>
                  </div>
                  <div>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-800 py-3 text-white outline-none focus:border-[#d4af37] transition-colors text-[13px] placeholder:text-gray-600 font-light" 
                      placeholder="Secure Return Address (Email) *" 
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-800 py-3 text-white outline-none focus:border-[#d4af37] transition-colors text-[13px] placeholder:text-gray-600 font-light" 
                      placeholder="Encrypted Voice Line (Phone) *" 
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={4} 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-800 py-3 text-white outline-none focus:border-[#d4af37] transition-colors text-[13px] placeholder:text-gray-600 font-light resize-none mt-2" 
                      placeholder="Transmission Body"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#d4af37] hover:bg-white text-[#0f1115] font-bold py-4 text-[11px] uppercase tracking-widest transition-colors mt-6 cursor-pointer">
                    Transmit Securely
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10 px-4 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-6 text-[#d4af37] border border-[#d4af37]/30">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-[24px] font-serif font-bold text-white mb-2">Transmission Confirmed</h3>
                <p className="text-gray-400 font-light text-[13px] leading-relaxed mb-8 border-t border-gray-800 pt-6 mt-6">
                  Protocol initiated, <span className="text-white font-bold">{firstName}</span>. Our deployment team has received your coordinates. Contact will be established via <span className="text-white">{phoneNumber}</span> within an estimated 10-15 minutes.
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setPhoneNumber('');
                    setMessage('');
                  }}
                  className="bg-transparent border border-[#d4af37] hover:bg-[#d4af37] hover:text-[#0f1115] text-[#d4af37] px-8 py-3 text-[10px] uppercase font-bold tracking-widest transition-colors"
                >
                  New Transmission
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
