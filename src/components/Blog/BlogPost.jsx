import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen } from 'lucide-react';
import { getPostById, getAllPosts } from '../../data/blogData';
import BlogNavbar from './BlogNavbar';
import BlogHeroSection from './BlogHeroSection';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const currentPost = getPostById(id);
      if (currentPost) {
        setPost(currentPost);
        
        // Get related posts (same category, excluding current post)
        const allPosts = getAllPosts();
        const related = allPosts
          .filter(p => p.id !== currentPost.id && p.category === currentPost.category)
          .slice(0, 3);
        setRelatedPosts(related);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-green-700 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-green-900 mb-2">Article not found</h2>
          <p className="text-green-600 mb-6">The article you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50">
      <BlogNavbar />

      {/* Hero Section */}
      <BlogHeroSection />

      {/* Header */}
      <div className="pt-8 pb-8">
        <div className="container mx-auto px-6">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-6 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-green-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl text-green-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-green-500 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-green-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-green-900 text-lg">{post.author}</h3>
                  <p className="text-green-600">{post.authorRole}</p>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-xl"
              />
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-8 md:p-12 mb-8">
              <div 
                className="prose prose-lg max-w-none prose-green prose-headings:text-green-900 prose-p:text-green-700 prose-p:leading-relaxed prose-strong:text-green-800"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-green-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-green-50 text-green-600 rounded-xl border border-green-200 hover:bg-green-100 transition-colors duration-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-green-900 mb-8">Related Articles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <article
                      key={relatedPost.id}
                      onClick={() => navigate(`/blog/${relatedPost.id}`)}
                      className="group bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-green-900 mb-2 line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
                          {relatedPost.title}
                        </h4>
                        <p className="text-green-600 text-sm line-clamp-2 mb-3">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-green-500">
                          <Clock className="w-3 h-3" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
