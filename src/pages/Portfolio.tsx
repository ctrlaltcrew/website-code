import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Brain, Bot, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Portfolio = () => {
  const projects = [
    {
      title: "SmartChat AI",
      description: "RAG-powered chatbot that actually understands context (shocking, we know)",
      category: "AI & Chatbots",
      icon: Bot,
      github: "https://github.com/ctrlaltcrew/SmartChat-AI-Assistant",
      technologies: ["Python", "LangChain", "OpenAI", "Vector DB"],
      features: [
        "Multi-document knowledge base",
        "Real-time learning capabilities", 
        "Multi-language support"
      ],
    },
    {
      title: "PredictaFlow",
      description: "ML pipeline that predicts user behavior better than a fortune teller",
      category: "Data Science",
      icon: Brain,
      github: "https://github.com/ctrlaltcrew/PredictaFlow-Analytics",
      technologies: ["TensorFlow", "Airflow", "PostgreSQL", "Docker"],
      features: [
        "Real-time data processing",
        "Automated model retraining",
        "A/B testing integration"
      ],
    },
    {
      title: "EcoTrack Mobile",
      description: "Carbon footprint tracker that makes saving the planet addictive",
      category: "Mobile App",
      icon: Smartphone,
      github: "https://github.com/ctrlaltcrew/EcoTrack-Mobile-App",
      technologies: ["React Native", "Node.js", "Firebase", "Chart.js"],
      features: [
        "Gamified tracking system",
        "Social challenges",
        "AI recommendations"
      ],
    },
    {
      title: "AutoCode Gen",
      description: "AI that writes code while you drink coffee (the dream is real)",
      category: "Automation",
      icon: Bot,
      github: "https://github.com/ctrlaltcrew/SmartChat-AI-Assistant",
      technologies: ["GPT-4", "AST Parsing", "Git", "VS Code Extension"],
      features: [
        "Natural language to code",
        "Auto-documentation",
        "Code review suggestions"
      ],
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow",
      quote: "Ctrl Alt Crew didn't just build our AI system, they made it so intuitive that our team actually enjoys using it. That's witchcraft.",
      project: "SmartChat AI"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Founder, GreenTech",
      quote: "They turned our 'crazy idea' into a mobile app with 50k users. I'm pretty sure they're actual wizards.",
      project: "EcoTrack"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Data, FinFlow",
      quote: "Finally, a team that speaks both human and machine. Our ML pipeline has been flawless for 8 months straight.",
      project: "PredictaFlow"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background border-b-2 border-border">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 py-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter text-foreground">
            Our <span className="text-primary">Work.</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light tracking-wide">
            Real projects, real results, real satisfied clients (and yes, they actually paid us).
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col bg-background border-2 border-border hover:border-primary transition-colors duration-300 group">
                <div className="aspect-video bg-secondary flex items-center justify-center border-b-2 border-border group-hover:bg-primary/5 transition-colors">
                  <project.icon className="h-24 w-24 text-muted-foreground group-hover:text-primary transition-colors duration-500 group-hover:scale-110" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="rounded-none border-border bg-secondary text-foreground uppercase tracking-widest text-xs font-bold">
                      {project.category}
                    </Badge>
                    <span className="text-4xl font-black text-border opacity-50 group-hover:text-primary group-hover:opacity-20 transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-black uppercase mb-4 text-foreground tracking-tight">{project.title}</h3>
                  <p className="text-muted-foreground font-light mb-8">
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-6">
                    <div>
                      <h4 className="font-bold text-sm mb-3 text-foreground uppercase tracking-wider">Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors">
                            <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm mb-3 text-foreground uppercase tracking-wider">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="rounded-none border-border bg-transparent hover:border-primary text-muted-foreground hover:text-foreground transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button asChild className="rounded-none font-bold uppercase tracking-widest w-full group-hover:bg-primary transition-colors">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" /> View Source Code
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
      <section className="py-24 bg-secondary border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-border pb-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-foreground">Feedback.</h2>
            <p className="text-lg text-muted-foreground font-light mt-4 md:mt-0 max-w-md text-right">
              Real feedback from humans who actually use our products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="rounded-none border-2 border-border bg-background hover:border-primary transition-colors duration-300 group shadow-none">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="text-6xl font-serif text-primary opacity-50 mb-4 leading-none">"</div>
                  <p className="text-foreground font-medium italic mb-8 flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-black text-foreground uppercase tracking-tight">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">{testimonial.role}</p>
                    <Badge variant="outline" className="rounded-none text-xs text-primary border-primary bg-primary/5">
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter text-foreground">Our Arsenal.</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16 font-light max-w-2xl mx-auto">
            The industrial-grade tools we use to turn caffeine into scalable code.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Python", "React", "Node.js", "TypeScript", "TensorFlow", "Docker",
              "AWS", "PostgreSQL", "MongoDB", "Redis", "Kubernetes", "OpenAI"
            ].map((tech, index) => (
              <div key={index} className="p-6 border-2 border-border bg-secondary hover:border-primary hover:bg-background hover:text-primary transition-all duration-300 flex items-center justify-center font-black uppercase tracking-wider text-sm text-foreground">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
            Ready to Build?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light opacity-80">
            Let's create something amazing together.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-background hover:text-foreground text-lg px-12 py-8 rounded-none font-black tracking-widest uppercase transition-colors"
          >
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
