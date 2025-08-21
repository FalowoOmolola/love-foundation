import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo1 from '../assets/Logo1.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src={Logo1} className="w-18 h-13" />
            <span className="text-xl font-bold text-gray-900">Love Eye Foundation</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`transition-colors ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Home</Link>
            <Link to="/about" className={`transition-colors ${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>About</Link>
            <Link to="/services" className={`transition-colors ${location.pathname === '/services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Services</Link>
            <Link to="/contact" className={`transition-colors ${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Contact</Link>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;