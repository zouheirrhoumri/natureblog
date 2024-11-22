"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  closed: {
    x: "100%",
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const menuItemVariants = {
  closed: { x: 20, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
    }
  })
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && !(event.target as HTMLElement).closest('button[aria-label="Toggle menu"]')) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-gray-200/20"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-green-800/90 hover:text-green-800 transition-colors"
          >
            Nature Travels
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100/50 transition-colors fixed right-4 top-4 z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-600 rounded-full origin-left"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-gray-600 rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-600 rounded-full origin-left"
              />
            </div>
          </button>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40"
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  ref={menuRef}
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="fixed top-0 right-0 h-screen w-72 bg-white/90 backdrop-blur-xl shadow-2xl md:hidden"
                >
                  {/* Close Button */}
                 
                  <div className="flex flex-col p-8 pt-16 space-y-8">
                    {['About', 'Blog', 'Gallery'].map((item, i) => (
                      <motion.div
                        key={item}
                        custom={i}
                        variants={menuItemVariants}
                      >
                        <MobileNavLink 
                          href={`/${item.toLowerCase()}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </MobileNavLink>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-600/80 hover:text-gray-900 font-medium 
        transition-colors duration-200 relative hover:after:content-[''] 
        hover:after:absolute hover:after:bottom-0 hover:after:left-0 
        hover:after:w-full hover:after:h-0.5 hover:after:bg-green-800"
    >
      {children}
    </Link>
  );
}

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

function MobileNavLink({ href, children, onClick }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors"
    >
      {children}
    </Link>
  );
}