import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Clock, Wallet, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function ForOwnersSection() {
  const benefits = [
    {
      icon: Shield,
      title: 'Garantía Total',
      description: 'Garantizamos todos nuestros trabajos por 2 años'
    },
    {
      icon: Clock,
      title: 'Tiempos Cumplidos',
      description: 'Entregamos tu proyecto en el tiempo acordado'
    },
    {
      icon: Wallet,
      title: 'Presupuesto Claro',
      description: 'Sin costos ocultos ni sorpresas'
    },
    {
      icon: Award,
      title: 'Calidad Certificada',
      description: 'Materiales premium y acabados profesionales'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Cotización Gratuita',
      description: 'Visitamos tu propiedad y te entregamos un presupuesto detallado sin compromiso'
    },
    {
      number: '02',
      title: 'Diseño Personalizado',
      description: 'Creamos renders 3D para que visualices el resultado final antes de comenzar'
    },
    {
      number: '03',
      title: 'Ejecución',
      description: 'Nuestro equipo trabaja con supervisión constante y comunicación diaria'
    },
    {
      number: '04',
      title: 'Entrega',
      description: 'Inspeccionamos cada detalle y te entregamos tu espacio listo para disfrutar'
    }
  ];

  return (
    <section id="propietarios" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Para Propietarios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hacemos que tu proyecto de remodelación sea una experiencia transparente y sin estrés
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-[#F5F1E8] rounded-lg"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4"
              >
                <benefit.icon size={28} />
              </motion.div>
              <h3 className="text-xl mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#3D8A9C] to-[#2d6a7a] rounded-2xl p-12 text-white mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl mb-6">¿Por Qué Elegirnos?</h3>
              <div className="space-y-4">
                {[
                  'Más de 500 proyectos exitosos en Colombia',
                  'Equipo certificado y con experiencia comprobada',
                  'Materiales de proveedores de confianza',
                  'Seguro de responsabilidad civil',
                  'Atención personalizada de inicio a fin',
                  'Financiación disponible'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
              >
                Solicita Tu Cotización
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769970502261-541570454bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjBDb2xvbWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NzY1NTE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cocina remodelada"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl text-center mb-12">Nuestro Proceso</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-orange-500/20 mb-4">{step.number}</div>
                <h4 className="text-xl mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
