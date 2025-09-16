import { BlogPost, Comment, Category } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a modern React application with TypeScript for better development experience and type safety.",
    content: `
      <p>React with TypeScript has become the go-to choice for building robust web applications. In this comprehensive guide, we'll explore how to set up a modern React application with TypeScript.</p>
      
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds static type checking to JavaScript, helping catch errors early in development and providing better IDE support with autocompletion and refactoring tools.</p>
      
      <h2>Setting Up Your Project</h2>
      <p>The easiest way to get started is using Vite, which provides excellent TypeScript support out of the box:</p>
      <pre><code>npm create vite@latest my-react-app -- --template react-ts</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Always define interfaces for your props and state</li>
        <li>Use strict mode for better type checking</li>
        <li>Leverage utility types like Partial, Pick, and Omit</li>
        <li>Use proper error boundaries for better error handling</li>
      </ul>
      
      <p>With these fundamentals in place, you'll be building type-safe React applications that are easier to maintain and debug.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Development",
    tags: ["React", "TypeScript", "Frontend"],
    featuredImage: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: 5,
    featured: true
  },
  {
    id: 2,
    title: "Modern CSS Techniques for 2024",
    excerpt: "Discover the latest CSS features and techniques that will help you create stunning, responsive web designs.",
    content: `
      <p>CSS has evolved tremendously in recent years, introducing powerful new features that make web design more flexible and efficient than ever before.</p>
      
      <h2>CSS Grid and Flexbox</h2>
      <p>These layout methods have revolutionized how we approach web layouts. CSS Grid excels at two-dimensional layouts, while Flexbox is perfect for one-dimensional arrangements.</p>
      
      <h2>Custom Properties (CSS Variables)</h2>
      <p>CSS custom properties allow for dynamic styling and theming capabilities that were previously only possible with preprocessors.</p>
      
      <h2>Container Queries</h2>
      <p>The future of responsive design lies in container queries, which allow elements to respond to their container's size rather than the viewport.</p>
      
      <p>Stay ahead of the curve by incorporating these modern techniques into your workflow.</p>
    `,
    author: "Mike Chen",
    date: "2024-01-12",
    category: "Design",
    tags: ["CSS", "Design", "Frontend"],
    featuredImage: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: 4,
    featured: true
  },
  {
    id: 3,
    title: "Building Scalable Node.js Applications",
    excerpt: "Learn architectural patterns and best practices for building Node.js applications that can scale with your business needs.",
    content: `
      <p>Building scalable Node.js applications requires careful planning and adherence to proven architectural patterns.</p>
      
      <h2>Microservices Architecture</h2>
      <p>Breaking down your application into smaller, focused services can improve scalability and maintainability.</p>
      
      <h2>Database Design</h2>
      <p>Proper database schema design and query optimization are crucial for application performance at scale.</p>
      
      <h2>Caching Strategies</h2>
      <p>Implement effective caching using Redis or Memcached to reduce database load and improve response times.</p>
      
      <p>Following these principles will help you build applications that can handle growth effectively.</p>
    `,
    author: "David Rodriguez",
    date: "2024-01-10",
    category: "Backend",
    tags: ["Node.js", "Architecture", "Scalability"],
    featuredImage: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: 7,
    featured: true
  },
  {
    id: 4,
    title: "The Future of Web Development",
    excerpt: "Explore emerging trends and technologies that are shaping the future of web development.",
    content: `
      <p>The web development landscape is constantly evolving. Let's explore the trends that will define the future of our industry.</p>
      
      <h2>WebAssembly</h2>
      <p>WebAssembly is bringing near-native performance to web applications, opening up new possibilities for complex applications in the browser.</p>
      
      <h2>Edge Computing</h2>
      <p>Moving computation closer to users is becoming increasingly important for performance and user experience.</p>
      
      <h2>AI Integration</h2>
      <p>Artificial intelligence is being integrated into development tools and user experiences in innovative ways.</p>
      
      <p>Stay informed about these trends to remain competitive in the evolving web development landscape.</p>
    `,
    author: "Emily Watson",
    date: "2024-01-08",
    category: "Technology",
    tags: ["WebAssembly", "AI", "Future Tech"],
    featuredImage: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: 6
  },
  {
    id: 5,
    title: "Optimizing Web Performance",
    excerpt: "Learn practical techniques to improve your website's loading speed and overall performance.",
    content: `
      <p>Website performance directly impacts user experience and search engine rankings. Here are proven techniques to optimize your site.</p>
      
      <h2>Image Optimization</h2>
      <p>Properly sized and compressed images can significantly reduce page load times.</p>
      
      <h2>Code Splitting</h2>
      <p>Load only the JavaScript your users need when they need it.</p>
      
      <h2>Lazy Loading</h2>
      <p>Defer loading of non-critical resources until they're needed.</p>
      
      <p>Implement these optimizations to create faster, more efficient web applications.</p>
    `,
    author: "Alex Thompson",
    date: "2024-01-05",
    category: "Performance",
    tags: ["Performance", "Optimization", "UX"],
    featuredImage: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800",
    readTime: 5
  },
  {
    id: 6,
    title: "Security Best Practices for Web Applications",
    excerpt: "Essential security measures every web developer should implement to protect applications and user data.",
    content: `
      <p>Security should be a primary concern in web development. Here are essential practices to protect your applications.</p>
      
      <h2>Authentication and Authorization</h2>
      <p>Implement robust authentication systems and proper access controls.</p>
      
      <h2>Data Validation</h2>
      <p>Always validate and sanitize user input on both client and server sides.</p>
      
      <h2>HTTPS Everywhere</h2>
      <p>Use HTTPS for all communications to protect data in transit.</p>
      
      <p>Security is an ongoing process that requires constant vigilance and updates.</p>
    `,
    author: "Maria Garcia",
    date: "2024-01-03",
    category: "Security",
    tags: ["Security", "Authentication", "Best Practices"],
    featuredImage: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: 8
  }
];

export const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    author: "John Doe",
    email: "john@example.com",
    content: "Great article! TypeScript has definitely improved my React development workflow.",
    date: "2024-01-16"
  },
  {
    id: 2,
    postId: 1,
    author: "Jane Smith",
    email: "jane@example.com",
    content: "Thanks for the detailed setup guide. Very helpful for beginners!",
    date: "2024-01-17"
  },
  {
    id: 3,
    postId: 2,
    author: "Bob Wilson",
    email: "bob@example.com",
    content: "Container queries are game-changing! Can't wait to use them in production.",
    date: "2024-01-13"
  }
];

export const categories: Category[] = [
  { name: "Development", count: 2 },
  { name: "Design", count: 1 },
  { name: "Backend", count: 1 },
  { name: "Technology", count: 1 },
  { name: "Performance", count: 1 },
  { name: "Security", count: 1 }
];