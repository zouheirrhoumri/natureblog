"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// First add TypeScript interface
interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: string;
}

const images: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    alt: 'Mountain landscape',
    caption: 'Swiss Alps at Dawn',
    category: 'mountains'
  },
  {
    src: 'https://images.unsplash.com/photo-1511497584788-876760111969',
    alt: 'Forest path',
    caption: 'Redwood National Park',
    category: 'forests'
  },
  {
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    alt: "Ocean waves",
    caption: "Pacific Coast",
    category: 'oceans'
  },
  {
    src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
    alt: "Desert vista",
    caption: "Mojave Desert",
    category: 'deserts'
  },
  {
    src: "https://images.unsplash.com/photo-1494472155656-f34e81b17ddc",
    alt: "Waterfall",
    caption: "Multnomah Falls",
    category: 'waterfalls'
  },
  {
    src: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56",
    alt: "Wildlife",
    caption: "Yellowstone Wildlife",
    category: 'wildlife'
  },
];

const categories = ['all', 'mountains', 'forests', 'oceans', 'deserts'];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState('all');

  const filteredImages = images.filter(img => 
    filter === 'all' ? true : img.category === filter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-green-800 mb-8">Photo Gallery</h1>
        
        {/* Category Filter */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index < 6}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                @media (hover: none) {
                  opacity: 100
                }"
              >
                <div className="absolute bottom-0 p-4 text-white transform translate-y-2 
                  group-hover:translate-y-0 transition-transform duration-300"
                >
                  <h3 className="text-lg font-semibold">{image.caption}</h3>
                  <p className="text-sm opacity-90">{image.category}</p>
                </div>
              </div>
              
              {/* Touch feedback overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 active:opacity-100 
                transition-opacity duration-150 md:hidden"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl max-h-[90vh] aspect-auto"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt || "Gallery image"} // Ensure alt text is always present
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                  quality={85}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL=""
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
