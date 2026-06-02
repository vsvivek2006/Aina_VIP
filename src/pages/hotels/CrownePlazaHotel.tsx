import React from 'react';
import HotelLayout from '../../components/HotelLayout';

export default function CrownePlazaHotel() {
  return (
    <HotelLayout
      hotelName="Crowne Plaza Hotel"
      heroImage="https://images.unsplash.com/photo-1542314831-c6a4d27488c?auto=format&fit=crop&q=80&w=2000&h=800"
      aboutImage="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&h=600"
      aboutContent={
        <>
          <p className="mb-4">
            The Crowne Plaza Hotel is located in Gurgaon provides free WiFi and an exceptionally long day stay packages. One can get connected at the Crown Plaza Hotel in Gurgaon about 30 minutes southwest of New Delhi which is fifteen minutes away from Indira Gandhi International Airport and close to GE, Microsoft and IBM. The perfect base for exploring or work, the Crown Plaza Hotel in Gurgaon features with well-equipped guest rooms for accommodation, and complimentary WiFi is also available. Host-events or on-site meetings in one of the eleven flexible meeting spaces that include Grand Ballroom, wedding and reception are also one of the services available at the crown plaza hotel.
          </p>
          <p>
            While the crown plaza hotel is located in the centre of the city, one can escape the bustle and enjoy at the garden courtyard of the hotel or get a treatment at Body zones pace which is located on-site.
          </p>
        </>
      }
    />
  );
}
