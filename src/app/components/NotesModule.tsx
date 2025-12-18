import { useState } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Star, 
  Sparkles, 
  FileText, 
  BookOpen,
  Clock,
  TrendingUp,
  ArrowLeft
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface NotesModuleProps {
  onNavigate: (page: string) => void;
}

export function NotesModule({ onNavigate }: NotesModuleProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [semester, setSemester] = useState("all");
  const [subject, setSubject] = useState("all");

  const aiRecommendedNotes = [
    {
      id: 1,
      title: "Complete Graph Algorithms Guide with Examples",
      subject: "Data Structures & Algorithms",
      semester: "4th Sem",
      author: "Priya Sharma",
      university: "IIT Delhi",
      size: "2.4 MB",
      pages: 45,
      downloads: 1234,
      views: 3456,
      rating: 4.9,
      uploadDate: "2 days ago",
      tags: ["Graphs", "DFS", "BFS", "Dijkstra"],
      aiScore: 98
    },
    {
      id: 2,
      title: "Operating System Process Scheduling - Detailed Notes",
      subject: "Operating Systems",
      semester: "4th Sem",
      author: "Rahul Verma",
      university: "NIT Trichy",
      size: "1.8 MB",
      pages: 32,
      downloads: 987,
      views: 2341,
      rating: 4.7,
      uploadDate: "5 days ago",
      tags: ["FCFS", "SJF", "Round Robin", "Priority"],
      aiScore: 95
    },
    {
      id: 3,
      title: "DBMS Normalization & SQL Queries Masterclass",
      subject: "Database Management Systems",
      semester: "5th Sem",
      author: "Ananya Patel",
      university: "BITS Pilani",
      size: "3.2 MB",
      pages: 58,
      downloads: 2156,
      views: 4567,
      rating: 4.9,
      uploadDate: "1 week ago",
      tags: ["Normalization", "SQL", "Joins", "Transactions"],
      aiScore: 97
    }
  ];

  const allNotes = [
    {
      id: 4,
      title: "Computer Networks - TCP/IP Protocol Suite",
      subject: "Computer Networks",
      semester: "5th Sem",
      author: "Vikram Singh",
      university: "IIT Bombay",
      size: "2.1 MB",
      pages: 40,
      downloads: 876,
      views: 1987,
      rating: 4.6,
      uploadDate: "3 days ago",
      tags: ["TCP", "IP", "Protocols"]
    },
    {
      id: 5,
      title: "Machine Learning Algorithms - Complete Guide",
      subject: "Machine Learning",
      semester: "6th Sem",
      author: "Sneha Kapoor",
      university: "IIT Madras",
      size: "4.5 MB",
      pages: 72,
      downloads: 3421,
      views: 6789,
      rating: 4.8,
      uploadDate: "2 weeks ago",
      tags: ["ML", "Regression", "Classification"]
    },
    {
      id: 6,
      title: "Software Engineering - SDLC Models",
      subject: "Software Engineering",
      semester: "6th Sem",
      author: "Amit Kumar",
      university: "NIT Karnataka",
      size: "1.5 MB",
      pages: 28,
      downloads: 654,
      views: 1432,
      rating: 4.5,
      uploadDate: "4 days ago",
      tags: ["SDLC", "Agile", "Waterfall"]
    },
    {
      id: 7,
      title: "Compiler Design - Lexical Analysis & Parsing",
      subject: "Compiler Design",
      semester: "7th Sem",
      author: "Neha Reddy",
      university: "IIIT Hyderabad",
      size: "2.8 MB",
      pages: 48,
      downloads: 543,
      views: 1234,
      rating: 4.7,
      uploadDate: "1 week ago",
      tags: ["Lexer", "Parser", "Compiler"]
    },
    {
      id: 8,
      title: "Web Technologies - HTML, CSS, JavaScript Basics",
      subject: "Web Technologies",
      semester: "5th Sem",
      author: "Karthik Menon",
      university: "VIT Vellore",
      size: "1.2 MB",
      pages: 24,
      downloads: 2345,
      views: 4532,
      rating: 4.4,
      uploadDate: "5 days ago",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 9,
      title: "Digital Signal Processing - Transform Techniques",
      subject: "Digital Signal Processing",
      semester: "6th Sem",
      author: "Divya Iyer",
      university: "Anna University",
      size: "3.6 MB",
      pages: 62,
      downloads: 432,
      views: 987,
      rating: 4.6,
      uploadDate: "3 weeks ago",
      tags: ["FFT", "DFT", "Filters"]
    }
  ];

  const emptyState = searchQuery && allNotes.length === 0;

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
              <h1 className="text-4xl font-bold mb-2">Notes Library</h1>
              <p className="text-gray-600">Access curated notes from top students across India</p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <FileText className="w-4 h-4 mr-2" />
              Upload Notes
            </Button>
          </div>
        </div>

        {/* Search & Filters */}
        <Card className="p-6 mb-8">
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Search by topic, subject, or keywords..." 
                  className="pl-11"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-blue-600">
                    <Sparkles className="w-3 h-3" />
                    AI Search
                  </div>
                )}
              </div>
            </div>
            <div className="md:col-span-3">
              <Select value={semester} onValueChange={setSemester}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Semesters</SelectItem>
                  <SelectItem value="1">1st Semester</SelectItem>
                  <SelectItem value="2">2nd Semester</SelectItem>
                  <SelectItem value="3">3rd Semester</SelectItem>
                  <SelectItem value="4">4th Semester</SelectItem>
                  <SelectItem value="5">5th Semester</SelectItem>
                  <SelectItem value="6">6th Semester</SelectItem>
                  <SelectItem value="7">7th Semester</SelectItem>
                  <SelectItem value="8">8th Semester</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-3">
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  <SelectItem value="dsa">Data Structures & Algorithms</SelectItem>
                  <SelectItem value="os">Operating Systems</SelectItem>
                  <SelectItem value="dbms">Database Management</SelectItem>
                  <SelectItem value="cn">Computer Networks</SelectItem>
                  <SelectItem value="ml">Machine Learning</SelectItem>
                  <SelectItem value="se">Software Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* AI Recommended Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">AI Recommended For You</h2>
            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
              Powered by AI
            </Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {aiRecommendedNotes.map((note) => (
              <Card key={note.id} className="p-6 bg-gradient-to-br from-white to-blue-50/30 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
                    {note.aiScore}% Match
                  </Badge>
                </div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <Badge variant="outline" className="mb-2 text-xs">{note.semester}</Badge>
                    <h3 className="font-bold mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {note.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="w-4 h-4" />
                    {note.subject}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{note.author}</span>
                    <span className="text-gray-500">{note.university}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {note.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {note.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    {note.downloads}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {note.rating}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="icon">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  {note.uploadDate} • {note.size} • {note.pages} pages
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Notes Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">All Notes</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <TrendingUp className="w-4 h-4" />
              Showing {allNotes.length} results
            </div>
          </div>

          {emptyState ? (
            <Card className="p-16 text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No notes found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filters to find what you're looking for
              </p>
              <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allNotes.map((note) => (
                <Card key={note.id} className="p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge variant="outline" className="mb-2 text-xs">{note.semester}</Badge>
                      <h3 className="font-bold mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {note.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <p className="text-sm text-gray-600">{note.subject}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{note.author}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {note.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {note.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {note.downloads}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {note.rating}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {note.uploadDate} • {note.size}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
