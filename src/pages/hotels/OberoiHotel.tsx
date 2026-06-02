import React from 'react';
import HotelLayout from '../../components/HotelLayout';

export default function OberoiHotel() {
  return (
    <HotelLayout
      hotelName="The Oberoi Hotel"
      heroImage="https://images.unsplash.com/photo-1551882547-ff40c0d12c5k?auto=format&fit=crop&q=80&w=2000&h=800"
      aboutImage="https://images.unsplash.com/photo-1542314831-c6a4d27488c?auto=format&fit=crop&w=800&h=600"
      aboutContent={
        <>
          <p className="mb-4">
             The Oberoi represents the pinnacle of luxury, class, and architectural beauty. To complement such grand surroundings, we offer escorts who mirror these qualities perfectly. They are not simply gorgeous; they are articulate, classy, and understand exactly how to treat an elite gentleman.
          </p>
          <p>
             Many of our most beautiful Russian, European, and high-profile Indian models are available for out-call services to The Oberoi. Imagine bringing an exotic beauty to your luxurious suite, having drinks together, and letting passion take over. It is the ultimate recipe for a fulfilling stay.
          </p>
        </>
      }
    />
  );
}
