import React from 'react';
import HotelLayout from '../../components/HotelLayout';

export default function LeelaHotel() {
  return (
    <HotelLayout
      hotelName="The Leela Ambience Hotel"
      heroImage="https://images.unsplash.com/photo-1542314831-c6a4d27488c?auto=format&fit=crop&q=80&w=2000&h=800"
      aboutImage="https://images.unsplash.com/photo-1551882547-ff40c0d12c5k?auto=format&fit=crop&w=800&h=600"
      aboutContent={
        <>
          <p className="mb-4">
             Staying at The Leela Ambience? Complete your majestic experience by booking one of our elite VIP level companions. The Leela's grand setting demands the company of a charming, intelligent, and fiercely seductive top-tier escort.
          </p>
          <p>
             Our models have provided their exceptional companionship to numerous VIP guests at The Leela before. They are highly discreet, impeccably dressed, and radiate confidence. We offer diverse profiles including air hostesses, college students, and professional models to suit your distinct taste.
          </p>
        </>
      }
    />
  );
}
