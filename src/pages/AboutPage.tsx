import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Editor-in-Chief',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Passionate about web development and helping developers grow their skills.'
    },
    {
      name: 'Mike Chen',
      role: 'Senior Writer',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Full-stack developer with expertise in modern JavaScript frameworks.'
    },
    {
      name: 'Emily Watson',
      role: 'Tech Lead',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Specializes in emerging technologies and their practical applications.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality Content',
      description: 'We focus on creating high-quality, practical content that helps developers solve real problems.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive community where developers can learn, share, and grow together.'
    },
    {
      icon: Award,
      title: 'Expert Insights',
      description: 'Our content is created by experienced developers who understand the challenges you face.'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'We are passionate about technology and committed to sharing knowledge with the community.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About BlogHub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of passionate developers and writers dedicated to sharing knowledge, 
              insights, and the latest trends in web development and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  BlogHub was founded in 2020 with a simple mission: to create a platform where 
                  developers could access high-quality, practical content that helps them grow 
                  their skills and advance their careers.
                </p>
                <p>
                  What started as a small blog has grown into a comprehensive resource for 
                  developers at all levels, covering everything from beginner tutorials to 
                  advanced architectural patterns.
                </p>
                <p>
                  Today, we're proud to serve thousands of developers worldwide, helping them 
                  stay up-to-date with the latest technologies and best practices in web development.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do at BlogHub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              The talented individuals behind BlogHub's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Subscribe to our newsletter and become part of a growing community of passionate developers.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;