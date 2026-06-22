import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Brain, Bot, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative flex-grow flex items-center justify-center min-h-[100svh] pt-20 overflow-hidden">
        {/* Stark minimal grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container relative z-10 px-4 flex flex-col items-center text-center">
          <img 
            src="/logo-stamp.png" 
            alt="Software House" 
            className="w-32 h-32 md:w-48 md:h-48 mb-8 dark:invert opacity-90 animate-[spin_30s_linear_infinite]"
          />
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground mb-6 uppercase leading-none">
            CTRL ALT <br />
            <span className="text-primary">CREW.</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light tracking-wide mb-10">
            A premium software house building highly polished, scalable, and intelligent digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" className="text-lg px-8 py-6 rounded-none font-bold tracking-widest uppercase hover:bg-primary transition-colors">
              <Link to="/contact">Start Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-none font-bold tracking-widest uppercase border-2 hover:bg-foreground hover:text-background transition-colors">
              <Link to="/portfolio">View Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center p-8 bg-background border-2 border-border hover:border-primary transition-colors duration-300">
              <h3 className="text-5xl md:text-7xl font-black text-foreground mb-2">100<span className="text-primary">+</span></h3>
              <p className="text-xs md:text-sm tracking-widest uppercase text-muted-foreground font-bold mt-2">Projects</p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-background border-2 border-border hover:border-primary transition-colors duration-300">
              <h3 className="text-5xl md:text-7xl font-black text-foreground mb-2">80<span className="text-primary">+</span></h3>
              <p className="text-xs md:text-sm tracking-widest uppercase text-muted-foreground font-bold mt-2">Clients</p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-background border-2 border-border hover:border-primary transition-colors duration-300">
              <h3 className="text-5xl md:text-7xl font-black text-foreground mb-2">15<span className="text-primary">+</span></h3>
              <p className="text-xs md:text-sm tracking-widest uppercase text-muted-foreground font-bold mt-2">Countries</p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-background border-2 border-border hover:border-primary transition-colors duration-300">
              <h3 className="text-5xl md:text-7xl font-black text-foreground mb-2">1<span className="text-primary">+</span></h3>
              <p className="text-xs md:text-sm tracking-widest uppercase text-muted-foreground font-bold mt-2">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-border pb-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase">Expertise.</h2>
            <Link to="/services" className="text-lg font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors flex items-center group mt-4 md:mt-0">
              All Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="rounded-none border-2 border-border bg-transparent hover:border-primary transition-all duration-300 group">
              <CardContent className="p-10">
                <Brain className="w-12 h-12 mb-8 text-foreground group-hover:text-primary transition-colors" />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">AI & Data Science</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Machine learning models and data pipelines engineered for real-world impact and massive scale.
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-none border-2 border-border bg-transparent hover:border-primary transition-all duration-300 group">
              <CardContent className="p-10">
                <Code className="w-12 h-12 mb-8 text-foreground group-hover:text-primary transition-colors" />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Web Development</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  High-performance, beautifully designed web applications built with modern frameworks and strict standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-none border-2 border-border bg-transparent hover:border-primary transition-all duration-300 group">
              <CardContent className="p-10">
                <Bot className="w-12 h-12 mb-8 text-foreground group-hover:text-primary transition-colors" />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Automation</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Intelligent chatbots and workflow automation that eliminate operational bottlenecks seamlessly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
            Ready to <br className="md:hidden" /> Build?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light opacity-80">
            Let's engineer the future of your business with high-end software solutions.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-background text-foreground hover:bg-primary hover:text-primary-foreground text-xl px-12 py-8 rounded-none font-black tracking-widest uppercase transition-all duration-300"
          >
            <Link to="/contact">Initialize Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
