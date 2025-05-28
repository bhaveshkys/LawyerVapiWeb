import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Phone, Clock, DollarSign, Calendar, Shield, Zap, Users, CheckCircle } from 'lucide-react';
import VapiDemo from '@/components/VapiDemo';
import { Hero } from '@/components/Hero';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { MovingBorder } from '@/components/ui/moving-border';

export default function Home() {
  const benefits = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Never Miss a Client Opportunity',
      description: 'Convert prospects into paying clients with 24/7 intelligent call handling',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Focus on Billable Work',
      description: 'Let your team focus on substantive legal work while our AI handles client intake',
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Maximize Your Firm\'s Potential',
      description: 'Detailed call summaries and client information capture to boost conversion rates',
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Intelligent Scheduling',
      description: 'Automatically book consultations based on your availability without back-and-forth',
    },
  ];

  const aiAdvantages = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Handles Complex Legal Inquiries',
      description: 'Understands and responds to nuanced client needs with context-aware conversations.',
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Schedules Appointments Instantly',
      description: 'Integrates with your calendar to book consultations in real time — no follow-up needed.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Captures Detailed Client Information',
      description: 'Gathers relevant case details, intake data, and contact info without missing a beat.',
    },
    
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Consistent Brand Voice',
      description: 'Communicates in a tone tailored to your firm\'s style, ensuring a professional and branded experience.',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '24/7 Availability',
      description: 'Never miss a lead, even outside office hours or during peak call times.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Scalable & Efficient',
      description: 'Manages multiple calls simultaneously without wait times or dropped leads.',
    },
  ];

  const implementationSteps = [
    {
      day: 'Day 1',
      title: 'Initial Consultation',
      description: 'We\'ll discuss your firm\'s needs, call types, tone preferences, and intake process. This ensures the assistant reflects your brand and handles inquiries the way your team would.',
    },
    {
      day: 'Day 1–2',
      title: 'Customization & Integration',
      description: 'We build and train the AI to manage your inbound calls, including client intake, appointment scheduling, FAQ handling, and more. It can integrate with your CRM, calendar, or case management tools with minimal effort on your end.',
    },
    {
      day: 'By Day 2',
      title: 'Testing & Launch',
      description: 'After internal testing and final refinements, your AI assistant goes live — ready to start taking real client calls with accuracy and professionalism.',
    },
  ];

  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All call data, transcriptions, and stored information are encrypted both in transit and at rest using industry-leading protocols.',
    },
    {
      title: 'Secure Infrastructure',
      description: 'We host our systems on trusted, compliant cloud platforms with enterprise-grade firewalls, intrusion detection systems, and regular security audits.',
    },
    {
      title: 'Data Minimization & Access Control',
      description: 'Only the information necessary for intake and scheduling is collected. Access to sensitive data is tightly restricted based on user roles and firm-specific permissions.',
    },
    {
      title: 'Compliance with Legal Standards',
      description: 'Our systems are designed to align with regulations such as HIPAA, GDPR, and relevant state bar guidelines for legal data protection.',
    },
    {
      title: 'Custom Confidentiality Protocols',
      description: 'We tailor the assistant to follow your firm\'s privacy practices, ensuring that conversations stay professional, appropriate, and within ethical boundaries.',
    },
  ];

  const escalationFeatures = [
    {
      title: 'Intelligent Call Routing',
      description: 'If the matter is time-sensitive or legally complex, the assistant can immediately transfer the call to a designated attorney or staff member based on your internal escalation rules.',
    },
    {
      title: 'Smart Callback Scheduling',
      description: 'If no one is available at the moment, the AI can offer available time slots from your synced calendar and schedule a callback at the caller\'s convenience — eliminating missed opportunities and phone tag.',
    },
    {
      title: 'Real-Time Alerts',
      description: 'For high-priority issues, you can opt to receive instant notifications via email or SMS, along with a summary of the call, so your team can respond promptly.',
    },
    {
      title: 'Custom Escalation Paths',
      description: 'You define the rules — whether the caller is a current client, a lead with a criminal case, or someone facing an urgent legal deadline, the AI will follow your firm\'s protocol to route or escalate appropriately.',
    },
    {
      title: 'Professional and Empathetic Conversations',
      description: 'Even when the AI can\'t solve a caller\'s issue directly, it maintains a calm, courteous tone that reassures callers they\'re being heard and taken seriously.',
    },
  ];

  const faqs = [
    {
      question: 'How does your AI assistant compare to traditional answering services?',
      answer: 'Unlike traditional answering services that rely on scripted responses and limited knowledge, our AI voice assistant is built specifically for law firms. It delivers a seamless, intelligent experience that goes far beyond just taking messages: handles complex legal inquiries, captures detailed client information, schedules appointments instantly, maintains consistent brand voice, provides 24/7 availability, and offers scalable & efficient service.',
    },
    {
      question: 'How quickly can we implement this solution?',
      answer: 'We move fast — your custom AI assistant can be up and running within 48 hours of our initial consultation. The entire setup requires little to no disruption to your current operations. You don\'t need to hire staff, learn new software, or overhaul your systems. We handle everything behind the scenes, so you can stay focused on serving your clients.',
    },
    {
      question: 'Is client information kept secure and confidential?',
      answer: 'Absolutely — protecting your clients\' sensitive information is our top priority. Our AI voice assistant is designed specifically for law firms and built with the principles of attorney-client privilege and data confidentiality at its core. We use end-to-end encryption, secure infrastructure, data minimization & access control, compliance with legal standards, and custom confidentiality protocols.',
    },
    {
      question: 'What happens when a caller needs to speak with an actual attorney?',
      answer: 'Our AI assistant is designed to enhance—not replace—the human touch where it matters most. When a caller presents a matter that clearly requires an attorney\'s direct involvement, the AI is trained to recognize context, urgency, and legal complexity. It provides intelligent call routing, smart callback scheduling, real-time alerts, custom escalation paths, and maintains professional and empathetic conversations.',
    },
  ];

  return (
    <div className='pt-10'>
      
      {/* Hero Section */}
      <Hero />
      {/* Demo Video Section */}
      <section className="py-16 relative overflow-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience Your New Legal Assistant</h2>
            <p className="text-xl mb-10 text-gray-600">
              Missed calls mean missed client relationships. Our AI assistant ensures you never miss an opportunity while collecting crucial information for your practice.
            </p>
            <VapiDemo />
          </div>
        </div>
      </section>
      {/* AI vs Traditional Services Section */}
      <section className="py-4 md:py-4 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full z-0 opacity-90" 
          style={{
            backgroundImage: "url('/images/wavesbg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute -inset-0 bg-white/70 z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Our AI Assistant Outperforms Traditional Answering Services
            </h2>
            <p className="text-xl text-gray-600">
              Unlike traditional answering services that rely on scripted responses and limited knowledge, our AI voice assistant is built specifically for law firms. It delivers a seamless, intelligent experience that goes far beyond just taking messages:
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiAdvantages.map((advantage, index) => {
                // Check if this is one of the cards that should have the moving border
                const shouldHaveMovingBorder = [
                  '24/7 Availability',
                  'Captures Detailed Client Information',
                  'Handles Complex Legal Inquiries'
                ].includes(advantage.title);
                
                return shouldHaveMovingBorder ? (
                  // Card with moving border for selected cards
                  <div key={index} className="relative p-1 rounded-lg overflow-hidden">
                    <div className="absolute inset-0">
                      <MovingBorder duration={3000} rx="20%" ry="20%">
                        <div className="h-28 w-28 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]" />
                      </MovingBorder>
                    </div>
                    <div className="bg-white p-6 rounded-lg relative z-10 h-full border border-slate-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                          <div className="text-primary">{advantage.icon}</div>
                        </div>
                        <h3 className="text-lg font-semibold">{advantage.title}</h3>
                      </div>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                ) : (
                  // Regular card for all other advantages
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-4 border-transparent hover:border-4 hover:border-black">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <div className="text-primary">{advantage.icon}</div>
                      </div>
                      <h3 className="text-lg font-semibold">{advantage.title}</h3>
                    </div>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full z-0 opacity-60" 
          style={{
            backgroundImage: 'url("/images/lexievoLawFirm.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20 z-0"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Empower Your Law Firm to Do Its Best Work
          </h2>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={benefits} />
          </div>
        </div>
      </section>

      {/* Implementation Timeline Section */}
      <section className="py-16 md:py-24 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full z-0 opacity-60" 
          style={{
            backgroundImage: "url('/images/womaninfrontofscreen.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/50 z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Quickly Can We Implement This Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We move fast — your custom AI assistant can be up and running within 48 hours of our initial consultation.
            </p>
            <p className="text-lg text-gray-600">
              Here's how the process works:
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {implementationSteps.map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.day}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-black max-w-3xl mx-auto">
                The entire setup requires little to no disruption to your current operations. You don't need to hire staff, learn new software, or overhaul your systems. We handle everything behind the scenes, so you can stay focused on serving your clients.
              </p>
              <p className="text-lg text-black mt-4">
                Whether you're a solo attorney or a growing firm, we make it easy to scale your communication without delay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
{/*       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Is Client Information Kept Secure and Confidential?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Absolutely — protecting your clients' sensitive information is our top priority.
            </p>
            <p className="text-lg text-gray-600">
              Our AI voice assistant is designed specifically for law firms and built with the principles of attorney-client privilege and data confidentiality at its core. Here's how we ensure your clients' data remains secure at every step:
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                With our AI assistant, you can trust that every client interaction is handled with the discretion, security, and professionalism your firm is known for — 24/7, without compromise.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Attorney Escalation Section */}
      <section className="py-16 md:py-24 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full z-0 opacity-60" 
          style={{
            backgroundImage: 'url("/images/laptop.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/50 z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Happens When a Caller Needs to Speak with an Actual Attorney?
            </h2>
            <p className="text-xl text-black">
              Our AI assistant is designed to enhance—not replace—the human touch where it matters most.
            </p>
            <p className="text-lg text-black mt-4">
              When a caller presents a matter that clearly requires an attorney's direct involvement, the AI is trained to recognize context, urgency, and legal complexity. Here's how it handles those situations with professionalism and precision:
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {escalationFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    {feature.title}
                  </h3>
                  <p className="text-black">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-black max-w-3xl mx-auto">
                Ultimately, our AI assistant ensures that routine calls are handled efficiently, while more sensitive or complex matters are quickly directed to the right person — so you never miss a critical conversation or a potential client.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Losing Potential Clients to Voicemail
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your legal expertise is too valuable to spend half your day answering phones. Try our AI assistant today.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-lg"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}