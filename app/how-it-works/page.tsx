import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Settings, Calendar, CheckCircle, Clock, Shield, ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Contact Us",
      description: "Tell us about your firm's needs and current call handling process. We'll schedule a consultation to understand your specific requirements.",
      details: "During this phase, we analyze your current workflow and identify opportunities for AI integration."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "We Build Your Assistant",
      description: "Our team creates a custom AI voice assistant tailored to your practice area and client needs.",
      details: "We configure the AI with legal terminology, your firm's protocols, and integration with your existing systems."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Start Handling Calls",
      description: "Your new AI assistant begins managing calls, qualifying leads, and booking appointments 24/7.",
      details: "The AI seamlessly handles client inquiries, schedules consultations, and routes urgent matters to your team."
    },
  ];

  const features = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Instant Deployment",
      description: "We handle all the technical details. Your AI assistant is ready to take calls within 48 hours."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Seamless Integration", 
      description: "Works with your existing phone system and calendar. No new software or hardware needed."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Ongoing Support",
      description: "Our team continuously monitors and improves your AI assistant's performance."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              How LexiEVO Works
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From law office to AI implementation - see the complete workflow that transforms your firm's communication.
            </p>
          </div>
        </div>
      </section>

      {/* Main Roadmap Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Side - Roadmap Steps */}
              <div className="space-y-12">
                <div className="text-center lg:text-left mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Roadmap</h2>
                  <p className="text-xl text-gray-600">
                    Three simple steps to transform your practice
                  </p>
                </div>
                
                <div className="relative">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/30 hidden md:block"></div>
                  
                  {steps.map((step, index) => (
                    <div key={index} className="relative flex items-start mb-16 last:mb-0">
                      {/* Step Circle */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {index + 1}
                        </div>
                        {/* Icon Circle */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border-2 border-primary rounded-full flex items-center justify-center">
                          <div className="text-primary scale-75">{step.icon}</div>
                        </div>
                      </div>
                      
                      {/* Step Content */}
                      <div className="ml-6 flex-1">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                          <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500 italic">{step.details}</p>
                          </div>
                          
                          {/* Duration Badge */}
                          <div className="mt-4 inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            {index === 0 && "1-2 days"}
                            {index === 1 && "2-3 days"}
                            {index === 2 && "Go live!"}
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow connector for mobile */}
                      {index < steps.length - 1 && (
                        <div className="md:hidden flex justify-center w-full mt-6">
                          <ArrowDown className="w-6 h-6 text-primary/60" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Side - Image */}
              <div className="lg:sticky lg:top-24">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/howItWorks.png"
                    alt="LexiEVO AI Voice Assistant Workflow - Law Office Scene, Tech Team Designing AI, and AI Assistant in Action"
                    fill
                    className="object-contain bg-gray-900"
                    priority
                  />
                </div>
                
                {/* Image Caption */}
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">The Complete Workflow</h3>
                  <p className="text-gray-600 text-sm">
                    From traditional operations to AI-powered efficiency - see the transformation in action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">No Setup Required</h2>
              <p className="text-xl text-gray-600">
                We handle everything from design to deployment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by Advanced AI Technology</h2>
              <p className="text-xl text-gray-600">
                Enterprise-grade capabilities designed specifically for law firms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
                    <p className="text-gray-600">
                      Understands legal terminology and handles complex client inquiries with professional sophistication.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Smart Call Routing</h3>
                    <p className="text-gray-600">
                      Automatically directs calls to the right team member or schedules appointments based on urgency.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                    <p className="text-gray-600">
                      Never miss a potential client again. Your AI assistant captures every opportunity around the clock.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                    <p className="text-gray-600">
                      The system learns from every interaction, becoming more effective and personalized to your firm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book a demo call to see how our AI voice assistant can revolutionize your law firm's client communication and lead generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/demo">Schedule Your Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}