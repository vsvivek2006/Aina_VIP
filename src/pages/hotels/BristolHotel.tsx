import React from 'react';
import HotelLayout from '../../components/HotelLayout';

export default function BristolHotel() {
  return (
    <HotelLayout
      hotelName="The Bristol Hotel"
      heroImage="https://images.unsplash.com/photo-1542314831-c6a4d27488c?auto=format&fit=crop&q=80&w=2000&h=800"
      aboutImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&h=600"
      aboutContent={
        <>
          <p className="mb-4">
             The Bristol Hotel is highly renowned and staying there demands an equivalently refined companion. We boast a selective gallery of models who regularly frequent five-star venues, making them perfectly accustomed to the lavish atmosphere at The Bristol.
          </p>
          <p>
             If you are looking for true pleasure, passionate intimacy, and a genuinely affectionate companion, look no further. Our agency handles out-calls to The Bristol with absolute professionalism, ensuring a 100% genuine and safe experience. No hidden conditions, just an evening (or night) dedicated purely to your desires.
          </p>
        </>
      }
    />
  );
}
