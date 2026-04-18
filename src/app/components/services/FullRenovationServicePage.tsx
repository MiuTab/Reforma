import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Check, ArrowRight, Home, Users, Calendar, Shield } from 'lucide-react';

interface FullRenovationServicePageProps {
  onBack: () => void;
}

export default function FullRenovationServicePage({ onBack }: FullRenovationServicePageProps) {
  const features = [
    'Diseño arquitectónico completo',
    'Planos y permisos incluidos',
    'Demolición y construcción',
    'Instalaciones eléctricas nuevas',
    'Instalaciones hidráulicas renovadas',
    'Pisos en toda la propiedad',
    'Pintura y acabados premium',
    'Cocina y baños completos',
    'Carpintería a medida',
    'Iluminación integral',
    'Supervisión permanente',
    'Garantía extendida de 3 años'
  ];

  const benefits = [
    {
      icon: Home,
      title: 'Un Solo Proyecto',
      description: 'Coordinamos todas las áreas para un resultado armonioso y coherente'
    },
    {
      icon: Users,
      title: 'Equipo Dedicado',
      description: 'Un gerente de proyecto exclusivo para tu remodelación'
    },
    {
      icon: Calendar,
      title: 'Cronograma Claro',
      description: 'Plan detallado con fechas de entrega comprometidas'
    },
    {
      icon: Shield,
      title: 'Máxima Garantía',
      description: '3 años de garantía en todas las áreas remodeladas'
    }
  ];

  const process = [
    {
      title: 'Consultoría y Levantamiento',
      description: 'Visitamos tu propiedad, tomamos medidas precisas y documentamos el estado actual de todos los espacios.',
      image: 'https://images.unsplash.com/photo-1589233361468-0128345570e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjBtZWFzdXJpbmclMjBpbnRlcmlvciUyMGRlc2lnbiUyMGJsdWVwcmludHxlbnwxfHx8fDE3NzY1NTM0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Diseño Arquitectónico',
      description: 'Desarrollamos planos arquitectónicos completos y renders 3D de cada ambiente.',
      image: 'https://images.unsplash.com/photo-1757344454333-cc666252e596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHwzRCUyMGludGVyaW9yJTIwZGVzaWduJTIwcmVuZGVyJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzY1NTM0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Presupuesto Detallado',
      description: 'Te entregamos un presupuesto completo desglosado por áreas y etapas del proyecto.',
      image: 'https://images.unsplash.com/photo-1763076470404-23554ef26747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjByZW5vdmF0aW9uJTIwbWF0ZXJpYWxzJTIwc2FtcGxlc3xlbnwxfHx8fDE3NzY1NTM0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Permisos y Aprobaciones',
      description: 'Gestionamos todos los permisos necesarios ante autoridades y copropiedad.',
      image: 'https://images.unsplash.com/photo-1581674662583-5e89b374fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcmNoaXRlY3QlMjBtZWFzdXJpbmclMjBpbnRlcmlvciUyMGRlc2lnbiUyMGJsdWVwcmludHxlbnwxfHx8fDE3NzY1NTM0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Ejecución por Fases',
      description: 'Trabajamos sistemáticamente área por área para minimizar el impacto en tu día a día.',
      image: 'https://images.unsplash.com/photo-1767350498906-8b3a4c1b3814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZyUyMHJlbm92YXRpb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzY1NTM0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Entrega y Garantía',
      description: 'Realizamos la entrega final con manual de mantenimiento y activamos tu garantía.',
      image: 'https://images.unsplash.com/photo-1680210851377-b7168175ae9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjBDb2xvbWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NzY1NTE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const packages = [
    {
      name: 'Apartamento Pequeño',
      size: 'Hasta 60m²',
      price: 'Desde $35.000.000',
      features: [
        'Diseño arquitectónico',
        '1 Baño completo',
        'Cocina integral',
        'Sala y alcoba',
        'Pisos y pintura completa',
        'Instalaciones renovadas'
      ]
    },
    {
      name: 'Apartamento Mediano',
      size: '60m² - 100m²',
      price: 'Desde $55.000.000',
      features: [
        'Diseño arquitectónico completo',
        '2 Baños completos',
        'Cocina de lujo',
        'Sala, comedor y alcobas',
        'Pisos premium',
        'Carpintería a medida',
        'Iluminación LED integral',
        'Pintura decorativa'
      ],
      featured: true
    },
    {
      name: 'Casa o Apartamento Grande',
      size: 'Más de 100m²',
      price: 'Desde $90.000.000',
      features: [
        'Diseño arquitectónico exclusivo',
        '3+ Baños de lujo',
        'Cocina con isla',
        'Todos los espacios sociales',
        'Alcobas con closets',
        'Materiales importados',
        'Domótica completa',
        'Zona de lavandería',
        'Terraza o balcón',
        'Acabados premium'
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
            src="https://images.unsplash.com/photo-1626142161754-a7d4766c5b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjBDb2xvbWJpYSUyMG1vZGVybnxlbnwxfHx8fDE3NzY1NTE4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Remodelación integral"
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
              Remodelación Integral
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8"
            >
              Transforma completamente tu hogar en el espacio perfecto que siempre soñaste, desde el diseño hasta el último detalle
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Ventajas de la Remodelación Integral</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un solo proyecto, un solo equipo, un resultado excepcional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 text-white rounded-full mb-4"
                >
                  <benefit.icon size={36} />
                </motion.div>
                <h3 className="text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-5xl mb-6">Todo Incluido</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos encargamos de absolutamente todo para que no tengas que preocuparte por nada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
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
            <h2 className="text-4xl md:text-5xl mb-6">Proceso de Trabajo</h2>
            <p className="text-xl text-gray-600">
              Un método probado para garantizar resultados excepcionales
            </p>
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
            <h2 className="text-4xl md:text-5xl mb-6">Paquetes por Tamaño</h2>
            <p className="text-xl text-gray-600">
              Inversión estimada según el tamaño de tu propiedad
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
                    Más Solicitado
                  </div>
                )}
                <h3 className="text-2xl mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.size}</p>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 text-lg">
              * Los precios son estimados y pueden variar según acabados y especificaciones. <br />
              Solicita una cotización personalizada para tu proyecto específico.
            </p>
          </motion.div>
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
            ¿Listo para Transformar Tu Hogar Completamente?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Agenda una visita técnica gratuita y recibe un plan detallado de tu proyecto
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
            Agendar Visita Técnica
            <ArrowRight size={24} />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
