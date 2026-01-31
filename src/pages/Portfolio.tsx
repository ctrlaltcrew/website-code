import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Brain, Bot, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import ParticlesBackground from '@/components/3D/ParticlesBackground';

const Portfolio = () => {
  const projects = [
    {
      title: "SmartChat AI Assistant",
      description: "RAG-powered chatbot that actually understands context (shocking, we know)",
      category: "AI & Chatbots",
      icon: Bot,
      github: "https://github.com/ctrlaltcrew/SmartChat-AI-Assistant",
      technologies: ["Python", "LangChain", "OpenAI", "Vector DB", "FastAPI"],
      features: [
        "Multi-document knowledge base",
        "Real-time learning capabilities", 
        "Multi-language support",
        "Integration with 15+ platforms"
      ],
    },
    {
      title: "PredictaFlow Analytics",
      description: "ML pipeline that predicts user behavior better than a fortune teller",
      category: "Data Science",
      icon: Brain,
      github: "https://github.com/ctrlaltcrew/PredictaFlow-Analytics",
      technologies: ["Python", "TensorFlow", "Apache Airflow", "PostgreSQL", "Docker"],
      features: [
        "Real-time data processing",
        "Automated model retraining",
        "A/B testing integration",
        "Custom dashboard creation"
      ],
    },
    {
      title: "EcoTrack Mobile App",
      description: "Carbon footprint tracker that makes saving the planet addictive",
      category: "Mobile Development",
      icon: Smartphone,
      github: "https://github.com/ctrlaltcrew/EcoTrack-Mobile-App",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Chart.js"],
      features: [
        "Gamified tracking system",
        "Social challenges & leaderboards",
        "AI-powered recommendations",
        "Offline data synchronization"
      ],
    },
    {
      title: "AutoCode Generator",
      description: "AI that writes code while you drink coffee (the dream is real)",
      category: "AI & Automation",
      icon: Bot,
      github: "https://github.com/ctrlaltcrew/SmartChat-AI-Assistant",
      technologies: ["Python", "GPT-4", "AST Parsing", "Git Integration", "VS Code Extension"],
      features: [
        "Natural language to code conversion",
        "Automatic documentation generation",
        "Code review suggestions",
        "Multi-language support"
      ],
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Solutions",
      quote: "Ctrl Alt Crew didn't just build our AI system, they made it so intuitive that our team actually enjoys using it. That's witchcraft.",
      project: "SmartChat AI Assistant"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Founder, GreenTech Innovations",
      quote: "They turned our 'crazy idea' into a mobile app with 50,000 users. I'm pretty sure they're actual wizards.",
      project: "EcoTrack Mobile App"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Data, FinanceFlow",
      quote: "Finally, a team that speaks both human and machine. Our ML pipeline has been flawless for 8 months straight.",
      project: "PredictaFlow Analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with 3D Background */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Suspense fallback={null}>
          <ParticlesBackground />
        </Suspense>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real projects, real results, real satisfied clients (and yes, they actually paid us).
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>

                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                  <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <project.icon className="h-24 w-24 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </Card>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <Badge className="mb-4 bg-gray-800 text-gray-200 border-gray-700">
                      {project.category}
                    </Badge>
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">{project.title}</h3>
                    <p className="text-lg text-gray-300 mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-white">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs bg-gray-800 text-gray-300 border-gray-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Button asChild size="sm" className="bg-white text-black hover:bg-gray-200 transition-all">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">What Clients Say</h2>
            <p className="text-xl text-gray-300">
              Real feedback from real humans who actually use our products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <Badge className="mt-2 text-xs bg-gray-800 text-gray-300 border-gray-700">
                      {testimonial.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Our Tech Arsenal</h2>
          <p className="text-xl text-gray-300 mb-12">
            The tools we use to turn caffeine into code
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Python", "React", "Node.js", "TypeScript", "TensorFlow", "Docker",
              "AWS", "PostgreSQL", "MongoDB", "Redis", "Kubernetes", "OpenAI"
            ].map((tech, index) => (
              <div key={index} className="group p-4 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together (and maybe get some testimonials that make us blush)
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105 transform
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link to="/contact">Start Your Project 🚀</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
