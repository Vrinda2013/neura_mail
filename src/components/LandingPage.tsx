import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  BarChart3, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Star,
  Play,
  Sparkles,
  MessageSquare,
  Brain,
  Target,
  Clock,
  Award
} from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {

  const features = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Smart Email Management",
      description: "AI-powered spam detection and automatic folder organization for your Gmail with intelligent categorization",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze your email patterns and business data for actionable insights",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Business Intelligence",
      description: "Transform CSV/Excel files into interactive dashboards with real-time KPIs and comprehensive reporting",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Folder-Specific AI Chat",
      description: "Ask questions about specific email folders with our GPT-powered assistant for contextual insights",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "IntelliMail transformed how we handle customer emails. The AI classification is incredibly accurate and saves us 5+ hours weekly!"
    },
    {
      name: "Michael Chen",
      role: "Business Analyst",
      company: "DataFlow Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The business intelligence features are game-changing. We can now make data-driven decisions with beautiful visualizations."
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Finally, an email assistant that understands context! The folder-specific chatbot answers questions I didn't know I had."
    }
  ];

  const stats = [
    { value: "50M+", label: "Emails Processed", icon: <Mail className="h-5 w-5" /> },
    { value: "99.8%", label: "Accuracy Rate", icon: <Target className="h-5 w-5" /> },
    { value: "25K+", label: "Active Users", icon: <Users className="h-5 w-5" /> },
    { value: "24/7", label: "AI Support", icon: <Clock className="h-5 w-5" /> }
  ];

  const benefits = [
    { icon: <CheckCircle className="h-5 w-5 text-green-500" />, text: "Reduce email processing time by 80%" },
    { icon: <CheckCircle className="h-5 w-5 text-green-500" />, text: "Automated spam detection & organization" },
    { icon: <CheckCircle className="h-5 w-5 text-green-500" />, text: "Real-time business analytics dashboard" },
    { icon: <CheckCircle className="h-5 w-5 text-green-500" />, text: "AI-powered insights & recommendations" },
    { icon: <CheckCircle className="h-5 w-5 text-green-500" />, text: "Secure OAuth 2.0 Gmail integration" },
    { icon: <CheckCircle className="h-5 w-5 text-green-500" />, text: "Export professional PDF reports" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Enhanced Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="flex items-center space-x-1">
                  <Mail className="h-4 w-4 text-white" />
                  <BarChart3 className="h-3 w-3 text-white" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  IntelliMail
                </span>
                <div className="text-xs text-gray-500 font-medium">Email + Analytics Platform</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Testimonials</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Pricing</a>
              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="font-medium"
                  onClick={onLogin}
                >
                  Sign In
                </Button>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-primary to-secondary font-medium"
                  onClick={onLogin}
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="md:hidden">
              <Button variant="outline" size="sm">Menu</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center max-w-5xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <Sparkles className="h-4 w-4 mr-2 text-indigo-600" />
            Powered by Advanced AI & Machine Learning
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Intelligent Email
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Meets Smart Analytics
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform email chaos into clarity with AI-powered classification, automated organization, 
            and intelligent business insights. The unified platform for modern email management.
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                {benefit.icon}
                <span className="text-gray-700 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={onLogin}
            >
              <Play className="h-5 w-5 mr-2" />
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-2">
              <MessageSquare className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex justify-center mb-3 text-indigo-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="IntelliMail Dashboard Preview" 
              className="relative rounded-3xl shadow-2xl mx-auto max-w-6xl w-full border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need for
              <span className="block text-indigo-600">Smart Email Management</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed for modern businesses to streamline email workflows and gain valuable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mx-auto mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl mb-3 group-hover:text-indigo-600 transition-colors">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              Customer Success
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="text-indigo-600">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600">
              See what professionals are saying about IntelliMail
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full border-2 border-indigo-100"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                      <p className="text-xs text-indigo-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 gradient-cta">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Email Management?
            </h2>
            <p className="text-white/90 text-xl mb-8">
              Join thousands of professionals using IntelliMail to streamline their workflow
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 bg-white text-primary hover:bg-white/90"
                onClick={onLogin}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-10 py-6 text-lg font-semibold bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20"
              >
                Watch Demo
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-6">
              No credit card required • Free 14-day trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <Mail className="h-3 w-3 text-white" />
                    <BarChart3 className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-xl font-bold">IntelliMail</span>
                  <div className="text-xs text-gray-400">Email + Analytics</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming email management with the power of artificial intelligence and advanced analytics.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-indigo-400">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-indigo-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-indigo-400">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IntelliMail. All rights reserved. Built with ❤️ for modern businesses.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
