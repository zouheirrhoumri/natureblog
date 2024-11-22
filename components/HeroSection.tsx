"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 700]); // Adjust values as needed

  return (
    <section 
      ref={containerRef}
      className="relative h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <Image
          src="/heroo1.jpg"
          alt="Nature landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {/* Top Left Leaf */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10"
        >
          <Image
            src="/landscape2.png"
            width={75}
            height={75}
            alt=""
            className="opacity-60"
          />
        </motion.div>

        {/* Bottom Right Leaf */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-10"
        >
          <Image
            src="/destination.png"
            width={75}
            height={75}
            alt=""
            className="opacity-60"
          />
        </motion.div>
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4"
        >
          <Image
            src="/landscape.png"
            width={75}
            height={75}
            alt=""
            className="opacity-70"
          />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-white text-center"
      >
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-green-500/20 text-green-300 text-sm font-medium border border-green-500/30">
              Discover the Extraordinary
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Nature <span className="text-green-400">Travels</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Exploring Earth's Natural Wonders, One Adventure at a Time
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* <button className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold transition-colors">
              Start Your Journey
            </button> */}
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-semibold backdrop-blur-sm transition-colors">
              About Me
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Posts */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-20 mt-8"
      >
        {/* Your featured posts content */}
      </motion.div>
    </section>
  );
}