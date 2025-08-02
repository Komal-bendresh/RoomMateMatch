import { useState, useEffect } from 'react';
import { ChevronRight, Users, Shield, Brain, Heart, Star, Sparkles, ArrowRight, Check, Globe } from 'lucide-react';

export default function RoomMateAIHomepage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const howItWorksSteps = [
    {
      step: "01",
      title: "Sign Up & Verify",
      description: "Complete comprehensive profile verification including education credentials, employment status, and dating preferences for maximum trust.",
      icon: "🔐",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      step: "02", 
      title: "Take Lifestyle Survey",
      description: "Deep-dive questionnaire covering sleep patterns, cleanliness standards, social preferences, and lifestyle compatibility factors.",
      icon: "📊",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      step: "03",
      title: "AI Matching",
      description: "Advanced machine learning algorithms analyze 50+ compatibility factors to generate detailed match scores with explanations.",
      icon: "🎯",
      gradient: "from-rose-500 to-orange-500"
    },
    {
      step: "04",
      title: "Room Allocation", 
      description: "Choose your perfect living arrangement - twin-sharing for social butterflies or private single rooms for quiet souls.",
      icon: "🏡",
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  const features = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI Accuracy",
      description: "Neural networks trained on 100,000+ successful matches",
      metric: "98.7% accuracy",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Verified Users", 
      description: "Multi-layer verification including ID, education & employment",
      metric: "100% verified",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Secure & Private",
      description: "Bank-grade encryption with zero data sharing policies",
      metric: "256-bit SSL",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Happy Living",
      description: "Average satisfaction rate across all matched roommates",
      metric: "4.9/5 rating",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face",
      quote: "The AI matching was incredibly accurate. My roommate and I have been living together for 8 months now and we're basically best friends!",
      rating: 5,
      match: "96% compatibility"
    },
    {
      name: "Emma Chen", 
      role: "Marketing Manager",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "I was skeptical about AI matching, but RoomMateAI found someone who shares my exact lifestyle preferences. It's like having a sister!",
      rating: 5,
      match: "94% compatibility"
    },
    {
      name: "Maya Patel",
      role: "UX Designer", 
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      quote: "Safe, verified, and perfectly matched. The detailed compatibility breakdown helped us understand why we click so well together.",
      rating: 5,
      match: "97% compatibility"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Matches" },
    { number: "98.7%", label: "Success Rate" },
    { number: "4.9/5", label: "User Rating" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-rose-900/20"></div>
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease'
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>



      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Trusted by 50,000+ women worldwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white mb-4">Find Your Perfect</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent mb-4">
                Roommate
              </span>
              <span className="block text-white text-4xl md:text-5xl lg:text-6xl">with AI Magic ✨</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join our verified community of amazing women. Our AI analyzes 50+ compatibility factors 
              to find your perfect living companion for comfort, safety, and lifelong friendships.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10 flex items-center gap-3">
                  Get Started - It's Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full border-2 border-gray-600 group-hover:border-white flex items-center justify-center transition-colors">
                  <div className="w-0 h-0 border-l-[6px] border-l-gray-400 group-hover:border-l-white border-y-[4px] border-y-transparent ml-1 transition-colors"></div>
                </div>
                <span className="text-lg">Watch How It Works</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-32 px-6 lg:px-8">
        {/* Background Sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-rose-400 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How the Magic
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Happens
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered matching system combines advanced algorithms with human psychology 
              to create perfect roommate connections.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-purple-500/30">
                  <div className="flex items-start gap-6">
                    {/* Left Side - Step Number and Icon */}
                    <div className="flex-shrink-0">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${step.gradient} text-white font-bold text-lg mb-4`}>
                        {step.step}
                      </div>
                      <div className="text-5xl">{step.icon}</div>
                    </div>
                    
                    {/* Right Side - Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-32 px-6 lg:px-8">
        {/* Background Sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-16 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-8 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-24 left-1/3 w-2 h-2 bg-violet-400 rounded-full animate-pulse delay-1500"></div>
          <div className="absolute top-24 right-12 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-16 right-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-1200"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why 50,000+ Women
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trust Us
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading technology meets human-centered design for the safest, 
              most accurate roommate matching experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-white/20 h-full">
                  <div className="flex items-start gap-6">
                    {/* Left Side - Icon */}
                    <div className="flex-shrink-0">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                    </div>
                    
                    {/* Right Side - Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                      
                      {/* Metric */}
                      <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${feature.gradient} bg-opacity-20 border border-current text-sm font-semibold`}>
                        {feature.metric}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Match Example */}
      <section className="relative z-10 py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            See Your Perfect
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Match Preview
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Here's what your AI-powered compatibility analysis looks like. 
            Detailed insights help you understand why you're perfect together.
          </p>
          
          <div className="relative max-w-md mx-auto">
            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            
            {/* Main Card */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105">
              {/* Profile Image */}
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b789?w=120&h=120&fit=crop&crop=face" 
                  alt="Match"
                  className="w-24 h-24 rounded-full mx-auto border-4 border-white/20"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              </div>
              
              {/* Name & Status */}
              <h3 className="text-2xl font-bold text-white mb-1">Sarah Johnson</h3>
              <p className="text-purple-300 mb-6">Software Engineer • 24 years old</p>
              
              {/* Compatibility Score */}
              <div className="mb-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    96%
                  </div>
                  <div className="ml-3 text-gray-300">Match</div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 mb-3">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{width: '96%'}}></div>
                </div>
              </div>
              
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Compatibility Reasons */}
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Similar sleep schedules (10 PM - 6 AM)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Both prefer minimal overnight guests</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Shared cleanliness standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Compatible work-from-home schedules</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Real Stories from
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Happy Roommates
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Thousands of successful matches have led to lifelong friendships, 
              better living experiences, and unforgettable memories.
            </p>
          </div>
          
          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500">
              <div className="text-center">
                {/* Profile */}
                <img 
                  src={testimonials[currentTestimonial].photo} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-white/20"
                />
                
                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl text-white mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                  ))}
                </div>
                
                {/* Author */}
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-purple-300 mb-2">{testimonials[currentTestimonial].role}</div>
                  <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
                    {testimonials[currentTestimonial].match}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-purple-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-16 hover:bg-white/10 transition-all duration-500">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Find Your
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Perfect Match?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join 50,000+ women who've found their ideal roommates through our AI-powered platform. 
              Your perfect living companion is just a few clicks away.
            </p>
            
            {/* Features List */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                <span>100% Free to Start</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                <span>Verified Users Only</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400" />
                <span>24/7 Support</span>
              </div>
            </div>
            
            <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 text-white px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10 flex items-center gap-3">
                Find Your Perfect Roommate Now
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            <p className="text-gray-400 text-sm mt-6">
              No credit card required • Start matching in under 2 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-20 px-6 lg:px-8">
        {/* Background Sparkles and Glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-12 left-20 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-200"></div>
          <div className="absolute top-32 right-16 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-800"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1100"></div>
          <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-rose-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  RoomMateAI
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md mb-6">
                Revolutionizing roommate matching through AI technology. 
                Creating safe, compatible, and meaningful living connections for women worldwide.
              </p>
              <div className="flex items-center gap-4">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Available in 50+ cities globally</span>
              </div>
            </div>
            
            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">About Us</span></li>
                <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">How It Works</span></li>
                <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Success Stories</span></li>
                <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Careers</span></li>
                <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Press</span></li>
              </ul>
            </div>
            
            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Legal & Support</h4>
              <ul className="space-y-3">
                <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
                <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Terms of Service</span></li>
                <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Safety Guidelines</span></li>
                <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Help Center</span></li>
                <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact Us</span></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 RoomMateAI. All rights reserved. Made with ❤️ for women seeking safe co-living.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="w-8 h-8 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}