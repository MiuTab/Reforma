import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';

interface BathroomServicePageProps {
  onBack: () => void;
}

export default function BathroomServicePage({ onBack }: BathroomServicePageProps) {
  const features = [
    'Diseño ergonómico y funcional',
    'Sanitarios de alta gama',
    'Grifería moderna y ahorradora',
    'Ducha o tina de lujo',
    'Iluminación especializada',
    'Ventilación certificada',
    'Acabados impermeables premium',
    'Sistema de calentamiento de agua'
  ];

  const process = [
    {
      title: 'Evaluación del Espacio',
      description: 'Analizamos el baño actual, verificamos instalaciones hidráulicas y eléctricas existentes.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxhcmNoaXRlY3QlMjBtZWFzdXJpbmclMjBpbnRlcmlvciUyMGRlc2lnbiUyMGJsdWVwcmludHxlbnwxfHx8fDE3NzY1NTM0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Diseño Personalizado',
      description: 'Creamos un diseño optimizado que maximiza el espacio y cumple tus expectativas.',
      image: 'https://images.unsplash.com/photo-1666899950583-ca932f1e39d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHwzRCUyMGludGVyaW9yJTIwZGVzaWduJTIwcmVuZGVyJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzY1NTM0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Demolición y Preparación',
      description: 'Retiramos el baño antiguo con cuidado de no afectar otras áreas de tu hogar.',
      image: 'https://images.unsplash.com/photo-1768321916886-30dc323bddf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZyUyMHJlbm92YXRpb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzY1NTM0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Instalaciones',
      description: 'Renovamos todas las tuberías, instalaciones eléctricas y sistemas de ventilación.',
      image: 'https://images.unsplash.com/photo-1761986757577-140af8859587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZyUyMHJlbm92YXRpb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzY1NTM0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Acabados Finales',
      description: 'Instalamos cerámicas, sanitarios, grifería y todos los accesorios seleccionados.',
      image: 'https://images.unsplash.com/photo-1613013383640-6226419147d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjBDb2xvbWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NzY1NTE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const packages = [
    {
      name: 'Básico',
      price: 'Desde $5.000.000',
      features: [
        'Sanitario y lavamanos estándar',
        'Ducha con mampara básica',
        'Grifería cromada',
        'Cerámica piso y pared',
        'Espejo sencillo'
      ]
    },
    {
      name: 'Premium',
      price: 'Desde $10.000.000',
      features: [
        'Sanitarios de diseño',
        'Ducha tipo lluvia',
        'Mampara en vidrio templado',
        'Porcelanato de lujo',
        'Mueble de baño con espejo',
        'Grifería termostatizada',
        'Iluminación LED'
      ],
      featured: true
    },
    {
      name: 'Luxury',
      price: 'Desde $18.000.000',
      features: [
        'Sanitarios suspendidos importados',
        'Tina de hidromasaje o ducha spa',
        'Lavamanos de diseño',
        'Mármol o porcelanato premium',
        'Calefacción de piso',
        'Sistema de música',
        'Domótica integrada',
        'Accesorios de lujo'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-[#3D8A9C]">
        <button
          onClick={onBack}
          className="absolute top-8 left-8 z-50 px-6 py-3 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Volver
        </button>

        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1613013383640-6226419147d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjBDb2xvbWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NzY1NTE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Baño moderno"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-7xl mb-6"
            >
              Remodelación de Baños
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8"
            >
              Crea tu oasis personal con diseños modernos, funcionales y de alta calidad
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <button className="px-8 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-colors flex items-center gap-2">
                Cotizar Proyecto
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Lo Que Incluimos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada remodelación de baño incluye todo para crear un espacio de relajación perfecto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 bg-white p-6 rounded-lg"
              >
                <Check className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Nuestro Proceso</h2>
          </motion.div>

          <div className="space-y-12">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <div className="text-6xl font-bold text-orange-500/20 mb-4">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-3xl mb-4">{step.title}</h3>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                    <div className="h-80 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-80 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-6xl font-bold text-orange-500/20 mb-4">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-3xl mb-4">{step.title}</h3>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-b from-[#D4E8EC] to-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Paquetes Disponibles</h2>
            <p className="text-xl text-gray-600">
              Selecciona el paquete ideal para tu baño soñado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-lg p-8 ${
                  pkg.featured ? 'ring-4 ring-orange-500 relative' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-orange-500 text-white text-sm">
                    Más Popular
                  </div>
                )}
                <h3 className="text-2xl mb-4">{pkg.name}</h3>
                <div className="text-3xl text-orange-500 mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-orange-500 flex-shrink-0 mt-1" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-[#3D8A9C] text-white hover:bg-[#2d6a7a] transition-colors">
                  Solicitar Cotización
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3D8A9C] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6"
          >
            ¿Listo para Renovar Tu Baño?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Obtén una cotización personalizada sin compromiso
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-colors text-lg inline-flex items-center gap-2"
          >
            Agendar Asesoría Gratuita
            <ArrowRight size={24} />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
