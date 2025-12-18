import { BookOpen, Brain, Briefcase, Check, ChevronRight, GraduationCap, Rocket, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: BookOpen,
      title: "Smart Notes Library",
      description: "Access curated notes from top students, organized by semester and subject"
    },
    {
      icon: Rocket,
      title: "Project Showcase",
      description: "Submit, track, and get AI-powered feedback on your engineering projects"
    },
    {
      icon: Brain,
      title: "AI Study Assistant",
      description: "Get instant help with concepts, generate summaries, and personalized study plans"
    },
    {
      icon: TrendingUp,
      title: "Career Roadmaps",
      description: "AI-curated learning paths for AI/ML, Web Dev, and Core Engineering roles"
    },
    {
      icon: Briefcase,
      title: "Internship Hub",
      description: "Discover and apply to internships curated for engineering students"
    },
    {
      icon: Sparkles,
      title: "Smart Recommendations",
      description: "AI-powered suggestions for notes, projects, and career opportunities"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Create Your Account",
      description: "Sign up in seconds with your college email and build your academic profile"
    },
    {
      step: "02",
      title: "Access Smart Resources",
      description: "Browse notes, track projects, and explore roadmaps tailored to your semester"
    },
    {
      step: "03",
      title: "Accelerate Your Growth",
      description: "Get AI guidance, apply to internships, and excel in your engineering journey"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "CSE, IIT Delhi",
      avatar: "PS",
      content: "UniPilot's AI assistant helped me understand complex DSA concepts in minutes. The notes library is a lifesaver during exams!",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "ECE, NIT Trichy",
      avatar: "RV",
      content: "Got my first internship through UniPilot! The roadmap feature guided me perfectly for web development preparation.",
      rating: 5
    },
    {
      name: "Ananya Patel",
      role: "IT, BITS Pilani",
      avatar: "AP",
      content: "The project submission feature with AI feedback transformed how I work. It's like having a mentor available 24/7.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Access to basic notes library",
        "5 AI assistant queries/month",
        "Project submission (2/semester)",
        "Basic roadmap access",
        "Community support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "₹199",
      period: "per month",
      description: "For serious learners",
      features: [
        "Unlimited notes access",
        "Unlimited AI assistant",
        "Unlimited project submissions",
        "AI feedback on projects",
        "Personalized roadmaps",
        "Internship recommendations",
        "Priority support",
        "Resume analyzer"
      ],
      popular: true
    },
    {
      name: "Institute",
      price: "Custom",
      period: "pricing",
      description: "For colleges & training centers",
      features: [
        "Everything in Pro",
        "Admin dashboard",
        "Bulk student accounts",
        "Custom branding",
        "Analytics & reports",
        "Dedicated support",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-sm">
        <div className="container mx-auto px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                UniPilot
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <Button variant="ghost" onClick={() => onNavigate('login')} className="text-sm font-medium">Login</Button>
              <Button onClick={() => onNavigate('signup')} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-10">
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Learning Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              One Platform for
              <span className="block mt-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Notes, Projects & Internships
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The complete productivity suite for Indian engineering students. Study smarter with AI, showcase your projects, and land your dream internship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => onNavigate('signup')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-10 h-14 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02] transition-all"
              >
                Get Started Free
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-10 h-14 border-2 hover:bg-gray-50"
              >
                View Demo
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 pt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Free forever plan</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>10,000+ students</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1623303366639-0e330d7c3d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50JTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzY1OTkwNTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Students using UniPilot"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover border-8 border-white ring-1 ring-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Everything You Need to Excel</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Powerful features designed for engineering students</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get started in three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto text-3xl font-bold text-white shadow-xl shadow-blue-500/30">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-10 -right-6 w-8 h-8 text-blue-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Loved by 10,000+ Students</h2>
            <p className="text-xl text-gray-600">See what students are saying about UniPilot</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'border-4 border-blue-500 shadow-2xl scale-105' : 'border-2'}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-5xl font-bold mb-1">{plan.price}</div>
                  <div className="text-gray-600">{plan.period}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => onNavigate('signup')}
                >
                  {plan.name === 'Institute' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl text-white">UniPilot</span>
              </div>
              <p className="text-sm text-gray-400">
                Empowering engineering students to excel academically and professionally.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Roadmap</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2024 UniPilot. All rights reserved. Made with ❤️ for Indian engineering students.
          </div>
        </div>
      </footer>
    </div>
  );
}