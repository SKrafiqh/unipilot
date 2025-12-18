import { useState } from "react";
import {
  Users,
  FileText,
  FolderKanban,
  Briefcase,
  TrendingUp,
  DollarSign,
  BarChart3,
  Search,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Download,
  GraduationCap,
  Bell,
  Settings,
  LayoutDashboard
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Students',
      value: '12,459',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Notes Uploaded',
      value: '3,842',
      change: '+8.2%',
      trend: 'up',
      icon: FileText,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Active Subscriptions',
      value: '4,267',
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Monthly Revenue',
      value: '₹8.49L',
      change: '+23.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentUsers = [
    { id: 1, name: 'Rahul Sharma', email: 'rahul.s@iitd.ac.in', college: 'IIT Delhi', plan: 'Pro', status: 'active', joined: 'Dec 15, 2024' },
    { id: 2, name: 'Priya Patel', email: 'priya.p@nitk.ac.in', college: 'NIT Karnataka', plan: 'Free', status: 'active', joined: 'Dec 14, 2024' },
    { id: 3, name: 'Amit Kumar', email: 'amit.k@bits.ac.in', college: 'BITS Pilani', plan: 'Pro', status: 'active', joined: 'Dec 13, 2024' },
    { id: 4, name: 'Sneha Reddy', email: 'sneha.r@vit.ac.in', college: 'VIT Vellore', plan: 'Institute', status: 'active', joined: 'Dec 12, 2024' },
    { id: 5, name: 'Vikram Singh', email: 'vikram.s@iitb.ac.in', college: 'IIT Bombay', plan: 'Pro', status: 'active', joined: 'Dec 11, 2024' }
  ];

  const recentNotes = [
    { id: 1, title: 'Advanced Graph Algorithms', subject: 'DSA', author: 'Priya Sharma', downloads: 234, status: 'approved', date: 'Dec 16, 2024' },
    { id: 2, title: 'OS Process Scheduling', subject: 'Operating Systems', author: 'Rahul Verma', downloads: 189, status: 'approved', date: 'Dec 15, 2024' },
    { id: 3, title: 'Machine Learning Basics', subject: 'ML', author: 'Ananya Patel', downloads: 312, status: 'pending', date: 'Dec 14, 2024' },
    { id: 4, title: 'DBMS Normalization Guide', subject: 'Database', author: 'Karthik Menon', downloads: 156, status: 'approved', date: 'Dec 13, 2024' },
    { id: 5, title: 'React Hooks Deep Dive', subject: 'Web Dev', author: 'Neha Singh', downloads: 278, status: 'pending', date: 'Dec 12, 2024' }
  ];

  const recentProjects = [
    { id: 1, title: 'E-Commerce Platform', student: 'Rahul Sharma', subject: 'Web Dev', score: 92, status: 'approved', date: 'Dec 15, 2024' },
    { id: 2, title: 'AI Chatbot', student: 'Priya Patel', subject: 'ML', score: 88, status: 'reviewed', date: 'Dec 14, 2024' },
    { id: 3, title: 'Face Recognition System', student: 'Amit Kumar', subject: 'Mobile Dev', score: 85, status: 'submitted', date: 'Dec 13, 2024' },
    { id: 4, title: 'Traffic Management IoT', student: 'Sneha Reddy', subject: 'IoT', score: 90, status: 'approved', date: 'Dec 12, 2024' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dark Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg">UniPilot</span>
              <p className="text-xs text-gray-400">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'overview' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Overview</span>
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'users' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Users className="w-5 h-5" />
            <span>Users</span>
          </button>
          <button 
            onClick={() => setActiveTab('notes')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'notes' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span>Notes</span>
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'projects' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <FolderKanban className="w-5 h-5" />
            <span>Projects</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800">
            <Briefcase className="w-5 h-5" />
            <span>Internships</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800">
            <BarChart3 className="w-5 h-5" />
            <span>Analytics</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Search users, notes, projects..." 
                  className="pl-11"
                />
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </Button>
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                      AD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Admin User</p>
                    <p className="text-xs text-gray-600">Super Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {activeTab === 'overview' && (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
                <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className={`p-6 ${stat.bgColor} border-0`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          {stat.change}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </Card>
                  );
                })}
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Recent Users</h2>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                  <div className="space-y-4">
                    {recentUsers.slice(0, 5).map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600">
                            <AvatarFallback className="text-white text-sm">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{user.name}</p>
                            <p className="text-xs text-gray-600">{user.college}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {user.plan}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Recent Notes</h2>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                  <div className="space-y-4">
                    {recentNotes.slice(0, 5).map((note) => (
                      <div key={note.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-1">
                          <p className="font-medium text-sm mb-1">{note.title}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <span>{note.author}</span>
                            <span>•</span>
                            <span>{note.downloads} downloads</span>
                          </div>
                        </div>
                        <Badge 
                          variant={note.status === 'approved' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {note.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </>
          )}

          {activeTab === 'users' && (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">User Management</h1>
                <p className="text-gray-600">Manage all registered users and their subscriptions</p>
              </div>

              <Card>
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="relative w-96">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input placeholder="Search users..." className="pl-10" size={32} />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
                        Add User
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>College</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.college}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{user.plan}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-700 border-green-200">
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.joined}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </>
          )}

          {activeTab === 'notes' && (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Notes Management</h1>
                <p className="text-gray-600">Review and manage uploaded notes</p>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Downloads</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentNotes.map((note) => (
                      <TableRow key={note.id}>
                        <TableCell className="font-medium">{note.title}</TableCell>
                        <TableCell>{note.subject}</TableCell>
                        <TableCell>{note.author}</TableCell>
                        <TableCell>{note.downloads}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={note.status === 'approved' ? 'default' : 'secondary'}
                          >
                            {note.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{note.date}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </>
          )}

          {activeTab === 'projects' && (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Projects Management</h1>
                <p className="text-gray-600">Review student projects and AI scores</p>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Student</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>AI Score</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentProjects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.title}</TableCell>
                        <TableCell>{project.student}</TableCell>
                        <TableCell>{project.subject}</TableCell>
                        <TableCell>
                          <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                            {project.score}%
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={project.status === 'approved' ? 'default' : 'secondary'}
                          >
                            {project.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{project.date}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
