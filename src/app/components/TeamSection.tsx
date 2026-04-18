import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Mail } from 'lucide-react';

export default function TeamSection() {
  const team = [
    {
      name: 'Carlos Mendoza',
      role: 'Director General',
      description: 'Arquitecto con 15 años de experiencia en diseño y construcción',
      image: 'https://images.unsplash.com/photo-1605018836321-11457d0edea9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjByZW5vdmF0aW9uJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzc2NTUxODc2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'María Rodríguez',
      role: 'Directora de Diseño',
      description: 'Diseñadora de interiores especializada en espacios residenciales',
      image: 'https://images.unsplash.com/photo-1629010336114-8206b071be71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjByZW5vdmF0aW9uJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzc2NTUxODc2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Andrés Torres',
      role: 'Jefe de Obra',
      description: 'Maestro constructor con certificación en acabados de alta gama',
      image: 'https://images.unsplash.com/photo-1774977869253-5b0ddd502a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjByZW5vdmF0aW9uJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzc2NTUxODc2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Laura Gómez',
      role: 'Gerente de Proyectos',
      description: 'Experta en gestión y coordinación de remodelaciones integrales',
      image: 'https://images.unsplash.com/photo-1545355831-0b030c5d4d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjByZW5vdmF0aW9uJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzc2NTUxODc2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section id="equipo" className="bg-gradient-to-b from-white to-[#F5F1E8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Nuestro Equipo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionales apasionados comprometidos con la excelencia en cada proyecto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="h-80"
                >
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#3D8A9C]"
                  >
                    <Linkedin size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#3D8A9C]"
                  >
                    <Mail size={20} />
                  </motion.button>
                </div>
              </div>
              <h3 className="text-xl mb-1">{member.name}</h3>
              <p className="text-orange-500 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center bg-[#3D8A9C] text-white p-12 rounded-lg"
        >
          <h3 className="text-3xl mb-4">¿Quieres Unirte a Nuestro Equipo?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Estamos siempre buscando talento apasionado por la construcción y el diseño
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-orange-500 text-white hover:bg-orange-600 transition-colors"
          >
            Ver Vacantes
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
