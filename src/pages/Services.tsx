import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Bot, Code, Smartphone, Database, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import ParticlesBackground from '@/components/3D/ParticlesBackground';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Data Science Solutions",
      description: "Machine learning models that actually learn (unlike some interns we've met)",
      features: [
        "Custom ML Model Development",
        "Data Pipeline Architecture", 
        "Predictive Analytics",
        "Neural Network Training",
        "Model Optimization & Deployment"
      ],
      techStack: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas"],
      gradient: "from-gray-700 to-gray-600"
    },
    {
      icon: Bot,
      title: "RAG Pipelines & Chatbots",
      description: "Conversational AI so smart, they'll probably ask for vacation days",
      features: [
        "Retrieval-Augmented Generation",
        "Custom Chatbot Development",
        "Knowledge Base Integration",
        "Multi-channel Deployment",
        "Continuous Learning Systems"
      ],
      techStack: ["OpenAI", "LangChain", "Vector DBs", "FastAPI", "React"],
      gradient: "from-gray-600 to-gray-500"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Websites that work on everything except Internet Explorer (we have standards)",
      features: [
        "Full-Stack Applications",
        "Responsive Design",
        "Performance Optimization",
        "API Development",
        "Cloud Deployment"
      ],
      techStack: ["React", "Node.js", "TypeScript", "Tailwind", "PostgreSQL"],
      gradient: "from-white to-gray-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Apps so intuitive, even your parents won't need tech support",
      features: [
        "Cross-Platform Development",
        "Native Performance",
        "Offline Capabilities",
        "Push Notifications",
        "App Store Optimization"
      ],
      techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      gradient: "from-gray-500 to-gray-600"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Turning your data chaos into organized digital zen",
      features: [
        "ETL Pipeline Development",
        "Data Warehouse Design",
        "Real-time Processing",
        "Data Quality Assurance",
        "Analytics Infrastructure"
      ],
      techStack: ["Apache Airflow", "Spark", "Kafka", "dbt", "Snowflake"],
      gradient: "from-gray-800 to-gray-700"
    },
    {
      icon: Zap,
      title: "Automation & Integration",
      description: "Because repetitive tasks are for robots (literal ones)",
      features: [
        "Workflow Automation",
        "API Integrations",
        "Process Optimization",
        "Legacy System Modernization",
        "CI/CD Implementation"
      ],
      techStack: ["Zapier", "Docker", "Kubernetes", "GitHub Actions", "AWS"],
      gradient: "from-gray-600 to-gray-700"
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            From "Hello World" to "Holy World, that's amazing!" – we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="group bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                
                <CardHeader>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${service.gradient} shadow-lg group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                      <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-white">What We Deliver:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 flex items-start transition-colors">
                            <ArrowRight className="h-3 w-3 mr-2 text-gray-500 group-hover:text-white mt-0.5 flex-shrink-0 transition-colors" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-white">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech, i) => (
                          <Badge key={i} className="text-xs bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white hover:border-white/50 transition-all">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Our Process</h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Like debugging, but with more coffee and fewer tears
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 text-white shadow-lg group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Discovery</h3>
              <p className="text-gray-400 group-hover:text-gray-200 text-sm transition-colors">
                We listen, ask questions, and pretend to understand your business better than you do
              </p>
            </div>
            
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold rounded-xl bg-gradient-to-br from-gray-600 to-gray-500 text-white shadow-lg group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Planning</h3>
              <p className="text-gray-400 group-hover:text-gray-200 text-sm transition-colors">
                Strategic blueprints that actually make sense (revolutionary concept)
              </p>
            </div>
            
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold rounded-xl bg-gradient-to-br from-white to-gray-400 text-black shadow-lg group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Development</h3>
              <p className="text-gray-400 group-hover:text-gray-200 text-sm transition-colors">
                Where the magic happens (and by magic, we mean lots of caffeine)
              </p>
            </div>
            
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 text-white shadow-lg group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Launch</h3>
              <p className="text-gray-400 group-hover:text-gray-200 text-sm transition-colors">
                Deploy, celebrate, then immediately start fixing things users find
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's turn your "wouldn't it be cool if..." into "wow, you actually built that!"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105 transform"
            >
              <Link to="/contact">Launch Project 🚀</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Link to="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;