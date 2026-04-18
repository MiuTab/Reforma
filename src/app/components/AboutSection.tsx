import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section className="bg-[#F5F1E8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Lo Entendemos.</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Respaldados por Gerentes y Diseñadores Creativos, aportamos décadas de experiencia desde
            las trincheras del diseño de interiores y los oficios especializados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-orange-500 p-12 rounded-3xl text-white space-y-6"
          >
            <p className="text-xl leading-relaxed">
              El liderazgo de Reforma aporta décadas de experiencia desde las trincheras
              del diseño de interiores y los oficios especializados.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-white"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-orange-500 p-12 rounded-3xl text-white space-y-6"
          >
            <p className="text-xl leading-relaxed">
              Y la visión innovadora requerida para escalar empresas de tecnología innovadoras.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-white"
            ></motion.div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-3xl overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1768839725085-829e6ac7ac26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjByZW5vdmF0aW9uJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzc2NTUxODc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Trabajador aplicando acabados"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-3xl overflow-hidden bg-gray-900"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-orange-500 opacity-20"
              >
                <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
                  <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10"/>
                  <rect x="120" y="130" width="60" height="40" stroke="currentColor" strokeWidth="2"/>
                  <path d="M90 100 L210 100" stroke="currentColor" strokeWidth="2"/>
                  <path d="M90 200 L210 200" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
