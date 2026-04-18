import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { ArrowRight, Home, Paintbrush, Hammer } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-[#3D8A9C] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-orange-500 text-white text-sm mb-4"
            >
              Expertos en Remodelación de Interiores
            </motion.div>

            <h1 className="text-5xl md:text-7xl text-white leading-tight">
              Transformamos Tu Hogar en el Espacio de Tus Sueños
            </h1>

            <p className="text-xl text-white/90">
              Especialistas en remodelación integral: cocinas, baños, salas y espacios completos en Colombia
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contacto')}
                className="px-8 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group"
              >
                Cotiza Tu Proyecto
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('servicios')}
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#3D8A9C] transition-all"
              >
                Ver Servicios
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Home, label: 'Espacios Completos' },
                { icon: Paintbrush, label: 'Acabados Premium' },
                { icon: Hammer, label: 'Obra Certificada' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-white text-center"
                >
                  <item.icon className="mx-auto mb-2" size={28} />
                  <p className="text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1680210851377-b7168175ae9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjBDb2xvbWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NzY1NTE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Interior remodelado moderno"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D8A9C] via-transparent to-transparent opacity-40 rounded-lg"></div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F5F1E8"/>
        </svg>
      </div>
    </section>
  );
}
