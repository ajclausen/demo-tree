import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const blogPosts = [
    {
      slug: 'hardwood-trees',
      title: 'Your Guide to Hardwood Tree Species: Characteristics, Uses, and Care',
      excerpt: 'Explore popular hardwood species, their unique characteristics, and expert care tips for maintaining healthy trees.',
      date: '2024-03-27',
      author: 'Doug McKinney',
      image: '/blog/Oaktreestock.webp',
      category: 'Tree Care'
    },
    {
      slug: 'diy-tree-planting',
      title: 'DIY Tree Planting Tips for Every Aspiring Gardener',
      excerpt: 'Learn everything you need to know about planting trees successfully, from choosing the right species to long-term care and maintenance.',
      date: '2024-03-20',
      author: 'Doug McKinney',
      image: 'https://images.unsplash.com/photo-1599778150914-88e98e0c3a3e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Tree Planting'
    },
    {
      slug: 'dead-tree-removal',
      title: 'Everything You Need to Know About Dead Tree Removal',
      excerpt: 'Understanding the importance of dead tree removal, from identifying risks to professional removal services in Indianapolis.',
      date: '2024-03-13',
      author: 'Doug McKinney',
      image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Tree Removal'
    },
    {
      slug: 'tree-pest-protection',
      title: 'Tree Pest Protection: How to Keep Nuisance Birds Out of Your Trees',
      excerpt: 'Learn effective methods to protect your trees from pest birds while maintaining a beautiful and healthy garden.',
      date: '2024-03-05',
      author: 'Doug McKinney',
      image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Tree Protection'
    },
    {
      slug: 'winter-tree-pruning',
      title: 'Which Species of Indiana Trees Need to Be Pruned in Winter?',
      excerpt: 'Discover the benefits of winter pruning and learn which tree species in Indiana thrive with cold-weather maintenance.',
      date: '2024-02-26',
      author: 'Doug McKinney',
      image: 'https://images.unsplash.com/photo-1611469182571-507c05e03c9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Tree Pruning'
    },
    {
      slug: 'tree-benefits',
      title: 'The Incredible Benefits of Planting Trees in Your Yard',
      excerpt: 'Discover how planting trees can improve air quality, increase property value, and create a more sustainable environment.',
      date: '2024-02-19',
      author: 'Doug McKinney',
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Tree Planting'
    },
    {
      slug: 'emerald-ash-borer',
      title: 'Battling Bark and Beyond: Emerald Ash Borer Problems in Indiana',
      excerpt: 'Learn about the devastating impact of the Emerald Ash Borer on Indiana\'s ash trees and how to protect your trees from this invasive pest.',
      date: '2024-02-13',
      author: 'Doug McKinney',
      image: 'https://images.unsplash.com/photo-1635405074683-96d6921a2a68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Tree Diseases'
    },
    {
      slug: 'tree-fungal-diseases',
      title: 'Common Tree Fungal Diseases in the Midwest and How to Prevent Them',
      excerpt: 'Understanding the most prevalent fungal diseases affecting Midwestern trees and practical prevention strategies.',
      date: '2024-01-16',
      author: 'Doug McKinney',
      image: 'https://images.unsplash.com/photo-1635405074683-96d6921a2a68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Tree Diseases'
    }
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tree Care Blog</h1>
          <p className="text-xl md:text-2xl mb-8">Expert insights and tips for maintaining healthy trees</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <User className="h-4 w-4 ml-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-green-700 hover:text-green-800"
                    >
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest tree care tips and updates
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}