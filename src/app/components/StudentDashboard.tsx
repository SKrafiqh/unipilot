import { useState } from "react";
import { 
  BookOpen, 
  Briefcase, 
  Brain, 
  GraduationCap, 
  LayoutDashboard, 
  MapPin, 
  FolderKanban, 
  User, 
  Bell, 
  Search,
  TrendingUp,
  Clock,
  CheckCircle2,
  Sparkles,
  FileText,
  Target,
  Calendar,
  ArrowUpRight,
  Menu,
  X
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface StudentDashboardProps {
  onNavigate: (page: string) => void;
}

export function StudentDashboard({ onNavigate }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', page: 'dashboard' },
    { id: 'notes', icon: BookOpen, label: 'Notes', page: 'notes' },
    { id: 'projects', icon: FolderKanban, label: 'Projects', page: 'projects' },
    { id: 'roadmaps', icon: MapPin, label: 'Roadmaps', page: 'roadmaps' },
    { id: 'internships', icon: Briefcase, label: 'Internships', page: 'internships' },
    { id: 'ai-assistant', icon: Brain, label: 'AI Assistant', page: 'ai-assistant' },
    { id: 'profile', icon: User, label: 'Profile', page: 'profile' },
  ];

  const studyProgress = [
    { subject: 'Data Structures', progress: 85, color: 'bg-blue-500' },
    { subject: 'Operating Systems', progress: 65, color: 'bg-green-500' },
    { subject: 'DBMS', progress: 90, color: 'bg-purple-500' },
    { subject: 'Computer Networks', progress: 45, color: 'bg-orange-500' },
  ];

  const upcomingSubmissions = [
    { title: 'DSA Assignment 3', subject: 'Data Structures', dueDate: 'Dec 22, 2024', priority: 'high' },
    { title: 'OS Lab Report', subject: 'Operating Systems', dueDate: 'Dec 25, 2024', priority: 'medium' },
    { title: 'DBMS Project', subject: 'Database Systems', dueDate: 'Dec 28, 2024', priority: 'high' },
  ];

  const aiRecommendations = [
    { 
      type: 'note',
      title: 'Advanced Graph Algorithms', 
      subject: 'Data Structures',
      reason: 'Based on your DSA progress',
      icon: FileText,
      color: 'text-blue-600 bg-blue-50'
    },
    { 
      type: 'roadmap',
      title: 'Full Stack Developer Path', 
      subject: 'Career',
      reason: 'Matches your interests',
      icon: Target,
      color: 'text-purple-600 bg-purple-50'
    },
    { 
      type: 'internship',
      title: 'Frontend Intern at Startup', 
      subject: 'Opportunity',
      reason: 'Skills match: React, TypeScript',
      icon: Briefcase,
      color: 'text-green-600 bg-green-50'
    },
  ];

  const recentNotes = [
    { title: 'Binary Trees - Complete Guide', subject: 'DSA', views: 234, downloads: 45 },
    { title: 'Process Scheduling Algorithms', subject: 'OS', views: 189, downloads: 32 },
    { title: 'SQL Joins Explained', subject: 'DBMS', views: 312, downloads: 67 },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setActiveTab(item.id);
    setSidebarOpen(false);
    onNavigate(item.page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-72 bg-white border-r border-gray-200 z-50 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 shadow-xl`}>
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                UniPilot
              </span>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden hover:bg-gray-100 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
                {item.id === 'ai-assistant' && (
                  <Sparkles className={`w-4 h-4 ml-auto ${isActive ? 'text-yellow-300' : 'text-blue-500'}`} />
                )}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <Card className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm mb-1">Upgrade to Pro</p>
                <p className="text-xs text-gray-600">Unlock unlimited AI features</p>
              </div>
            </div>
            <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md">
              Upgrade Now
            </Button>
          </Card>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-72 min-h-screen">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden hover:bg-gray-100 p-2 rounded-lg transition-colors"
                >
                  <Menu className="w-6 h-6" />
                </button>
                <div className="relative w-96 max-w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input 
                    placeholder="Search notes, projects, roadmaps..." 
                    className="pl-11 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                </Button>
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                  <Avatar className="ring-2 ring-blue-100">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold">
                      RS
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <p className="font-semibold text-sm">Rahul Sharma</p>
                    <p className="text-xs text-gray-600">CSE, 3rd Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 lg:p-8">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-2">Welcome back, Rahul! 👋</h1>
            <p className="text-lg text-gray-600">Here's what's happening with your studies today</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-blue-100 text-blue-700 border-0 font-semibold">
                  +12%
                </Badge>
              </div>
              <p className="text-3xl font-bold mb-1">142</p>
              <p className="text-sm text-gray-700 font-medium">Notes Accessed</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                  <FolderKanban className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-green-100 text-green-700 border-0 font-semibold">
                  3 active
                </Badge>
              </div>
              <p className="text-3xl font-bold mb-1">8</p>
              <p className="text-sm text-gray-700 font-medium">Projects Submitted</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-purple-100 text-purple-700 border-0 font-semibold">
                  67%
                </Badge>
              </div>
              <p className="text-3xl font-bold mb-1">2/3</p>
              <p className="text-sm text-gray-700 font-medium">Roadmap Progress</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-orange-100 text-orange-700 border-0 font-semibold">
                  2 new
                </Badge>
              </div>
              <p className="text-3xl font-bold mb-1">5</p>
              <p className="text-sm text-gray-700 font-medium">Applications Sent</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Study Progress */}
            <Card className="lg:col-span-2 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Study Progress</h2>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="space-y-6">
                {studyProgress.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{item.subject}</span>
                      <span className="text-sm text-gray-600">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Submissions */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Upcoming</h2>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {upcomingSubmissions.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className={`w-1 rounded-full ${item.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
                    <div className="flex-1">
                      <p className="font-medium mb-1">{item.title}</p>
                      <p className="text-sm text-gray-600 mb-1">{item.subject}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {item.dueDate}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* AI Recommendations */}
            <Card className="p-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold">AI Recommendations</h2>
                <Badge className="ml-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
                  Powered by AI
                </Badge>
              </div>
              <div className="space-y-4">
                {aiRecommendations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all cursor-pointer group">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-1">{item.title}</p>
                        <p className="text-sm text-gray-600 mb-2">{item.subject}</p>
                        <p className="text-xs text-blue-600">{item.reason}</p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Recently Viewed Notes */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recently Viewed Notes</h2>
                <Button variant="ghost" size="sm" onClick={() => onNavigate('notes')}>
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {recentNotes.map((note, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium mb-1 truncate">{note.title}</p>
                      <Badge variant="outline" className="text-xs mb-2">{note.subject}</Badge>
                      <div className="flex items-center gap-4 text-xs text-gray-600">
                        <span>{note.views} views</span>
                        <span>{note.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Button 
                variant="outline" 
                className="h-auto py-6 flex-col gap-2 hover:bg-blue-50 hover:border-blue-300"
                onClick={() => onNavigate('notes')}
              >
                <BookOpen className="w-6 h-6 text-blue-600" />
                <span>Browse Notes</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto py-6 flex-col gap-2 hover:bg-green-50 hover:border-green-300"
                onClick={() => onNavigate('projects')}
              >
                <FolderKanban className="w-6 h-6 text-green-600" />
                <span>Submit Project</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto py-6 flex-col gap-2 hover:bg-purple-50 hover:border-purple-300"
                onClick={() => onNavigate('roadmaps')}
              >
                <MapPin className="w-6 h-6 text-purple-600" />
                <span>View Roadmaps</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto py-6 flex-col gap-2 hover:bg-orange-50 hover:border-orange-300"
                onClick={() => onNavigate('ai-assistant')}
              >
                <Brain className="w-6 h-6 text-orange-600" />
                <span>Ask AI</span>
              </Button>
            </div>
          </Card>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}