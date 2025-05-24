import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Phone, Clock, DollarSign, Calendar } from 'lucide-react';
import VapiDemo from '@/components/VapiDemo';
import { Hero } from '@/components/Hero';
import { HoverEffect } from '@/components/ui/card-hover-effect';

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

  const faqs = [
    {
      question: 'How does your AI assistant compare to traditional answering services?',
      answer: 'Unlike traditional answering services, our AI assistant can handle complex legal inquiries, collect detailed client information, and schedule appointments - all while maintaining a natural conversation that represents your firm\'s brand voice.',
    },
    {
      question: 'How quickly can we implement this solution?',
      answer: 'We can have your AI assistant customized and ready to handle calls within 48 hours of our initial consultation, with minimal disruption to your existing workflow.',
    },
    {
      question: 'Is client information kept secure and confidential?',
      answer: 'Absolutely. Our system is built with attorney-client privilege in mind and employs enterprise-grade security measures to ensure all client information remains confidential and secure.',
    },
    {
      question: 'What happens when a caller needs to speak with an actual attorney?',
      answer: 'The AI is trained to recognize when a matter requires attorney attention and can seamlessly transfer calls to the appropriate staff member or schedule a callback at your convenience.',
    },
  ];

  return (
    <div className='pt-10'>
      
      {/* Hero Section */}
      <Hero />

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Empower Your Law Firm to Do Its Best Work
          </h2>
          <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={benefits} />
        </div>
        </div>
      </section>
      
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
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