"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

interface Post {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  category?: string;
}

export function BlogCard({ post }: { post: Post }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group h-full"
    >
      <Link href={`/blog/${post.slug}`}>
        <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-green-500/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                {post.category || 'Travel'}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Date */}
            <time className="text-sm text-gray-500 mb-3">
              {format(new Date(post.date), 'MMM d, yyyy')}
            </time>
            
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
              {post.title}
            </h3>
            
            {/* Excerpt */}
            <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
              {post.excerpt}
            </p>

            {/* Read More Link */}
            <div className="flex items-center text-green-600 font-medium group/link mt-auto">
              <span className="mr-2 group-hover/link:mr-4 transition-all duration-200">
                Read Article
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-200" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}