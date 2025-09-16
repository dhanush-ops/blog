import React from 'react';
import { Calendar, Tag, Search } from 'lucide-react';
import { BlogPost, Category } from '../types/blog';

interface SidebarProps {
  recentPosts: BlogPost[];
  categories: Category[];
  onCategorySelect: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ recentPosts, categories, onCategorySelect }) => {
  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Search size={20} className="mr-2" />
          Search
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search size={16} className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Calendar size={20} className="mr-2" />
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.slice(0, 5).map((post) => (
            <div key={post.id} className="group">
              <div className="flex space-x-3">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 cursor-pointer">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Tag size={20} className="mr-2" />
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategorySelect(category.name)}
              className="flex justify-between items-center w-full text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-blue-600">
                {category.name}
              </span>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md p-6 text-white">
        <h3 className="text-lg font-semibold mb-2">Subscribe to Newsletter</h3>
        <p className="text-blue-100 text-sm mb-4">
          Get the latest posts delivered right to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-300"
          />
          <button className="w-full bg-white text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;