import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-neural-50/30 to-creative-50/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 animate-pulse-slow"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neural-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-creative-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-neural-300/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="ai-badge mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Powered by AI
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Transform your
            <span className="hero-text block">
              productivity
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            AI-powered note-taking that adapts to how you think and work. 
            Capture ideas, organize thoughts, and collaborate seamlessly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button className="hero-button">
            <Sparkles className="w-5 h-5 mr-2" />
            Start Creating
          </Button>
          <Button variant="outline" className="border-2 hover:bg-primary/5 px-8 py-4 rounded-xl">
            Watch Demo
          </Button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-3 text-muted-foreground">
            <Brain className="w-6 h-6 text-neural-500" />
            <span className="font-medium">AI-Powered Insights</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-muted-foreground">
            <Zap className="w-6 h-6 text-creative-500" />
            <span className="font-medium">Smart Organization</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-muted-foreground">
            <Users className="w-6 h-6 text-neural-500" />
            <span className="font-medium">Real-time Collaboration</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;