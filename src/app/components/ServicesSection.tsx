import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Bath, ChefHat, Sofa, Building, ArrowRight } from 'lucide-react';

type ServicePage = 'kitchen' | 'bathroom' | 'living' | 'full' | null;

interface ServicesSectionProps {
  onServiceClick: (service: ServicePage) => void;
}

export default function ServicesSection({ onServiceClick }: ServicesSectionProps) {
  const services = [
    {
      icon: ChefHat,
      title: 'Cocinas',
      description: 'Diseño y remodelación integral de cocinas modernas y funcionales',
      image: 'https://images.unsplash.com/photo-1769970502055-6d1de307406d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjBDb2xvbWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NzY1NTE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'kitchen' as ServicePage
    },
    {
      icon: Bath,
      title: 'Baños',
      description: 'Renovación completa con acabados de primera calidad',
      image: 'https://images.unsplash.com/photo-1613013383640-6226419147d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjBDb2xvbWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NzY1NTE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'bathroom' as ServicePage
    },
    {
      icon: Sofa,
      title: 'Salas y Espacios Sociales',
      description: 'Transformamos tus espacios en lugares acogedores',
      image: 'https://images.unsplash.com/photo-1680209667207-cae0f6cd8fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjBDb2xvbWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NzY1NTE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'living' as ServicePage
    },
    {
      icon: Building,
      title: 'Remodelación Integral',
      description: 'Proyectos completos de apartamentos y casas',
      image: 'https://images.unsplash.com/photo-1626142161754-a7d4766c5b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjBDb2xvbWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NzY1NTE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'full' as ServicePage
    }
  ];

  return (
    <section id="servicios" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde pequeñas renovaciones hasta remodelaciones completas, nos especializamos en dar vida a tus ideas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => onServiceClick(service.page)}
              className="group cursor-pointer"
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <service.icon size={32} />
                </div>
              </div>
              <h3 className="text-2xl mb-3 group-hover:text-orange-500 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm mr-2">Ver más</span>
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#3D8A9C] text-white hover:bg-[#2d6a7a] transition-colors inline-flex items-center gap-2"
          >
            Agenda una Asesoría Gratuita
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
