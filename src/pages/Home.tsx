import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Brain, Bot, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCountUp } from '@/hooks/useCountUp';
import PremiumHeroScene from '@/components/3D/PremiumHeroScene';
import { Suspense } from 'react';

const Home = () => {
  const projectCount = useCountUp(100, 2000, 200);
  const clientCount = useCountUp(80, 2000, 400);
  const countryCount = useCountUp(15, 2000, 600);
  const yearCount = useCountUp(1, 2000, 800);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
      >
        {/* Premium 3D Scene - Hidden on very small mobile screens */}
        <div className="hidden sm:block">
          <Suspense fallback={
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          }>
            <PremiumHeroScene />
          </Suspense>
        </div>
        
        {/* Hero Text - Responsive positioning */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start px-4 sm:px-6 md:px-12 z-10">
          <div className="max-w-2xl w-full sm:w-auto text-center sm:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Press{' '}
                <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                  Ctrl Alt Crew
                </span>
                <br />
                to Restart Innovation
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-xl mx-auto sm:mx-0">
                We debug life's glitches and reboot old ideas into bold AI-powered solutions. Your geeky partners for next-gen software development.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-lg font-semibold w-full sm:w-auto"
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white transition-all duration-300 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-lg font-semibold w-full sm:w-auto"
                >
                  <Link to="/portfolio">View Our Work <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements / Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ctrl Alt Crew's <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              We take pride in empowering startups and enterprises worldwide with 
              AI-powered, scalable, and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <h3 className="text-4xl font-extrabold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">100+</h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors">Successful Projects</p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <h3 className="text-4xl font-extrabold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">80+</h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors">Active Clients</p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <h3 className="text-4xl font-extrabold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">15+</h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors">Countries Served</p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <h3 className="text-4xl font-extrabold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">1+</h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors">Years of Experience</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 text-lg px-8 py-4 shadow-lg hover:shadow-xl hover:shadow-white/20"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Expertise</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              From AI wizardry to full-stack sorcery
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
            <Card className="group bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <CardContent className="p-5 sm:p-6 md:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-lg bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center shadow-lg group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300">
                  <Brain className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">AI & Data Science</h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                  Machine learning models that actually learn (unlike some developers we know)
                </p>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <CardContent className="p-5 sm:p-6 md:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-lg bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center shadow-lg group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300">
                  <Code className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Web Development</h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                  Responsive sites that work on everything except Internet Explorer (we have standards)
                </p>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 sm:col-span-2 md:col-span-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <CardContent className="p-5 sm:p-6 md:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-lg bg-gradient-to-br from-white to-gray-400 flex items-center justify-center shadow-lg group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300">
                  <Bot className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Chatbots & Automation</h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                  Bots so smart, they'll probably ask for a raise
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section with 3D Visualization */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ctrl Alt Crew's Achievements</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              We take pride in empowering startups and enterprises worldwide with AI-powered, scalable, and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
            <div className="text-center p-6 rounded-lg glass-3d border border-border/50 hover:border-primary transition-all duration-300 perspective-container">
              <div className="text-5xl font-bold text-gradient mb-2 card-3d">{projectCount}+</div>
              <div className="text-muted-foreground">Successful Projects</div>
            </div>
            
            <div className="text-center p-6 rounded-lg glass-3d border border-border/50 hover:border-primary transition-all duration-300 perspective-container">
              <div className="text-5xl font-bold text-gradient mb-2 card-3d">{clientCount}+</div>
              <div className="text-muted-foreground">Active Clients</div>
            </div>
            
            <div className="text-center p-6 rounded-lg glass-3d border border-border/50 hover:border-primary transition-all duration-300 perspective-container">
              <div className="text-5xl font-bold text-gradient mb-2 card-3d">{countryCount}+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            
            <div className="text-center p-6 rounded-lg glass-3d border border-border/50 hover:border-primary transition-all duration-300 perspective-container">
              <div className="text-5xl font-bold text-gradient mb-2 card-3d">{yearCount}+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 sm:mb-5 md:mb-6">
            Ready to Reboot Your Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto px-4">
            Let's turn your "it works on my machine" into "it works everywhere"
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
          >
            <Link to="/contact">Start Debugging with Us 🛠️</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
