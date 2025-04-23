import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Phone, MessageSquare } from 'lucide-react';

export default function Demo() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Experience Our AI Assistant in Action
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a personalized demo to see how our AI voice assistant can transform your law firm's communication.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Smith" required />
                </div>
                
                <div>
                  <label htmlFor="firm" className="block text-sm font-medium text-gray-700 mb-1">
                    Law Firm Name
                  </label>
                  <Input id="firm" placeholder="Smith & Associates" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your current call handling process and challenges..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Schedule Demo
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <Calendar className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Choose a time that works best for your schedule</p>
              </div>
              <div className="p-6">
                <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Live Demo</h3>
                <p className="text-gray-600">Experience our AI assistant in real-time</p>
              </div>
              <div className="p-6">
                <MessageSquare className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Expert Consultation</h3>
                <p className="text-gray-600">Get all your questions answered by our team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}