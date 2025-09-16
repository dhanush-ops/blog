import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { blogPosts, comments, categories } from './data/blogData';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setSelectedPostId(null);
    setSelectedCategory(undefined);
  };

  const handleReadMore = (postId: number) => {
    setSelectedPostId(postId);
    setCurrentPage('post');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('blog');
  };

  const handleBackToBlog = () => {
    setCurrentPage('blog');
    setSelectedPostId(null);
  };

  const selectedPost = selectedPostId ? blogPosts.find(post => post.id === selectedPostId) : null;
  const postComments = selectedPostId ? comments.filter(comment => comment.postId === selectedPostId) : [];
  const featuredPosts = blogPosts.filter(post => post.featured);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage featuredPosts={featuredPosts} onReadMore={handleReadMore} />;
      case 'blog':
        return <BlogPage posts={blogPosts} onReadMore={handleReadMore} selectedCategory={selectedCategory} />;
      case 'post':
        return selectedPost ? (
          <BlogPostPage post={selectedPost} comments={postComments} onBack={handleBackToBlog} />
        ) : (
          <BlogPage posts={blogPosts} onReadMore={handleReadMore} />
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage featuredPosts={featuredPosts} onReadMore={handleReadMore} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main className="flex-1">
        {currentPage === 'blog' && !selectedPostId ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <BlogPage posts={blogPosts} onReadMore={handleReadMore} selectedCategory={selectedCategory} />
              </div>
              <div className="lg:col-span-1">
                <Sidebar
                  recentPosts={blogPosts}
                  categories={categories}
                  onCategorySelect={handleCategorySelect}
                />
              </div>
            </div>
          </div>
        ) : (
          renderContent()
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;