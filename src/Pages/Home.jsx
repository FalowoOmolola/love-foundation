import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoEyeOutline } from 'react-icons/io5';
import Counter from '../Components/Counter';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Clear Vision for a <span className="text-blue-600">Brighter Future</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Love Eye Foundation, we provide world-class eye care services with cutting-edge technology and compassionate care. Your vision is our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Schedule Consultation
                </motion.button>
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <svg className="w-full h-96 text-blue-100" fill="currentColor" viewBox="0 0 400 300">
                <rect width="400" height="300" rx="20" fill="#f0f9ff"/>
                <circle cx="200" cy="150" r="80" fill="#3b82f6" opacity="0.1"/>
                <circle cx="200" cy="150" r="50" fill="#3b82f6" opacity="0.2"/>
                <circle cx="200" cy="150" r="25" fill="#3b82f6" opacity="0.4"/>
                <path d="M160 130 Q200 110 240 130 Q240 170 200 190 Q160 170 160 130" fill="#1e40af" opacity="0.6"/>
                <circle cx="200" cy="150" r="8" fill="#1e40af"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="bg-white p-6 rounded-full shadow-xl"
                >
                  <IoEyeOutline className="w-16 h-16 text-blue-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <Counter end={500} suffix="+" />
              </div>
              <div className="text-gray-600">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <Counter end={5} suffix="+" />
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <Counter end={10} suffix="+" />
              </div>
              <div className="text-gray-600">Expert Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <Counter end={98} suffix="%" />
              </div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to restoring sight and promoting healthy vision for all
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Comprehensive Eye Exams", icon: "👁️", desc: "Complete vision assessments using advanced diagnostic equipment." },
              { title: "Community Eye Outreaches", icon: "🔬", desc: "Free eye screenings, consultations, and treatment in underserved communities." },
              { title: "Corporate & Community Partnerships", icon: "⚡", desc: "Collaborations with businesses, religious groups, and community associations to promote eye health and provide resources." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Services
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact That Matters</h2>
            <p className="text-xl text-gray-600">Every testimony reflects the love, compassion, and commitment behind our mission.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Musa", role: "Student", initial: "S", review: "I struggled with headaches from poor sight, but their program gave me glasses and relief.", color: "bg-blue-600" },
              { name: "Chiamaka Okafor", role: "Glasses Recipient", initial: "C", review: "I received free eye testing and affordable glasses—my vision is clear again.", color: "bg-green-600" },
              { name: "Racheal Omolola", role: "Short Sighted patient", initial: "R", review: "I was tested at no cost and got glasses at a very low price—now I enjoy clear sight.", color: "bg-purple-600" }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.initial}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
                <div className="flex text-yellow-400">★★★★★</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;