import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Coffee, Heart, Lightbulb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import ParticlesBackground from '@/components/3D/ParticlesBackground';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with 3D Background */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* 3D Particles Background */}
        <Suspense fallback={null}>
          <ParticlesBackground />
        </Suspense>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Ctrl Alt Crew</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're not your average software house. We're the people who think "Have you tried turning it off and on again?" 
            is both a life philosophy and a valid debugging strategy.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Our Story</h2>
            
            <div className="space-y-6">
              <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-sm">
                <p className="text-base sm:text-lg leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors">
                  Born from a shared frustration with buggy software and a mutual love for clean code and coffee, 
                  Ctrl Alt Crew emerged as the answer to "Why can't tech be both powerful and fun?"
                </p>
              </div>
              
              <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-sm">
                <p className="text-base sm:text-lg leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors">
                  We believe that the best solutions come from combining technical excellence with human creativity. 
                  Our team doesn't just write code – we craft digital experiences that make users smile and businesses thrive.
                </p>
              </div>
              
              <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-sm">
                <p className="text-base sm:text-lg leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors">
                  From AI that actually makes sense to chatbots that don't make you want to throw your laptop out the window, 
                  we're here to prove that great software can be both intelligent and intuitive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">What Drives Us</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="group bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center shadow-lg group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Caffeine-Driven Innovation</h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                  Great code requires great coffee. We measure productivity in espresso shots.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center shadow-lg group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">User-First Philosophy</h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                  If your grandma can't use it, we haven't done our job right.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-white to-gray-400 flex items-center justify-center shadow-lg group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300">
                  <Lightbulb className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Creative Problem Solving</h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                  Every bug is just a feature waiting to be properly documented.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center shadow-lg group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Team Collaboration</h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                  We believe in pair programming, code reviews, and shared pizza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900/50 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Fun Facts About Us</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-sm">
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">∞</div>
              <div className="text-lg font-semibold mb-2 text-white">Lines of Code</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">And still counting (mostly comments)</div>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-sm">
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">404</div>
              <div className="text-lg font-semibold mb-2 text-white">Bugs Fixed</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">Error: Number too large to display</div>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-sm">
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-lg font-semibold mb-2 text-white">Stack Overflow Monitoring</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">Someone has to watch the watchers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want to Join Our Debug Squad?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need our services or want to join our team, we'd love to chat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105 transform"
            >
              <Link to="/contact">Let's Talk 💬</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Link to="/services">See Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;