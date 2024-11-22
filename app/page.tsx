import { HeroSection } from "@/components/HeroSection";
import { FeaturedPost } from "@/components/FeaturedPost";

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Featured Posts */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full text-center my-8">
          <h2 className="text-3xl font-bold">FEATURED TRAVEL ARTICLES</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeaturedPost
            title="Amazing Travel Experience"
            excerpt="Discover the hidden gems of nature and embark on an unforgettable journey through breathtaking landscapes..."
            image="/ait-benhaddou.jpg"
            href="/blog/post-slug"
            date="Apr 12, 2024"
            category="Travel"
          />
          <FeaturedPost
            title="Atlas Tales"
            excerpt="Walking through ancient woodlands"
            image="/Atlas-Mountains.webp"
            href="/blog/forest-tales"
          />
          <FeaturedPost
            title="Imlil waterfalls Journey"
            excerpt="Exploring pristine beaches"
            image="/Atlas-waterall3-768x1024.jpg"
            href="/blog/coastal-journey"
          />
        </div>
      </section>
    </div>
  );
}
