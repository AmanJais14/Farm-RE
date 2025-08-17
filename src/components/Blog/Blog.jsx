import React, { useState, useEffect } from 'react';
import { Search, Calendar, Clock, User, Tag, ArrowRight, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAllPosts, searchPosts, getPostsByCategory, getAllCategories } from '../../data/blogData';
import BlogNavbar from './BlogNavbar';
import BlogHeroSection from './BlogHeroSection';

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const allPosts = getAllPosts();
      const allCategories = ['All', ...getAllCategories()];
      
      setPosts(allPosts);
      setFilteredPosts(allPosts);
      setCategories(allCategories);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = getPostsByCategory(selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = searchPosts(searchQuery).filter(post => 
        selectedCategory === 'All' || post.category === selectedCategory
      );
    }

    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory, posts]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const truncateContent = (content, maxLength = 150) => {
    const textContent = content.replace(/<[^>]*>/g, '');
    return textContent.length > maxLength 
      ? textContent.substring(0, maxLength) + '...' 
      : textContent;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-green-700 font-medium">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50">
      <BlogNavbar />

      {/* Hero Section */}
      <BlogHeroSection />

      {/* Header Section */}
      {/* <div className="py-6 sm:py-8 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-3">
              Agricultural <span className="text-emerald-200">Insights</span>
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-4 leading-relaxed">
              Expert insights, market analysis, and sustainable farming practices from industry leaders
            </p>
          </div>
        </div>
      </div> */}

      {/* Filter Section */}
      <div className="py-8 bg-white/80 backdrop-blur-sm border-b border-green-100">
        <div className="container mx-auto px-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-green-200 bg-white text-green-900 placeholder-green-600 focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all duration-300 shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-green-700">
              <Filter className="w-5 h-5" />
              <span className="font-semibold">Categories:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'bg-white text-green-700 border border-green-200 hover:bg-green-50 hover:border-green-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mt-4 text-green-600">
            <span className="font-medium">{filteredPosts.length}</span> 
            <span className="ml-1">
              {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </span>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">No articles found</h3>
              <p className="text-green-600 mb-6">Try adjusting your search terms or category filter</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-3xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-green-900 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="text-green-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center gap-4 text-sm text-green-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-900 text-sm">{post.author}</p>
                        <p className="text-green-600 text-xs">{post.authorRole}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-lg border border-green-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <button
                      onClick={() => navigate(`/blog/${post.id}`)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
