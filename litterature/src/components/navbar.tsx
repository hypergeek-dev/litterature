'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleTouchStart = () => {
    // Clear any existing timeout
    setShowMenu(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav 
      className="flex flex-wrap items-center justify-between p-3 bg-white bg-opacity-30 text-black"
      style={{ backdropFilter: 'blur(10px)' }}
      onTouchStart={handleTouchStart}
    >
      <img 
        src="https://tailwindflex.com/public/favicon.ico" 
        className="h-10 w-10" 
        alt="Logo" 
      />
      <div className="flex md:hidden">
        <button onClick={toggleMenu}>
          <img 
            className={`toggle ${isMenuOpen ? 'hidden' : 'block'}`} 
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" 
            width="48" 
            height="48" 
            alt="Menu" 
          />
          <img 
            className={`toggle ${isMenuOpen ? 'block' : 'hidden'}`} 
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" 
            width="48" 
            height="48" 
            alt="Close" 
          />
        </button>
      </div>
      <div 
        ref={menuRef}
        className={`toggle ${showMenu || isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-black md:border-none transition-opacity duration-300`}
      >
        <Link href="/" className="block md:inline-block text-black hover:text-gray-700 px-3 py-3 border-b-2 border-black md:border-none">
          Home
        </Link>
        <Link href="/servicetools" className="block md:inline-block text-black hover:text-gray-700 px-3 py-3 border-b-2 border-black md:border-none">
          Service tools
        </Link>
        <Link href="/litterature" className="block md:inline-block text-black hover:text-gray-700 px-3 py-3 border-b-2 border-black md:border-none">
          Litterature
        </Link>
        <Link href="/qa" className="block md:inline-block text-black hover:text-gray-700 px-3 py-3 border-b-2 border-black md:border-none">
          Q & A
        </Link>
        <Link href="/links" className="block md:inline-block text-black hover:text-gray-700 px-3 py-3 border-b-2 border-black md:border-none">
          Links
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
