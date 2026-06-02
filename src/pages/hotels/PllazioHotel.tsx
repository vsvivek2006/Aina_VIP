import React from 'react';
import HotelLayout from '../../components/HotelLayout';

export default function PllazioHotel() {
  return (
    <HotelLayout
      hotelName="Pllazio Hotel"
      heroImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000&h=800"
      aboutImage="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&h=600"
      aboutContent={
        <>
          <p className="mb-4">
             The Pllazio Hotel is an icon of luxury in Gurgaon. Enhancing your opulent stay with the company of a gorgeous model makes for an unforgettable experience. We provide VIP escort services dedicated to high-end locations like The Pllazio, ensuring top-tier service tailored to an elite clientele.
          </p>
          <p>
             Our models are sophisticated, articulate, and stunningly beautiful. They naturally blend into luxurious environments, turning heads as they elegantly accompany you through hotel lobbies, restaurants, and lounges before providing you with absolute satisfaction in the complete privacy of your room.
          </p>
        </>
      }
    />
  );
}
