import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Settings, Calendar } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Contact Us",
      description: "Tell us about your firm's needs and current call handling process.",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "We Build Your Assistant",
      description: "Our team creates a custom AI voice assistant tailored to your practice area.",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Start Handling Calls",
      description: "Your new AI assistant begins managing calls, qualifying leads, and booking appointments.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get started with your AI voice assistant in three simple steps. No software to install. No learning curve.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <div className="text-primary">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">No Setup Required</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant Deployment</h3>
                <p className="text-gray-600">
                  We handle all the technical details. Your AI assistant is ready to take calls within 48 hours.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                <p className="text-gray-600">
                  Works with your existing phone system and calendar. No new software or hardware needed.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  Our team continuously monitors and improves your AI assistant's performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Book a demo call to see how our AI voice assistant can transform your law firm's communication.
            </p>
            <Button size="lg" asChild>
              <Link href="/demo">Schedule Your Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}