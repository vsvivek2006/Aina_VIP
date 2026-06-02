import React from 'react';
import HotelLayout from '../../components/HotelLayout';

export default function TajHotel() {
  return (
    <HotelLayout
      hotelName="Taj City Centre"
      heroImage="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=2000&h=800"
      aboutImage="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&h=600"
      aboutContent={
        <>
          <p className="mb-4">
             The Taj City Centre stands as a hallmark of luxury in the heart of Gurgaon. Pair this premium location with our highly coveted premium class escorts for an evening you will reflect upon with a smile. We cater directly to guests seeking top-most confidentiality.
          </p>
          <p>
             Whether you want to dine out together, relax by the pool, or engage entirely in the deep passion of the bedroom, our models execute the Girlfriend Experience flawlessly. We offer a 100% real photo guarantee for all our escorts, so the stunning beauty you select online is precisely the one knocking on your door at The Taj.
          </p>
        </>
      }
    />
  );
}

