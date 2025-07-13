import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import Globe from "./globe";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Transmitted!",
        description: "We'll get back to you soon with future solutions.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Transmission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold mb-6 text-ay-gold">
            CONNECT WITH US
          </h2>
          <p className="text-xl text-ay-gray max-w-3xl mx-auto">
            Ready to embark on a journey to the future? Let's create something extraordinary together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-morphism rounded-2xl p-8">
            <h3 className="text-2xl font-orbitron font-semibold mb-6 text-ay-gold">
              SEND MESSAGE
            </h3>
            
            <form onSubmit={handleSubmit} className="contact-form space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-ay-black bg-opacity-80 border-ay-gold border-opacity-30 text-ay-silver focus:border-ay-gold focus:shadow-[0_0_20px_rgba(208,165,25,0.3)]"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-ay-black bg-opacity-80 border-ay-gold border-opacity-30 text-ay-silver focus:border-ay-gold focus:shadow-[0_0_20px_rgba(208,165,25,0.3)]"
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-ay-black bg-opacity-80 border-ay-gold border-opacity-30 text-ay-silver focus:border-ay-gold focus:shadow-[0_0_20px_rgba(208,165,25,0.3)]"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-ay-black bg-opacity-80 border-ay-gold border-opacity-30 text-ay-silver focus:border-ay-gold focus:shadow-[0_0_20px_rgba(208,165,25,0.3)] resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-ay-gold to-cyber-purple text-ay-black py-3 rounded-lg font-orbitron font-semibold hover:scale-105 transition-transform duration-300"
              >
                {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
              </Button>
            </form>
          </div>
          
          {/* Contact Info & Globe */}
          <div className="glass-morphism rounded-2xl p-8">
            <h3 className="text-2xl font-orbitron font-semibold mb-6 text-ay-gold">
              LOCATE US
            </h3>
            
            {/* 3D Globe */}
            <div className="mb-8">
              <Globe />
            </div>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-ay-gold rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-ay-black" />
                </div>
                <div>
                  <p className="font-orbitron font-semibold text-ay-gold">LOCATION</p>
                  <p className="text-ay-gray">Oman - Muscat - Al Azaiba</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyber-purple rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-orbitron font-semibold text-cyber-purple">EMAIL</p>
                  <p className="text-ay-gray">contact@ay-group.net</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-electric-aqua rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-ay-black" />
                </div>
                <div>
                  <p className="font-orbitron font-semibold text-electric-aqua">PHONE</p>
                  <p className="text-ay-gray">+968 22512731</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
