"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="About section image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-green-800 mb-6">
            About Nature Travels
          </h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Welcome to Nature Travels, where we share our passion for
              exploring Earth's most beautiful landscapes and natural wonders.
              Our journey began with a simple love for the outdoors and has
              evolved into a mission to document and share the world's most
              breathtaking natural destinations.
            </p>
            <p className="text-lg mb-4">
              Through our blog, we aim to inspire others to explore, respect,
              and preserve the natural world. Each post is carefully crafted to
              bring you not just travel guides, but meaningful insights into the
              places we visit and the environmental challenges they face.
            </p>
            <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-lg">
              To inspire sustainable travel and foster a deeper connection with
              nature through authentic storytelling and photography.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
