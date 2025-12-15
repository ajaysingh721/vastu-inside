import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Vastu Inside",
  description: "Latest articles, tips, and insights about Vastu Shastra, home design, and harmonious living.",
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Vastu Insights & Tips</h1>
          <p className="text-body max-w-3xl mx-auto">
            Discover the latest articles, practical tips, and expert insights on Vastu Shastra, 
            home design, and creating harmonious living spaces.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex flex-col justify-center">
                <span className="text-primary-600 font-semibold text-sm mb-2">FEATURED POST</span>
                <h2 className="heading-lg mb-4">{featuredPost.title}</h2>
                <p className="text-body mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm text-gray-600">{featuredPost.date}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{featuredPost.readTime}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm bg-primary-200 text-primary-800 px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`} className="btn-primary inline-block w-fit">
                  Read Full Article
                </Link>
              </div>
              <div className="bg-white rounded-2xl flex items-center justify-center h-80 lg:h-auto">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">{featuredPost.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{featuredPost.title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="pb-8">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border-2 border-primary-300 text-primary-700 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 font-semibold"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg h-48 flex items-center justify-center mb-4">
                  <span className="text-6xl">{post.icon}</span>
                </div>
                <span className="text-xs bg-primary-100 text-primary-800 px-3 py-1 rounded-full inline-block mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-primary-500 font-semibold hover:text-primary-600 inline-flex items-center group"
                >
                  Read More 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="heading-lg mb-4 text-white">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Get the latest Vastu tips, articles, and special offers delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
                required
              />
              <button type="submit" className="bg-white text-primary-500 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTopics.map((topic, index) => (
              <Link
                key={index}
                href={`/blog/category/${topic.slug}`}
                className="card text-center group hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3">{topic.icon}</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-600">{topic.count} articles</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const featuredPost = {
  title: "10 Essential Vastu Tips for Your New Home",
  slug: "10-essential-vastu-tips-new-home",
  excerpt: "Moving into a new home? Discover the fundamental Vastu principles that will help you create a harmonious and prosperous living environment from day one.",
  date: "December 10, 2024",
  readTime: "8 min read",
  category: "Home Vastu",
  icon: "🏠"
};

const categories = [
  "All Posts",
  "Home Vastu",
  "Office Vastu",
  "Vastu Tips",
  "Case Studies",
  "Remedies",
  "Feng Shui"
];

const blogPosts = [
  {
    title: "Understanding the Five Elements in Vastu",
    slug: "five-elements-vastu",
    excerpt: "Learn how earth, water, fire, air, and space influence your living environment and how to balance them for optimal energy flow.",
    date: "December 8, 2024",
    readTime: "6 min read",
    category: "Vastu Basics",
    icon: "🌍"
  },
  {
    title: "Best Direction for Your Home Office",
    slug: "best-direction-home-office",
    excerpt: "With remote work becoming the norm, discover which direction is ideal for your home office to boost productivity and success.",
    date: "December 5, 2024",
    readTime: "5 min read",
    category: "Office Vastu",
    icon: "💼"
  },
  {
    title: "Vastu for Kitchen: Complete Guide",
    slug: "vastu-kitchen-guide",
    excerpt: "The kitchen is the heart of your home. Learn the optimal placement, direction, and arrangement according to Vastu principles.",
    date: "December 3, 2024",
    readTime: "7 min read",
    category: "Home Vastu",
    icon: "🍳"
  },
  {
    title: "Color Psychology in Vastu Shastra",
    slug: "color-psychology-vastu",
    excerpt: "Colors have profound effects on our mood and energy. Discover which colors work best for different rooms in your home.",
    date: "November 30, 2024",
    readTime: "6 min read",
    category: "Vastu Tips",
    icon: "🎨"
  },
  {
    title: "Bedroom Vastu for Better Sleep",
    slug: "bedroom-vastu-better-sleep",
    excerpt: "Transform your bedroom into a peaceful sanctuary with these Vastu guidelines for restful sleep and rejuvenation.",
    date: "November 28, 2024",
    readTime: "5 min read",
    category: "Home Vastu",
    icon: "🛏️"
  },
  {
    title: "Vastu Remedies Without Renovation",
    slug: "vastu-remedies-without-renovation",
    excerpt: "Practical and affordable Vastu corrections that don't require structural changes or major renovations.",
    date: "November 25, 2024",
    readTime: "7 min read",
    category: "Remedies",
    icon: "🔧"
  },
  {
    title: "Main Entrance Vastu Guidelines",
    slug: "main-entrance-vastu",
    excerpt: "The main entrance is crucial in Vastu. Learn how to optimize your home's entry for positive energy and prosperity.",
    date: "November 22, 2024",
    readTime: "6 min read",
    category: "Home Vastu",
    icon: "🚪"
  },
  {
    title: "Vastu for Retail Shops and Showrooms",
    slug: "vastu-retail-shops",
    excerpt: "Attract more customers and boost sales with proper Vastu arrangement for your retail space.",
    date: "November 20, 2024",
    readTime: "8 min read",
    category: "Commercial Vastu",
    icon: "🏪"
  },
  {
    title: "Plot Selection: A Vastu Perspective",
    slug: "plot-selection-vastu",
    excerpt: "Planning to buy land? Learn the key factors to consider when selecting a plot according to Vastu principles.",
    date: "November 18, 2024",
    readTime: "9 min read",
    category: "Site Analysis",
    icon: "📐"
  }
];

const popularTopics = [
  {
    title: "Home Design",
    slug: "home-design",
    icon: "🏡",
    count: 25
  },
  {
    title: "Office Spaces",
    slug: "office-spaces",
    icon: "🏢",
    count: 18
  },
  {
    title: "Remedies",
    slug: "remedies",
    icon: "✨",
    count: 15
  },
  {
    title: "Case Studies",
    slug: "case-studies",
    icon: "📊",
    count: 12
  }
];
