import { useState } from "react";
import { 
  ArrowLeft, 
  Brain, 
  Code, 
  Cpu, 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  Target,
  TrendingUp,
  Clock,
  Award,
  BookOpen,
  Play
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface RoadmapsModuleProps {
  onNavigate: (page: string) => void;
}

export function RoadmapsModule({ onNavigate }: RoadmapsModuleProps) {
  const [selectedRoadmap, setSelectedRoadmap] = useState<string | null>(null);

  const careerTracks = [
    {
      id: 'ai-ml',
      title: 'AI/ML Engineer',
      icon: Brain,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      description: 'Master artificial intelligence and machine learning',
      duration: '6-8 months',
      difficulty: 'Advanced',
      students: '2,345',
      progress: 45,
      totalSteps: 24,
      completedSteps: 11,
      isPersonalized: true
    },
    {
      id: 'web-dev',
      title: 'Full Stack Developer',
      icon: Code,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      description: 'Build modern web applications end-to-end',
      duration: '4-6 months',
      difficulty: 'Intermediate',
      students: '5,678',
      progress: 67,
      totalSteps: 20,
      completedSteps: 14,
      isPersonalized: true
    },
    {
      id: 'core-eng',
      title: 'Core Engineering',
      icon: Cpu,
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      description: 'Systems programming and embedded systems',
      duration: '5-7 months',
      difficulty: 'Advanced',
      students: '1,234',
      progress: 23,
      totalSteps: 22,
      completedSteps: 5,
      isPersonalized: false
    }
  ];

  const roadmapSteps = {
    'web-dev': [
      {
        id: 1,
        phase: 'Foundations',
        title: 'HTML & CSS Fundamentals',
        status: 'completed',
        duration: '2 weeks',
        resources: 5,
        topics: ['HTML5', 'CSS3', 'Flexbox', 'Grid']
      },
      {
        id: 2,
        phase: 'Foundations',
        title: 'JavaScript Basics',
        status: 'completed',
        duration: '3 weeks',
        resources: 8,
        topics: ['ES6+', 'DOM', 'Events', 'Async/Await']
      },
      {
        id: 3,
        phase: 'Foundations',
        title: 'Git & GitHub',
        status: 'completed',
        duration: '1 week',
        resources: 4,
        topics: ['Version Control', 'Branching', 'Collaboration']
      },
      {
        id: 4,
        phase: 'Frontend',
        title: 'React Fundamentals',
        status: 'in-progress',
        duration: '4 weeks',
        resources: 12,
        topics: ['Components', 'Hooks', 'State Management', 'Router']
      },
      {
        id: 5,
        phase: 'Frontend',
        title: 'Advanced React & TypeScript',
        status: 'locked',
        duration: '3 weeks',
        resources: 10,
        topics: ['TypeScript', 'Context API', 'Custom Hooks', 'Performance']
      },
      {
        id: 6,
        phase: 'Frontend',
        title: 'Modern CSS & Tailwind',
        status: 'locked',
        duration: '2 weeks',
        resources: 6,
        topics: ['Tailwind CSS', 'Animations', 'Responsive Design']
      },
      {
        id: 7,
        phase: 'Backend',
        title: 'Node.js & Express',
        status: 'locked',
        duration: '4 weeks',
        resources: 11,
        topics: ['REST APIs', 'Middleware', 'Authentication', 'Security']
      },
      {
        id: 8,
        phase: 'Backend',
        title: 'Database Design',
        status: 'locked',
        duration: '3 weeks',
        resources: 9,
        topics: ['SQL', 'MongoDB', 'Prisma', 'Migrations']
      },
      {
        id: 9,
        phase: 'DevOps',
        title: 'Deployment & CI/CD',
        status: 'locked',
        duration: '2 weeks',
        resources: 7,
        topics: ['Docker', 'AWS/Vercel', 'GitHub Actions', 'Monitoring']
      },
      {
        id: 10,
        phase: 'Projects',
        title: 'Capstone Project',
        status: 'locked',
        duration: '4 weeks',
        resources: 3,
        topics: ['Full Stack App', 'Best Practices', 'Portfolio']
      }
    ]
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-600" />;
      case 'in-progress':
        return <div className="w-6 h-6 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />;
      default:
        return <Circle className="w-6 h-6 text-gray-300" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 border-green-200';
      case 'in-progress':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => {
              if (selectedRoadmap) {
                setSelectedRoadmap(null);
              } else {
                onNavigate('dashboard');
              }
            }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back {selectedRoadmap ? 'to Roadmaps' : 'to Dashboard'}
          </Button>
          <div>
            <h1 className="text-4xl font-bold mb-2">Career Roadmaps</h1>
            <p className="text-gray-600">AI-curated learning paths to accelerate your career</p>
          </div>
        </div>

        {!selectedRoadmap ? (
          <>
            {/* Career Track Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {careerTracks.map((track) => {
                const Icon = track.icon;
                return (
                  <Card 
                    key={track.id}
                    className={`p-6 bg-gradient-to-br ${track.bgColor} border-2 ${track.borderColor} hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                    onClick={() => setSelectedRoadmap(track.id)}
                  >
                    {track.isPersonalized && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                        <Sparkles className="w-3 h-3 mr-1" />
                        AI Personalized
                      </Badge>
                    )}

                    <div className={`w-16 h-16 bg-gradient-to-br ${track.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{track.title}</h3>
                    <p className="text-gray-600 mb-4">{track.description}</p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-bold">{track.progress}%</span>
                      </div>
                      <Progress value={track.progress} className="h-2" />
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{track.completedSteps}/{track.totalSteps} steps completed</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Duration</p>
                        <p className="font-medium text-sm">{track.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Difficulty</p>
                        <Badge variant="outline" className="text-xs">{track.difficulty}</Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4" />
                        <span>{track.students} students</span>
                      </div>
                      <Button size="sm" className={`bg-gradient-to-r ${track.color} text-white border-0`}>
                        {track.progress > 0 ? 'Continue' : 'Start'}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Benefits Section */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Why Follow Our Roadmaps?</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-blue-600" />
                        <h4 className="font-bold">AI-Personalized</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Paths adapted to your skill level, interests, and career goals
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-5 h-5 text-green-600" />
                        <h4 className="font-bold">Industry-Aligned</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Curated by experts based on real job requirements
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-5 h-5 text-purple-600" />
                        <h4 className="font-bold">Curated Resources</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Best tutorials, courses, and projects for each step
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </>
        ) : (
          // Detailed Roadmap View
          <div className="space-y-6">
            {/* Roadmap Header */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-3xl font-bold">Full Stack Developer</h2>
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                        <Sparkles className="w-3 h-3 mr-1" />
                        AI Personalized
                      </Badge>
                    </div>
                    <p className="text-gray-600">Your personalized path to becoming a full stack developer</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold mb-1">67%</p>
                  <p className="text-sm text-gray-600">Complete</p>
                </div>
              </div>
              <Progress value={67} className="h-3 mt-6" />
            </Card>

            {/* Roadmap Steps */}
            <div className="space-y-4">
              {roadmapSteps['web-dev'].map((step, index) => (
                <Card 
                  key={step.id}
                  className={`p-6 ${getStatusColor(step.status)} border-2 hover:shadow-lg transition-all ${step.status === 'locked' ? 'opacity-60' : ''}`}
                >
                  <div className="flex items-start gap-6">
                    {/* Step Number & Status */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 font-bold">
                        {step.id}
                      </div>
                      {getStatusIcon(step.status)}
                      {index < roadmapSteps['web-dev'].length - 1 && (
                        <div className={`w-0.5 h-16 ${step.status === 'completed' ? 'bg-green-300' : 'bg-gray-300'}`}></div>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <Badge variant="outline" className="mb-2 text-xs">{step.phase}</Badge>
                          <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {step.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" />
                              {step.resources} resources
                            </div>
                          </div>
                        </div>
                        {step.status === 'in-progress' && (
                          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                            <Play className="w-4 h-4 mr-2" />
                            Continue
                          </Button>
                        )}
                        {step.status === 'locked' && (
                          <Button variant="outline" disabled>
                            Locked
                          </Button>
                        )}
                        {step.status === 'completed' && (
                          <Button variant="outline">
                            Review
                          </Button>
                        )}
                      </div>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2">
                        {step.topics.map((topic, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      {step.status === 'completed' && (
                        <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 text-sm text-green-800">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="font-medium">Completed on Dec 10, 2024</span>
                          </div>
                        </div>
                      )}

                      {step.status === 'in-progress' && (
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium">60%</span>
                          </div>
                          <Progress value={60} className="h-2" />
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
