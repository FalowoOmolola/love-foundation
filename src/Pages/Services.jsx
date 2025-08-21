import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const Services = () => {
  const services = [
    {
      title: "Community Eye Outreaches",
      icon: "👁️",
      description: "Free eye screenings, consultations, and treatment in underserved communities.",
      features: ["Distribution of eyeglasses", "medications", "and protective eyewear."]
    },
    {
      title: "School Eye Health Program",
      icon: "🔬",
      description: "Comprehensive eye exams and vision screenings to detect refractive errors early for students in underserved schools.",
      features: ["Vision screenings", "Education on eye hygiene", "Safe reading habits", "Digital eye strain", "Eyeglasses distribution", "Referral for treatment"]
    },
    {
      title: "Corporate & Community Partnerships",
      icon: "⚡",
      description: "Collaborations with businesses, religious groups, and community associations to promote eye health and provide resources.",
      features: ["Workplace eye health programs", "Community awareness campaigns", "Access to eye care resources", "Support for local initiatives"]
    },
    {
      title: "Vision Support Program",
      icon: "💧",
      description: "Provision of affordable eyeglasses and assistive devices for low-vision individuals.",
      features: ["Counseling", "Rehabilitation support for those with permanent vision loss."]
    },
    {
      title: "Pediatric Eye Care",
      icon: "👶",
      description: "Specialized eye care for children, including vision screening and treatment of childhood eye conditions.",
      features: ["Vision screening", "Amblyopia treatment", "Strabismus correction", "Myopia management"]
    }
  ];

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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive eye care services using the latest technology and techniques to ensure optimal vision health.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <HiCheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;