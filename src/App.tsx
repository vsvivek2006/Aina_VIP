import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Escorts from './pages/Escorts';
import Hotels from './pages/Hotels';
import Services from './pages/Services';
import Locations from './pages/Locations';
import LocationDetail from './pages/LocationDetail';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import GirlfriendExperience from './pages/services/GirlfriendExperience';
import EroticMassage from './pages/services/EroticMassage';
import Available24x7 from './pages/services/Available24x7';
import InCallOutCall from './pages/services/InCallOutCall';
import HourlyService from './pages/services/HourlyService';
import FullNightService from './pages/services/FullNightService';
import PllazioHotel from './pages/hotels/PllazioHotel';
import BristolHotel from './pages/hotels/BristolHotel';
import OberoiHotel from './pages/hotels/OberoiHotel';
import LeelaHotel from './pages/hotels/LeelaHotel';
import TajHotel from './pages/hotels/TajHotel';
import CrownePlazaHotel from './pages/hotels/CrownePlazaHotel';

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-white min-h-screen text-gray-800 flex flex-col">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/escorts" element={<Escorts />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/services" element={<Services />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:slug" element={<LocationDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:slug" element={<CategoryDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services/girlfriend-experience" element={<GirlfriendExperience />} />
            <Route path="/services/erotic-massage" element={<EroticMassage />} />
            <Route path="/services/24x7-available" element={<Available24x7 />} />
            <Route path="/services/in-call-out-call" element={<InCallOutCall />} />
            <Route path="/services/hourly" element={<HourlyService />} />
            <Route path="/services/full-night" element={<FullNightService />} />
            <Route path="/hotels/pllazio" element={<PllazioHotel />} />
            <Route path="/hotels/bristol" element={<BristolHotel />} />
            <Route path="/hotels/oberoi" element={<OberoiHotel />} />
            <Route path="/hotels/leela" element={<LeelaHotel />} />
            <Route path="/hotels/taj" element={<TajHotel />} />
            <Route path="/hotels/crowne-plaza" element={<CrownePlazaHotel />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

