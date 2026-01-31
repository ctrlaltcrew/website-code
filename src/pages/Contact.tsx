import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Coffee, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Suspense } from 'react';
import ParticlesBackground from '@/components/3D/ParticlesBackground';
import { supabase } from '@/integrations/supabase/client';
import { handleError, USER_ERRORS } from '@/lib/errorHandler';

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });

  // State for Schedule Call popup
  const [open, setOpen] = useState(false);
  const [callForm, setCallForm] = useState({ name: '', time: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save service request to database
      const { error } = await supabase
        .from('service_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            service_type: formData.service,
            budget_range: formData.budget,
            timeline: formData.timeline,
            project_description: formData.message,
            status: 'pending'
          }
        ]);

      if (error) {
        console.error("Service request insert error:", error);
        throw error;
      }

      toast({
        title: "Request Submitted Successfully! 🚀",
        description: "We'll get back to you faster than you can say 'Hello World'",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        timeline: ''
      });
    } catch (error) {
      handleError(error, USER_ERRORS.SAVE_FAILED);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // WhatsApp helpers
  const handleWhatsAppCall = () => {
    const number = "923349650000";
    const text = `Hi, I am ${callForm.name || "a guest"} and I'd like to schedule a call at ${callForm.time || "a suitable time"}.`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank");
    setOpen(false);
    setCallForm({ name: '', time: '' });
  };

  const handleCoffeeChat = () => {
    const number = "923349650000";
    const text = "Hi! I'd love to have a virtual coffee chat ☕.";
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank");
  };

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
            Let's <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Debug</span> Together
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Got a project that needs our special blend of code and caffeine? 
            Let's turn your "it's complicated" into "it just works."
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="group bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Start Your Project</CardTitle>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                  Fill out the form below and we'll get back to you faster than a hot-fixed production bug.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your name"
                        required
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-white/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@company.com"
                        required
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-white/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-300">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your awesome company"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-white/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gray-300">Service Needed *</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)} required>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                          <SelectItem value="web-dev">Web Development</SelectItem>
                          <SelectItem value="mobile-app">Mobile Applications</SelectItem>
                          <SelectItem value="chatbot">Chatbots & RAG</SelectItem>
                          <SelectItem value="data-engineering">Data Engineering</SelectItem>
                          <SelectItem value="automation">Automation & Integration</SelectItem>
                          <SelectItem value="consulting">Technical Consulting</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-gray-300">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-plus">$100,000+</SelectItem>
                          <SelectItem value="discuss">Let's Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-gray-300">Timeline</Label>
                      <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Project timeline" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="asap">ASAP (Rush Job)</SelectItem>
                          <SelectItem value="1-month">Within 1 Month</SelectItem>
                          <SelectItem value="2-3-months">2-3 Months</SelectItem>
                          <SelectItem value="3-6-months">3-6 Months</SelectItem>
                          <SelectItem value="6-plus-months">6+ Months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project, your pain points, or just say hi! The more details, the better we can help."
                      rows={5}
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-white/50"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={loading}
                    className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : 'Launch Project 🚀'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <Card className="group bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">Email</p>
                    <p className="text-xs sm:text-sm text-gray-400">ctrlaltcreww@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">Phone</p>
                    <p className="text-xs sm:text-sm text-gray-400">03349650000</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white to-gray-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">Location</p>
                    <p className="text-xs sm:text-sm text-gray-400">Remote First, Global Reach</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">Response Time</p>
                    <p className="text-xs sm:text-sm text-gray-400">Usually within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="group bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-white/50 transition-all"
                  onClick={() => setOpen(true)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Schedule a Call
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-white/50 transition-all"
                  onClick={handleCoffeeChat}
                >
                  <Coffee className="h-4 w-4 mr-2" />
                  Virtual Coffee Chat
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-white/50 transition-all"
                >
                  <a href="mailto:ctrlaltcreww@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Direct Email
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Coffee Counter */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <CardContent className="p-6 text-center relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-white to-gray-400 flex items-center justify-center animate-pulse">
                  <Coffee className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-bold mb-2 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Coffee Counter</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-2">2,847</p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Cups consumed while debugging this year
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Schedule Call Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-gray-900 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">Schedule a Call</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label className="text-gray-300">Your Name</Label>
              <Input
                value={callForm.name}
                onChange={(e) => setCallForm({ ...callForm, name: e.target.value })}
                placeholder="Enter your name"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <Label className="text-gray-300">Preferred Time</Label>
              <Input
                type="datetime-local"
                value={callForm.time}
                onChange={(e) => setCallForm({ ...callForm, time: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <Button 
              className="w-full bg-white text-black hover:bg-gray-200"
              onClick={handleWhatsAppCall}
            >
              Confirm & Send via WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-gray-300">
              The questions everyone asks (and a few weird ones)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-white/50 transition-all duration-500">
              <h3 className="font-semibold mb-2 text-white">How long does a typical project take?</h3>
              <p className="text-gray-400 text-sm">
                Anywhere from "we can fix that in an hour" to "this will take 6 months of careful engineering." 
                We'll give you a realistic timeline after understanding your needs.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-white/50 transition-all duration-500">
              <h3 className="font-semibold mb-2 text-white">Do you work with startups?</h3>
              <p className="text-gray-400 text-sm">
                Absolutely! We love working with early-stage companies. We offer flexible pricing and 
                can even consider equity partnerships for the right projects.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-white/50 transition-all duration-500">
              <h3 className="font-semibold mb-2 text-white">What if we don't know what we need?</h3>
              <p className="text-gray-400 text-sm">
                Perfect! Half our job is helping you figure out what you actually need vs. what you think you need. 
                We offer free consultation calls to explore your options.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-white/50 transition-all duration-500">
              <h3 className="font-semibold mb-2 text-white">Can you work with our existing team?</h3>
              <p className="text-gray-400 text-sm">
                Yes! We're great at integrating with existing teams, providing mentorship, 
                and leaving your developers better than we found them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
