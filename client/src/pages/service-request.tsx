import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ParticleSystem from "@/components/ui/particle-system";
import { 
  ArrowLeft, 
  Send, 
  User, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare,
  Sparkles,
  CheckCircle,
  Clock,
  Star,
  Zap,
  Rocket,
  Trophy
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const serviceRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Phone number must be at least 8 characters"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  urgency: z.enum(["low", "medium", "high"])
});

type ServiceRequestForm = z.infer<typeof serviceRequestSchema>;

const services = [
  { id: "business-center", name: "AY Business Center", description: "Office spaces & meeting rooms" },
  { id: "softlabs", name: "AY SoftLabs", description: "Technology & software solutions" },
  { id: "tourism", name: "AY Tourism", description: "Travel & tourism services" },
  { id: "events", name: "Events Management", description: "Corporate & social events" },
  { id: "financial", name: "Financial Planning", description: "Analysis & financial services" }
];

export default function ServiceRequest() {
  const [, setLocation] = useLocation();
  const [selectedService, setSelectedService] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showError, setShowError] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<ServiceRequestForm>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      urgency: "medium"
    }
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ServiceRequestForm) => {
      return apiRequest('/api/service-requests', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    },
    onSuccess: () => {
      setShowConfetti(true);
      setTimeout(() => {
        setIsSubmitted(true);
        toast({
          title: "Request Submitted!",
          description: "We'll get back to you within 24 hours."
        });
      }, 1000);
    },
    onError: () => {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      toast({
        title: "Transmission Failed",
        description: "Unable to establish connection. Please retry.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ServiceRequestForm) => {
    submitMutation.mutate(data);
  };

  const urgencyLevel = watch("urgency");

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-ay-black to-gray-900 flex items-center justify-center p-6 relative overflow-hidden">
        <ParticleSystem />
        
        <Card className="max-w-2xl w-full p-12 text-center glass-morphism animate-on-load relative z-10">
          <div className="mb-8">
            <div className="relative">
              <CheckCircle className="h-20 w-20 text-ay-gold mx-auto mb-6 animate-bounce" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-ay-gold rounded-full animate-ping opacity-30" />
              </div>
            </div>
            
            <h1 className="text-4xl font-orbitron font-bold text-ay-gold mb-4 animate-glow">
              REQUEST SUBMITTED
            </h1>
            <p className="text-xl text-ay-gray font-orbitron animate-on-load">
              Your service request has been successfully submitted!
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-2 animate-on-load">
              <Clock className="h-5 w-5 text-ay-silver animate-pulse" />
              <span className="text-ay-silver font-orbitron">Response time: 24 hours</span>
            </div>
            <div className="flex items-center justify-center space-x-2 animate-on-load">
              <Star className="h-5 w-5 text-ay-gold animate-pulse" />
              <span className="text-ay-gray font-orbitron">Priority: {urgencyLevel.toUpperCase()}</span>
            </div>
          </div>

          <Button 
            onClick={() => setLocation('/')}
            className="bg-gradient-to-r from-ay-gold to-ay-silver text-ay-black hover:scale-105 transition-transform duration-300 px-8 py-3 rounded-full font-orbitron font-semibold animate-pulse-gold"
          >
            RETURN HOME
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-ay-black to-gray-900 py-12 px-6 relative overflow-hidden">
      <ParticleSystem />
      
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <div className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-ay-gold' : 'bg-ay-silver'} rounded-full`} />
            </div>
          ))}
        </div>
      )}
      
      {/* Error Animation */}
      {showError && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 bg-red-500 opacity-10 animate-pulse" />
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-error-spark"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <div className="w-1 h-1 bg-red-500 rounded-full animate-ping" />
            </div>
          ))}
        </div>
      )}
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header with Back Button */}
        <div className="mb-12 animate-on-load">
          {/* Back Button - positioned top left with more spacing */}
          <div className="flex justify-start mb-12 pt-6">
            <Button 
              onClick={() => setLocation('/')}
              variant="outline" 
              className="border-ay-gold text-ay-gold hover:bg-ay-gold hover:text-ay-black font-orbitron transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </div>
          
          {/* Title Section - centered */}
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-orbitron font-black text-ay-gold mb-6 animate-glow">
              SERVICE REQUEST
            </h1>
            <p className="text-xl text-ay-gray font-orbitron max-w-2xl mx-auto">
              Ready to transform your vision into reality? Let's discuss your needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Service Selection */}
          <Card className="p-8 glass-morphism animate-on-load">
            <h2 className="text-2xl font-orbitron font-bold text-ay-gold mb-6 flex items-center">
              <Sparkles className="h-6 w-6 mr-2" />
              SELECT SERVICE
            </h2>
            
            <div className="space-y-3">
              {services.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => {
                    setSelectedService(service.id);
                    setValue("service", service.id);
                  }}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                    selectedService === service.id 
                      ? 'border-ay-gold bg-ay-gold bg-opacity-10 animate-selected-glow' 
                      : 'border-ay-gray border-opacity-30 hover:border-ay-silver'
                  }`}
                  style={{
                    backdropFilter: selectedService === service.id ? 'blur(10px)' : 'blur(0px)',
                    background: selectedService === service.id 
                      ? 'linear-gradient(135deg, rgba(208, 165, 25, 0.2), rgba(208, 165, 25, 0.05))'
                      : 'transparent'
                  }}
                >
                  {selectedService === service.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-ay-gold to-transparent opacity-20 animate-shimmer" />
                  )}
                  <h3 className={`font-orbitron font-semibold mb-1 relative z-10 ${
                    selectedService === service.id ? 'text-ay-gold animate-glow' : 'text-ay-silver'
                  }`}>
                    {service.name}
                  </h3>
                  <p className={`text-sm font-orbitron relative z-10 ${
                    selectedService === service.id ? 'text-ay-silver' : 'text-ay-gray'
                  }`}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            
            {errors.service && (
              <p className="text-red-400 text-sm mt-2 font-orbitron">
                {errors.service.message}
              </p>
            )}
          </Card>

          {/* Contact Form */}
          <Card className="p-8 glass-morphism animate-on-load">
            <h2 className="text-2xl font-orbitron font-bold text-ay-gold mb-6 flex items-center">
              <MessageSquare className="h-6 w-6 mr-2" />
              CONTACT DETAILS
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-ay-gray" />
                  <Input
                    {...register("name")}
                    placeholder="Full Name"
                    className="pl-12 bg-ay-black bg-opacity-50 border-ay-gray border-opacity-30 text-ay-silver placeholder-ay-gray font-orbitron focus:border-ay-gold transition-colors"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1 font-orbitron">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-ay-gray" />
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email Address"
                    className="pl-12 bg-ay-black bg-opacity-50 border-ay-gray border-opacity-30 text-ay-silver placeholder-ay-gray font-orbitron focus:border-ay-gold transition-colors"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1 font-orbitron">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-ay-gray" />
                  <Input
                    {...register("phone")}
                    placeholder="Phone Number"
                    className="pl-12 bg-ay-black bg-opacity-50 border-ay-gray border-opacity-30 text-ay-silver placeholder-ay-gray font-orbitron focus:border-ay-gold transition-colors"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1 font-orbitron">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-5 w-5 text-ay-gray" />
                  <Input
                    {...register("company")}
                    placeholder="Company (Optional)"
                    className="pl-12 bg-ay-black bg-opacity-50 border-ay-gray border-opacity-30 text-ay-silver placeholder-ay-gray font-orbitron focus:border-ay-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-ay-silver font-orbitron mb-2">
                  Priority Level
                </label>
                <div className="flex space-x-3">
                  {[
                    { value: "low", label: "Low", color: "bg-green-500" },
                    { value: "medium", label: "Medium", color: "bg-yellow-500" },
                    { value: "high", label: "High", color: "bg-red-500" }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        {...register("urgency")}
                        type="radio"
                        value={option.value}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 rounded-full ${option.color} ${urgencyLevel === option.value ? 'ring-2 ring-ay-gold' : ''}`} />
                      <span className="text-ay-gray font-orbitron text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <Textarea
                  {...register("message")}
                  placeholder="Describe your project requirements..."
                  rows={4}
                  className="bg-ay-black bg-opacity-50 border-ay-gray border-opacity-30 text-ay-silver placeholder-ay-gray font-orbitron focus:border-ay-gold transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1 font-orbitron">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button 
                type="submit"
                disabled={submitMutation.isPending}
                className="w-full bg-gradient-to-r from-ay-gold to-ay-silver text-ay-black hover:scale-105 transition-transform duration-300 py-3 rounded-full font-orbitron font-semibold relative overflow-hidden"
              >
                {submitMutation.isPending ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-ay-black"></div>
                    <span>SUBMITTING...</span>
                  </div>
                ) : showConfetti ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Trophy className="h-5 w-5 animate-bounce" />
                    <span>SUCCESS!</span>
                  </div>
                ) : showError ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="h-5 w-5 animate-bounce text-red-500" />
                    <span>FAILED - RETRY</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>SUBMIT REQUEST</span>
                  </div>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}