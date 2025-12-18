import { useState } from "react";
import { 
  ArrowLeft, 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  Star, 
  Sparkles, 
  Filter,
  Search,
  Building2,
  Calendar,
  TrendingUp,
  Award,
  ExternalLink
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface InternshipsModuleProps {
  onNavigate: (page: string) => void;
}

export function InternshipsModule({ onNavigate }: InternshipsModuleProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterDomain, setFilterDomain] = useState("all");

  const featuredInternships = [
    {
      id: 1,
      company: "TechCorp India",
      logo: "TC",
      position: "Frontend Developer Intern",
      location: "Bangalore, Karnataka",
      type: "Remote",
      duration: "3 months",
      stipend: "₹25,000/month",
      postedDate: "2 days ago",
      applicants: 45,
      tags: ["React", "TypeScript", "Tailwind CSS"],
      description: "Work on cutting-edge web applications with experienced mentors",
      requirements: ["React experience", "Good DSA knowledge", "Team player"],
      isFeatured: true,
      aiMatch: 95
    },
    {
      id: 2,
      company: "DataMinds AI",
      logo: "DM",
      position: "Machine Learning Intern",
      location: "Hyderabad, Telangana",
      type: "Hybrid",
      duration: "6 months",
      stipend: "₹30,000/month",
      postedDate: "5 days ago",
      applicants: 78,
      tags: ["Python", "TensorFlow", "NLP"],
      description: "Build AI models for real-world applications in NLP and computer vision",
      requirements: ["Python proficiency", "ML fundamentals", "Research mindset"],
      isFeatured: true,
      aiMatch: 88
    },
    {
      id: 3,
      company: "CloudScale Solutions",
      logo: "CS",
      position: "DevOps Intern",
      location: "Pune, Maharashtra",
      type: "On-site",
      duration: "4 months",
      stipend: "₹20,000/month",
      postedDate: "1 week ago",
      applicants: 32,
      tags: ["Docker", "Kubernetes", "AWS"],
      description: "Learn cloud infrastructure and CI/CD pipelines from industry experts",
      requirements: ["Linux basics", "Scripting knowledge", "Problem solver"],
      isFeatured: true,
      aiMatch: 82
    }
  ];

  const allInternships = [
    {
      id: 4,
      company: "StartupX",
      logo: "SX",
      position: "Full Stack Developer Intern",
      location: "Mumbai, Maharashtra",
      type: "Remote",
      duration: "3 months",
      stipend: "₹15,000/month",
      postedDate: "3 days ago",
      applicants: 56,
      tags: ["MERN Stack", "MongoDB", "Express"],
      isFeatured: false
    },
    {
      id: 5,
      company: "FinTech Pro",
      logo: "FP",
      position: "Backend Developer Intern",
      location: "Bangalore, Karnataka",
      type: "On-site",
      duration: "6 months",
      stipend: "₹28,000/month",
      postedDate: "1 week ago",
      applicants: 91,
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      isFeatured: false
    },
    {
      id: 6,
      company: "MobileFirst",
      logo: "MF",
      position: "Android Developer Intern",
      location: "Delhi NCR",
      type: "Hybrid",
      duration: "4 months",
      stipend: "₹22,000/month",
      postedDate: "4 days ago",
      applicants: 38,
      tags: ["Kotlin", "Android Studio", "Firebase"],
      isFeatured: false
    },
    {
      id: 7,
      company: "DataViz Labs",
      logo: "DV",
      position: "Data Analyst Intern",
      location: "Chennai, Tamil Nadu",
      type: "Remote",
      duration: "3 months",
      stipend: "₹18,000/month",
      postedDate: "2 days ago",
      applicants: 64,
      tags: ["SQL", "Python", "Tableau"],
      isFeatured: false
    },
    {
      id: 8,
      company: "GameDev Studios",
      logo: "GD",
      position: "Unity Developer Intern",
      location: "Pune, Maharashtra",
      type: "On-site",
      duration: "5 months",
      stipend: "₹20,000/month",
      postedDate: "1 week ago",
      applicants: 27,
      tags: ["Unity", "C#", "Game Design"],
      isFeatured: false
    }
  ];

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
              <h1 className="text-4xl font-bold mb-2">Internship Opportunities</h1>
              <p className="text-gray-600">Discover internships curated for engineering students</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold mb-1">234</p>
            <p className="text-sm text-gray-600">Active Openings</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-3xl font-bold mb-1">67</p>
            <p className="text-sm text-gray-600">New This Week</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-3xl font-bold mb-1">5</p>
            <p className="text-sm text-gray-600">Applications Sent</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-8 h-8 text-orange-600" />
            </div>
            <p className="text-3xl font-bold mb-1">12</p>
            <p className="text-sm text-gray-600">Saved</p>
          </Card>
        </div>

        {/* Search & Filters */}
        <Card className="p-6 mb-8">
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Search by company, position, or skills..." 
                  className="pl-11"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue placeholder="Work Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="onsite">On-site</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-3">
              <Select value={filterDomain} onValueChange={setFilterDomain}>
                <SelectTrigger>
                  <SelectValue placeholder="Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Domains</SelectItem>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="mobile">Mobile Development</SelectItem>
                  <SelectItem value="ml">Machine Learning</SelectItem>
                  <SelectItem value="data">Data Science</SelectItem>
                  <SelectItem value="devops">DevOps</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Featured Internships */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">AI Recommended For You</h2>
            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
              Based on your profile
            </Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredInternships.map((internship) => (
              <Card key={internship.id} className="p-6 bg-gradient-to-br from-white to-blue-50/30 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{internship.logo}</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 group-hover:text-blue-600 transition-colors">
                        {internship.position}
                      </h3>
                      <p className="text-sm text-gray-600">{internship.company}</p>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 text-xs">
                    {internship.aiMatch}% Match
                  </Badge>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium text-green-600">{internship.stipend}</span>
                    <Badge variant="outline" className="ml-auto text-xs">{internship.type}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>{internship.duration}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{internship.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {internship.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {internship.postedDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {internship.applicants} applied
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Apply Now
                  </Button>
                  <Button variant="outline" size="icon">
                    <Star className="w-4 h-4" />
                  </Button>
                </div>

                {/* Detailed Requirements (expandable) */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs font-medium text-gray-700 mb-2">Requirements:</p>
                  <ul className="space-y-1">
                    {internship.requirements.map((req, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Internships */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">All Internships</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Briefcase className="w-4 h-4" />
              {allInternships.length} opportunities
            </div>
          </div>

          <div className="space-y-4">
            {allInternships.map((internship) => (
              <Card key={internship.id} className="p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{internship.logo}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">
                            {internship.position}
                          </h3>
                          <p className="text-gray-600 mb-2">{internship.company}</p>
                        </div>
                        <Badge variant="outline">{internship.type}</Badge>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="w-4 h-4 flex-shrink-0 text-gray-600" />
                          <span className="font-medium text-green-600">{internship.stipend}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4 flex-shrink-0" />
                          <span>{internship.duration}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {internship.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Posted {internship.postedDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {internship.applicants} applicants
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 ml-4">
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Apply
                    </Button>
                    <Button variant="outline" size="sm">
                      <Star className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
