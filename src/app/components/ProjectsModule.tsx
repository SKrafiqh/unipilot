import { useState } from "react";
import { 
  ArrowLeft, 
  Upload, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Sparkles, 
  FolderKanban,
  Github,
  ExternalLink,
  Calendar,
  TrendingUp,
  Brain,
  FileText,
  X
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ProjectsModuleProps {
  onNavigate: (page: string) => void;
}

export function ProjectsModule({ onNavigate }: ProjectsModuleProps) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform with React & Node.js",
      description: "Full-stack e-commerce application with payment integration",
      subject: "Web Development",
      status: "approved",
      submittedDate: "Dec 15, 2024",
      reviewedDate: "Dec 17, 2024",
      aiScore: 92,
      feedback: "Excellent implementation with clean code structure. Great use of modern React patterns.",
      grade: "A",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "github.com/student/ecommerce",
      liveUrl: "ecommerce-demo.vercel.app"
    },
    {
      id: 2,
      title: "AI Chatbot using Natural Language Processing",
      description: "Intelligent chatbot with context understanding and sentiment analysis",
      subject: "Machine Learning",
      status: "reviewed",
      submittedDate: "Dec 10, 2024",
      reviewedDate: "Dec 16, 2024",
      aiScore: 88,
      feedback: "Good implementation. Consider improving the training dataset for better accuracy.",
      grade: "B+",
      technologies: ["Python", "TensorFlow", "NLP", "Flask"],
      githubUrl: "github.com/student/ai-chatbot"
    },
    {
      id: 3,
      title: "Mobile Attendance System using Face Recognition",
      description: "Android app for automated attendance using facial recognition",
      subject: "Mobile Development",
      status: "submitted",
      submittedDate: "Dec 18, 2024",
      aiScore: 85,
      technologies: ["Android", "Kotlin", "TensorFlow Lite", "Firebase"],
      githubUrl: "github.com/student/attendance-app"
    },
    {
      id: 4,
      title: "Smart Traffic Management System",
      description: "IoT-based traffic light control using density-based algorithm",
      subject: "IoT & Embedded Systems",
      status: "submitted",
      submittedDate: "Dec 18, 2024",
      aiScore: 90,
      technologies: ["Arduino", "IoT", "Computer Vision", "Python"],
      githubUrl: "github.com/student/traffic-system"
    }
  ];

  const handleFileUpload = () => {
    setIsUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
      }
    }, 200);
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'approved':
        return { icon: CheckCircle2, color: 'text-green-600 bg-green-50 border-green-200', label: 'Approved' };
      case 'reviewed':
        return { icon: CheckCircle2, color: 'text-blue-600 bg-blue-50 border-blue-200', label: 'Reviewed' };
      case 'submitted':
        return { icon: Clock, color: 'text-yellow-600 bg-yellow-50 border-yellow-200', label: 'Under Review' };
      default:
        return { icon: AlertCircle, color: 'text-gray-600 bg-gray-50 border-gray-200', label: 'Draft' };
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
            onClick={() => onNavigate('dashboard')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">My Projects</h1>
              <p className="text-gray-600">Showcase your work and get AI-powered feedback</p>
            </div>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              onClick={() => setShowSubmitForm(true)}
            >
              <Upload className="w-4 h-4 mr-2" />
              Submit New Project
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <FolderKanban className="w-8 h-8 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">Total</Badge>
            </div>
            <p className="text-3xl font-bold mb-1">8</p>
            <p className="text-sm text-gray-600">Projects Submitted</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <Badge className="bg-green-100 text-green-700 border-green-200">Success</Badge>
            </div>
            <p className="text-3xl font-bold mb-1">6</p>
            <p className="text-sm text-gray-600">Approved</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-yellow-200">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-yellow-600" />
              <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Pending</Badge>
            </div>
            <p className="text-3xl font-bold mb-1">2</p>
            <p className="text-sm text-gray-600">Under Review</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <Badge className="bg-purple-100 text-purple-700 border-purple-200">Average</Badge>
            </div>
            <p className="text-3xl font-bold mb-1">88%</p>
            <p className="text-sm text-gray-600">AI Score</p>
          </Card>
        </div>

        {/* Projects List */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-white border">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
            <TabsTrigger value="submitted">Under Review</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {projects.map((project) => {
              const statusConfig = getStatusConfig(project.status);
              const StatusIcon = statusConfig.icon;

              return (
                <Card key={project.id} className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FolderKanban className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <Badge className={statusConfig.color}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {statusConfig.label}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* AI Score Badge */}
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-indigo-50 px-4 py-2 rounded-xl border border-purple-200">
                        <Brain className="w-5 h-5 text-purple-600" />
                        <div>
                          <p className="text-xs text-purple-600 font-medium">AI Score</p>
                          <p className="text-2xl font-bold text-purple-700">{project.aiScore}%</p>
                        </div>
                      </div>
                      {project.grade && (
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 text-lg px-4 py-1">
                          Grade: {project.grade}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FileText className="w-4 h-4" />
                      <span>{project.subject}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Submitted: {project.submittedDate}</span>
                    </div>
                    {project.reviewedDate && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Reviewed: {project.reviewedDate}</span>
                      </div>
                    )}
                  </div>

                  {project.feedback && (
                    <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50/30 border-blue-200 mb-4">
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm text-blue-900 mb-1">AI Feedback</p>
                          <p className="text-sm text-gray-700">{project.feedback}</p>
                        </div>
                      </div>
                    </Card>
                  )}

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="ml-auto">
                      View Details
                    </Button>
                  </div>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="approved">
            {projects.filter(p => p.status === 'approved').length > 0 ? (
              <div className="space-y-6">
                {/* Similar project cards filtered by status */}
                <p className="text-gray-600">Showing approved projects...</p>
              </div>
            ) : (
              <Card className="p-16 text-center">
                <CheckCircle2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">No approved projects yet</p>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="reviewed">
            <p className="text-gray-600">Reviewed projects will appear here...</p>
          </TabsContent>

          <TabsContent value="submitted">
            <p className="text-gray-600">Projects under review will appear here...</p>
          </TabsContent>
        </Tabs>

        {/* Submit Project Modal/Form */}
        {showSubmitForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Submit New Project</h2>
                    <p className="text-gray-600">Get AI-powered feedback on your work</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setShowSubmitForm(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="project-title">Project Title *</Label>
                    <Input id="project-title" placeholder="e.g., E-Commerce Platform" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-description">Description *</Label>
                    <Textarea 
                      id="project-description" 
                      placeholder="Describe your project, its features, and technologies used..."
                      rows={4}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-subject">Subject/Domain *</Label>
                      <Input id="project-subject" placeholder="e.g., Web Development" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project-semester">Semester *</Label>
                      <Input id="project-semester" placeholder="e.g., 5th Semester" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-technologies">Technologies Used *</Label>
                    <Input 
                      id="project-technologies" 
                      placeholder="e.g., React, Node.js, MongoDB (comma separated)"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="github-url">GitHub Repository</Label>
                      <Input id="github-url" placeholder="https://github.com/..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="live-url">Live Demo URL</Label>
                      <Input id="live-url" placeholder="https://..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Project Files *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                      {isUploading ? (
                        <div className="space-y-3">
                          <Upload className="w-12 h-12 text-blue-600 mx-auto animate-bounce" />
                          <p className="text-sm text-gray-600">Uploading files...</p>
                          <Progress value={uploadProgress} className="h-2" />
                          <p className="text-xs text-gray-500">{uploadProgress}% complete</p>
                        </div>
                      ) : (
                        <div onClick={handleFileUpload}>
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                          <p className="font-medium mb-1">Click to upload or drag and drop</p>
                          <p className="text-sm text-gray-600">
                            PDF, ZIP, or RAR (Max 50MB)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <p className="text-sm text-blue-900">
                      Our AI will analyze your project and provide detailed feedback within 24 hours
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      type="button"
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setShowSubmitForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      Submit Project
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
