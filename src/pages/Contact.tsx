import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Coffee, MessageCircle, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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
      const { error } = await supabase
        .from('service_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            service: formData.service,
            budget: formData.budget,
            timeline: formData.timeline,
            message: formData.message,
            status: 'pending'
          }
        ]);

      if (error) {
        console.error("Service request insert error:", error);
        throw error;
      }

      toast({
        title: "INITIALIZATION SUCCESSFUL",
        description: "We'll get back to you faster than you can say 'Hello World'",
      });

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
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background border-b-2 border-border">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 py-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter text-foreground">
            Contact <span className="text-primary">Us.</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light tracking-wide">
            Got a project that needs our special blend of code and caffeine? Let's turn your "it's complicated" into "it just works."
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-background border-2 border-border p-8 md:p-12">
              <div className="mb-12">
                <h2 className="text-4xl font-black uppercase tracking-tight mb-4 text-foreground">Initialize Project</h2>
                <p className="text-muted-foreground font-light text-lg">
                  Fill out the parameters below and we'll process your request immediately.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-foreground uppercase font-bold tracking-widest text-xs">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your name"
                      required
                      className="bg-transparent border-2 border-border rounded-none h-14 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-foreground uppercase font-bold tracking-widest text-xs">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@company.com"
                      required
                      className="bg-transparent border-2 border-border rounded-none h-14 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="company" className="text-foreground uppercase font-bold tracking-widest text-xs">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your awesome company"
                      className="bg-transparent border-2 border-border rounded-none h-14 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="service" className="text-foreground uppercase font-bold tracking-widest text-xs">Service Needed *</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)} required>
                      <SelectTrigger className="bg-transparent border-2 border-border rounded-none h-14 text-foreground focus:ring-0 focus:border-primary transition-colors">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-2 border-border rounded-none">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="budget" className="text-foreground uppercase font-bold tracking-widest text-xs">Budget Range</Label>
                    <Select onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="bg-transparent border-2 border-border rounded-none h-14 text-foreground focus:ring-0 focus:border-primary transition-colors">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-2 border-border rounded-none">
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-plus">$100,000+</SelectItem>
                        <SelectItem value="discuss">Let's Discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="timeline" className="text-foreground uppercase font-bold tracking-widest text-xs">Timeline</Label>
                    <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger className="bg-transparent border-2 border-border rounded-none h-14 text-foreground focus:ring-0 focus:border-primary transition-colors">
                        <SelectValue placeholder="Project timeline" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-2 border-border rounded-none">
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

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-foreground uppercase font-bold tracking-widest text-xs">Project Details *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your project, your pain points, or just say hi! The more details, the better we can help."
                    rows={6}
                    required
                    className="bg-transparent border-2 border-border rounded-none text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors duration-300 text-lg px-8 py-8 rounded-none font-black tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Executing...' : 'Submit Request'}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            
            {/* Contact Information */}
            <div className="bg-background border-2 border-border p-8">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 text-foreground">Direct Access</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-border flex-shrink-0">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-xs text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground font-light text-sm">ctrlaltcreww@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-border flex-shrink-0">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-xs text-foreground mb-1">Phone</p>
                    <p className="text-muted-foreground font-light text-sm">03349650000</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-border flex-shrink-0">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-xs text-foreground mb-1">Location</p>
                    <p className="text-muted-foreground font-light text-sm">Remote First, Global Reach</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-border flex-shrink-0">
                    <Clock className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-xs text-foreground mb-1">Ping Return</p>
                    <p className="text-muted-foreground font-light text-sm">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-secondary border-2 border-border p-8">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 text-foreground">Fast Paths</h3>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start rounded-none border-2 border-border bg-background hover:border-primary hover:text-primary transition-colors h-14"
                  onClick={() => setOpen(true)}
                >
                  <MessageCircle className="h-5 w-5 mr-4" />
                  <span className="font-bold uppercase tracking-widest text-xs">Schedule Call</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start rounded-none border-2 border-border bg-background hover:border-primary hover:text-primary transition-colors h-14"
                  onClick={handleCoffeeChat}
                >
                  <Coffee className="h-5 w-5 mr-4" />
                  <span className="font-bold uppercase tracking-widest text-xs">Virtual Coffee</span>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full justify-start rounded-none border-2 border-border bg-background hover:border-primary hover:text-primary transition-colors h-14"
                >
                  <a href="mailto:ctrlaltcreww@gmail.com">
                    <Mail className="h-5 w-5 mr-4" />
                    <span className="font-bold uppercase tracking-widest text-xs">Direct Email</span>
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Schedule Call Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-background border-2 border-border rounded-none p-8 max-w-md">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-black uppercase text-foreground">Schedule Ping</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="space-y-3">
              <Label className="text-foreground uppercase font-bold tracking-widest text-xs">Your Name</Label>
              <Input
                value={callForm.name}
                onChange={(e) => setCallForm({ ...callForm, name: e.target.value })}
                placeholder="Enter your name"
                className="bg-transparent border-2 border-border rounded-none h-14 text-foreground focus-visible:ring-0 focus-visible:border-primary"
              />
            </div>
            <div className="space-y-3">
              <Label className="text-foreground uppercase font-bold tracking-widest text-xs">Preferred Time</Label>
              <Input
                type="datetime-local"
                value={callForm.time}
                onChange={(e) => setCallForm({ ...callForm, time: e.target.value })}
                className="bg-transparent border-2 border-border rounded-none h-14 text-foreground focus-visible:ring-0 focus-visible:border-primary"
              />
            </div>
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-foreground hover:text-background h-14 rounded-none font-black uppercase tracking-widest transition-colors"
              onClick={handleWhatsAppCall}
            >
              Send via WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary border-t-2 border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tighter text-foreground text-center">FAQ.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="rounded-none border-2 border-border bg-background shadow-none hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-black uppercase mb-4 text-foreground">How long does a project take?</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Anywhere from "we can fix that in an hour" to "this will take 6 months of careful engineering." 
                  We'll give you a realistic timeline after understanding your needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-none border-2 border-border bg-background shadow-none hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-black uppercase mb-4 text-foreground">Do you work with startups?</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Absolutely! We love working with early-stage companies. We offer flexible pricing and 
                  can even consider equity partnerships for the right projects.
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-none border-2 border-border bg-background shadow-none hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-black uppercase mb-4 text-foreground">What if we don't know what we need?</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Perfect! Half our job is helping you figure out what you actually need vs. what you think you need. 
                  We offer free consultation calls to explore your options.
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-none border-2 border-border bg-background shadow-none hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-black uppercase mb-4 text-foreground">Can you work with our existing team?</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Yes! We're great at integrating with existing teams, providing mentorship, 
                  and leaving your developers better than we found them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
