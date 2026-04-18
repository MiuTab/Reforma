import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProcessSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const steps = [
    {
      title: "Adquirir Cimientos Fuertes",
      content: "Comenzamos cada proyecto estableciendo una base sólida. Evaluamos sus necesidades, realizamos inspecciones detalladas y creamos un plan de remodelación que se alinee con su visión y presupuesto."
    },
    {
      title: "Elevar las Operaciones",
      content: "Nuestro equipo ejecuta cada fase del proyecto con precisión. Desde la demolición hasta la construcción, nos aseguramos de que cada detalle cumpla con nuestros altos estándares de calidad y artesanía."
    },
    {
      title: "Construir e Integrar Tecnología",
      content: "Incorporamos las últimas tecnologías en diseño y construcción para optimizar el proceso. Utilizamos herramientas digitales para visualización 3D, gestión de proyectos y comunicación transparente con nuestros clientes."
    }
  ];

  return (
    <section className="bg-[#F5F1E8] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-6"
        >
          Un Manual Disciplinado para el Crecimiento
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-700 mb-12 max-w-3xl mx-auto"
        >
          Aplicamos estrategias comerciales sólidas, mejoramos donde podamos y cuando
          sea necesario, para crear empresas competitivas sólidas. Nuestro enfoque se basa
          en promover en lo que mejor hacemos al expandir nuestra presencia.
        </motion.p>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-2 border-gray-300 bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg text-left">{step.title}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus size={24} className="flex-shrink-0" />
                  ) : (
                    <Plus size={24} className="flex-shrink-0" />
                  )}
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                      {step.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
