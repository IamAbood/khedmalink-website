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

      {/* Our Team Section */}
<section className="px-6 py-20 bg-white/70 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        A passionate group of developers, designers, and dreamers behind Khedmalink.
      </p>
    </div>

    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
      {[
        {
          name: 'AbdulKareem Alsaou',
          title: 'Project Lead & Backend Developer',
          image: 'src/team/abood.jpg',
          linkedin: 'https://linkedin.com/in/abdulkareem-alsaou',
          github: 'https://github.com/iamAbood'
        },
        {
          name: 'Baraa Adnan',
          title: 'Qaulity Assurance & Documentation',
          image: 'src/team/baraa.webp',
          linkedin: 'https://linkedin.com/in/janedoe',
          github: 'https://github.com/janedoe'
        },
        {
          name: 'Razan Haitham',
          title: 'UI/UX Designer & Public Relations',
          image: 'src/team/razan.jfif',
          linkedin: 'https://www.linkedin.com/in/razan-haitham',
          github: 'https://github.com/johnsmith'
        },
        {
          name: 'Laith Abusamra',
          title: 'Frontend Developer & UI/UX Designer',
          image: 'src/team/laith.jpg',
          linkedin: 'https://www.linkedin.com/in/laith-abusamra-26aa97239/',
          github: 'https://github.com/laithabusamra'
        },
      ].map((member, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-indigo-500/50 shadow-md">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
          <p className="text-gray-500 mb-4">{member.title}</p>
          <div className="flex justify-center space-x-4">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
              aria-label={`${member.name} LinkedIn`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24V7h5v17H0zm7.5 0H12v-9.5c0-2.2 2.75-2.3 2.75 0V24H20V13.5c0-6.61-7.5-6.36-9 0V24z"/>
              </svg>
            </a>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black"
              aria-label={`${member.name} GitHub`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.85 10.91.57.1.78-.25.78-.55 0-.27-.01-1-.01-2-3.19.69-3.87-1.54-3.87-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.7.08-.68.08-.68 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.58.23 2.74.11 3.03.74.8 1.18 1.82 1.18 3.07 0 4.4-2.68 5.36-5.24 5.65.42.36.79 1.07.79 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/>
              </svg>
            </a>
          </div>
        </div>
      ))}
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

        </div>
      </footer>
    </div>
  );
};

export default LandingPage;