import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
  onReadMore: (postId: number) => void;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onReadMore, featured = false }) => {
  return (
    <article className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group ${featured ? 'md:col-span-2 lg:col-span-3' : ''}`}>
      <div className={`${featured ? 'md:flex' : ''}`}>
        <div className={`${featured ? 'md:w-1/2' : ''}`}>
          <img
            src={post.featuredImage}
            alt={post.title}
            className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
              featured ? 'h-64 md:h-full' : 'h-48'
            }`}
          />
        </div>
        
        <div className={`p-6 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
          {/* Category Badge */}
          <div className="flex items-center mb-3">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
            {post.featured && (
              <span className="ml-2 inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}>
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className={`text-gray-600 mb-4 line-clamp-3 ${featured ? 'text-lg' : ''}`}>
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            <div className="flex items-center">
              <User size={16} className="mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Read More Button */}
          <button
            onClick={() => onReadMore(post.id)}
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group/button"
          >
            Read More
            <ArrowRight size={16} className="ml-1 group-hover/button:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;