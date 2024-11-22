"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FeaturedPostProps {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  date?: string;
  category?: string;
}

export function FeaturedPost({ 
  title, 
  excerpt, 
  image, 
  href, 
  date = "Apr 12, 2024",
  category = "Travel" 
}: FeaturedPostProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link href={href}>
        <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-green-900/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                {category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-3">{date}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
              {title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {excerpt}
            </p>
            <div className="flex items-center text-green-600 font-medium group/link">
              <span className="mr-2 group-hover/link:mr-4 transition-all duration-200">
                Read More
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-200" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}