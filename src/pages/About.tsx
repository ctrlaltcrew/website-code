import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Coffee, Heart, Lightbulb, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background border-b-2 border-border">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 py-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter text-foreground">
            Our <span className="text-primary">Story.</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light tracking-wide">
            We're not your average software house. We're the people who think "Have you tried turning it off and on again?" 
            is both a life philosophy and a valid debugging strategy.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-secondary border-b-2 border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-24 uppercase tracking-tighter text-foreground">Timeline.</h2>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border transform -translate-x-1/2"></div>
            
            {/* Story Item 1 - Right */}
            <div className="relative mb-16 md:mb-24">
              <div className="md:flex md:items-center">
                <div className="md:w-1/2 md:pr-16"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-background border-4 border-primary z-10"></div>
                <div className="md:w-1/2 md:pl-16">
                  <div className="p-8 bg-background border-2 border-border hover:border-primary transition-colors duration-300">
                    <h3 className="text-2xl font-black uppercase mb-4 text-foreground">The Origin</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Born from a shared frustration with buggy software and a mutual love for clean code and coffee, 
                      Ctrl Alt Crew emerged as the answer to "Why can't tech be both powerful and fun?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story Item 2 - Left */}
            <div className="relative mb-16 md:mb-24">
              <div className="md:flex md:items-center md:flex-row-reverse">
                <div className="md:w-1/2 md:pl-16"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-background border-4 border-foreground z-10"></div>
                <div className="md:w-1/2 md:pr-16">
                  <div className="p-8 bg-background border-2 border-border hover:border-foreground transition-colors duration-300">
                    <h3 className="text-2xl font-black uppercase mb-4 text-foreground">The Philosophy</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      We believe that the best solutions come from combining technical excellence with human creativity. 
                      Our team doesn't just write code – we craft digital experiences that make users smile and businesses thrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story Item 3 - Right */}
            <div className="relative">
              <div className="md:flex md:items-center">
                <div className="md:w-1/2 md:pr-16"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-background border-4 border-primary z-10"></div>
                <div className="md:w-1/2 md:pl-16">
                  <div className="p-8 bg-background border-2 border-border hover:border-primary transition-colors duration-300">
                    <h3 className="text-2xl font-black uppercase mb-4 text-foreground">The Future</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      From AI that actually makes sense to chatbots that don't make you want to throw your laptop out the window, 
                      we're here to prove that great software can be both intelligent and intuitive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-border pb-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-foreground">Values.</h2>
            <p className="text-lg text-muted-foreground font-light mt-4 md:mt-0">
              The core principles that drive our engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="rounded-none border-2 border-border bg-transparent hover:border-primary transition-colors duration-300 group shadow-none">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 mb-6 bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Coffee className="h-8 w-8 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-black uppercase mb-4 text-foreground tracking-tight">Caffeine-Driven</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  Great code requires great coffee. We measure productivity in espresso shots.
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-none border-2 border-border bg-transparent hover:border-primary transition-colors duration-300 group shadow-none">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 mb-6 bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Heart className="h-8 w-8 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-black uppercase mb-4 text-foreground tracking-tight">User-First</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  If your grandma can't use it, we haven't done our job right.
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-none border-2 border-border bg-transparent hover:border-primary transition-colors duration-300 group shadow-none">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 mb-6 bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Lightbulb className="h-8 w-8 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-black uppercase mb-4 text-foreground tracking-tight">Creative Logic</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  Every bug is just a feature waiting to be properly documented.
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-none border-2 border-border bg-transparent hover:border-primary transition-colors duration-300 group shadow-none">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 mb-6 bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Users className="h-8 w-8 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-black uppercase mb-4 text-foreground tracking-tight">Collaboration</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  We believe in pair programming, code reviews, and shared pizza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-background border-2 border-border hover:border-primary transition-colors text-center flex flex-col justify-center min-h-[250px]">
              <div className="text-6xl font-black text-foreground mb-4 font-mono">∞</div>
              <div className="text-xl font-black uppercase tracking-tight mb-2">Lines of Code</div>
              <div className="text-muted-foreground font-light text-sm">And still counting (mostly comments)</div>
            </div>
            
            <div className="p-8 bg-background border-2 border-border hover:border-primary transition-colors text-center flex flex-col justify-center min-h-[250px]">
              <div className="text-6xl font-black text-foreground mb-4 font-mono">404</div>
              <div className="text-xl font-black uppercase tracking-tight mb-2">Bugs Fixed</div>
              <div className="text-muted-foreground font-light text-sm">Error: Number too large to display</div>
            </div>
            
            <div className="p-8 bg-background border-2 border-border hover:border-primary transition-colors text-center flex flex-col justify-center min-h-[250px]">
              <div className="text-6xl font-black text-foreground mb-4 font-mono">24/7</div>
              <div className="text-xl font-black uppercase tracking-tight mb-2">SO Monitoring</div>
              <div className="text-muted-foreground font-light text-sm">Someone has to watch the watchers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
            Join the <br className="md:hidden" /> Squad?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light opacity-80">
            Whether you need our services or want to join our team, we'd love to chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-background hover:text-foreground text-lg px-10 py-8 rounded-none font-black tracking-widest uppercase transition-colors"
            >
              <Link to="/contact">Let's Talk <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-foreground text-lg px-10 py-8 rounded-none font-black tracking-widest uppercase transition-colors"
            >
              <Link to="/services">See Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;