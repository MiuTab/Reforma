import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';

interface LivingRoomServicePageProps {
  onBack: () => void;
}

export default function LivingRoomServicePage({ onBack }: LivingRoomServicePageProps) {
  const features = [
    'Diseño de espacios abiertos',
    'Iluminación ambiental personalizada',
    'Acabados en madera y piedra',
    'Sistemas de entretenimiento integrados',
    'Pintura decorativa premium',
    'Pisos en madera, porcelanato o laminado',
    'Molduras y detalles arquitectónicos',
    'Optimización acústica'
  ];

  const process = [
    {
      title: 'Concepto de Diseño',
      description: 'Desarrollamos un concepto que refleje tu personalidad y estilo de vida.',
      image: 'https://images.unsplash.com/photo-1598368195835-91e67f80c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxhcmNoaXRlY3QlMjBtZWFzdXJpbmclMjBpbnRlcmlvciUyMGRlc2lnbiUyMGJsdWVwcmludHxlbnwxfHx8fDE3NzY1NTM0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Planificación del Espacio',
      description: 'Optimizamos la distribución para crear zonas funcionales y acogedoras.',
      image: 'https://images.unsplash.com/photo-1714926311975-85300ee0a85a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGludGVyaW9yJTIwZGVzaWduJTIwcmVuZGVyJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzY1NTM0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Selección de Acabados',
      description: 'Te guiamos en la elección de colores, texturas y materiales que complementen tu visión.',
      image: 'https://images.unsplash.com/photo-1667400104764-a5fd01a919b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb25zdHJ1Y3Rpb24lMjByZW5vdmF0aW9uJTIwbWF0ZXJpYWxzJTIwc2FtcGxlc3xlbnwxfHx8fDE3NzY1NTM0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Ejecución',
      description: 'Transformamos el espacio con atención meticulosa a cada detalle.',
      image: 'https://images.unsplash.com/photo-1768839725085-829e6ac7ac26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZyUyMHJlbm92YXRpb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzY1NTM0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Decoración Final',
      description: 'Completamos el proyecto con elementos decorativos que dan vida al espacio.',
      image: 'https://images.unsplash.com/photo-1680209667207-cae0f6cd8fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjBDb2xvbWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NzY1NTE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const packages = [
    {
      name: 'Renovación',
      price: 'Desde $6.000.000',
      features: [
        'Pintura completa',
        'Cambio de pisos',
        'Iluminación básica',
        'Molduras decorativas',
        'Enchufes adicionales'
      ]
    },
    {
      name: 'Transformación',
      price: 'Desde $12.000.000',
      features: [
        'Diseño de interiores',
        'Pisos de lujo',
        'Cielo raso con iluminación LED',
        'Nichos y estanterías',
        'Sistema de sonido',
        'Pintura decorativa',
        'Molduras premium'
      ],
      featured: true
    },
    {
      name: 'Diseño Exclusivo',
      price: 'Desde $20.000.000',
      features: [
        'Arquitectura de interiores',
        'Materiales importados',
        'Iluminación inteligente',
        'Home theater integrado',
        'Chimenea moderna',
        'Paredes con textura',
        'Muebles empotrados',
        'Domótica completa'
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
            src="https://images.unsplash.com/photo-1680209667207-cae0f6cd8fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjBDb2xvbWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NzY1NTE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sala moderna"
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
              Salas y Espacios Sociales
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8"
            >
              Diseñamos espacios que invitan a compartir momentos inolvidables con familia y amigos
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
              Transformamos tu sala en el corazón social de tu hogar
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
              Elige el nivel de transformación para tu espacio social
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
            ¿Listo para Transformar Tu Sala?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Comienza tu proyecto hoy y recibe asesoría personalizada
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
