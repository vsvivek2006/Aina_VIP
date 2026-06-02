import React, { useState } from 'react';
import { X, Phone, MessageCircle, Star, ShieldCheck, Heart, Sparkles, Calendar, Clock, MapPin, Check } from 'lucide-react';

interface Profile {
  name: string;
  desc: string;
  image: string;
  rating?: number;
}

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile | null;
}

export default function ProfileModal({ isOpen, onClose, profile }: ProfileModalProps) {
  if (!isOpen || !profile) return null;

  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingDuration, setBookingDuration] = useState('2 Hours');
  const [submitted, setSubmitted] = useState(false);

  // Generate randomized but realistic specifications based on the profile name
  const getSpecs = (name: string) => {
    const sum = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const age = 20 + (sum % 5); // 20 to 24
    const height = 5.2 + (sum % 6) * 0.1; // 5.2 to 5.7 ft
    const weight = 48 + (sum % 10); // 48 to 57 kg
    const bust = 32 + (sum % 3) * 2; // 32, 34, 36
    const cup = ['B', 'C', 'D'][sum % 3];
    const city = sum % 2 === 0 ? 'Huda City Centre, Gurgaon' : 'Cyber City, Gurgaon';
    const isRussian = name.toLowerCase().includes('julia') || 
                      name.toLowerCase().includes('kiara') || 
                      name.toLowerCase().includes('ellison') || 
                      name.toLowerCase().includes('sophia') || 
                      name.toLowerCase().includes('sandra') || 
                      name.toLowerCase().includes('shyla');

    return {
      age: `${age} Years`,
      height: `${height.toFixed(1)} Ft`,
      weight: `${weight} Kg`,
      stats: `${bust}${cup}-26-34`,
      ethnicity: isRussian ? 'Russian' : 'Indian',
      languages: isRussian ? 'English, Russian' : 'Hindi, English, Punjabi',
      location: city
    };
  };

  const specs = getSpecs(profile.name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone) return;
    setSubmitted(true);
  };

  const closeAndReset = () => {
    setSubmitted(false);
    setBookingName('');
    setBookingPhone('');
    setBookingDate('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0d0103]/80 backdrop-blur-md transition-opacity cursor-pointer" 
        onClick={closeAndReset}
      />

      {/* Modal Box */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-md shadow-2xl border border-gray-100 flex flex-col md:flex-row z-10 animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={closeAndReset}
          className="absolute top-4 right-4 bg-black/60 hover:bg-[#791b29] text-white p-2 rounded-full cursor-pointer transition-colors z-20"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Column 1: Image & High Value Badges */}
        <div className="w-full md:w-5/12 bg-[#0f1115] md:max-h-[90vh] relative min-h-[300px]">
          <img 
            src={profile.image} 
            alt={profile.name} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="bg-[#d4af37] text-[#0f1115] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 shadow-xl inline-flex items-center gap-1.5 mb-3 rounded-none">
              <ShieldCheck size={14} /> VIP Identity Verified
            </span>
            <h2 className="text-white text-3xl font-serif font-bold tracking-wide mb-1">{profile.name}</h2>
            <div className="flex flex-col border-t border-white/20 pt-2 mt-2">
              <div className="flex items-center gap-1 text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-current text-[#d4af37]" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Spec Sheets, Description, and Booking Form */}
        <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center justify-between border-b border-[#0f1115]/10 pb-4 mb-5">
              <div className="flex items-center gap-2 text-[#791b29]">
                <Heart className="fill-current text-[#791b29] animate-pulse" size={16} />
                <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#0f1115]">Premium Escort</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-600 font-bold text-[11px] tracking-wider uppercase">
                <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse border-2 border-white"></span>
                <span>Active Today</span>
              </div>
            </div>

            {/* Sexy Specs Table */}
            <h3 className="text-[#0f1115] font-serif font-bold text-[18px] tracking-wide mb-4 flex items-center gap-2">
              <Sparkles size={16} className="text-[#d4af37]" /> Companion Profile
            </h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 bg-gray-50/50 p-5 border border-gray-100 mb-6 text-[13px]">
              <div className="flex justify-between border-b border-gray-200/50 pb-2">
                <span className="text-gray-500 uppercase tracking-wider text-[11px] font-bold">Age</span>
                <span className="font-bold text-[#0f1115]">{specs.age}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/50 pb-2">
                <span className="text-gray-500 uppercase tracking-wider text-[11px] font-bold">Height</span>
                <span className="font-bold text-[#0f1115]">{specs.height}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/50 pb-2">
                <span className="text-gray-500 uppercase tracking-wider text-[11px] font-bold">Weight</span>
                <span className="font-bold text-[#0f1115]">{specs.weight}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/50 pb-2">
                <span className="text-gray-500 uppercase tracking-wider text-[11px] font-bold">Measurements</span>
                <span className="font-bold text-[#0f1115]">{specs.stats}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/50 pb-2">
                <span className="text-gray-500 uppercase tracking-wider text-[11px] font-bold">Ethnicity</span>
                <span className="font-bold text-[#0f1115]">{specs.ethnicity}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/50 pb-2">
                <span className="text-gray-500 uppercase tracking-wider text-[11px] font-bold">Service Type</span>
                <span className="font-bold text-[#0f1115]">In / Out Call</span>
              </div>
              <div className="col-span-2 pt-1 flex items-center justify-between text-gray-600">
                <span className="text-gray-500 uppercase tracking-wider text-[11px] font-bold flex items-center gap-1.5"><MapPin size={13} className="text-[#d4af37]" /> Immediate Area</span>
                <span className="font-bold text-[#0f1115]">{specs.location}</span>
              </div>
            </div>

            {/* Description */}
            <div className="text-gray-500 text-[13.5px] font-light leading-relaxed mb-6">
              <p>{profile.desc.replace(/\.+$/, "")}. Rest assured that our high standards of service bring you maximum discretion and zero judgment. Book this elite companion to enjoy professional hospitality near Gurgaon premium hot spots.</p>
            </div>
          </div>

          {/* Form & Actions Section */}
          <div className="border-t border-gray-100 pt-6 mt-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-[12px] font-bold text-[#0f1115] tracking-[0.1em] uppercase mb-2 flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#d4af37]" /> Reserve {profile.name}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <input 
                    type="text" 
                    required
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    placeholder="Your Alias" 
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#0f1115] px-2 py-2 text-[13px] focus:outline-none transition-colors rounded-none placeholder-gray-400"
                  />
                  <input 
                    type="tel" 
                    required
                    value={bookingPhone}
                    onChange={(e) => setBookingPhone(e.target.value)}
                    placeholder="Contact Number" 
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#0f1115] px-2 py-2 text-[13px] focus:outline-none transition-colors rounded-none placeholder-gray-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input 
                    type="text" 
                    placeholder="Desired Date (Optional)"
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) => e.target.type = 'text'}
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#0f1115] px-2 py-2 text-[13px] focus:outline-none transition-colors rounded-none text-gray-500 placeholder-gray-400"
                  />
                  <select 
                    value={bookingDuration}
                    onChange={(e) => setBookingDuration(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#0f1115] px-2 py-2 text-[13px] focus:outline-none transition-colors rounded-none text-gray-600 appearance-none"
                  >
                    <option>1 Hour Briefing</option>
                    <option>2 Hour Date</option>
                    <option>4 Hour Evening</option>
                    <option>Full Night Escapade</option>
                  </select>
                </div>
                
                <div className="flex gap-2.5 pt-4">
                  <button 
                    type="submit" 
                    className="flex-1 bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-5 py-3.5 text-[11px] font-bold cursor-pointer tracking-widest transition-colors uppercase border border-[#0f1115]"
                  >
                    Send Request
                  </button>
                  <a 
                    href="tel:9996265679" 
                    className="border border-gray-300 hover:border-[#0f1115] hover:bg-[#0f1115] text-[#0f1115] hover:text-[#d4af37] w-12 flex items-center justify-center transition-colors"
                  >
                    <Phone size={16} /> 
                  </a>
                  <a 
                    href={`https://wa.me/919996265679?text=Hi! I am interested in booking ${profile.name} near Gurgaon.`}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-gray-300 hover:border-green-600 hover:bg-green-600 text-[#0f1115] hover:text-white w-12 flex items-center justify-center transition-colors"
                  >
                    <MessageCircle size={16} /> 
                  </a>
                </div>
              </form>
            ) : (
              <div className="bg-gray-50 border border-gray-200 p-6 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] flex items-center justify-center mx-auto mb-4 bg-white">
                  <Check size={20} className="text-[#d4af37]" />
                </div>
                <h4 className="text-[17px] font-serif font-bold text-[#0f1115] mb-2">Request Processed</h4>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed mb-6">
                  We have registered your interest for {profile.name}. A VIP coordinator will contact you at {bookingPhone} shortly.
                </p>
                <button 
                  onClick={closeAndReset}
                  className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-3 text-[11px] font-bold cursor-pointer tracking-widest transition-colors uppercase"
                >
                  Close Secure Window
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
