'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Podcasts', href: '/podcasts' },
    { name: 'Courses', href: '/courses' },
    { name: 'Subscription Plans', href: '/plans' },
  ];

  return (
    <nav className="bg-dark-lighter fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-bold">
              Trading Platform
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/live"
                className="bg-gradient-primary text-white px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-2 hover:opacity-90 transition-opacity"
              >
                <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                <span>Live</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-lighter">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/live"
              className="bg-gradient-primary text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
              <span>Live</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 