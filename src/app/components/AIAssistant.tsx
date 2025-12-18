import { useState } from "react";
import { 
  ArrowLeft, 
  Send, 
  Sparkles, 
  BookOpen, 
  FileText, 
  MapPin, 
  Lightbulb,
  Brain,
  User,
  Bot,
  Zap
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface AIAssistantProps {
  onNavigate: (page: string) => void;
}

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
}

export function AIAssistant({ onNavigate }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm your AI Study Assistant. I can help you understand concepts, generate study notes, suggest personalized roadmaps, and answer your questions. How can I help you today?",
      timestamp: "10:00 AM"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    {
      icon: BookOpen,
      title: "Explain a Topic",
      prompt: "Explain dynamic programming with examples",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      icon: FileText,
      title: "Generate Notes",
      prompt: "Generate summary notes for Operating System concepts",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      icon: MapPin,
      title: "Suggest Roadmap",
      prompt: "Create a personalized roadmap for learning React",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    {
      icon: Lightbulb,
      title: "Project Ideas",
      prompt: "Suggest innovative project ideas for machine learning",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700"
    }
  ];

  const aiResponses = [
    "Great question! Let me explain dynamic programming step by step.\n\nDynamic Programming (DP) is an algorithmic technique that solves complex problems by breaking them down into simpler subproblems. The key insight is to store the results of subproblems so we don't recompute them.\n\n**Key Characteristics:**\n1. Optimal Substructure - The problem can be broken into smaller subproblems\n2. Overlapping Subproblems - Same subproblems are solved multiple times\n\n**Classic Example - Fibonacci:**\n```python\ndef fibonacci(n, memo={}):\n    if n <= 1:\n        return n\n    if n not in memo:\n        memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)\n    return memo[n]\n```\n\nWould you like me to explain a specific DP problem?",
    
    "I'd be happy to help! Here are the key Operating System concepts summarized:\n\n**Process Management:**\n- Process: Program in execution\n- States: New, Ready, Running, Waiting, Terminated\n- Scheduling algorithms: FCFS, SJF, Round Robin, Priority\n\n**Memory Management:**\n- Paging: Fixed-size memory blocks\n- Segmentation: Variable-size logical units\n- Virtual Memory: Illusion of unlimited memory\n\n**File Systems:**\n- File allocation methods: Contiguous, Linked, Indexed\n- Directory structure: Single, Two-level, Tree-structured\n\nWould you like detailed notes on any specific topic?",
    
    "Perfect! Here's a personalized React learning roadmap for you:\n\n**Phase 1: Fundamentals (2-3 weeks)**\n✓ JavaScript ES6+ features\n✓ HTML & CSS basics\n✓ Understanding the DOM\n\n**Phase 2: React Basics (3-4 weeks)**\n✓ JSX and Components\n✓ Props and State\n✓ Event Handling\n✓ Lists and Keys\n\n**Phase 3: Advanced React (4-5 weeks)**\n✓ Hooks (useState, useEffect, useContext)\n✓ React Router\n✓ State Management (Context API, Redux)\n✓ Performance Optimization\n\n**Phase 4: Projects**\n✓ Todo App\n✓ Weather Dashboard\n✓ E-commerce Site\n\nShall I create a detailed week-by-week plan for you?"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickAction = (prompt: string) => {
    setInputMessage(prompt);
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
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-4xl font-bold">AI Study Assistant</h1>
                  <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Powered by AI
                  </Badge>
                </div>
                <p className="text-gray-600">Your 24/7 intelligent learning companion</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="h-[calc(100vh-16rem)] flex flex-col">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className={`flex gap-4 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <Avatar className={`w-10 h-10 flex-shrink-0 ${message.type === 'ai' ? 'bg-gradient-to-br from-purple-500 to-indigo-600' : 'bg-gradient-to-br from-blue-500 to-cyan-600'}`}>
                      <AvatarFallback className="text-white">
                        {message.type === 'ai' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`flex-1 ${message.type === 'user' ? 'flex justify-end' : ''}`}>
                      <div 
                        className={`inline-block max-w-[80%] p-4 rounded-2xl ${
                          message.type === 'user' 
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                        <p className={`text-xs mt-2 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-4">
                    <Avatar className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-purple-500 to-indigo-600">
                      <AvatarFallback className="text-white">
                        <Bot className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-100 p-4 rounded-2xl">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-6">
                <div className="flex gap-3">
                  <Input 
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me anything about your studies..."
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    disabled={!inputMessage.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Press Enter to send • AI responses may take a few seconds
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar - Quick Actions & Stats */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-orange-600" />
                <h3 className="font-bold text-lg">Quick Actions</h3>
              </div>
              <div className="space-y-3">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.prompt)}
                      className={`w-full p-4 ${action.bgColor} rounded-xl border-2 border-transparent hover:border-blue-300 transition-all text-left group`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className={`font-medium ${action.textColor}`}>{action.title}</span>
                      </div>
                      <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">
                        {action.prompt}
                      </p>
                    </button>
                  );
                })}
              </div>
            </Card>

            {/* Usage Stats */}
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
              <h3 className="font-bold mb-4">Your AI Usage</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Queries this month</span>
                    <span className="font-bold">127 / 500</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-purple-200">
                  <p className="text-sm text-gray-600 mb-3">Upgrade to Pro for unlimited AI queries</p>
                  <Button size="sm" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Upgrade Now
                  </Button>
                </div>
              </div>
            </Card>

            {/* Tips */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold">Pro Tips</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Be specific in your questions for better answers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Use quick actions for common tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Ask for examples to understand concepts better</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Request code snippets for programming topics</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
