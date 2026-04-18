import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ForOwnersSection from './components/ForOwnersSection';
import ValuesSection from './components/ValuesSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import KitchenServicePage from './components/services/KitchenServicePage';
import BathroomServicePage from './components/services/BathroomServicePage';
import LivingRoomServicePage from './components/services/LivingRoomServicePage';
import FullRenovationServicePage from './components/services/FullRenovationServicePage';

type ServicePage = 'kitchen' | 'bathroom' | 'living' | 'full' | null;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentServicePage, setCurrentServicePage] = useState<ServicePage>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentServicePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentServicePage]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleServiceClick = (service: ServicePage) => {
    setCurrentServicePage(service);
  };

  const handleBackToHome = () => {
    setCurrentServicePage(null);
  };

  if (currentServicePage === 'kitchen') {
    return <KitchenServicePage onBack={handleBackToHome} />;
  }

  if (currentServicePage === 'bathroom') {
    return <BathroomServicePage onBack={handleBackToHome} />;
  }

  if (currentServicePage === 'living') {
    return <LivingRoomServicePage onBack={handleBackToHome} />;
  }

  if (currentServicePage === 'full') {
    return <FullRenovationServicePage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#3D8A9C] shadow-lg' : 'bg-[#3D8A9C]/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold tracking-wider cursor-pointer" onClick={() => scrollToSection('inicio')}>
              REFORMA
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-orange-400 transition-colors">Inicio</button>
              <button onClick={() => scrollToSection('servicios')} className="text-white hover:text-orange-400 transition-colors">Servicios</button>
              <button onClick={() => scrollToSection('equipo')} className="text-white hover:text-orange-400 transition-colors">Equipo</button>
              <button onClick={() => scrollToSection('propietarios')} className="text-white hover:text-orange-400 transition-colors">Para Propietarios</button>
              <button onClick={() => scrollToSection('contacto')} className="px-6 py-2 bg-orange-500 text-white hover:bg-orange-600 transition-colors">Contacto</button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-orange-400 transition-colors text-left">Inicio</button>
              <button onClick={() => scrollToSection('servicios')} className="text-white hover:text-orange-400 transition-colors text-left">Servicios</button>
              <button onClick={() => scrollToSection('equipo')} className="text-white hover:text-orange-400 transition-colors text-left">Equipo</button>
              <button onClick={() => scrollToSection('propietarios')} className="text-white hover:text-orange-400 transition-colors text-left">Para Propietarios</button>
              <button onClick={() => scrollToSection('contacto')} className="text-white hover:text-orange-400 transition-colors text-left">Contacto</button>
            </div>
          )}
        </div>
      </nav>

      <Hero />
      <ServicesSection onServiceClick={handleServiceClick} />
      <AboutSection />
      <TeamSection />
      <ForOwnersSection />
      <ValuesSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
}
