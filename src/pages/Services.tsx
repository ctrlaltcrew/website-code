import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Bot, Code, Smartphone, Database, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
      techStack: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas"]
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
      techStack: ["OpenAI", "LangChain", "Vector DBs", "FastAPI", "React"]
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
      techStack: ["React", "Node.js", "TypeScript", "Tailwind", "PostgreSQL"]
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
      techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
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
      techStack: ["Apache Airflow", "Spark", "Kafka", "dbt", "Snowflake"]
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
      techStack: ["Zapier", "Docker", "Kubernetes", "GitHub Actions", "AWS"]
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
            Our <span className="text-primary">Services.</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light tracking-wide">
            From "Hello World" to "Holy World, that's amazing!" – we engineer digital excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="rounded-none border-2 border-border bg-background hover:border-primary transition-all duration-300 group shadow-none">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-secondary group-hover:bg-primary/10 transition-colors">
                      <service.icon className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-6xl font-black text-border opacity-50 group-hover:text-primary group-hover:opacity-20 transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-black uppercase tracking-tight text-foreground">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground font-light leading-relaxed mt-2">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-sm mb-3 text-foreground uppercase tracking-wider">What We Deliver:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start group-hover:text-foreground transition-colors">
                            <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-sm mb-3 text-foreground uppercase tracking-wider">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech, i) => (
                          <Badge key={i} variant="outline" className="rounded-none border-border bg-secondary text-secondary-foreground hover:border-primary transition-colors">
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
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-border pb-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-foreground">Our Process.</h2>
            <p className="text-lg text-muted-foreground font-light mt-4 md:mt-0 max-w-md">
              A systematic approach to building robust software. Like debugging, but with more coffee and fewer tears.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Discovery", desc: "We analyze your business needs and architect a precise roadmap." },
              { title: "Planning", desc: "Strategic blueprints and technical specifications that scale." },
              { title: "Development", desc: "Clean code, robust architecture, and rapid iterations." },
              { title: "Launch", desc: "Seamless deployment, monitoring, and continuous optimization." }
            ].map((step, i) => (
              <div key={i} className="p-8 bg-background border-2 border-border hover:border-primary transition-all duration-300 group">
                <div className="text-6xl font-black text-border mb-6 group-hover:text-primary transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase text-foreground">{step.title}</h3>
                <p className="text-muted-foreground font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
            Ready to Start?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light opacity-80">
            Let's turn your "wouldn't it be cool if..." into "wow, you actually built that!"
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-background hover:text-foreground text-lg px-10 py-8 rounded-none font-black tracking-widest uppercase transition-colors"
            >
              <Link to="/contact">Launch Project</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-foreground text-lg px-10 py-8 rounded-none font-black tracking-widest uppercase transition-colors"
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