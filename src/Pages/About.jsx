import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            About Our Foundation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Dedicated to providing exceptional eye care and improving vision health in our community.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Love Eye Foundation is dedicated to reducing avoidable blindness and promoting healthy vision by providing accessible, affordable, and sustainable eye care.
              </p>
              <p className="text-lg text-gray-600">
Through community outreach, education, advocacy, and partnerships, we strive to empower individuals and transform lives with the gift of sight.              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To create a world where sight is recognized as a fundamental right and not a privilege.
              </p>
              <p className="text-lg text-gray-600">
                a world where every individual, regardless of age, location, or circumstance, has access to quality eye care, is free from preventable blindness, and can live a brighter, healthier, and more fulfilling life through the gift of clear vision
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Guided by Care, Driven by Expertise</h2>
            <p className="text-xl text-gray-600">Our team is dedicated to making quality eye care accessible, reliable, and rooted in compassion.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Williams", role: "Chief Ophthalmologist", specialty: "Cataract & Retinal Surgery", initial: "SW" },
              { name: "Dr. Michael Johnson", role: "LASIK Specialist", specialty: "Refractive Surgery", initial: "MJ" },
              { name: "Dr. Emily Chen", role: "Pediatric Ophthalmologist", specialty: "Children's Eye Care", initial: "EC" }
            ].map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {doctor.initial}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{doctor.role}</p>
                <p className="text-gray-600">{doctor.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;