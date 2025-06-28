import React from 'react';
import { ArrowRight, Users, Briefcase, Star, Shield, Zap, Globe } from 'lucide-react';

interface LandingPageProps {
  onAdminClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onAdminClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Khedmalink
            </span>
          </div>
          <button
            onClick={onAdminClick}
            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
          >
            Admin Dashboard
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Connect with
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                Top Freelancers
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Khedmalink bridges the gap between talented freelancers and innovative recruiters. 
              Find your perfect match and build extraordinary projects together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Khedmalink?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the tools and platform you need to succeed in the freelance economy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Talent Pool</h3>
              <p className="text-gray-600 leading-relaxed">
                Access a curated network of skilled freelancers across various industries and expertise levels.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamlined project creation, application tracking, and seamless collaboration tools.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Built-in rating system and feedback mechanisms ensure high-quality deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                10K+
              </div>
              <div className="text-gray-600 font-medium">Active Freelancers</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                5K+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                98%
              </div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Join thousands of successful recruiters and freelancers who trust Khedmalink 
            to deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button 
              onClick={onAdminClick}
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg flex items-center justify-center group"
            >
              <Shield className="mr-2 w-5 h-5" />
              Admin Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Khedmalink</span>
          </div>
          <p className="text-gray-400 mb-4">
            Connecting talent with opportunity, one project at a time.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-white transition-colors cursor-pointer">Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;