import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const brandLetters = 'REFORMA'.split('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contacto" className="bg-white pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl leading-tight mb-8">
            Con Reforma,<br />
            Siempre Estarás<br />
            <span className="inline-block relative">
              En Buenas Manos
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-orange-500 -z-10"
              ></motion.div>
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl mb-8">Contáctanos</h3>
            <div className="space-y-6">
              {[
                { icon: Phone, text: '+57 300 123 4567', label: 'Teléfono' },
                { icon: Mail, text: 'info@reformainteriores.com', label: 'Email' },
                { icon: MapPin, text: 'Bogotá, Colombia', label: 'Ubicación' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="text-lg">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 outline-none transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 outline-none transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 outline-none transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Cuéntanos sobre tu proyecto"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 outline-none transition-colors resize-none"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              Enviar Mensaje
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="text-xl mb-4 text-orange-500">Navegación</h4>
              <div className="space-y-2">
                {['Inicio', 'Servicios', 'Equipo', 'Para Propietarios', 'Contacto'].map((item, i) => (
                  <a key={i} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="block hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl mb-4 text-orange-500">Servicios</h4>
              <div className="space-y-2">
                {['Cocinas', 'Baños', 'Salas', 'Remodelación Integral'].map((item, i) => (
                  <p key={i} className="hover:text-orange-400 transition-colors cursor-pointer">{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl mb-4 text-orange-500">Horario</h4>
              <p className="mb-2">Lunes - Viernes: 8:00 AM - 6:00 PM</p>
              <p className="mb-2">Sábados: 9:00 AM - 2:00 PM</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-10 border-t border-gray-700 text-center"
          >
            <p className="sr-only">REFORMA</p>
            <motion.div
              initial="rest"
              whileHover="hover"
              aria-hidden="true"
              className="inline-flex items-center justify-center text-3xl md:text-5xl font-bold text-white tracking-[0.14em] cursor-default"
            >
              {brandLetters.map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  custom={index}
                  variants={{
                    rest: { y: 0, opacity: 0.96 },
                    hover: (i: number) => ({
                      y: [0, -6, 0],
                      opacity: [0.9, 1, 0.9],
                      transition: {
                        duration: 1.4,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        delay: i * 0.06
                      }
                    })
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
