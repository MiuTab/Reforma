import { Hammer, Laptop, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function ValuesSection() {
  const values = [
    {
      icon: Hammer,
      title: "Honrar los Oficios",
      description: "Primero conocimiento en acción y artesanía. Capacitar, educar y mantener los estándares de los oficios especializados del mundo de la construcción."
    },
    {
      icon: Laptop,
      title: "Liderar con Tecnología",
      description: "La tecnología nunca ha sido más poderosa para impulsar el crecimiento, la eficiencia y el rendimiento que nunca antes fueron posibles."
    },
    {
      icon: Users,
      title: "Empoderar a las Personas",
      description: "Las mejores empresas inevitablemente dan rienda suelta a las fortalezas de los operadores y equipos para crear valor inmobiliario."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#D4E8EC] to-[#F5F1E8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16"
        >
          Nuestros Valores Fundamentales
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center space-y-4"
            >
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 border-2 border-orange-500 text-orange-500 transform rotate-45"
              >
                <value.icon className="transform -rotate-45" size={32} />
              </motion.div>
              <h3 className="text-xl">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
