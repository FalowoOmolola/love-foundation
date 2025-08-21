import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoEyeOutline } from 'react-icons/io5';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import Logo1 from '../assets/Logo1.png';

const Footer = () => {
  return (
    <footer className="bg-[#02050a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img src={Logo1} alt="Love Eye Foundation" className="w-18 h-13 " />
              <span className="text-xl font-bold">Love Eye Foundation</span>
            </div>
            <p className="text-gray-300 mb-6">
              Dedicated to providing exceptional eye care and improving vision health in our community.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Free eye screenings</span></li>
              <li><span className="text-gray-300">Pediatric Eye Care</span></li>
              <li><span className="text-gray-300">School Eye Health Program</span></li>
              <li><span className="text-gray-300">Community Eye Outreach</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <HiPhone className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+234 903 925 9338</span>
              </div>
              <div className="flex items-center">
                <HiMail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">lovefoundation25@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">© 2025 Love Eye Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;