import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Plus, 
  Brain, 
  FileText, 
  Lightbulb, 
  Users, 
  Clock,
  Star,
  Filter,
  Bot,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const NoteDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const notes = [
    {
      id: 1,
      title: "Product Strategy Q1",
      content: "Key insights from market research and competitive analysis...",
      category: "Work",
      aiSuggestions: 3,
      collaborators: 4,
      lastModified: "2 hours ago",
      isStarred: true
    },
    {
      id: 2,
      title: "Book Ideas",
      content: "Collection of creative writing prompts and story concepts...",
      category: "Creative",
      aiSuggestions: 7,
      collaborators: 1,
      lastModified: "1 day ago",
      isStarred: false
    },
    {
      id: 3,
      title: "Learning Goals 2024",
      content: "Personal development objectives and skill acquisition plans...",
      category: "Personal",
      aiSuggestions: 2,
      collaborators: 0,
      lastModified: "3 days ago",
      isStarred: true
    },
    {
      id: 4,
      title: "Meeting Notes - Design Review",
      content: "Feedback on new UI designs and next steps...",
      category: "Work",
      aiSuggestions: 1,
      collaborators: 6,
      lastModified: "5 hours ago",
      isStarred: false
    },
    {
      id: 5,
      title: "Travel Itinerary",
      content: "Plans for upcoming vacation including restaurants and activities...",
      category: "Personal",
      aiSuggestions: 5,
      collaborators: 2,
      lastModified: "1 week ago",
      isStarred: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Work": return "bg-neural-100 text-neural-700 border-neural-200";
      case "Creative": return "bg-creative-100 text-creative-700 border-creative-200";
      case "Personal": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-neural-50/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Notes</h1>
            <p className="text-muted-foreground">
              Capture, organize, and collaborate with AI-powered assistance
            </p>
          </div>
          <Button className="hero-button mt-4 md:mt-0">
            <Plus className="w-4 h-4 mr-2" />
            New Note
          </Button>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search notes, tags, or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="starred">Starred</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="note-card neural-glow cursor-pointer group h-full">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {note.title}
                        </CardTitle>
                        {note.isStarred && (
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(note.category)}>
                          {note.category}
                        </Badge>
                        {note.aiSuggestions > 0 && (
                          <Badge className="ai-badge">
                            <Bot className="w-3 h-3 mr-1" />
                            {note.aiSuggestions} AI
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm mb-4 line-clamp-2">
                        {note.content}
                      </CardDescription>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {note.lastModified}
                          </span>
                          {note.collaborators > 0 && (
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {note.collaborators}
                            </span>
                          )}
                        </div>
                        <Button variant="ghost" size="sm" className="h-auto p-1">
                          <FileText className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="starred">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes.filter(note => note.isStarred).map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="note-card neural-glow cursor-pointer group h-full">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {note.title}
                        </CardTitle>
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(note.category)}>
                          {note.category}
                        </Badge>
                        {note.aiSuggestions > 0 && (
                          <Badge className="ai-badge">
                            <Bot className="w-3 h-3 mr-1" />
                            {note.aiSuggestions} AI
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm mb-4 line-clamp-2">
                        {note.content}
                      </CardDescription>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {note.lastModified}
                          </span>
                          {note.collaborators > 0 && (
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {note.collaborators}
                            </span>
                          )}
                        </div>
                        <Button variant="ghost" size="sm" className="h-auto p-1">
                          <FileText className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent">
            <div className="text-center text-muted-foreground py-12">
              <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Recent notes will appear here</p>
            </div>
          </TabsContent>

          <TabsContent value="shared">
            <div className="text-center text-muted-foreground py-12">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Shared notes will appear here</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* AI Suggestions Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <Card className="glass-morphism border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                AI Suggestions
              </CardTitle>
              <CardDescription>
                Smart insights to help you organize and enhance your notes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-neural-50 border border-neural-200">
                  <Lightbulb className="w-6 h-6 text-neural-600 mb-2" />
                  <h4 className="font-medium mb-1">Create connections</h4>
                  <p className="text-sm text-muted-foreground">Link related notes about product strategy</p>
                </div>
                <div className="p-4 rounded-lg bg-creative-50 border border-creative-200">
                  <Brain className="w-6 h-6 text-creative-600 mb-2" />
                  <h4 className="font-medium mb-1">Generate summary</h4>
                  <p className="text-sm text-muted-foreground">Auto-summarize your meeting notes</p>
                </div>
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                  <Users className="w-6 h-6 text-green-600 mb-2" />
                  <h4 className="font-medium mb-1">Share insights</h4>
                  <p className="text-sm text-muted-foreground">Collaborate on travel planning</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default NoteDashboard;