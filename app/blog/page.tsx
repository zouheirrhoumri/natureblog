"use client";

import { BlogCard } from '@/components/BlogCard';
import { motion } from 'framer-motion';
const posts = [
  {
    id: 1,
    title: 'Mountain Sunrise Adventure',
    excerpt: 'Experiencing the breathtaking alpenglow in the Rocky Mountains.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    date: '2024-03-10',
    slug: 'mountain-sunrise'
  },
  {
    id: 2,
    title: 'Rainforest Expedition',
    excerpt: 'Exploring the lush biodiversity of Amazon rainforest.',
    image: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc',
    date: '2024-02-15',
    slug: 'rainforest-expedition'
  },
  {
    id: 3,
    title: 'Desert Bloom: Spring Magic',
    excerpt: 'Witnessing the rare and beautiful desert wildflower super bloom.',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35',
    date: '2024-01-20',
    slug: 'desert-bloom'
  }
];


export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-green-800 mb-8">Latest Adventures</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}