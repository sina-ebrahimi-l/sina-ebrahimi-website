'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: FaInstagram,
      color: 'hover:text-pink-500',
    },
    {
      name: 'YouTube',
      href: '#',
      icon: FaYoutube,
      color: 'hover:text-red-500',
    },
    {
      name: 'Telegram',
      href: '#',
      icon: FaTelegram,
      color: 'hover:text-blue-500',
    },
  ];

  return (
    <div className="min-h-screen bg-dark pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Master the Art of Trading
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Join our comprehensive technical analysis education platform and transform
              your trading journey with expert guidance and proven strategies.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-gray-400 ${link.color} transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-8 w-8" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-lg opacity-10" />
            <Image
              src="/profile-placeholder.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 