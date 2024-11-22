import { HeroSection } from "@/components/HeroSection";
import { FeaturedPost } from "@/components/FeaturedPost";

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Featured Posts */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-800 mb-8">
          Latest Adventures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeaturedPost
            title="Amazing Travel Experience"
            excerpt="Discover the hidden gems of nature and embark on an unforgettable journey through breathtaking landscapes..."
            image="/path-to-your-image.jpg"
            href="/blog/post-slug"
            date="Apr 12, 2024"
            category="Travel"
          />
          <FeaturedPost
            title="Forest Tales"
            excerpt="Walking through ancient woodlands"
            image="/sample2.jpg"
            href="/blog/forest-tales"
          />
          <FeaturedPost
            title="Coastal Journey"
            excerpt="Exploring pristine beaches"
            image="/sample3.jpg"
            href="/blog/coastal-journey"
          />
        </div>
      </section>
    </div>
  );
}
